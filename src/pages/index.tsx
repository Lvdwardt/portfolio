import Head from "next/head";
import About from "../components/gridcomponents/about";
import Mapbox from "../components/gridcomponents/mapbox";
import Toggle from "../components/gridcomponents/toggle";
import Janskapsalonsmall from "../components/gridcomponents/janskapsalonsmall";
import Janskapsalonflat from "../components/gridcomponents/janskapsalonflat";
import {
  Github,
  Discord,
  Whatsapp,
  Mail,
} from "../components/gridcomponents/socials";
import Skills from "../components/gridcomponents/skills";
import Flyn from "../components/gridcomponents/flynImg";
import Footer from "../components/footer";
import GithubStats from "../components/gridcomponents/githubStats";
import AnimatedLayout from "../layouts/animatedLayout";

export type Data = {
  data: {
    commits: number;
    streak: {
      number: number;
      date: string;
    };
    longestStreak: {
      number: number;
      date: string;
    };
  };
};
export default function Home({ data }: Data) {
  return (
    <AnimatedLayout>
      <Head>
        <title>Leon van de Wardt</title>
        <meta
          name="description"
          content="Leon van de Wardt's portfolio website"
        />
      </Head>
      <div className="min-h-screen overflow-visible transition-all duration-300 ease-in ">
        <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pt-4 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <div className=" col-span-1 h-full w-full rounded-[2rem] bg-card p-6 text-text sm:order-1 xl:col-span-2">
            <About />
          </div>
          <div className="overflow-hidden rounded-[2rem] border-4 border-card sm:order-6 xl:order-2">
            <Mapbox />
          </div>
          <div className="rounded-[2rem] bg-br sm:hidden xl:order-3">
            <Janskapsalonsmall />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-pg sm:order-3  xl:order-4">
            <Toggle />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-rb sm:order-8 xl:order-5">
            <Github />
          </div>
          <div className="relative row-span-2 overflow-hidden rounded-[2rem] bg-card p-6 font-medium text-text sm:order-2 xl:order-6 ">
            <Skills />
          </div>
          <div className="peer col-span-2 hidden h-full rounded-[2rem] bg-card text-text transition-all duration-300 ease-in sm:order-10 sm:block xl:order-7 xl:block">
            <GithubStats data={data} />
          </div>
          <Discord />
          <Whatsapp />
          <div className="overflow-hidden rounded-[2rem] bg-br sm:order-7 sm:row-span-2 xl:order-3 xl:col-start-4 xl:row-start-1">
            <Flyn />
          </div>
          <div className="hidden overflow-hidden rounded-[2rem] bg-br sm:order-4 sm:col-span-2 sm:block xl:order-10">
            <Janskapsalonflat />
          </div>
          <Mail />
        </div>
        <Footer />
      </div>
    </AnimatedLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://cors-proxy.lvdw.workers.dev/?https://streak-stats.demolab.com/?user=Lvdwardt"
  ).then(function (response) {
    return response.text();
  });
  function getCommits(text: string) {
    text = text.slice(text.indexOf("<!-- Total Contributions Big Number -->"));
    text = text.slice(text.indexOf("<text"));
    text = text.slice(0, text.indexOf("</text>") - 21);
    text = text.slice(text.length - 5, text.length);
    text = text.replace(/\D/g, "");
    return text;
  }
  function getStreak(text: string) {
    let s = text;
    let d = text;
    //current streak number
    s = s.slice(s.indexOf("<!-- Current Streak Big Number -->"));
    s = s.slice(s.indexOf("<text"));
    s = s.slice(0, s.indexOf("</text>") - 19);
    s = s.slice(s.length - 5, s.length);
    s = s.replace(/\D/g, "");
    //current streak date range
    d = d.slice(d.indexOf("<!-- Current Streak Range -->"));
    d = d.slice(d.indexOf("<text"));
    d = d.slice(0, d.indexOf("</text>") - 19);
    d = d.slice(d.length - 17, d.length);
    d = d.replace(/(\r \n|\n|\r)/gm, "");

    return { number: s, date: d };
  }
  function getLongestStreak(text: string) {
    //longest streak number
    let l = text;
    let d = text;
    l = l.slice(l.indexOf("<!-- Longest Streak Big Number -->"));
    l = l.slice(l.indexOf("<text"));
    l = l.slice(0, l.indexOf("</text>") - 19);
    l = l.slice(l.length - 5, l.length);
    l = l.replace(/\D/g, "");
    //longest streak date range
    d = d.slice(d.indexOf("<!-- Longest Streak Range -->"));
    d = d.slice(d.indexOf("<text"));
    d = d.slice(0, d.indexOf("</text>") - 19);
    d = d.slice(d.length - 28, d.length);
    // remove  \n{space} from string
    d = d.replace(/(\r \n|\n|\r)/gm, "");

    return { number: l, date: d };
  }
  const commits = getCommits(res);
  const streak = getStreak(res);
  const longestStreak = getLongestStreak(res);
  return {
    props: {
      data: {
        commits,
        streak,
        longestStreak,
      },
    },
    revalidate: 86400,
  };
}
