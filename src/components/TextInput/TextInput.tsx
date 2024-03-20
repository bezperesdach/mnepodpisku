import { cn } from "@/lib/utils";
import InputError from "./InputError";
import { QuestionIcon } from "@primer/octicons-react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type TextInputProps = {
  hidden?: boolean;
  maxWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
  label?: string;
  toolTip?: string;
  error?: string;
};

type InputProps = TextInputProps & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ hidden = false, maxWidth = false, icon, label, toolTip, error, className, ...props }: InputProps) => {
  return (
    <div className={(cn("form-control w-full", { "max-w-xs": maxWidth, "opacity-0": hidden }), className)}>
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
            {toolTip && (
              <Popover>
                <PopoverContent>
                  В данном поле необходимо указать сумму лир которую нужно зачислить на ваш счет PlayStation аккаунта
                </PopoverContent>
                <PopoverTrigger className="bg-primary hover:bg-primary/90 w-fit px-2 rounded-lg">?</PopoverTrigger>
              </Popover>
            )}
          </div>
        </div>
      )}
      <div className="relative">
        <Input
          {...props}
          className={cn("input input-bordered w-full", {
            "pl-10": icon,
            "input-error hover:outline-error focus:outline-error": error,
            "border-base-content border-opacity-20 hover:outline-primary focus:outline-primary": !error,
          })}
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
