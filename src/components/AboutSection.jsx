import {User, Briefcase, Code } from "lucide-react"; 


export const AboutSection = () => {
    return (<section id="About" className="py-24 px-4 relative">
    {" "}
      <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
            About <span className="text-primary"> Me </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate web developer</h3>
               
                <p className="text-muted-foreground">
                    Hello! I'm Krutika Nikhade, a passionate MERN Stack Developer with a strong foundation in Computer Science Engineering. I specialize in building dynamic, user-focused web applications using technologies like MongoDB, Express.js, React, and Node.js, while also being proficient in HTML, CSS (Bootstrap), JavaScript, and modern development tools like Git.
                </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <a href="public/resume_krutika_nikhade.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                    {" "}
                      Download Resume
                  </a>
               </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="fomt-semibold text-lg">Front-End</h4>
                            <p className="text-muted-foreground">
                                Experienced in building responsive user interfaces using React, HTML, and CSS.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="fomt-semibold text-lg">Back-End</h4>
                            <p className="text-muted-foreground">
                                Proficient in developing server-side applications with Node.js and Express.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="fomt-semibold text-lg">Databases</h4>
                            <p className="text-muted-foreground">
                                Skilled in managing and integrating SQL and MongoDB databases.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
       </div>
    </section>
   );
};