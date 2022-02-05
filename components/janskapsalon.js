import Image from "next/image";
import Jk from "../img/janskapsalon.png";
import Jklight from "../img/janskapsalonlight.png";
import { ImArrowUpRight2 } from "react-icons/im";
export default function Janskapsalon() {
  return (
    <>
      <div className=" row-span-2 rounded-3xl bg-[#6DD2B7] dark:bg-slate-900 relative xl:col-start-4 xl:row-start-1">
        <div className="hidden dark:block select-none">
          <Image src={Jk} className="rounded-3xl" />
        </div>
        <div className="dark:hidden block select-none">
          <Image src={Jklight} className="rounded-3xl"/>
        </div>
        <div className="absolute rounded-full w-8 h-8 bg-white dark:bg-black bottom-4 left-4 dark:text-white flex items-center group p-2 gap-2 ease-in hover:w-40 duration-500 transition-all justify-end group">
          <ImArrowUpRight2 className=""/>
          <a  className=" opacity-0 group-hover:opacity-100 hover:opacity-100 duration-200 group-hover:delay-[450ms] hover:delay-[450ms] absolute left-2 transition-all" href="https://janskapsalon.nl" target={"_blank"}>Janskapsalon.nl</a>

        </div>
      </div>
    </>
  );
}
