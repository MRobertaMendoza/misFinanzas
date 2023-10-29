import Image from "next/image";
import { blogEntries } from "@/utils/data";

export default function Blog() {
  const leftEntry = blogEntries.find((entry) => entry?.id === 1);
  const rightEntries = blogEntries.filter((entry) => entry?.id !== 1);

  return (
    <section
      id="blog"
      className="min-h-screen w-full flex flex-col items-center justify-center md:flex-row"
    >
      <div className="w-1/2">
        <Image src={leftEntry?.image} alt="Blog picture" />
        <div key={leftEntry?.id}>
          <h3 className="text-mRed dark:text-mYellow">
            {leftEntry?.authorAndDate}
          </h3>
          <h2 className="text-mBlack dark:text-mWhite font-semibold text-2xl">
            {leftEntry?.title}
          </h2>
          <p className="text-mDarkGray dark:text-mLightGray">
            {leftEntry.desciption}
          </p>
          {leftEntry?.tags.map((tag) => (
            <span
              key={`${leftEntry.id}${tag}`}
              className="bg-yellow-700 text-mYellow px-2 text-sm rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        {rightEntries.map((entry) => (
          <div key={entry?.id} className="flex flex-col md:flex-row">
            <Image src={entry?.image} alt="Blog picture" />
            <div className="" key={entry?.id}>
              <h3 className="text-mRed dark:text-mYellow">
                {entry?.authorAndDate}
              </h3>
              <h2 className="text-mBlack dark:text-mWhite font-semibold text-2xl">
                {entry?.title}
              </h2>
              <p className="text-mDarkGray dark:text-mLightGray">
                {entry.desciption}
              </p>
              {entry?.tags.map((tag) => (
                <span
                  key={`${entry.id}${tag}`}
                  className="bg-yellow-700 text-mYellow px-2 text-sm rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
