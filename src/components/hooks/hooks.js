"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useOnScreen(ref) {
  const router = useRouter();
  const [isIntersecting, setIntersecting] = useState(false);
  let options = {
    root: null,
    // threshold: 0.1,
  };
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined" && ref?.current) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersecting({
              hash: entry.target.id,
              isVisible: entry.isIntersecting,
            });
            router.push(
              `?section=${entry.target.id}#${entry.target.id}`,
              { scroll: false }
              // `/?${createQueryString("section", entry.target.id)}#${item.url}`
            );
            console.log("currently intersecting", entry.target.id);
          }
        });
      }, options);

      observer.observe(ref.current);

      // Remove the observer as soon as the component is unmounted
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [ref, setIntersecting]);

  return isIntersecting;
}

// export default function useOnScreen(ref, setIntersecting) {
//   // let observer;
//   useEffect(() => {
//     if (typeof IntersectionObserver !== "undefined") {
//       var observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIntersecting({
//               hash: entry.target.id,
//               isVisible: entry.isIntersecting,
//             });
//           }
//         });
//       });
//       // console.log(ref);
//       observer.observe(ref?.current);
//     }

//     // Remove the observer as soon as the component is unmounted
//     return () => {
//       if (observer) {
//         observer.disconnect();
//       }
//     };
//   }, []);
//   // }, [ref, observer]);
//   // return isIntersecting;
// }
