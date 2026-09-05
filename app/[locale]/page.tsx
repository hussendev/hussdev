import { AboutIntro } from "@/components/home/AboutIntro";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { FeaturedShowcase } from "@/components/home/FeaturedShowcase";
import { Hero } from "@/components/home/Hero";
import { ProjectFilterBar } from "@/components/home/ProjectFilterBar";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="relative">
        <Hero />
        <ProjectFilterBar />
      </section>
      <AboutIntro />
      <FeaturedShowcase />
      <ProjectsGrid />
      <ExperienceTimeline />
      <ContactSection />
    </>
  );
}
