import { AboutIntro } from "@/components/home/AboutIntro";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { FeaturedShowcase } from "@/components/home/FeaturedShowcase";
import { Hero, HeroScrollHint } from "@/components/home/Hero";
import { ProjectFilterBar } from "@/components/home/ProjectFilterBar";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 start-0 z-10 h-1/2 w-full bg-gradient-to-b from-black/90 to-transparent" />
          <div className="absolute bottom-0 start-0 z-10 h-1/2 w-full bg-gradient-to-t from-black/90 to-transparent" />
          <Image
            src="/hero.svg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Hero />
        <ProjectFilterBar />
        <HeroScrollHint />
      </section>
      <AboutIntro />
      <FeaturedShowcase />
      <ProjectsGrid />
      <ExperienceTimeline />
      <ContactSection />
    </>
  );
}
