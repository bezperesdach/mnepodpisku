import { QuestionIcon } from "@primer/octicons-react";

type Props = {
  name: string;
  file: string;
};

const Instruction = ({ name, file }: Props) => {
  return (
    <a className="flex gap-2 justify-start items-center link mb-2" href={`/guides/${file}`}>
      <QuestionIcon className="text-secondary w-8 h-8" />
      <p className="font-medium text-lg">{name}</p>
    </a>
  );
};

export default Instruction;
