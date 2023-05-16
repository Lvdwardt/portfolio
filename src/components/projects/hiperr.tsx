import Image from "next/image";

export default function Hiperr() {
  return (
    <div className=" flex h-full w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/companies/babble.webp"
        alt="Hiperr"
        height={90}
        width={90}
        className="rounded-3xl"
      />
    </div>
  );
}
