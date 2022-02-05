export default function Timeline2() {
  return (
    <div className="col-span-2 hidden rounded-3xl bg-white p-8 transition-all duration-300 ease-in dark:bg-[#2F3763] dark:text-white sm:block xl:hidden">
      <h1 className=" absolute mt-[-0.5rem] text-2xl font-bold">Timeline</h1>
      <div className="flex ">
        <div className="w-39/50  px-2 text-right ">
          <h2 className="peer font-bold">Uw Computerstudent</h2>
          <h2 className="invisible mt-[-8px] hover:visible peer-hover:visible"></h2>
        </div>
        <div className="w-2/50 bg-bluelight h-6 rounded-full dark:bg-[#CE81C7]"></div>
      </div>
      <div className="flex ">
        <div className="w-37/50  px-2 text-right ">
          <h2 className="peer mt-6 font-bold">Student aan huis</h2>
          <h2 className="invisible mt-[-8px] hover:visible peer-hover:visible"></h2>
        </div>
        <div className="w-4/50 bg-bluelight mt-6 h-6 rounded-full   dark:bg-[#CE81C7]"></div>
      </div>
      <div className="flex ">
        <div className="w-37/50 px-2 text-right ">
          <h2 className="peer mt-6 font-bold">Stichting Open Nederland</h2>
          <h2 className="invisible mt-[-8px] hover:visible peer-hover:visible"></h2>
        </div>
        <div className=" w-1/50 mt-6 h-6  rounded-full bg-slate-300 dark:bg-slate-500"></div>
      </div>
      <div className="flex">
        <div className="w-14/50  px-2 text-right ">
          <h2 className="peer mt-6 font-bold">Babypark</h2>
          <h2 className="invisible mt-[-8px] hover:visible peer-hover:visible"></h2>
        </div>
        <div className=" bg-bluelight w-27/50 mt-6  h-6 rounded-full  dark:bg-[#CE81C7]"></div>
      </div>
      <div className="mt-6 flex ">
        <div className="w-4/50"></div>
        <h2 className="w-6/50  border-x-2 border-black text-center dark:border-white dark:bg-inherit">
          2016
        </h2>
        <h2 className="w-6/50 border-r-2 border-black text-center dark:border-white dark:bg-inherit">
          2017
        </h2>
        <h2 className="w-6/50 border-r-2 border-black text-center dark:border-white dark:bg-inherit">
          2018
        </h2>
        <h2 className="w-6/50 border-r-2 border-black text-center dark:border-white dark:bg-inherit">
          2019
        </h2>
        <h2 className="w-6/50 border-r-2 border-black text-center dark:border-white dark:bg-inherit">
          2020
        </h2>
        <h2 className="w-6/50 border-r-2 border-black text-center dark:border-white dark:bg-inherit">
          2021
        </h2>
        <h2 className="w-6/50 border-r-2 border-black text-center dark:border-white dark:bg-inherit">
          2022
        </h2>
      </div>
      {/* <div className="flex ">
        <div className="w-8/50  text-right px-2 ">
          <h2 className="font-bold peer">Ichthus College</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Natuur &amp; Techniek
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-[#8D5BE9] w-29/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="w-38/50  text-right px-2 ">
          <h2 className="font-bold peer">Hogeschool Utrecht</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Open ICT
          </h2>
        </div> */}
      {/* <div className=" bg-gradient-to-r from-blue-500 to-[#8D5BE9] w-3/50 h-6 rounded-full"></div>
      </div> */}
    </div>
  );
}
