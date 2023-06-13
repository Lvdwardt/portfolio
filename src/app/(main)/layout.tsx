import NavPill from "@/components/nav/navPill";
import Navbar from "@/components/nav/navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar>
        <NavPill />
      </Navbar>
      {children}
    </>
  );
}
