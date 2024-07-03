import { useDebounceValue } from "usehooks-ts";
import ExpandableText from "./ExpandableText";

type Props = {
  error?: string;
};

const InputError = ({ error }: Props) => {
  const [debouncedError, _] = useDebounceValue(error, 200);

  return (
    <ExpandableText expanded={!!debouncedError}>
      <label className="label" id={`${debouncedError}-error`}>
        <span className="label-text-alt text-error">{debouncedError}</span>
      </label>
    </ExpandableText>
  );
};

export default InputError;
