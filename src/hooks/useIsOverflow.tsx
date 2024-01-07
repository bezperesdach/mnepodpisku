import { MutableRefObject, useLayoutEffect, useState } from "react";

interface UseIsOverflowProps {
  // eslint-disable-next-line no-unused-vars
  callback?: ((isOverflow: boolean) => void) | undefined;
}

export const useIsOverflow = (
  ref: MutableRefObject<any>,
  { callback }: UseIsOverflowProps = {}
): { isOverflow: boolean | undefined; recalculateOverflow: () => void } => {
  const [isOverflow, setIsOverflow] = useState<boolean | undefined>(undefined);

  const recalculateOverflow = () => {
    if (ref.current) {
      const hasOverflow = ref.current.scrollHeight - 8 > ref.current.clientHeight;
      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    }
  };

  useLayoutEffect(() => {
    recalculateOverflow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ref]);

  return { isOverflow, recalculateOverflow };
};
