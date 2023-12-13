"use client";

type Props = {
  title: string;
  open?: boolean;
  children: React.ReactNode;
};

const Question = ({ title, open, children }: Props) => {
  return (
    <details className="group bg-base-200 rounded-2xl mt-6" open={open}>
      <summary className="flex justify-between items-center text-xl font-medium cursor-pointer list-none px-4 py-4">
        <span className="pr-4">{title}</span>
        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
};

export default Question;
