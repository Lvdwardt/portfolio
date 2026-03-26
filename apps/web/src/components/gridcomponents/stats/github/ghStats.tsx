import Link from "next/link";
import Counter from "@/components/global/counter";
import { SiGithub } from "react-icons/si";
import { FiGitCommit } from "react-icons/fi";

type StreakStats = {
  totalContributions: number;
  firstContribution: string;
  currentStreak: {
    start: string;
    end: string;
    length: number;
  };
  longestStreak: {
    start: string;
    end: string;
    length: number;
  };
};

export default async function GithubStats() {
  let commits = 0;

  try {
    const res = await fetch(
      "https://streak-stats.demolab.com/?user=Lvdwardt&type=json",
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    const data: StreakStats = await res.json();
    commits = data.totalContributions;
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
  }

  return (
    <div className="group flex h-full w-full flex-col p-8">
      <Link
        href="https://github.com/Lvdwardt"
        target="_blank"
        rel="noreferrer"
        aria-label="visit my github page"
      >
        <SiGithub className="text-6xl text-primary animate-once group-hover:animate-rotate-y" />
      </Link>
      <div className="mt-auto flex flex-col">
        <div>
          <div className="flex h-6 items-center gap-2">
            <FiGitCommit className="text-4xl" />
            <span className="text-2xl font-bold">
              <Counter value={commits} duration={300} />
            </span>
          </div>
          <span className="font-silka text-sm text-gray-400">
            commits made so far
          </span>
        </div>
      </div>
    </div>
  );
}
