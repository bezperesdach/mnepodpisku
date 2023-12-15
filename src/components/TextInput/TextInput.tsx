import cn from "@/utils/cn";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import InputError from "./InputError";
import { QuestionIcon } from "@primer/octicons-react";

type TextInputProps = {
  hidden?: boolean;
  maxWidth?: boolean;
  icon?: React.ReactNode;
  classNameName?: string;
  label?: string;
  toolTip?: string;
  error?: string;
};

type InputProps = TextInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput = ({ hidden = false, maxWidth = false, icon, label, toolTip, error, ...props }: InputProps) => {
  return (
    <div className={cn("form-control w-full", { "max-w-xs": maxWidth, "opacity-0": hidden })}>
      {label && (
        <div className="label">
          <div
            className={cn("flex gap-1 items-center", {
              "tooltip cursor-pointer max-[524px]:before:-translate-x-[25%] max-[524px]:max-w-xs min-[1200px]:before:-translate-x-[25%]":
                toolTip,
            })}
            data-tip={toolTip}
          >
            <span className="label-text">{label}</span>
            {toolTip && <QuestionIcon className="text-base-content/70" />}
          </div>
        </div>
      )}
      <div className="relative">
        <input
          {...props}
          className={cn(
            "input input-bordered w-full",
            {
              "pl-10": icon,
              "input-error hover:outline-error focus:outline-error": error,
              "border-base-content border-opacity-20 hover:outline-primary focus:outline-primary": !error,
            },
            props.className
          )}
          id={props.name}
          value={props.value}
          aria-invalid={!!error}
          aria-errormessage={`${props.name}-error`}
          type={props.type}
        />
        {icon && <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center pl-3">{icon}</div>}
        <div className="absolute right-0 top-0 bottom-0 flex items-center z-10"></div>
      </div>
      <InputError error={error} />
    </div>
  );
};

export default TextInput;
