import Link from 'next/link';
import { Button } from '../button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from './DevImg';
import Socials from './Socials';
import Badge from './Badge';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-covor dark:bg-none'>
      <div className="container mx-auto">
        <div className='flex justify-around gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left '>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[5px]'>Web Developer</div>
            <h1 className='h1 mb-4'>Hello, my name is Kiril Angelov</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>As a web developer specializing in Next.js, 
            React, and Tailwind, I also excel in data entry and extraction, leveraging my skills to ensure seamless
             functionality and efficient handling of diverse datasets.</p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2 rounded-full'>Contact me <Send size={18} /></Button>
              </Link>
              <a href="/Resume.pdf" download="Resume">
                <Button className='gap-x-2 rounded-full' variant='secondary'>Download CV <Download size={18} /></Button>
              </a>
            </div>
            {/* socials */}
            <Socials 
            containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
          </div>
          {/* img */}
          

          <div className='hidden xl:flex relative'>
          <div>
            <Badge 
            containerStyles='absolute top-[21%] -left-[5rem]'
            icon={<RiBriefcase4Fill />} 
            endCountNum={2} 
            badgeText='Years Of Experience'/>

            <Badge 
            containerStyles='absolute top-[85%] -left-[1rem]'
            icon={<RiTodoFill />} 
            endCountNum={11} 
            // endCountText={k}
            badgeText='Finished Projects'/>

            <Badge 
            containerStyles='absolute top-[70%] -right-[4rem]'
            icon={<RiTeamFill />} 
            endCountNum={9} 
            badgeText='Programming Clients'/>

<Badge 
            containerStyles='absolute top-[15%] -right-[6rem]'
            icon={<RiTeamFill />} 
            endCountNum={1}
            endCountText={'k'} 
            badgeText='Personal Boxing Customers'/>
            </div>
            
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark bg-no-repeat w-[500px] h-[500px] -top-2 -right-2'></div>
            <DevImg imgSrc='/hero/developer.png' />
          </div>  
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-pulse '>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Hero;
