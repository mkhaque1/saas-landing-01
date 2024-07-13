import CardIcon from "../assets/icons/box 1.svg";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="container py-24 text-center">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-6xl font-bold tracking-tighter">
            Everything you need
          </h1>
          <p className="py-5 w-full md:w-[576px] md:text-xl">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="card md:flex md:gap-3 xl:gap-5">
          {features.map(({ title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 text-center mb-9 border border-white/30 rounded-2xl py-5 md:py-10 mx-10 md:mx-3"
            >
              <div>
                <CardIcon className="text-zinc-500 w-12 h-12 rounded-lg p-3 bg-slate-200" />
              </div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-slate-300 px-10">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
