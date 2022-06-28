import Janskapsalon from "../components/janskapsalon";
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
            <h1 className="text-center text-3xl font-bold">Jans Kapsalon</h1>
          </div>
          <div className=" m-4 my-8  rounded-3xl bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2>Dit is de website voor jans kapsalon. </h2>
            <h2 className="font-bold">
              Bij dit project heb ik het design gemaakt en gerealiseerd
            </h2>
            <h2>Ik heb van dit project de volgende dingen geleerd:</h2>
            <hr></hr>
            <h2>- website maken met React</h2>
            <h2>- website stylen met Tailwind CSS</h2>
            <h2>- website online zetten met Docker</h2>

            <h2>- reviews van de google places api halen</h2>
            <h2>- bedrijfsgegevens ophalen van google</h2>

            <h2>De website is gemaakt met React</h2>
          </div>

          <div className=" m-4  rounded-3xl bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2>test</h2>
          </div>
        </div>
        <div className="m-4 lg:h-auto lg:w-1/4">
          <Janskapsalon />
        </div>
      </div>
    </div>
  );
}
