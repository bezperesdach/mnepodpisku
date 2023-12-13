type Props = {
  children: React.ReactNode;
};

const InstructionsSection = ({ children }: Props) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-2">Инструкции</h2>

      <>{children}</>
    </div>
  );
};

export default InstructionsSection;
