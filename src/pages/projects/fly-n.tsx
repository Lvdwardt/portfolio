import FlynImgStore from "../../components/flynImgStore";
export default function flyn() {
  return (
    <div className="min-h-screen overflow-visible bg-gray-200 transition-all duration-300 ease-in dark:bg-[#1F295B] ">
      <div className=" mx-4 flex flex-col lg:flex-row ">
        <div className="rounded-[2rem] lg:w-3/4">
          <div className=" m-4  rounded-[2rem] bg-pinklight p-4 dark:bg-[#2F3763]">
            <h1 className="text-center text-3xl font-bold">Fly-n</h1>
          </div>
          <div className=" m-4 my-8 rounded-[2rem] bg-pinklight p-4 pb-[14px] dark:bg-[#2F3763]">
            <h2>
              Fly-n is een internationale reisapp die het mogelijk maakt om van
              deur tot deur reizen te vinden en te boeken. Het doel van fly-n is
              om verschillende reisaanbieders te combineren, om zo tot een
              compleet reisplan te komen. Je wordt doorverwezen om tickets te
              boeken.
            </h2>
          </div>
          <div className=" m-4  rounded-[2rem] bg-pinklight p-4 pb-[14px] dark:bg-[#2F3763]">
            <h2 className="font-bold">
              Ik heb van dit project de volgende dingen gedaan:
            </h2>
            <hr />
            <h2>- Design voor app gemaakt</h2>
            <h2>- Design voor app gerealiseerd</h2>
            <h2>- App online gezet</h2>
            <h2>- Terms of Service opgesteld</h2>
            <h2>
              - Idee pitchen aan grote bedrijven voor eventuele samenwerkingen
            </h2>
          </div>
          <div className=" m-4 my-8 rounded-[2rem] bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2 className="font-bold">
              Ik heb van dit project de volgende dingen geleerd:
            </h2>
            <hr />
            <h2>- Het maken van een app met react native</h2>
            <h2>- Het stylen van een app met react native paper</h2>
            <h2>- De benodigdheden om een app in de play store te zetten</h2>
            <h2>- Het opstellen van een Terms of Service</h2>
          </div>
        </div>
        <div className="m-4 lg:h-auto lg:w-1/4">
          <FlynImgStore />
        </div>
      </div>
    </div>
  );
}
