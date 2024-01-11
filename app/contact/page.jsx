import React from 'react'
import {MailIcon, HomeIcon, PhoneCall} from 'lucide-react'
import Form from '@/components/ui/comps/Form'

const Conctacts = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text and illustrations */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
          <span className='w-[30px] h-[2px] bg-primary'></span>
          Say Hello 👋
            </div>
            <h1 className='h1 max-w-md mb-8 '>Lets Work Together.</h1>
            <p className='subtitle max-w-[400px]'>Collaborating with me brings technical expertise, creative innovation, and efficient 
            project management, ensuring the seamless creation of cutting-edge websites.</p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark
           bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text and form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={20} className='text-primary'/>
              <div>kirilangelov21@gmail.com</div>
            </div>
            {/* adress */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={20} className='text-primary'/>
              <div>"Petar Raychev" 22</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={20} className='text-primary'/>
              <div>+359 8787 68 152</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Conctacts