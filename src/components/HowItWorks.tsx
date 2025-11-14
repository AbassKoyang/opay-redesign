'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const HowItWorks = () => {
    useGSAP(() => {
        gsap.to('#guideline-texts', {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#how-it-works-con',
                start: 'top center'
            }
        })
    }, [])
  return (
    <section className="py-[60px] w-full h-fit bg-white flex flex-col items-center justify-center relative">    
        <div id='how-it-works-con' className="w-[85%] z-20 flex items-center justify-center flex-col">
            <p className="text-[16px] lg:text-[20px] font-nunito-sans text-[#333333] text-center">How it works</p>
        </div>
        <div  className="w-[85%] flex flex-col lg:flex-row items-center lg:justify-between rounded-2xl bg-[#EBEBEB] p-6 mt-10 lg:mt-20">
            <div className="w-full lg:w-[35%]">
                <h6 className="text-[#333333] text-[20px] lg:text-[24px] font-nunito-sans font-bold">Guideline:-</h6>
                <div id='guideline-texts' className="opacity-0 translate-y-[30px] mt-5 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal">Step 1:</p>
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal max-w-[300px]">Download the OPay app from the Google Play Store or iOS Store, or use the USSD code *955# to install it.</p>
                </div>
                <div id='guideline-texts' className="opacity-0 translate-y-[30px] mt-3 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal">Step 2:</p>
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal max-w-[300px]">Set up your wallet by providing your name and phone number.</p>
                </div>
                <div id='guideline-texts' className="opacity-0 translate-y-[30px] mt-3 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal">Step 3:</p>
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal max-w-[300px]">Add money to your wallet to start making transactions.</p>
                </div>
                <div id='guideline-texts' className="opacity-0 translate-y-[30px] mt-3 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal">Step 4:</p>
                    <p className="text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-normal max-w-[300px]">You can now send money, pay bills, or make purchases through the app.</p>
                </div>
                <p id='guideline-texts' className="opacity-0 translate-y-[20px] mt-4 text-[#333333] text-[14px] lg:text-[16px] font-nunito-sans font-bold">Make sure to double-check the app's features and terms for any updates.</p>
            </div>
            <div className="w-[1px] h-[220px] bg-[#33333333] hidden lg:block"></div>
            <div className="w-full lg:w-[55%] flex items-center justify-center mt-5 lg:mt-0">
                <div className="w-[700px] lg:p-5 rounded-[10px] border border-[#33333333] bg-white flex items-center justify-center">
                <iframe className="rounded-[12px] w-full h-[200px] lg:h-[315px]"src="https://www.youtube.com/embed/hOsFRC3ts3g?si=xzJgiz0jn1i9oHLm" title="YouTube video player" frameBorder={10} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks