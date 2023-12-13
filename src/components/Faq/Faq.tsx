import React from "react";

type Props = {
  children: React.ReactNode;
};

const Faq = ({ children }: Props) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl lg:text-2xl font-bold">Вопрос-Ответ</h2>

      <>{children}</>
    </div>
  );
};

export default Faq;
