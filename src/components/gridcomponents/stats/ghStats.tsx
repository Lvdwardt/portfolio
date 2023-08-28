import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { FiGitCommit } from "@react-icons/all-files/fi/FiGitCommit";
import { type ElementCompact, xml2js } from "xml-js";
import Link from "next/link";

export default async function GithubStats() {
  const res = await fetch(
    "https://cors-proxy.lvdw.workers.dev/?https://streak-stats.demolab.com/?user=Lvdwardt",
    {
      next: {
        revalidate: 86400,
      },
    }
  ).then(function (response) {
    return response.text();
  });

  const svgObject = xml2js(res, { compact: true }) as ElementCompact;

  const commits = svgObject.svg.g.g[2].g[0].text._text;
  const streak = svgObject.svg.g.g[3].g[0].text._text;
  const streakDate = svgObject.svg.g.g[3].g[2].text._text;
  const longestStreak = svgObject.svg.g.g[4].g[0].text._text;
  const longestStreakDate = svgObject.svg.g.g[4].g[2].text._text;

  const data = {
    commits: commits,
    streak: {
      number: streak,
      date: streakDate,
    },
    longestStreak: {
      number: longestStreak,
      date: longestStreakDate,
    },
  };

  return (
    <div className="flex h-full w-full flex-col p-8">
      <Link
        href="https://github.com/Lvdwardt"
        target="_blank"
        rel="noreferrer"
        aria-label="visit my github page"
      >
        <SiGithub className="text-6xl text-primary" />
      </Link>
      <div className="mt-auto flex flex-col">
        <div>
          <div className="flex h-6 items-center gap-2">
            <FiGitCommit className="text-4xl" />
            <span className="text-2xl font-bold">{data.commits}</span>
          </div>
          <span className="font-silka text-sm text-gray-400">
            commits made so far
          </span>
        </div>
      </div>
    </div>
  );
}
