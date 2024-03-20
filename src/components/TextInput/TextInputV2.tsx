"use client";

import { cn } from "@/lib/utils";
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

const isIOS = (): boolean => {
  if (typeof window !== "undefined") {
    const ua = window.navigator.userAgent;
    const isIPad = !!ua.match(/iPad/i);
    const isIPhone = !!ua.match(/iPhone/i);
    return isIPad || isIPhone;
  }

  return false;
};

function getIOSInputEventHandlers() {
  if (isIOS()) {
    return {};
  }

  return {
    onTouchStart: (e: any) => {
      e.currentTarget.style.fontSize = "16px";
    },
    onBlur: (e: any) => {
      e.currentTarget.style.fontSize = "";
    },
  };
}

const TextInputV2 = ({ hidden = false, icon, label, toolTip, error, className, ...props }: InputProps) => {
  return (
    <div className={cn("grid w-full items-center gap-1", className)}>
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
      <div
        className={cn("relative", {
          "mb-6": !error,
        })}
      >
        <Input
          {...getIOSInputEventHandlers()}
          {...props}
          className={cn("text-base bg-[#1b2a63]", {
            "pl-8": icon,
            "border-red-500/80 hover:border-red-500 focus:border-red-500 hover:outline-red-500 focus-visible:ring-red-500": error,
          })}
          id={props.name}
          value={props.value}
          aria-invalid={!!error}
          aria-errormessage={`${props.name}-error`}
          type={props.type}
        />
        {icon && (
          <div
            className={cn("absolute left-0 top-0 bottom-0 flex items-center justify-center pl-2.5 text-primary", {
              "text-red-500": error,
            })}
          >
            {icon}
          </div>
        )}
      </div>
      <label className="text-red-500" id={`${label}-error`}>
        <span className="text-sm text-error">{error}</span>
      </label>
    </div>
  );
};

export default TextInputV2;
