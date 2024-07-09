import Title from "@/components/common/Title";
import CTA from "@/components/home/CallToAction";
import CardsList from "@/components/services/CardsList";

export const metadata = {
  title: "Services - Advocate Plus",
};

const ServicesPage = () => {
  return (
    <main>
      <Title text="Our Services" />
      <CardsList />
      <CTA />
    </main>
  );
};

export default ServicesPage;
