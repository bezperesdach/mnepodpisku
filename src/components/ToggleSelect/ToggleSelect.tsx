import cn from "@/utils/cn";

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
    <div className="w-full flex justify-between gap-4 gap-y-2 lg:gap-y-4 flex-wrap">
      {options.map((option) => (
        <button
          type="button"
          className={cn("btn flex-1 min-w-[150px] text-md lg:text-xl h-2 p-2 hover:scale-[105%]", {
            "btn-primary": value === option.value,
            "sm:max-w-[200px]": options.length === 1,
          })}
          key={option.value}
          onClick={() => onSelect(option.value)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default ToggleSelect;
