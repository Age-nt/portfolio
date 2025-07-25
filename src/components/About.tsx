import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Database, Globe, Award, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animateSkills, setAnimateSkills] = useState(false);

  const skills = [
    { name: 'Python', level: 95, icon: Code },
    { name: 'Anaconda', level: 90, icon: Code },
    { name: 'PHP', level: 85, icon: Palette },
    { name: 'SQL', level: 84, icon: Database },
    { name: 'System Designing', level: 78, icon: Globe },
    { name: 'System Development', level: 74, icon: Code },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Coffee },
    { number: '20+', label: 'Happy Clients', icon: Globe },
    { number: '100%', label: 'Client Satisfaction', icon: Award },
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateSkills(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span>Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate tech enthusiast with a keen eye for design and a love for creating
            seamless digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="shadow-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  My Journey
                </h3>
                <div >
                  <p>
                    With over 3 years of experience in Systems development, I've had the privilege
                    of working on diverse projects ranging from small business websites to large-scale
                    enterprise applications.
                  </p>
                  <p>
                    My passion lies in the intersection of technology and design, creating solutions
                    that are not only functional but also intuitive and beautiful. I believe in
                    continuous learning and staying up-to-date with the latest industry trends.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to
                    open-source projects, or mentoring aspiring developers in my community.
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
                >
                  <a
  href="src/assets/cv.pdf"
  download="cv.pdf"
  className="inline-flex items-center px-8 py-3 border-primary text-primary hover:text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
>
  <a
  href="src/assets/cv.pdf">
  <i data-lucide="download" className="mr-2 h-5 w-5"></i>
  Download Resume
</a>
  
</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="shadow-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 ">
                  Skills & Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                            className="h-full gradient-primary rounded-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="shadow-card hover-lift glass-effect">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Icon />
                      </div>
                    </div>
                    <div className="text-3xl font-display font-bold  mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;