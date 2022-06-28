import FlynImgLink from "../components/flynImgLink";
import Navbar from "../components/navbar";
import useDarkMode from "../hooks/useDarkMode";
export default function janskapsalon() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="min-h-screen overflow-visible bg-gray-200 transition-all duration-300 ease-in dark:bg-[#1F295B] ">
      <Navbar />
      <div className=" mx-4 flex flex-col lg:flex-row ">
        <div className="rounded-3xl lg:w-3/4">
          <div className=" m-4  rounded-3xl bg-pinklight p-4 dark:bg-[#2F3763]">
            <h1 className="text-center text-3xl font-bold">Fly-n</h1>
          </div>
          <div className=" m-4 my-8  rounded-3xl bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2>
              Fly-n is een internationale reisapp die het mogelijk maakt om van
              deur tot deur reizen te vinden en te boeken.
            </h2>
          </div>
          <div className=" m-4  rounded-3xl bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2 className="font-bold">
              Ik heb van dit project de volgende dingen gedaan:
            </h2>
            <hr></hr>
            <h2>- Design voor app gemaakt</h2>
            <h2>- Design voor app gerealiseerd</h2>
            <h2>- App online gezet</h2>
            <h2>- Terms of Service opstellen</h2>
          </div>
          <div className=" m-4  rounded-3xl bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2 className="font-bold">
              Ik heb van dit project de volgende dingen geleerd:
            </h2>
            <hr></hr>
            <h2>- App maken met react native</h2>
            <h2>- App stylen met react native paper</h2>
            <h2>- Wat er nodig is om een app in de play store te zetten</h2>
            <h2>- Geleerd over de Terms of Service</h2>
          </div>
        </div>
        <div className="m-4 lg:h-auto lg:w-1/4">
          <FlynImgLink />
        </div>
      </div>
    </div>
  );
}
