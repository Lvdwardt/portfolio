import Janskapsalon from "../../components/janskapsalon";
export default function janskapsalon() {
  return (
    <div className="min-h-screen overflow-visible bg-gray-200 transition-all duration-300 ease-in dark:bg-[#1F295B] dark:text-white ">
      <div className=" mx-4 flex flex-col lg:flex-row ">
        <div className="rounded-[2rem] lg:w-3/4">
          <div className=" m-4 rounded-[2rem] bg-pinklight p-4 dark:bg-[#2F3763]">
            <h1 className="text-center text-3xl font-bold">Jans Kapsalon</h1>
          </div>
          <div className="m-4 my-8 rounded-[2rem]  bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2>
              Jans kapsalon is een website gemaakt voor een fictieve kapper. Het
              doel van de website is om informatie te vinden over de
              kapperszaak, en een afspraak te kunnen boeken. Ook moet de kapper
              zelf een managmentsysteem hebben om afspraken in te zien en
              gegevens aan te passen.
            </h2>
          </div>
          <div className="m-4 my-8 rounded-[2rem] bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2 className="font-bold">
              Ik heb van dit project de volgende dingen gedaan:
            </h2>
            <hr />
            <h2>- Design voor website gemaakt</h2>
            <h2>- Design voor website gerealiseerd</h2>
            <h2>- Website en bedrijf online gezet</h2>
          </div>
          <div className=" m-4  rounded-[2rem] bg-pinklight p-4 dark:bg-[#2F3763]">
            <h2 className="font-bold">
              Ik heb van dit project de volgende dingen geleerd:
            </h2>
            <hr />
            <h2>- website maken met React</h2>
            <h2>- website stylen met Tailwind CSS</h2>
            <h2>
              - website online zetten met Docker, Portainer, en Nginx Proxy
              Manager
            </h2>
            <h2>- reviews van de google places api halen</h2>
            <h2>- bedrijfsgegevens ophalen van google</h2>
          </div>
        </div>
        <div className="m-4 lg:h-auto lg:w-1/4">
          <Janskapsalon />
        </div>
      </div>
    </div>
  );
}
