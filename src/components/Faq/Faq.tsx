"use client";

import { Accordion } from "../ui/accordion";

type Props = {
  children: React.ReactNode;
};

const Faq = ({ children }: Props) => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full max-w-screen-lg px-4 ">
        <h2 className="text-3xl font-semibold tracking-tight">Вопрос-Ответ</h2>

        <Accordion className="bg-[#0c1430] px-6 pt-2 pb-4 rounded-3xl mt-6" type="single" collapsible>
          {children}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
