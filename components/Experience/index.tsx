const Experience = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Where I&apos;ve worked</h2>
      <div className="space-y-8">
        <div className="flex gap-8">
          <div className="w-16 h-16 bg-muted rounded-full"></div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Role</h3>
            <p className="text-muted-foreground">Company Name | Period</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-2">
              <div className="bg-muted px-2 py-1 rounded-md">Skill</div>
              <div className="bg-muted px-2 py-1 rounded-md">Skill</div>
              <div className="bg-muted px-2 py-1 rounded-md">Skill</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
