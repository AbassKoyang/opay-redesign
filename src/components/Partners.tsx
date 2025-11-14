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
                start: "top center",
                toggleActions: "play pause resume pause",
              },
          });

        gsap.to(".partner-logo", {
            opacity: 1,
            scale: 1,
            ease: "power2.inOut", 
            duration: 1, 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#partners-con",
                start: "top bottom",
              },
          });

    }, [])

  return (
    <section  className="py-[60px] w-full h-fit bg-white flex flex-col items-center justify-center relative">    
        <div id='partners-con' className="w-[85%] z-20 flex items-center justify-center flex-col">
            <p className="text-[16px] lg:text-[20px] font-nunito-sans text-[#333333] text-center">Partner With</p>
        </div>
        <div className="w-full overflow-hidden mt-5">
            <div className='w-fit partners-track flex items-center gap-[50px] whitespace-nowrap'>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-50 hover:grayscale-0' src='/assets/images/world-remit.png'/></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-50 hover:grayscale-0' src='/assets/images/interswitch.png' /></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-50 hover:grayscale-0' src='/assets/images/guinness.png'/></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-50 hover:grayscale-0' src='/assets/images/world-remit.png'/></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-75 hover:grayscale-0' src='/assets/images/interswitch.png' /></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-75 hover:grayscale-0' src='/assets/images/guinness.png'/></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-75 hover:grayscale-0' src='/assets/images/world-remit.png'/></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-75 hover:grayscale-0' src='/assets/images/interswitch.png' /></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-50 hover:grayscale-0' src='/assets/images/guinness.png'/></div>
            <div className="size-[160px] flex items-center justify-center"><img className='partner-logo object-contain grayscale-100 opacity-0 scale-50 hover:grayscale-0' src='/assets/images/world-remit.png'/></div>
            </div>
        </div>
        </section>
  )
}

export default Partners