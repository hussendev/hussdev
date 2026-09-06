import type Lenis from "lenis";

const HEADER_OFFSET = 96;

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function resetScrollPosition() {
  if (typeof window === "undefined") return;

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  lenisInstance?.scrollTo(0, { immediate: true, force: true });
}

export function scrollToHashTarget(hash: string, immediate = false): boolean {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -HEADER_OFFSET, immediate, force: true });
  } else {
    const top =
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
  }

  return true;
}

export function scrollToHashWithRetry(
  hash?: string,
  maxAttempts = 48,
  onSuccess?: () => void,
) {
  if (typeof window === "undefined") return;

  const targetHash = hash ?? window.location.hash;

  if (!targetHash) {
    resetScrollPosition();
    onSuccess?.();
    return;
  }

  let attempts = 0;

  const run = () => {
    const immediate = attempts === 0;

    if (scrollToHashTarget(targetHash, immediate)) {
      onSuccess?.();
      return;
    }

    attempts += 1;

    if (attempts < maxAttempts) {
      requestAnimationFrame(run);
    }
  };

  run();
}

export function syncHashFromUrl(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash;
}
