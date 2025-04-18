'use client';

import Link from "next/link";

export default function Logo() {
  return (
<div className="text-2xl font-bold text-dark dark:text-white">
<Link href="/">STW</Link>
</div>

    // <div className="logo flex-none">
    //   <Link href="/">
    //     <p className="text-2xl font-bold text-white mr-7">STW</p>
    //   </Link>
    // </div>
  );
}
