const projects = [
    {
        id:1,
        title:"",
        description:"",
        image:"projects\project_Img_1.png",
        url:"https://wanderlust-tdnn.onrender.com",
    }
]

export const ProjectsSection = ()=>{
    return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span> </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my projects. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project,key) =>(
            <div key={key} className="group mb-card rounded-lg overflow-hidden shadow-xs card-hover">

                <div>
                    <img src={project.image} alt="{project.title}" className="h-48 overflow-hidden"/>
                </div>
            </div>
        ))}
      </div>
      </div>
    </section>
    );
};