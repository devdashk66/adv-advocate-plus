import FAQSection from "@/components/about/FAQSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Title from "@/components/common/Title";
import CTA from "@/components/home/CallToAction";
import ExperienceSection from "@/components/home/ExperienceSection";
import TestimonialCarousel from "@/components/home/Testimonials";

export const metadata = {
  title: "About - Advocate Plus",
};

const AboutPage = () => {
  return (
    <section>
      <Title text="About Company" />
      <main className="bg-gray-900 py-5">
        <div className="container mx-auto">
          <div className="lg:flex items-center justify-between">
            <WhyChooseUs />
            <FAQSection />
          </div>
        </div>
        <ExperienceSection />
        <TestimonialCarousel />
        <CTA />
      </main>
    </section>
  );
};

export default AboutPage;
