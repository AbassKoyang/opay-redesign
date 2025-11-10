import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


const Partners = () => {
    useGSAP(() => {
        gsap.to(".partners-track", {
            xPercent: -50,      
            ease: "none", 
            duration: 20, 
            repeat: -1,
            scrollTrigger: {
                trigger: "#partners-con",
                start: "top bottom",
                toggleActions: "play pause resume pause",
              },
          });
    }, [])

  return (
    <section id='partners-con' className="py-[60px] w-full h-fit bg-white flex flex-col items-center justify-center relative">    
        <div className="w-[85%] z-20 flex items-center justify-center flex-col">
            <p className="text-[16px] lg:text-[20px] font-nunito-sans text-[#333333] text-center">Partner With</p>
        </div>
        <div className="w-full overflow-hidden mt-5">
            <div className='w-fit partners-track flex items-center gap-[30px] whitespace-nowrap'>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png'/></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png' /></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png'/></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png'/></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png' /></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png'/></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png' /></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png'/></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png'/></div>
            <div className="partner size-[200px] flex items-center justify-center"><img className='object-contain  grayscale-100 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-110' src='/assets/images/world-remit.png' /></div>
            </div>
        </div>
        </section>
  )
}

export default Partners