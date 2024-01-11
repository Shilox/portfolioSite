'use client';
import Link from "next/link";
import { Button } from "../button";


import {Swiper, SwiperSlide} from 'swiper/react';
//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules';

//componenets
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Solstice Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Lumina Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Evolve Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Ignite Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/4.png',
        category: 'fullstack',
        name: 'Envision Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Serenity Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'Nova Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Zenith Website',
        description: 'In the ethereal realm of web development, I carft a digital tapestry that seamlessly has functionality and interactive harmony.',
        link: '/',
        github: '/',

    },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
    <div className="container mx-auto ">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col 
        justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">These are my lastest projects.</p>
            <Link href='/projects'>
            <Button>All Projects</Button>
            </Link>
        </div>
        {/* sliders */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                640: {
                    slidesPerView: 2
                },
            }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}} >
                {/* Show only the first 4 projects for the slides */}
                {projectData.slice(0, 5).map((project, index)=> {
                    return <SwiperSlide key={index}>
                        <ProjectCard project={project}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </div>
    </section>
  )
}

export default Work