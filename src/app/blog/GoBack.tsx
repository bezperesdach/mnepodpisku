import { ReplyIcon } from "@primer/octicons-react";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link className="flex font-sm gap-2 items-center bg-primary p-1 rounded-md my-1" href="/blog/">
      <ReplyIcon />
      <p>Блог</p>
    </Link>
  );
};

export default GoBack;
