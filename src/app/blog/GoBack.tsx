import { ReplyIcon } from "@primer/octicons-react";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link className="flex font-sm gap-2 items-center bg-base-200 p-1 rounded-md" href="/blog/">
      <ReplyIcon />
      <p>Блог</p>
    </Link>
  );
};

export default GoBack;
