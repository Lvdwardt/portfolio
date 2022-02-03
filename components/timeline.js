export default function Timeline() {
  return (
    <div className="h-80 w-full p-4">
      <div className="flex ">
        <div className="w-14/50 text-white text-right px-2 ">
          <h2 className="font-bold peer">Babypark</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Magazijnmedewerker
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-500 w-27/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="w-37/50 text-white text-right px-2 ">
          <h2 className="font-bold peer">Stichting Open Nederland</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Voor SON heb ik gewerkt op de hulplijn van testen voor je reis
          </h2>
        </div>
        <div className=" bg-slate-500  w-1/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="w-37/50 text-white text-right px-2 ">
          <h2 className="font-bold peer">Student aan huis</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Voor SAH ga ik bij mensen langs om ze te helpen met
            computerproblemen
          </h2>
        </div>
        <div className="w-4/50 bg-gradient-to-r from-blue-500 to-purple-500  h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="w-39/50 text-white text-right px-2 ">
          <h2 className="font-bold peer">Uw Computerstudent</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Voor UCS ga ik bij mensen langs om ze te helpen met
            computerproblemen
          </h2>
        </div>
        <div className=" w-2/50 bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full"></div>
      </div>
      <div className="flex my-4">
        <div className="w-4/50"></div>
        <h2 className="w-6/50 bg-purple-500 text-center rounded-l-full">
          2016
        </h2>
        <h2 className="w-6/50 bg-purple-600 text-center">2017</h2>
        <h2 className="w-6/50 bg-purple-500 text-center">2018</h2>
        <h2 className="w-6/50 bg-purple-600 text-center">2019</h2>
        <h2 className="w-6/50 bg-purple-500 text-center">2020</h2>
        <h2 className="w-6/50 bg-purple-600 text-center">2021</h2>
        <h2 className="w-6/50 bg-purple-500 text-center rounded-r-full">
          2022
        </h2>
      </div>
      <div className="flex ">
        <div className="w-8/50 text-white text-right px-2 ">
          <h2 className="font-bold peer">Ichthus College</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Natuur & Techniek
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-500 w-29/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="w-38/50 text-white text-right px-2 ">
          <h2 className="font-bold peer">Hogeschool Utrecht</h2>
          <h2 className="mt-[-8px] invisible peer-hover:visible hover:visible">
            Open ICT
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-500 w-3/50 h-6 rounded-full"></div>
      </div>
    </div>
  );
}
