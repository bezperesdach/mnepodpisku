"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  desktopUrl: string;
  mobileUrl: string;
};

function RedirectBasedOnDevice({ desktopUrl, mobileUrl }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)) {
      router.replace(mobileUrl);
    } else {
      router.replace(desktopUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-1 flex flex-col justify-center items-center h-full">
      <span className="loading loading-bars loading-xs" />
    </div>
  );
}

export default RedirectBasedOnDevice;
