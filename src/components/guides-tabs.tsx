import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function GuidesTabs({ children }: Props) {
  return (
    <div
      role="tablist"
      className="flex flex-wrap gap-2 bg-accent p-1 rounded-lg [&>*]:rounded-lg [&>p]:bg-primary [&>a]:bg-accent [&>*]:px-2 [&>*]:py-1"
    >
      {children}
    </div>
  );
}
