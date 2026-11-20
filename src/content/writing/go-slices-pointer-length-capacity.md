Go slices look simple until you slice a slice and the numbers stop matching what you expected. Most of the confusion comes from one question: is a slice checked against its length or its capacity? This article builds the answer from the ground up. Every example below was run on Go 1.22, and the outputs and panic messages are copied from those runs.

## A slice is a window

A slice doesn't store any data. It's a small descriptor with three parts that looks at a section of an underlying array:

- **Pointer (start):** where the window begins in the array.
- **Length:** how many elements the window shows. `len(s)` returns it.
- **Capacity:** how many elements exist from the start to the end of the array. `cap(s)` returns it.

```go
arr := [5]int{1, 2, 3, 4, 5}
sl := arr[1:3]
```

```text
index:  0   1   2   3   4
arr:  [ 1 | 2 | 3 | 4 | 5 ]
          |-len 2-|
          |---- cap 4 ----|
```

Here `sl` is `[2 3]`, with length 2 and capacity 4, because `2 3 4 5` remain from the start to the end of the array. The window shows two elements, but the array behind it continues.

## The slice expression

When you write `s[low:high]`:

- A missing `low` means **0**.
- A missing `high` means `len(s)`, the current length (not the capacity).
- `high` is an exclusive end boundary, not an index. `s[1:3]` shows the elements at positions 1 and 2.

## The rule that decides everything

Every slice expression must satisfy:

```text
0 <= low <= high <= cap(s)
```

If it does, the result is:

```text
new len = high - low
new cap = cap(s) - low
start   = moves forward by low
```

If the rule is broken, the program panics at runtime. The compiler only catches it when it can see the numbers, for example a constant index on an array (`arr[1:9]` on a 5-element array won't compile). For a slice it can't know the capacity, so the check waits until the line runs.

## Why a slice can grow

`high` is checked against **capacity**, not length. That means a slice can be stretched to the right, up to the end of the array:

```go
sl := arr[1:3]   // [2 3], len 2, cap 4
sl = sl[:4]      // [2 3 4 5], len 4, cap 4
```

The 4 is beyond the length (2) but within the capacity (4), so it's allowed.

## Moving the start shrinks capacity

Changing only the end never changes capacity. Moving the start forward does, because the window now begins later in the array:

```go
sl := arr[1:3]   // [2 3], len 2, cap 4
sl = sl[1:]      // start moves 1: [3], len 1, cap 3
```

You can never move backwards. Once the window starts at `arr[1]`, `arr[0]` is unreachable through it.

## The empty-slice trap

When `high` is missing, it defaults to the length. So if `low` equals the length, you get an empty slice, not "the rest of the array":

```go
arr := [8]int{5, 15, 25, 35, 45, 55, 65, 75}
sl := arr[:4]    // [5 15 25 35], len 4, cap 8
sl = sl[4:]      // sl[4:4]: [], len 0, cap 4
```

The slice shows nothing, but it still has capacity 4 and can grow back: `sl[:4]` is `[45 55 65 75]`.

## When it panics

```go
sl := arr[5:7]   // [55 65], len 2, cap 3
sl = sl[:4]      // panic: 4 > cap 3
```

```text
panic: runtime error: slice bounds out of range [:4] with capacity 3
```

The length is 2 and the requested end is 4, but the real check is against the capacity of 3, so this fails. The panic message names capacity, not length, which is the rule above in Go's own words.

## Indexing a single element is different

Slicing is checked against capacity. Reading one element with `s[i]` is checked against **length**:

```go
sl := arr[2:3]   // [25], len 1, cap 6
_ = sl[:3]       // OK, [25 35 45]: a slice end is checked against cap
_ = sl[2]        // panic: an index is checked against len
```

```text
panic: runtime error: index out of range [2] with length 1
```

The element at `arr[4]` is inside the capacity, so you can slice up to it, but you can't read it through `sl` until the length covers it.

## A worked example

```go
arr := [8]int{5, 15, 25, 35, 45, 55, 65, 75}

sl := arr[1:5]   // [15 25 35 45], len 4, cap 7
sl = sl[2:]      // high = len = 4: [35 45], len 2, cap 5
sl = sl[:4]      // 4 <= 5: [35 45 55 65], len 4, cap 5
```

Each line is solved the same way: fill in the missing values, check the end against capacity, then compute the new length and capacity.

## A method that always works

For every slicing line, in order:

1. Write down the current start, length and capacity.
2. Fill in a missing `low` (0) and a missing `high` (the length).
3. Check `high <= cap`. If not, it panics.
4. Compute the new length as `high - low` and the new capacity as `cap - low`.
5. The values shown are the array elements from the new start, as many as the new length.

## Three common mistakes

- **Treating length as the limit.** The limit for a slice expression is capacity.
- **Skipping a line.** In chained slicing, every line changes the window, so the next line starts from the new one.
- **Keeping capacity unchanged after moving the start.** Whenever `low` is greater than 0, capacity shrinks by `low`.

## Going further

- **The full slice expression** `s[low:high:max]` sets the capacity to `max - low` (it needs `high <= max <= cap(s)`). Capacity is what decides how far `append` can write into the shared array, so set `max` equal to `high` when the rest of the array must stay untouched. With any room left, the next `append` still overwrites it:

  ```go
  arr := [8]int{5, 15, 25, 35, 45, 55, 65, 75}
  t := arr[1:3:4]       // [15 25], len 2, cap 3
  t = append(t, 99)     // fits: arr[3] is now 99
  u := arr[1:3:3]       // [15 25], len 2, cap 2
  u = append(u, 99)     // no room: new array, arr is untouched
  ```

- **`append`** writes into the existing array when there's capacity, and allocates a new array when there isn't. After that, the slice no longer shares memory with the original. This is why capacity matters so much in practice.
- **`copy` and `slices.Clone`** give you an independent copy. `copy(dst, src)` fills a slice you allocated yourself (for example with `make`), and `slices.Clone(s)` allocates and copies in one call. Either way, writes to the copy no longer reach the original array.

Once you can trace the window by hand, these behaviours stop being surprising.
