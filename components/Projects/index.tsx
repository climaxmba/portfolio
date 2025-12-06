const Projects = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-full h-64 bg-muted rounded-lg"></div>
          <h3 className="text-2xl font-bold">Project Title</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-4">
            <button>View Source</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-64 bg-muted rounded-lg"></div>
          <h3 className="text-2xl font-bold">Project Title</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-4">
            <button>View Source</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
