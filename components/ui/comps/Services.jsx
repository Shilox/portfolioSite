'use client';
import {GanttChartSquare, Blocks, Gem} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'In my work as a web designer, I craft visually appealing and user-friendly websites by skillfully combining elements like layout, color, and typography.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Devolopment',
        description: 'My focus is on implementing robust and efficient solutions, ensuring that websites not only look great but also perform optimally across various browsers and devices.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Devolopment',
        description: 'I design and code mobile applications, leveraging programming languages like Java or Swift to create feature-rich and responsive experiences. I prioritize user-centric design and functionality.'
    }
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36' >
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-12 text-center mx-auto'>My Services</h2>
            {/* gird items */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {serviceData.map((item, index)=>{
                    return <Card className='w-full max-w-[420px] h-[300px] flex flex-col 
                    pt-16 pb-10 justify-center items-center relative' key={index}>
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background 
                            flex justify-center items-center'>{item.icon}</div>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='mb-4'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services