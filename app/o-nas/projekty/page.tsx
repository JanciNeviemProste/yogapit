import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectAccordion from "@/components/ui/ProjectAccordion";
import projektyData from "@/data/projekty.json";

export const metadata: Metadata = {
  title: "Projekty - Yogapit",
  description: "Naša komunita realizuje niekoľko projektov zameraných na šírenie védskej filozofie a kultúry.",
};

export default function ProjektyPage() {
  return (
    <main className="relative min-h-screen w-full">
      <PageHero
        title="Projekty"
        description={projektyData.intro}
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {projektyData.projects.map((project) => (
          <ProjectAccordion
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            icon={project.icon}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}
