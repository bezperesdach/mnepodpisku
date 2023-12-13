import React from 'react'

type Props = {}

export default function Home({}: Props) {
	return (
		<div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8">
		<div className="flex flex-col min-[1240px]:flex-row items-center gap-4">
			<h1 className="text-3xl lg:text-4xl font-bold text-center min-[1240px]:text-left">СЕРВИС ПОКУПКИ ПОДПИСОК В РФ</h1>
			{/* <div className="flex items-center gap-4 text-white bg-secondary rounded-lg px-4 py-1">
				<p className="font-medium ">Только для турецких аккаунтов</p>
				<div
					className="tooltip cursor-pointer max-[524px]:before:-translate-x-[90%] max-[524px]:max-w-xs min-[1200px]:before:-translate-x-[90%]"
					data-tip='Вам необходимо зарегистрировать аккаунт PSN с регионом турция и указать его данные при оплате. Подробнее в разделе "Вопрос-Ответ".'
				>
					<button className="flex justify-center items-center p-2 w-7 h-7 bg-white rounded-[100%] text-secondary font-bold">?</button>
				</div>
			</div> */}
		</div>
		

		<div className="mt-10">
			<h2 className="text-xl lg:text-2xl font-bold bg-base-content" id="description">
				Описание
			</h2>
			<p className="text-lg font-medium mt-4">
				МНЕПОДПИСКУ.РФ - твой персональный ассистент в приобретении подписок на различные сервисы. С помощью нашего сервиса ты сможешь
				снова купить premium для spotify, пополнить кошелек playstation, приобрести подписку discord nitro full и многое другое.
			</p>
			<div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:justify-start gap-6 mt-6 px-2">
				<div className="flex w-full justify-start gap-2 items-center bg-base-200 rounded-md px-6 py-4 group">
					{/* <IoOptionsOutline className="flex-shrink-0 text-[64px] text-secondary transition-transform duration-500 group-hover:scale-[105%]" /> */}

					<p className="text-center">
						Найди нужный сервис из{" "}
						{/* <button className="underline text-secondary" onClick$={() => (showNavbar.value = true)}>
							каталога
						</button> */}
					</p>
				</div>

				<div className="flex w-full justify-start gap-2 items-center bg-base-300 rounded-md px-6 py-4 group">
					{/* <IoCardOutline className="flex-shrink-0 text-[64px] text-secondary transition-transform duration-500 group-hover:scale-[105%]" /> */}

					<p className="text-center">Выбери желаемый тип подписки и оплати</p>
				</div>

				<div className="flex w-full justify-start gap-2 items-center bg-base-200 rounded-md px-6 py-4 group md:col-span-2 lg:col-span-1">
					{/* <IoHappyOutline className="flex-shrink-0 text-[64px] text-secondary transition-transform duration-500 group-hover:scale-[105%]" /> */}

					<p className="text-center">Получи подписку в течение 10-30 минут после оплаты</p>
				</div>
			</div>
		</div>
		{/* <Faq>
			<Details title="Как происходит получение нужной подписки?">
				<p>
					В большинстве случаев нам потребуются данные от вашего аккаунта, после чего мы выполним выход, приобретем необходимую вам
					подписку и выйдем из аккаунта
					<br />
					Некоторые сервисы дают возможность активации промокода, на странице сервиса будет указано что вы приобретаете промокод,
					после оплаты вы получите промокод, которой сможете самостоятельно активировать.
					<br />
				</p>
			</Details>
			<Details title="Почему стоит приобрести подписку именно у нас">
				<p>
					Мы предоставляем быструю активацию, имеем магазин на Wildberries и бота в телеграм, работаем официально и имеем одну и самых
					низких комиссий в интернете.
				</p>
			</Details>
		</Faq> */}
	</div>
	)
}



// export const head: DocumentHead = {
//   title: "МНЕПОДПИСКУ",
//   meta: [
//     {
//       name: "description",
//       content:
//         "Сервис для приобретения подписок на различные онлайн сервисы. Принимаем к оплате карты МИР, Qiwi, Яндекс Pay, PayPal, WebMoney и многие другие системы.",
//     },
//   ],
//   links: [
//     {
//       rel: "canonical",
//       href: "https://mnepodpisku.ru/",
//     },
//   ],
// };
