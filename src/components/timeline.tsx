export default function Timeline() {
  return (
    <div className="peer col-span-2 rounded-[2rem] bg-white p-8 transition-all duration-300 ease-in dark:bg-[#2F3763] dark:text-white xl:block">
      <h1 className=" absolute mt-[-0.5rem] text-2xl font-bold">Timeline</h1>
      <div className="flex ">
        <div className="h-6 w-39/50 px-2 text-right ">
          <h2 className="peer font-bold">Uw Computerstudent</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Voor UCS ga ik bij mensen langs om ze te helpen met
            computerproblemen
          </h2>
        </div>
        <div className="h-6 w-2/50 rounded-full bg-bluelight dark:bg-[#CE81C7]" />
      </div>
      <div className="flex ">
        <div className="h-6 w-37/50  px-2 text-right ">
          <h2 className="peer mt-5 font-bold">Student aan huis</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Voor SAH ga ik bij mensen langs om ze te helpen met
            computerproblemen
          </h2>
        </div>
        <div className="mt-5 h-6 w-4/50 rounded-full bg-bluelight  dark:bg-[#CE81C7]" />
      </div>
      <div className="flex ">
        <div className="h-6 w-37/50 px-2 text-right ">
          <h2 className="peer mt-5 font-bold">Stichting Open Nederland</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Voor SON heb ik gewerkt op de hulplijn van testen voor je reis
          </h2>
        </div>
        <div className=" mt-5 h-6 w-1/50 rounded-full bg-slate-300 dark:bg-slate-500" />
      </div>
      <div className="flex">
        <div className="h-6 w-14/50 px-2 text-right ">
          <h2 className="peer mt-5 font-bold">Babypark</h2>
          <h2 className="mt-[-8px] hidden peer-hover:block hover:block">
            Magazijnmedewerker
          </h2>
        </div>
        <div className=" mt-5 h-6 w-27/50 rounded-full bg-bluelight  dark:bg-[#CE81C7]" />
      </div>
      <div className="mt-5 flex ">
        <div className="w-4/50" />
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
