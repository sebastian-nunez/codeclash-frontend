import type { NextPage } from "next";
import Link from "next/link";

import SimpleCard from "../components/SimpleCard";
const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold mb-5 ">
        Welcome to{" "}
        <Link href="/">
          <span className="text-pink-500 cursor-pointer">CodeClash!</span>
        </Link>
      </h1>

      <div className="mt-6 max-w-4xl flex-wrap items-center justify-around hidden sm:w-full md:flex">
        <SimpleCard
          title="Editor"
          body="Try out our interactive editor!"
          href="/editor"
        />

        <SimpleCard
          title="Leaderboard"
          body="See the top players on the platform!"
          href="/leaderboard"
        />
        <SimpleCard
          title="Problems"
          body="Check out our list of problems!"
          href="/problems"
        />
        <SimpleCard
          title="Profile"
          body="Access your profile information!"
          href="/profile"
        />
      </div>
    </div>
  );
};

export default Home;
