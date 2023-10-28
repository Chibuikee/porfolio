"use client";
import { useEffect } from "react";

export default function useOnScreen(ref, setIntersecting) {
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined" && ref?.current) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersecting({
              hash: entry.target.id,
              isVisible: entry.isIntersecting,
            });
          }
        });
      });

      observer.observe(ref.current);

      // Remove the observer as soon as the component is unmounted
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [ref, setIntersecting]);
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
