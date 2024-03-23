import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  options: {
    name: string;
    value: string;
  }[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  onSelect: (option: string) => void;
};

const ToggleSelect = ({ options, value, onSelect }: Props) => {
  return (
    <div className="w-full flex gap-4 gap-y-2 lg:gap-y-4 flex-wrap mt-1">
      {options.map((option) => (
        <Button
          type="button"
          className={cn("text-md lg:text-xl hover:scale-[105%]", {
            "bg-secondary": value !== option.value,
            "sm:max-w-[200px]": options.length === 1,
          })}
          key={option.value}
          onClick={() => onSelect(option.value)}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};

export default ToggleSelect;
