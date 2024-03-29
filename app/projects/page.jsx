'use client';

import React, {useState} from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

import ProjectCard from '@/components/ui/comps/ProjectCard';

const projectData = [
  {
      image: '/work/3.png',
      category: 'react js',
      name: 'Nexa Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/4.png',
      category: 'react js',
      name: 'Solstice Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/2.png',
      category: 'next js',
      name: 'Lumina Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/1.png',
      category: 'next js',
      name: 'Evolve Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/3.png',
      category: 'next js',
      name: 'Ignite Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/4.png',
      category: 'fullstack',
      name: 'Envision Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/1.png',
      category: 'fullstack',
      name: 'Serenity Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/3.png',
      category: 'fullstack',
      name: 'Nova Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
  {
      image: '/work/2.png',
      category: 'fullstack',
      name: 'Zenith Website',
      description: 'In the realm of web development, I craft with seamless functionality.',
      link: '/',
      github: '/',

  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);

  const [category, setCategory] = useState('all projects')


  const filterProjects = projectData.filter(project => {
    //if catorgy is "all proj" return all projects, else filter by category
    return category === 'all projects' 
    ? project 
    : project.category === category;
  })
  
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index)=> {
              return <TabsTrigger onClick={()=> setCategory(category)} value={category} key={index} className='capitalize w-[160px] md:w-auto'>{category}</TabsTrigger>
            })}
          </TabsList>
          {/* tabs content */}
            <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {filterProjects.map((project, index)=> {
                return(
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>);
              })}
            </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects