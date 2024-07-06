import CardList from "@/components/attorneys/CardList";
import Title from "@/components/common/Title";
import CTA from "@/components/home/CallToAction";

const AttorneysPage = () => {
  return (
    <main>
      <Title text="Our Expert Attorneys" />
      <CardList />
      <CTA />
    </main>
  );
};

export default AttorneysPage;
