import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Download, Globe, Award, BookOpen, Code, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Fixed Social Sidebar */}
      <div className="fixed left-10 bottom-0 hidden md:block">
        <div className="flex flex-col items-center gap-6">
          <a href="https://github.com/5umitpandey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/5umitpandey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:sumi1xpandey@gmail.com"
            className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all">
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-[1px] h-32 bg-[#8892b0] mt-4"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#64ffda]">SP</a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#64ffda] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#64ffda] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</a>
            <a href="#" 
              className="flex items-center gap-2 border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors">
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <p className="text-[#64ffda] mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">Sumit Pandey.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">I'm Learning Data Science.</h2>
          <p className="text-[#8892b0] max-w-2xl mb-12 text-lg">
            I'm a Data Science Student at Thapar Institute, Patiala. <br></br>
            Currently, I'm focused on building Problem Solving Projects.
          </p>
          <div className="flex gap-6">
            <a href="#projects" 
              className="border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors">
              Check out my projects!
            </a>
          </div>
        </div>
      </section>

      
      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#112240] p-4 rounded-lg">
              <h3 className="text-[#64ffda] font-semibold mb-3">Languages</h3>
              <ul className="space-y-2 text-[#8892b0]">
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  C/C++
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  SQL
                </li>
              </ul>
            </div>
            <div className="bg-[#112240] p-4 rounded-lg">
              <h3 className="text-[#64ffda] font-semibold mb-3">DS Tools</h3>
              <ul className="space-y-2 text-[#8892b0]">
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  PowerBI
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Tableau
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Google Collab
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  MS Office
                </li>
              </ul>
            </div>
            <div className="bg-[#112240] p-4 rounded-lg">
              <h3 className="text-[#64ffda] font-semibold mb-3">Tools</h3>
              <ul className="space-y-2 text-[#8892b0]">
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Git
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  AWS
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center">Some Things I've Built</h2>
          <div className="space-y-24">
            {/* Project 1 */}
            <div className="relative grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
                  alt="Face Mask Detection"
                  className="rounded-lg w-full h-full object-cover brightness-50 hover:brightness-75 transition-all"
                />
                <div className="absolute inset-0 bg-[#64ffda]/10"></div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#64ffda] mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">Face Mask Detection</h3>
                <div className="bg-[#112240] p-6 rounded-lg mb-4">
                  <p className="text-[#8892b0]">
                    A real-time face mask detection application using Deep Learning and OpenCV. 
                    The model detects whether a person is wearing a mask correctly, incorrectly, or not wearing one at all.
                  </p>
                </div>
                <div className="text-[#8892b0] mb-8 space-x-4">
                  <span>Python</span>
                  <span>•</span>
                  <span>TensorFlow</span>
                  <span>•</span>
                  <span>OpenCV</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/chandrikadeb7/Face-Mask-Detection" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda]">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" 
                    className="text-[#ccd6f6] hover:text-[#64ffda]">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative grid md:grid-cols-2 gap-8">
              <div className="relative md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="MyFitnessPal Clone"
                  className="rounded-lg w-full h-full object-cover brightness-50 hover:brightness-75 transition-all"
                />
                <div className="absolute inset-0 bg-[#64ffda]/10"></div>
              </div>
              <div className="flex flex-col justify-center md:order-1">
                <p className="text-[#64ffda] mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">MyFitnessPal Clone</h3>
                <div className="bg-[#112240] p-6 rounded-lg mb-4">
                  <p className="text-[#8892b0]">
                    A full-stack clone of MyFitnessPal with features like calorie tracking, 
                    workout planning, and progress monitoring. Built with modern web technologies.
                  </p>
                </div>
                <div className="text-[#8892b0] mb-8 space-x-4">
                  <span>React</span>
                  <span>•</span>
                  <span>Node.js</span>
                  <span>•</span>
                  <span>MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" 
                    className="text-[#ccd6f6] hover:text-[#64ffda]">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" 
                    className="text-[#ccd6f6] hover:text-[#64ffda]">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 bg-[#112240]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center">Where I've Worked</h2>
          <div className="space-y-12">
            <div className="bg-[#0a192f] p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?auto=format&fit=crop&q=80&w=100"
                  alt="TCS Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#ccd6f6]">Data Analyst</h3>
                  <p className="text-[#64ffda]">CollegeDunia</p>
                </div>
              </div>
              <p className="text-[#8892b0] mb-2">July 2023 - Jan 2024</p>
              <ul className="space-y-4 text-[#8892b0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span>Write modern, performant, maintainable code for diverse array of client and internal projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Node.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="text-[#64ffda] mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
          <p className="text-[#8892b0] mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <a href="mailto:sumixpandey@gmail.com" 
            className="inline-block border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors">
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center gap-6 mb-4 md:hidden">
            <a href="https://github.com/5umitpandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/5umitpandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sumixpandey@gmail.com"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[#8892b0] text-sm">
            Built with <Heart className="w-4 h-4 inline text-[#64ffda]" /> by Sumit Pandey
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;