import Image from "next/image";

function GetDiscountClient() {
  return (
    <>
      <p className="text-xl lg:text-2xl font-bold mt-4">ШАГ 1:</p>
      <p className="text-lg">Открой приложение ВБ, найди свою покупку и оставь на нее положительный отзыв с любым текстом</p>

      <a
        className="flex flex-col w-full justify-center items-center bg-gradient-to-r from-[#b50fa0] to-[#55117a] shadow-lg rounded-xl p-8 my-4"
        href="https://www.wildberries.ru/catalog/174125246/detail.aspx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn mt-4">ОТКРЫТЬ WILDBERRIES</div>
      </a>
      <p className="text-xl lg:text-2xl font-bold mt-4">ШАГ 2:</p>
      <p className="text-lg">Сделай скриншот отзыва и вышли его по удобным тебе контактам ниже</p>
      <div className="flex gap-4 mt-2">
        <a href="https://vk.com/im?sel=-221413404" target="_blank" rel="noopener noreferrer">
          <Image src="/socials_icons/vk_compact.png" alt="vk" width={48} height={48} />
        </a>

        <a href="https://t.me/pstopup" target="_blank" rel="noopener noreferrer">
          <Image src="/socials_icons/telegram_icon.png" alt="telegram" width={48} height={48} />
        </a>

        <a className="flex gap-1 items-center" href="https://wa.me/79939011007" target="_blank" rel="noopener noreferrer">
          <Image src="/socials_icons/whatsapp_icon.png" alt="whatsapp" width={48} height={48} />
        </a>
      </div>
      <p className="text-xl lg:text-2xl font-bold mt-4">ШАГ 3:</p>
      <p className="text-lg">
        При следующей активации карты пополнения сообщим нам о своих бонусных лирах и мы добавим их к твоему пополнению совершенно
        бесплатно!*
      </p>
      <p className="text-sm mt-2">
        * - бонусные лиры закрепляются за контактом при обращении, если вы получили бонусные лиры на один номер, а пишите с другого, мы
        не сможем активировать ваши бонусы
      </p>
    </>
  );
}

export default GetDiscountClient;
