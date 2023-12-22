function WeAreOnBrakerBanner() {
  return (
    <div className="w-full bg-base-content py-1">
      <a
        className="flex text-lg gap-1 md:gap-2 w-full max-w-[1240px] mx-auto justify-between text-base-100 font-medium flex-col md:flex-row"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex gap-2 justify-between md:justify-start">
          <p>График работы на</p>
          <p>26.12.23-06.01.24</p>
        </div>
        <p className=" text-end">Узнать подробности</p>
      </a>
    </div>
  );
}

export default WeAreOnBrakerBanner;
