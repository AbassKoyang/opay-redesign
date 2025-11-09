import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

const Services = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services-con',
                start: 'center center'
            }
        });
        textTl.to('#services-text', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2
        })
        textTl.to('#circle', {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2
        })
        gsap.to('#services-img', {
            scale: 1,
            ease: 'power2.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '#services-con',
                start: 'center center'
            }
        })
    }, [])

  return (
    <section id="services-con" className="pt-[120px] pb-[60px] w-full h-fit bg-white flex flex-col items-center justify-center">
        <div className="w-[85%]">
            <p className="text-[20px] font-nunito-sans text-[#333333] text-center">Our services</p>
            <h3 className="text-[40px] font-raleway text-primary-purple text-center font-extrabold">What We Do</h3>
        </div>
        <div className="w-full mt-10 bg-primary-green flex items-center justify-center py-12 relative">
            <div className="w-[85%] flex items-center justify-between">
                <div className="max-w-[600px]">
                    <h5 id="services-text" className="opacity-0 translate-y-[50px] text-[32px] text-white font-raleway font-extrabold">Fund your Account, Make Transfers, Pay Bills</h5>
                    <p id="services-text" className="opacity-0 translate-y-[50px] text-[22px] text-white font-nunito-sans font-normal">Live your life as you see fit. You can transfer money for free to other bank accounts by adding funds to your opay wallet. Take advantage of bonuses on data and airtime top-ups as well as free expedited bill payment.</p>
                </div>
                <div className="flex items-center jusify-center h-full relative">
                    <img id="services-img" className="w-[500px] z-20 scale-75" src="/assets/images/services-img.png" alt="" />
                    <svg id="circle" className="opacity-0 absolute top-[-50px] left-[-80px] z-10" width="180" height="137" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                    <svg id="circle" className="opacity-0 absolute bottom-[-50px] left-[50%] translate-x-[-50%] z-10" width="180" height="137" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                </div>
            </div>
            <svg id="circle" className="opacity-0 absolute top-0 right-0" width="152" height="122" viewBox="0 0 152 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 -28.0001C123.137 -28.0001 150 -1.13721 150 31.9999C150 65.137 123.137 91.9999 90 91.9999C56.8629 91.9999 30 65.137 30 31.9999C30 -1.13721 56.8629 -28.0001 90 -28.0001Z" stroke="#C4FFF6" stroke-width="20"/>
            <circle cx="90" cy="31.9998" r="70" stroke="#C4FFF6" stroke-width="20"/>
            <circle cx="90" cy="32" r="80" stroke="#C4FFF6" stroke-width="20"/>
            </svg>
        </div>
    </section>
  )
}

export default Services