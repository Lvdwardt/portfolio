export default function Footer() {
  return (
    <div className="flex flex-col items-baseline justify-center pb-8 pt-16 text-center font-thin text-text sm:flex-row ">
      <span className="w-full text-center sm:w-auto sm:text-left">
        © {new Date().getFullYear()} Leon van de Wardt - Inspired by
      </span>
      <div className="flex w-full items-baseline justify-center sm:w-auto">
        <a
          href="https://nevflynn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline"
        >
          <span className="ml-1 text-xl font-bold text-logo">Nev</span>
          <span className="ml-1 text-sm font-thin text-logo">Flynn</span>
        </a>
        <span>&nbsp;and</span>
        <a
          href="https://robertozaccardi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline"
        >
          <span className="ml-1 pr-1 text-xl font-bold text-logo">Rob</span>
          <span className="font-thin text-logo">Zaccardi</span>
        </a>
      </div>
    </div>
  );
}
