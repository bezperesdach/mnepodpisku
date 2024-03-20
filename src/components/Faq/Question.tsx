"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

type Props = {
  title: string;
  open?: boolean;
  children: React.ReactNode;
  id: string;
};

const Question = ({ id, title, open, children }: Props) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default Question;
