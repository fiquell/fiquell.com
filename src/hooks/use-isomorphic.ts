import { useEffect, useLayoutEffect } from "react";

export const useIsomorphic =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
