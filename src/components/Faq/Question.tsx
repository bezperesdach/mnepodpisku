"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Question = ({ title, children }: Props) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className=" text-left">{title}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">{children}</AccordionContent>
    </AccordionItem>
  );
};

export default Question;
