import NotFoundComponent from "@/components/projects/notFound";
import MainLayout from "./(main)/layout";
import type { Metadata } from "next";

interface PageProps {
  params?: {
    slug?: string;
  };
  url?: string;
}

export const metadata: Metadata = {
  title: "Oops! - Page not found",
  description:
    "Due to some unfortunate circumstances, this page does not exist.",
};

export default function NotFound({ params, url }: PageProps) {
  return (
    <MainLayout>
      <NotFoundComponent params={params} url={url} />
    </MainLayout>
  );
}
