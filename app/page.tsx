import CallToAction from "@/components/CallToAction";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-32 pb-16">
        <Hero />
        <FeatureSection />
        <WorkflowSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
