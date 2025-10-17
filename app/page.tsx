import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import RightRail from "@/components/ui/RightRail/RightRail";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground />
      <Hero />
      <RightRail />
    </main>
  );
}
