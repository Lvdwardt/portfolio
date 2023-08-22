export default function Footer() {
  return (
    <footer className="flex flex-col items-baseline justify-center pb-8 pt-16 text-center font-thin text-text sm:flex-row ">
      <p className="w-full text-center sm:w-auto sm:text-left">
        © {new Date().getFullYear()} Leon van de Wardt - Inspired by
      </p>
      <nav className="flex w-full items-baseline justify-center sm:w-auto">
        <a
          href="https://nevflynn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline"
        >
          <span className="ml-1 text-xl font-bold text-logo">Nev</span>
          <span className="ml-1 font-medium">Flynn</span>
        </a>
        <span>&nbsp;and</span>
        <a
          href="https://robertozaccardi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline"
        >
          <span className="ml-1 pr-1 text-xl font-bold text-logo">Rob</span>
          <span className="font-medium">Zaccardi</span>
        </a>
      </nav>
    </footer>
  );
}
