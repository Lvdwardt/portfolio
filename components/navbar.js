import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo";

export default function Navbar() {
  return (
    <>
      <div className="top-0 flex justify-center  xl:justify-start">
        <Link href="/" passHref>
          <a className=" w-36 p-4 sm:m-4">
            <Logo className=" fill-[var(--logo)]" />
          </a>
        </Link>
      </div>
    </>
  );
}
