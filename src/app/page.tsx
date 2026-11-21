import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Method from "@/components/Method";
import Background from "@/components/Background";
import Toolbox from "@/components/Toolbox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-[72rem] px-[clamp(1.25rem,5vw,3rem)] pt-6 pb-20">
      <TopBar />
      <Hero />
      <main>
        <Projects />
        <Method />
        <Background />
        <Toolbox />
      </main>
      <Footer />
    </div>
  );
}
