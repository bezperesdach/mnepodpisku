import cn from "@/utils/cn";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TextInputProps = {
  icon: React.ReactNode;
  classNameName?: string;
  label?: string;
  error?: string;
};

type InputProps = TextInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput = ({ icon, error, ...props }: InputProps) => {
  return (
    <div className="form-control w-full">
      <div className="relative">
        <input
          {...props}
          className={cn(
            "input input-bordered w-full pl-10",
            {
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
        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center pl-3">{icon}</div>
        <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
          {/* {props.type === "password" && (
            <label
              aria-label={!showPassword.value ? "Показать пароль" : "Спрятать пароль"}
              className="swap swap-rotate h-full w-10"
            >
              <input
                id="show-password"
                type="checkbox"
                checked={showPassword.value}
                onChange$={() => (showPassword.value = !showPassword.value)}
              />
              {!showPassword.value ? <GoEye24 /> : <GoEyeClosed24 />}
            </label>
          )} */}
        </div>
      </div>
      {/* <InputError name={name} error={error} /> */}
    </div>
  );
};

export default TextInput;
