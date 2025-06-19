import {Mail} from 'lucide-react';
import { Linkedin } from "lucide-react";
import {cn} from "@/lib/utils";

export const ContactSection = () =>{
   
  // will work on this functionality later.
  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   setTimeout(()=>{
  //     toast
  //   }, 1500)
  // }
  

  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
     <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Feel free to reach out. Open to discuss new opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h3 
            className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
                </h3>

            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary"/> {" "}
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:krutikanikhade0204@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      krutikanikhade0204@gmail.com  
                    </a>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary"/> {" "}
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn </h4>
                    <a href="https://www.linkedin.com/in/krutika-nikhade/"
                     target="_blank"
                     className="text-muted-foreground hover:text-primary transition-colors"> 
                     - Krutika Nikhade
                    </a>
                  </div>
                </div>
             </div>
             
          </div>
          {/* Email.js is paid to I'll work on this functionality later by any alternative */}
          {/* <div className='bg-card p-8 rounded-lg shadow-xs'>
          <h3 className='text-2xl font-semibold mb-6'> Send a message</h3>
        <form action="" className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium mb-12'>Your Name</label>
              <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
              placeholder='Krutika Nikhade'
              />
            </div>
            <div>
              <label htmlFor="email" className='block text-sm font-medium mb-12'>Your email</label>
              <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
              placeholder='Krutika@gmail.com'
              />
            </div>
            <div>
              <label htmlFor="message" className='block text-sm font-medium mb-12'>Your Message</label>
              <textarea  
              id="message" 
              name="message" 
              required 
              className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
              placeholder='Hello....'
              />
            </div>
            <button type='submit' className={cn(
              "cosmic-button w-full flex itmes-center justify-center gap-2"
               )}
              >
                Send Message
              <Send size={16} />
            </button>
            </form>
         </div> */}
        </div>
      </div>
   </section>
   );
};