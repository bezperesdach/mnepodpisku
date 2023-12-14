"use client";

const options = [100, 200, 300, 500, 600, 1200, 1800, 2400];

type Props = {
  // eslint-disable-next-line no-unused-vars
  setValue: (amount: number) => void;
};

const AmountOptions = ({ setValue }: Props) => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 min-[360px]:grid-cols-3 min-[400px]:grid-cols-4 sm:grid-rows-1 justify-between gap-4">
      {options.map((option, i) => (
        <button
          type="button"
          className="btn basis-0 text-base min-h-[24px] max-h-[36px] sm:min-h-[48px] sm:max-h-0 flex-1 sm:text-lg hover:scale-[105%]"
          key={option}
          onClick={() => setValue(options[i])}
        >
          {option}₺
        </button>
      ))}
    </div>
  );
};

export default AmountOptions;
