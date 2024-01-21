import ContentCard from "@/components/Browse/ContentCard";
import { contentFetch } from "@/utils/apiCalls/getContent";
import Link from "next/link";
import React from "react";

type PageProps = {
  params: {
    contentType: string;
  };
};

async function Content({ params: { contentType } }: PageProps) {
  const contents = await contentFetch(contentType);

  return (
    <section className="max-w-[90vw] mx-auto px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {contents.map((content: any) => (
        <Link
          key={content._id}
          passHref
          href={`/browse/${contentType}/${content.slug}`}
        >
          <ContentCard content={content} />
        </Link>
      ))}
    </section>
  );
}

export default Content;
