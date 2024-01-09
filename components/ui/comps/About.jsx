import DevImg from "./DevImg"
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react'

const infoData =[
    {
        icon: <User2 size={20} />,
        text: 'Kiril Angelov',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+359 878 768 152',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'kirilangelov21@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 16 June, 1999',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'React with Redux / JAVA Advanced - RESTful API',
    },
    {
        icon: <HomeIcon size={20} />,
        text: '"Petar Raychev" 22, Varna, Bulgaria',
    },
    
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Advanced Academy',
                qualification: 'Certificate of Completion',
                years:'01.2021 - 07.2021'
            },
            {
                university: 'React with Redux',
                qualification: 'Certificate of Completion',
                years:'08.2022 - 01.2023'
            },

        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Sirma Solutions',
                role: 'Junior Developer',
                years:'2022 - 2023'
            },
            {
                company: 'DataBee',
                role: 'Data Analyst',
                years:'2021 - Present'
            },

        ]
    }
]

const skillData = [
    {
     title: 'skills',
     data: [
        {
            name: 'React, NextJS, Tailwind',
        },
        {
            name: 'Front-end Development',
        },
        {
            name: 'Java, JavaScript, MongoDB',
        },
        {
            name: 'Back-end Development',
        },
     ]  
    },
    {
        title: 'tools',
        data: [
           {
               imgPath: '/about/vscode.svg',
           },
            {
               imgPath: '/about/figma.svg',
           },
            {
               imgPath: '/about/notion.svg',
           },
            
           {
            imgPath: '/about/java.svg',
        },
        {
            imgPath: '/about/react.svg',
        },
        {
            imgPath: '/about/next.svg',
        },
           
        ]  
       },
];



const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }
  return (
  <section className="xl:h-[860px] pb-12 xl:py-24" >
    <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 mx-auto'>
            About me
        </h2>
        <div className="flex flex-col xl:flex-row">
            {/* image */}
            <div className="hidden xl:flex flex-1 relative">
                <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark 
                w-[555px] h-[555px] bg-no-repeat relative' imgSrc='/about/developer2.png'/>
            </div>
            {/* tabs */}
            <div className="flex-1">
            <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:shadow-xl dark:border-none sm:shadow-none md:shadow-none ">
                    <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                    <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                </TabsList>
                {/* tabs content */}
                <div>
                    {/* personal */}
                    <TabsContent value="personal">
                        <div className="text-center xl:text-left">
                            <h3 className="h3 mb-5 mt-7">Unmatched Service Quality for Over 3 Years</h3>
                            <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                I specilize in crafting intuitive websites with cutting-edge technology, 
                                delivering dynamic and engaging user experiences.
                            </p>
                            {/* icons */}
                            <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                {infoData.map((item, index)=> {
                                    return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                        <div className="text-primary">{item.icon}</div>
                                        <div>{item.text}</div>
                                    </div>
                                })}
                            </div>
                            {/* languages */}
                            <div className="flex flex-col gap-y-2">
                                <div className="text-primary text-xl">Language Skills</div>
                                <div className="border-b border-border"></div>
                                <div>Fluent in English and Bulgarian.</div>
                            </div>
                        </div>
                    </TabsContent>
                    {/* qualifications */}
                    <TabsContent value="qualifications">
                        <div>
                            <h3 className="h3 mb-8 text-center xl:text-left h3 mt-7">My Journey Thusfar</h3>
                            {/* experiences and education wrapped */}
                            <div className="grid md:grid-cols-2 gap-y-8">
                                {/*experiences  */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        <Briefcase />
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, "experience").title}
                                        </h4>
                                    </div>
                                    {/* list */}
                                        <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData, "experience").data.map(
                                            (item, index)=>{
                                                const {company, role, years} = item;
                                                return(
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[12px] h-[12px] rounded-full bg-primary
                                                            absolute -left-[5px] group-hover:translate-y-[84px]
                                                            transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl 
                                                            leading-none mb-2">{company}</div>
                                                            <div className="text-lg leading-none 
                                                            text-muted-foreground mb-4">{role}</div>
                                                            <div className="text-base 
                                                            font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>    
                                </div>
                                {/*education  */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        <GraduationCap size={28} />
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, "education").title}
                                        </h4>
                                    </div>
                                    {/* list */}
                                        <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData, "education").data.map(
                                            (item, index)=>{
                                                const {university, qualification, years} = item;
                                                return(
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[12px] h-[12px] rounded-full bg-primary
                                                            absolute -left-[5px] group-hover:translate-y-[84px]
                                                            transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl 
                                                            leading-none mb-2">{university}</div>
                                                            <div className="text-lg leading-none 
                                                            text-muted-foreground mb-4">{qualification}</div>
                                                            <div className="text-base 
                                                            font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>    
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                        {/* skills */}
                    <TabsContent value="skills">
                        <div className="text-center xl:text-left">
                            <h3 className="h3 mb-8 h3 mt-7 ">What I Use Everyday</h3>
                            <div className="mb-16 ">
                                <h4 className="text-2xl font-semibold mb-2 ">Skills</h4>
                                <div className="border-b border-border mb-4"></div>
                                {/* skill list */}
                                <div className="mt-7">
                                  {getData(skillData, "skills").data.map(
                                    (item, index)=> {
                                        const {name} = item;
                                        return(
                                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                <div className="font-medium">{name}</div>
                                            </div>
                                        )
                                    }
                                  )}
                                </div>
                            </div>
                            {/* tools */}
                            <div>
                                <h4 className="text-2xl font-semibold mb-2 xl:text-left">Tools</h4>
                                <div className="border-b border-border mb-4"></div>
                                {/* tool list */}
                                <div className="flex justify-center gap-x-1 xl:justify-start">
                                  {getData(skillData, "tools").data.map(
                                    (item, index)=> {
                                        const {imgPath} = item;
                                        return(
                                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                <Image src={imgPath} width={48} height={48} alt="" priority/>
                                            </div>
                                        )
                                    }
                                  )}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>

            </div>
        </div>
    </div>
  </section>
  )
}

export default About