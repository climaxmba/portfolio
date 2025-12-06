import Image from "next/image";
import profile from "@/assets/profile.webp";

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="w-48 h-48 bg-muted rounded-full mx-auto">
        <Image
          src={profile}
          alt="Climax Mba"
          className="object-cover rounded-full"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Who am I?</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-4">
          <button>LinkedIn</button>
          <button>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default About;
