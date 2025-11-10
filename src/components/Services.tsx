import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import ServiceCard from "./ServiceCard";

const Services = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services-con',
                start: 'top center'
            }
        });
        textTl.to('#services-text', {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            stagger: 0.2
        })
        textTl.to('#circle', {
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            stagger: 0.2
        })
        gsap.to('#services-img', {
            scale: 1,
            opacity: 0.7,
            ease: 'power2.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '#services-con',
                start: 'top center'
            }
        })
        gsap.to('#debit-cards-texts', {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#debit-cards-con',
                start: 'top center'
            }
        })
        gsap.to('#debit-cards-img', {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 0.7,
            scrollTrigger: {
                trigger: '#debit-cards-con',
                start: 'top center'
            }
        })

        const owealthTextTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#owealth-con',
                start: 'top center'
            }
        });
        owealthTextTl.to('#owealth-text', {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            stagger: 0.2
        })
        owealthTextTl.to('#owealth-circle', {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2
        })
        gsap.to('#owealth-img', {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 0.7,
            scrollTrigger: {
                trigger: '#owealth-con',
                start: 'top center'
            }
        })
        gsap.to('#service-card', {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 0.7,
            scrollTrigger: {
                trigger: '#service-cards-con',
                start: 'top center',
            },
            stagger: 0.2
        })
    }, [])

  return (
    <section className="pt-[120px] pb-[60px] w-full h-fit bg-white flex flex-col items-center justify-center">
        <div className="w-[85%]">
            <p className="text-[20px] font-nunito-sans text-[#333333] text-center">Our services</p>
            <h3 className="text-[40px] font-raleway text-primary-purple text-center font-extrabold">What We Do</h3>
        </div>
        <div id="services-con" className="w-full mt-10 bg-primary-green flex items-center justify-center py-12 relative">
            <div className="w-[85%] flex flex-col lg:flex-row gap-10 items-center justify-between">
                <div className="max-w-[550px] z-20">
                    <h5 id="services-text" className="opacity-0 translate-y-[50px] text-[28px] lg:text-[32px] text-white font-raleway font-extrabold">Fund your Account, Make Transfers, Pay Bills</h5>
                    <p id="services-text" className="opacity-0 translate-y-[50px] text-[18px] lg:text-[22px] text-white font-nunito-sans font-normal">Live your life as you see fit. You can transfer money for free to other bank accounts by adding funds to your opay wallet. Take advantage of bonuses on data and airtime top-ups as well as free expedited bill payment.</p>
                </div>
                <div className="flex items-center jusify-center h-full relative">
                    <img id="services-img" className="w-full lg:w-[500px] z-20 scale-75 opacity-0" src="/assets/images/services-img.png" alt="Opay app" />
                    <svg id="circle" className="opacity-0 absolute top-[-20px] lg:top-[-50px] left-[-50px]  lg:left-[-80px] rotate-[270deg] lg:rotate-0 z-10 w-[100px] h-[100px] lg:w-[180px] lg:h-[137px]" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                    <svg id="circle" className="opacity-0 absolute bottom-[-50px] left-[50%] translate-x-[-50%] w-[100px] h-[100px] z-10 lg:w-[180px] lg:h-[137px]" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                </div>
            </div>
            <svg id="circle" className="opacity-0 absolute top-0 right-0 size-[100px] lg:w-[152px] lg:h-[122px]" viewBox="0 0 152 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 -28.0001C123.137 -28.0001 150 -1.13721 150 31.9999C150 65.137 123.137 91.9999 90 91.9999C56.8629 91.9999 30 65.137 30 31.9999C30 -1.13721 56.8629 -28.0001 90 -28.0001Z" stroke="#C4FFF6" stroke-width="20"/>
            <circle cx="90" cy="31.9998" r="70" stroke="#C4FFF6" stroke-width="20"/>
            <circle cx="90" cy="32" r="80" stroke="#C4FFF6" stroke-width="20"/>
            </svg>
        </div>


        <div id="debit-cards-con" className="w-full bg-white flex items-center justify-center py-12 relative">
            <div className="w-[85%] flex flex-col lg:flex-row lg:flex-row-reverse gap-10 items-center justify-between">
                <div className="max-w-[550px] z-20">
                    <h5 id="debit-cards-texts" className="opacity-0 translate-y-[50px] text-[28px] lg:text-[32px] text-primary-green font-raleway font-extrabold">OPay Debit Cards: Your Global Passport</h5>
                    <p id="debit-cards-texts" className="opacity-0 translate-y-[50px] text-[18px] lg:text-[22px] text-[#333333] font-nunito-sans font-normal">Obtain your OPay Debit card immediately at a few OPay agent locations or apply online to take advantage of 10 free ATM withdrawals per month and no card maintenance costs. Any ATM, POS, and online accept the OPay debit card.</p>
                </div>
                <div className="flex items-center jusify-center h-full relative">
                    <img id="debit-cards-img" className="w-full lg:w-[500px] z-20 scale-75 opacity-0" src="/assets/images/debit-cards.png" alt="Debit cards" />
                </div>
            </div>
        </div>

        <div id="owealth-con" className="w-full mt-10 bg-primary-green flex items-center justify-center py-12 relative">
            <div className="w-[85%] flex flex-col lg:flex-row gap-10 items-center justify-between">
                <div className="max-w-[550px] z-20">
                    <h5 id="owealth-text" className="opacity-0 translate-y-[50px] text-[28px] lg:text-[32px] text-white font-raleway font-extrabold">Owealth</h5>
                    <p id="owealth-text" className="opacity-0 translate-y-[50px] text-[18px] lg:text-[22px] text-white font-nunito-sans font-normal">With Owealth, you have complete access to and control over your money in addition to earning fantastic daily interest. Transact whenever you want without losing interest!</p>
                    <p id="owealth-text" className="opacity-0 translate-y-[50px] text-[18px] lg:text-[22px] text-white font-nunito-sans font-normal mt-2">With support from BlueRidge Microfinance Bank</p>
                </div>
                <div className="flex items-center jusify-center h-full relative">
                    <img id="owealth-img" className="w-full lg:w-[500px] z-20 scale-75 opacity-0" src="/assets/images/owealth-img.png" alt="Opay app" />
                    <svg id="owealth-circle" className="opacity-0 absolute top-[-20px] lg:top-[-50px] left-[-50px]  lg:left-[-80px] rotate-[270deg] lg:rotate-0 z-10 w-[100px] h-[100px] lg:w-[180px] lg:h-[137px]" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                    <svg id="owealth-circle" className="opacity-0 absolute bottom-[-50px] left-[50%] translate-x-[-50%] w-[100px] h-[100px] z-10 lg:w-[180px] lg:h-[137px]" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                </div>
            </div>
            <svg id="owealth-circle" className="opacity-0 absolute top-0 right-0 size-[100px] lg:w-[152px] lg:h-[122px]" viewBox="0 0 152 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 -28.0001C123.137 -28.0001 150 -1.13721 150 31.9999C150 65.137 123.137 91.9999 90 91.9999C56.8629 91.9999 30 65.137 30 31.9999C30 -1.13721 56.8629 -28.0001 90 -28.0001Z" stroke="#C4FFF6" stroke-width="20"/>
            <circle cx="90" cy="31.9998" r="70" stroke="#C4FFF6" stroke-width="20"/>
            <circle cx="90" cy="32" r="80" stroke="#C4FFF6" stroke-width="20"/>
            </svg>
        </div>
        <div id="service-cards-con" className="w-full h-dvh flex items-center justify-center">
            <div className="w-[80%] py-20 px-12 bg-[#C4C4C480] shadow-md rounded-[20px] flex items-center justify-center gap-5 flex-wrap">
                <ServiceCard svg title="Get Opay Card with pickup / delivery options." description="We’ll send it to your preferred location." />
                <ServiceCard svg title="Bill Payment" description="Pay for electricity, wastebill, TV Subscription, .e.t.c." />
                <ServiceCard svg title="Enjoy Seamless Transactions" description="Make business transactions, money transfer and borrow from friends." />
                <ServiceCard svg title="Virtual Card" description="Apply for virtual card and start using it for payment." />
                <ServiceCard svg title="Savings Settings" description="Safelock and Auto-Investment Option." />
            </div>
        </div>
    </section>
  )
}

export default Services