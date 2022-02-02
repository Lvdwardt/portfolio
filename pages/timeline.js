export default function Timeline() {
  return (
    <div className="h-80 w-full">
      <div className="flex ">
        <div className="text-white text-right mx-2 w-13/50">
          <h2 className="font-bold peer">Babypark</h2>
          <h2 className="mt-[-10px] invisible peer-hover:visible hover:visible">
            Magazijnmedewerker.
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-500 w-27/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="text-white text-right mx-2 w-37/50">
          <h2 className="font-bold peer">Stichting Open Nederland</h2>
          <h2 className="mt-[-10px] invisible peer-hover:visible hover:visible">
            Voor SON heb ik gewerkt op de hulplijn van testen voor je reis.
          </h2>
        </div>
        <div className=" bg-slate-500  w-1/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="text-white text-right mx-2 w-37/50">
          <h2 className="font-bold peer">Student aan huis</h2>
          <h2 className="mt-[-10px] invisible peer-hover:visible hover:visible">
            Voor SAH ga ik bij mensen langs om ze te helpen met
            computerproblemen.
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-500 w-3/50 h-6 rounded-full"></div>
      </div>
      <div className="flex ">
        <div className="text-white text-right mx-2 w-38/50">
          <h2 className="font-bold peer">Uw Computerstudent</h2>
          <h2 className="mt-[-10px] invisible peer-hover:visible hover:visible">
            Voor SAH ga ik bij mensen langs om ze te helpen met
            computerproblemen.
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-500 w-2/50 h-6 rounded-full"></div>
      </div>
      <div className="flex mt-4">
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
    </div>
  );
}
