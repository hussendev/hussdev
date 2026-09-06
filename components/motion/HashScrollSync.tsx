"use client";

import { scrollToHashWithRetry, syncHashFromUrl } from "@/lib/scroll";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function HashScrollSync({ onScroll }: { onScroll?: () => void }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const onScrollRef = useRef(onScroll);

  useEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

  useEffect(() => {
    const updateHash = () => setHash(syncHashFromUrl());

    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  useEffect(() => {
    setHash(syncHashFromUrl());
  }, [pathname]);

  useLayoutEffect(() => {
    scrollToHashWithRetry(undefined, 48, () => onScrollRef.current?.());
  }, [pathname, hash]);

  return null;
}
