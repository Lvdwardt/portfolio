export default function Footer() {
  return (
    <div className="flex flex-col items-baseline justify-center pb-8 pt-16 text-center font-thin sm:flex-row ">
      <h3>© {new Date().getFullYear()} Leon van de Wardt - Inspired by</h3>
      <div className="flex w-full items-baseline justify-center sm:w-auto">
        <a
          href="https://nevflynn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-xl font-bold text-primary"
        >
          Nev
        </a>
        <a
          href="https://nevflynn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-sm font-normal text-primary"
        >
          Flynn
        </a>

        <h3>&nbsp;and</h3>
        <a
          href="https://robertozaccardi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-xl font-bold text-primary"
        >
          Rob
        </a>
        <a
          href="https://robertozaccardi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-primary"
        >
          erto Zaccardi
        </a>
      </div>
    </div>
  );
}
