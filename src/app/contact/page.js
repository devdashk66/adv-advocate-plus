import Title from "@/components/common/Title";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us - Advocate Plus",
};

const ContactPage = () => {
  return (
    <main>
      <Title text="Contact Us" />
      <div className="bg-gray-900 px-6">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
