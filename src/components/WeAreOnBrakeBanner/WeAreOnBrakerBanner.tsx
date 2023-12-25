function WeAreOnBrakerBanner() {
  return (
    <div className="w-full bg-base-300 py-1">
      <a
        className="flex text-lg p-1 gap-1 md:gap-2 w-full max-w-[1240px] mx-auto justify-between font-medium flex-col md:flex-row"
        href="https://vk.com/mnepodpisku?w=wall-221413404_58"
        rel="noopener noreferrer"
      >
        <div className="flex gap-2 justify-between md:justify-start font-bold">
          <p>График работы на</p>
          <p>26.12.23-06.01.24</p>
        </div>
        <p className="text-center md:text-end underline decoration-warning">Узнать подробности</p>
      </a>
    </div>
  );
}

export default WeAreOnBrakerBanner;
