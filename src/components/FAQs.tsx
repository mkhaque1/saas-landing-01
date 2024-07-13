const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  return (
    <div className="bg-black bg-[linear-gradient(to_bottom,#5D2CA8,#000000)] text-white">
      <div className="container py-24 text-center">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-6xl font-bold tracking-tighter">
            Frequently asked questions
          </h1>
        </div>
        <div className="faq text-center">
          <h3>sample FAQ 1</h3>
        </div>
      </div>
    </div>
  );
};
