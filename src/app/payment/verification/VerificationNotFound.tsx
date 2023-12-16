"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function VerificationNotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="flex-1 loading loading-spinner loading-xl flex-shrink-0"></span>;
}

export default VerificationNotFound;
