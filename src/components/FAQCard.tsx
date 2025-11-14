import { useState } from 'react'

const FAQCard = ({text}:{text: string}) => {
    const [isOpen, setisOpen] = useState(false);
  return (
    <div id='faq-card' className='bg-white w-full scale-50 opacity-0'>
        <div className="w-full py-3 flex items-center justify-between">
            <p className='text=[#333333] font-medium font-raleway text-[18px] lg:text-[30px] lg:max-w-fit max-w-[280px]'>{text}</p>
            <button onClick={() => setisOpen(!isOpen)} className='cursor-pointer flex items-center justify-center'>
                <svg className='w-[18px] h-[20px] lg:w-[30] lg:h-[32px]' viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.2383 12.4512V17.5488H0V12.4512H29.2383ZM17.3438 0V31.0547H11.9238V0H17.3438Z" fill="#1DC99B"/>
                </svg>
            </button>
        </div>
        <div className={`${isOpen ? 'h-[120px]' : 'h-0'} w-full overflow-hidden transition-all ease-in-out duration-200`}>
            <p className='text-[#333333] mt-2 font-normal font-nunito-sans text-[18px] lg:text-[24px] max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eligendi, incidunt similique, ipsam, minus laborum voluptate nam facere quasi pariatur aspernatur. Molestias et earum a voluptas doloremque numquam, necessitatibus cupiditate.</p>
        </div>
    </div>
  )
}

export default FAQCard