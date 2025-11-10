import React from 'react'

const ServiceCard = ({svg, title, description}:{svg: React.ReactNode; title: string; description: string;}) => {
  return (
    <div id='service-card' className='opacity-0 scale-50 w-[394px] bg-white p-5 rounded-xl shadow-sm flex items-start justify-between'>
        {svg}
        <div className="">
            <h6 className='text-[16px] text-black font-raleway font-semibold'>{title}</h6>
            <p className='text-[14px] text-[#333333] font-nunito-sans font-normal'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard