import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      technologies: ['Javascript', 'CSS', 'HTML'],
      category: 'Web',
      demoUrl: '#',
      githubUrl: 'https://github.com/Age-nt/Cricket-Weapon-E-commerce-App.git',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'Web',
      demoUrl: 'https://private-user-images.githubusercontent.com/161751452/357918043-ed74edf0-c151-47ba-a833-433b04ba8e22.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMxNzgzNzIsIm5iZiI6MTc1MzE3ODA3MiwicGF0aCI6Ii8xNjE3NTE0NTIvMzU3OTE4MDQzLWVkNzRlZGYwLWMxNTEtNDdiYS1hODMzLTQzM2IwNGJhOGUyMi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMlQwOTU0MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzYxMzNjYmFhODg3YWJkZTAxM2FiYmIyMzY3NjUwNDlhZTQyZWNhY2FiYzkyM2Q5OTk2MzgwNDFiMzY0YTdhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.h1Yn0nxgucA2ELBejuX_lKdBf2mReJYXKZWAFSEu4Cg',
      githubUrl: 'https://github.com/Age-nt/Task-Management-Application.git',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive charts, and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      category: 'Web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Fitness Tracker',
      description: 'A React Native mobile app for fitness tracking with workout planning, progress monitoring, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Javascript', 'PLpgSQL'],
      category: 'Mobile',
      demoUrl: 'https://www.youtube.com/watch?v=hpZHz5V0RD4&ab_channel=FitJourney',
      githubUrl: 'https://github.com/Age-nt/ReactFitnessApplication.git',
      featured: true,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Design',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
   
    {
      id: 7,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics, post scheduling, and engagement tracking.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'Redis', 'Chart.js'],
      category: 'Web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
   
  ];

  const categories = ['All', 'Web', 'Mobile', 'Design', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects.slice(0, visibleProjects)
    : projects.filter(project => project.category === activeFilter).slice(0, visibleProjects);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span>Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for creating
            innovative solutions. Each project represents a unique challenge and learning opportunity.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => {
                  setActiveFilter(category);
                  setVisibleProjects(6);
                }}
                className={`transition-bounce ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover-lift h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="glass-effect"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="glass-effect"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <Button
              onClick={loadMoreProjects}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce px-8"
            >
              Load More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;