import { MutableRefObject, useLayoutEffect, useState } from "react";

interface UseIsOverflowProps {
  // eslint-disable-next-line no-unused-vars
  callback?: ((isOverflow: boolean) => void) | undefined;
}

export const useIsOverflow = (ref: MutableRefObject<any>, { callback }: UseIsOverflowProps = {}): boolean | undefined => {
  const [isOverflow, setIsOverflow] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight - 8 > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
