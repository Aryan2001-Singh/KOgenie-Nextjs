import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="https://kogenie.com">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo_012.svg"
          alt="Logo"
          height={30}
          width={30}
        />
      </div>
    </Link>
  );
};
