"use client";

import { ym } from "@/utils/ym";

export default function LeaveVkReview() {
  return (
    <a
      className="flex flex-col w-full justify-center items-center mt-6 lg:mt-10 shadow-lg rounded-xl px-8 py-2 bg-secondary mb-4 "
      href="https://vk.com/topic-221413404_49184185"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        ym("reachGoal", "leaveVkReview");
      }}
    >
      <p className="text-2xl font-bold text-white text-center">Оставь отзыв в ВК</p>
      <p className="text-xl mt-1 text-white text-center">Получи скидку на следующую покупку!</p>
      <div className="btn mt-2">ОСТАВИТЬ ОТЗЫВ</div>
    </a>
  );
}
