import React from 'react'

const ServiceCard = ({imgUrl, title, description}:{imgUrl: string; title: string; description: string;}) => {
  return (
    <div id='service-card' className='opacity-0 scale-50 w-[394px] bg-white p-5 rounded-xl shadow-sm flex items-start gap-4'>
        <img src={imgUrl} alt="Card icon" />
        <div className="">
            <h6 className='text-[16px] text-black font-raleway font-semibold'>{title}</h6>
            <p className='text-[14px] text-[#333333] font-nunito-sans font-normal'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard