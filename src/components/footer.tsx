export default function Footer() {
  return (
    <div className="flex flex-col items-baseline justify-center pb-8 pt-16 text-center font-thin sm:flex-row ">
      <h3 className="w-full text-center sm:w-auto sm:text-left">
        © {new Date().getFullYear()} Leon van de Wardt - Inspired by
      </h3>
      <div className="flex w-full items-baseline justify-center sm:w-auto">
        <a
          href="https://nevflynn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline"
        >
          <h2 className="ml-1 text-xl font-bold text-logo">Nev</h2>
          <h2 className="ml-1 text-sm font-normal text-logo">Flynn</h2>
        </a>
        <h3>&nbsp;and</h3>
        <a
          href="https://robertozaccardi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline"
        >
          <h2 className="ml-1 text-xl font-bold text-logo">Rob</h2>
          <h2 className="font-normal text-logo">erto Zaccardi</h2>
        </a>
      </div>
    </div>
  );
}
