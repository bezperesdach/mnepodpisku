import { cn } from "@/lib/utils";
// import InputError from "./InputError";
// import { QuestionIcon } from "@primer/octicons-react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "@radix-ui/react-label";

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

const TextInputV2 = ({ hidden = false, icon, label, toolTip, error, className, ...props }: InputProps) => {
  return (
    <div className={cn("grid w-full max-w-sm items-center gap-1.5", className)}>
      {label && (
        <Label className="flex gap-2" htmlFor="email">
          {label}
          {toolTip && (
            <Popover>
              <PopoverContent>{toolTip}</PopoverContent>
              <PopoverTrigger className="bg-primary hover:bg-primary/90 w-fit px-2 rounded-lg">?</PopoverTrigger>
            </Popover>
          )}
        </Label>
      )}
      <div className="relative">
        <Input
          {...props}
          className={cn("", { "pl-8": icon })}
          id={props.name}
          value={props.value}
          aria-invalid={!!error}
          aria-errormessage={`${props.name}-error`}
          type={props.type}
        />
        {icon && <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center pl-2.5">{icon}</div>}
      </div>
    </div>
  );
};

export default TextInputV2;
