import Image from "next/image";
import profile from "@/assets/profile.webp";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Building & Contributing</h1>
        <p className="text-muted-foreground">
          I build and contribute to open-source projects.
        </p>
        <button>Contact</button>
      </div>
      <div className="w-full h-full bg-muted rounded-lg">
        <Image
          src={profile}
          alt="Climax Mba"
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
