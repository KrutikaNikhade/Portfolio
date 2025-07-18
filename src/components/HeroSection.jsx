import { ArrowDown } from "lucide-react";


export const HeroSection = () =>{
    return (<section id="Home" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
       <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Namaskar, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> 
                {" "} 
                Krutika</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Nikhade</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
         A MERN Stack Developer crafting intuitive web experiences

I build clean, scalable, and user-focused web applications using modern technologies like MongoDB, Express, React, Node.js, CSS and its frameworks and HTML5.<br></br>
🔧 Code. ☕ Create. 🚀 Repeat.
          </p>
        
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#Projects" className="cosmic-button">
          View My Work
            </a>
          </div>
        </div> 
       </div> 

          <div 
            className="absolute bottom-8 left-1//2 transform -translate-x-1/2 flex flex-col itmes-center animate-bounce"
          >
              <span className="text-sm text-muted-foreground mb-2">scroll</span>
              <ArrowDown className="h-5 w-5 text-primary" />
          </div>
    </section>
   );
};