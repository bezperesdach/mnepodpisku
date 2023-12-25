function WeAreOnBrakerBanner() {
  return (
    <div className="w-full bg-base-300 py-1">
      <a
        className="flex text-lg p-1 gap-1 md:gap-2 w-full max-w-[1240px] mx-auto justify-between font-medium flex-col md:flex-row"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex gap-2 justify-between md:justify-start font-bold">
          <p>График работы на</p>
          <p>26.12.23-06.01.24</p>
        </div>
        <a className="text-center md:text-end underline decoration-warning">Узнать подробности</a>
      </a>
    </div>
  );
}

export default WeAreOnBrakerBanner;
