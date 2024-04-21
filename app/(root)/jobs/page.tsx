import Filter from "@/components/Shared/Filter";
import LocalSearchBar from "@/components/Shared/search/LocalSearchBar";

import { JobsFilters } from "@/constants/filters";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jobs | Dev Overflow",
};

const Page = async () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Jobs"
          otherClasses="flex-1"
        />

        <Filter
          filters={JobsFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="container flex flex-col justify-center items-center">
        <section className="mt-12">
          <Image
            src="/assets/images/construction.jpg"
            alt="jobs"
            width={800}
            height={1000}
          />
        </section>
        <h1 className="h1-bold text-dark100_light900 mt-12">
          Page is Under Construction
        </h1>
      </div>
    </>
  );
};

export default Page;
