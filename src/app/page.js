import CTA from "@/components/home/CallToAction";
import ExperienceSection from "@/components/home/ExperienceSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import Hero from "@/components/home/Hero";
import PracticeAreas from "@/components/home/PracticeAreas";
import TestimonialCarousel from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <ExperienceSection />
      <TestimonialCarousel />
      <ExpertiseSection />
      <CTA />
    </>
  );
}
