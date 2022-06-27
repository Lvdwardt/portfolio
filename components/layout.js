import Head from "next/head";

const Layout = ({ user, loading = false, children }) => (
  <>
    <Head>
      <title>Projects</title>
    </Head>
    <main className="px-4">
      <div
        className="
          mx-auto
          my-16
          flex
          w-2/4
          items-center
          justify-center
          rounded-lg
          bg-white
          p-16
        "
      >
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
  </>
);
export default Layout;
