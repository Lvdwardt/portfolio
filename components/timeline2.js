export default function Timeline2() {
  return (
    <div className="peer col-span-2 hidden h-full rounded-3xl bg-white p-8 transition-all duration-300 ease-in dark:bg-[#2F3763] dark:text-white sm:order-10 sm:block xl:order-7 xl:block">
      <h1 className=" absolute mt-[-0.5rem] text-2xl font-bold">Timeline</h1>
      <div className="flex ">
        <div className="w-41/50 h-6 px-2 text-right ">
          <h2 className="peer font-bold">Uw Computerstudent</h2>
          <h2 className="mt-[-8px] hidden hover:block peer-hover:block">
            Voor UCS help ik mensen met computerproblemen
          </h2>
        </div>
        <div className="w-6/50 bg-bluelight h-6 rounded-full dark:bg-[#CE81C7]" />
      </div>
      <div className="flex ">
        <div className="w-39/50 h-6  px-2 text-right ">
          <h2 className="peer mt-5 font-bold">Student aan huis</h2>
          <h2 className="mt-[-8px] hidden hover:block peer-hover:block">
            Voor SAH help ik mensen met computerproblemen
          </h2>
        </div>
        <div className="w-8/50 bg-bluelight mt-5 h-6 rounded-full  dark:bg-[#CE81C7]" />
      </div>
      <div className="flex ">
        <div className="w-39/50 h-6 px-2 text-right ">
          <h2 className="peer mt-5 font-bold">Stichting Open Nederland</h2>
          <h2 className="mt-[-8px] hidden hover:block peer-hover:block">
            Voor SON heb ik gewerkt op de hulplijn
          </h2>
        </div>
        <div className=" w-2/50 mt-5 h-6 rounded-full bg-slate-300 dark:bg-slate-500" />
      </div>
      <div className="flex">
        <div className="w-11/50 h-6 px-2 text-right ">
          <h2 className="peer mt-5 font-bold">Babypark</h2>
          <h2 className="mt-[-8px] hidden hover:block peer-hover:block">
            Magazijnmedewerker
          </h2>
        </div>
        <div className=" bg-bluelight w-36/50 mt-5 h-6 rounded-full  dark:bg-[#CE81C7]" />
      </div>
      <div className="mt-5 flex ">
        <h2 className="w-8/50  border-x-3 border-black text-center dark:border-white dark:bg-inherit">
          2016
        </h2>
        <h2 className="w-8/50 border-r-3 border-black text-center dark:border-white dark:bg-inherit">
          2017
        </h2>
        <h2 className="w-8/50 border-r-3 border-black text-center dark:border-white dark:bg-inherit">
          2018
        </h2>
        <h2 className="w-8/50 border-r-3 border-black text-center dark:border-white dark:bg-inherit">
          2019
        </h2>
        <h2 className="w-8/50 border-r-3 border-black text-center dark:border-white dark:bg-inherit">
          2020
        </h2>
        <h2 className="w-8/50 border-r-3 border-black text-center dark:border-white dark:bg-inherit">
          2021
        </h2>
        <h2 className="w-8/50 border-r-3 border-black text-center dark:border-white dark:bg-inherit">
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
