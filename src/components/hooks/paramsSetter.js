import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function UseMobileToggler() {
  const router = useRouter();
  const pathname = usePathname();
  // console.log("this is the path name", pathname);
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  function toggler(key = "open", value = "false") {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`${pathname}?${params}`, {
      scroll: false,
    });
  }

  const mobileView = searchParams.get("open");
  const section = searchParams.get("section");
  const isWithdrawModalOpen = searchParams.get("isWithdrawModalOpen");
  // console.log(mobileView);
  return {
    createQueryString,
    mobileView,
    router,
    pathname,
    toggler,
    section,
    isWithdrawModalOpen,
  };
}
