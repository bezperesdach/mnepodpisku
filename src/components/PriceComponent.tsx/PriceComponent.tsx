type Props = {
  loading: boolean;
  showReceive?: boolean;
  value?: number;
  sale?: number;
  amount?: number;
};

const PriceComponent = ({ loading, value, sale, amount, showReceive = false }: Props) => {
  return (
    <div className="flex flex-col px-2 sm:px-0">
      <div className="flex justify-between items-center gap-2">
        <p className="flex-shrink-0 font-semibold">Заплатите</p>
        <div className="divider w-full" />
        {loading ? (
          <span className="loading loading-spinner loading-xl flex-shrink-0"></span>
        ) : (
          <>
            <p className="flex-shrink-0 font-semibold text-xl">
              {value && (
                <span className="relative text-lg mr-2 font-medium after:w-[110%] after:-rotate-[15deg] after:absolute after:-left-[5%] after:top-1/2 after:h-[0.15em] after:bg-warning/75">
                  {value}₽
                </span>
              )}
              {sale && sale + "₽"}
            </p>
          </>
        )}
      </div>

      {showReceive && (
        <div className="flex justify-between items-center gap-2">
          <p className="flex-shrink-0 font-semibold">Получите</p>
          <div className="divider w-full" />
          {loading ? (
            <span className="loading loading-spinner loading-xl flex-shrink-0"></span>
          ) : (
            <>{amount && <p className="flex-shrink-0 font-semibold text-xl">{amount}₺</p>}</>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceComponent;
