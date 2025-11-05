import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I access the course?",
    answer: "Immediately after purchase, you will receive an email with your login credentials and access link to the course platform. You can start learning right away!"
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes! This is a one-time payment of $10 (during the launch offer until November 30th). After that, the regular price of $39.99 applies. No subscriptions, no hidden fees."
  },
  {
    question: "Can I download the course materials?",
    answer: "Yes! All course videos and bonus materials are available for download. You can access them anytime, anywhere, even offline."
  },
  {
    question: "What if I'm not satisfied?",
    answer: "You are protected by our 7-Day No-Questions-Asked Money-Back Guarantee. If you're not completely satisfied, simply email us within 7 days for a full refund."
  },
  {
    question: "How long do I have access to the course?",
    answer: "You have LIFETIME access to the course and all future updates. Learn at your own pace, whenever you want."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, PayPal, and other secure payment methods through our payment processor Hotmart."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-heading text-lg md:text-xl text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
