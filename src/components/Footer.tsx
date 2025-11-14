import { Copyright, Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full px-16 pt-16 mt-[60px] bg-[#333333]">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between bg-[#333333] gap-8 lg:gap-0">
        <div className="">
            <h6 className="text-[20px lg:text-[24px] font-bold text-white font-raleway">Contact Info</h6>
            <div className="flex items-center gap-5 mt-10">
                <div className="size-[40px] lg:size-[50px] bg-white flex items-center justify-center rounded-full">
                    <Mail className="text-primary-green" />
                </div>
                <p className="text-[20px] lg:text-[24px] font-normal text-white font-nunito-sans">ng-support@opay-inc.com</p>
            </div>
            <div className="flex items-center gap-5 mt-8">
                <div className="size-[40px] lg:size-[50px] bg-white flex items-center justify-center rounded-full">
                    <Phone className="text-primary-green" />
                </div>
                <p className="text-[20px] lg:text-[24px] font-normal text-white font-nunito-sans">0700 888 8328, 0700 888 8328</p>
            </div>
        </div>
        <div className="">
            <h6 className="text-[20px] lg:text-[24px] font-bold text-white">Legal Links</h6>
           <p className="text-[14px] lg:text-[18px] font-nunito-sans text-white font-medium mt-10">Privacy Policy</p>
           <p className="text-[14px] lg:text-[18px] font-nunito-sans text-white font-medium mt-3">Terms of Service</p>
           <p className="text-[14px] lg:text-[18px] font-nunito-sans text-white font-medium mt-3">Documentations</p>
           <p className="text-[14px] lg:text-[18px] font-nunito-sans text-white font-medium mt-3">Security Policy</p>
        </div>
        <div className="">
            <h6 className="text-[20px lg:text-[24px]  font-bold text-white">Download App on:</h6>
            <div className="flex items-center justify-center gap-2 mt-5">
                <button className="px-3 py-2 bg-black text-white rounded-lg font-raleway flex items-center gap-2.5 cursor-pointer">
                <svg className='w-[20px] h-[26px]'viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4491 2.95864C17.7058 0.0143539 20.8431 0 20.8431 0C20.8431 0 21.3097 2.76813 19.0679 5.43473C16.6741 8.28206 13.9532 7.81614 13.9532 7.81614C13.9532 7.81614 13.4423 5.57682 15.4491 2.95864ZM14.2402 9.75521C15.4012 9.75521 17.5558 8.17549 20.3604 8.17549C25.1881 8.17549 27.0873 11.5759 27.0873 11.5759C27.0873 11.5759 23.3728 13.4558 23.3728 18.0174C23.3728 23.1632 28 24.9366 28 24.9366C28 24.9366 24.7654 33.9487 20.3964 33.9487C18.3897 33.9487 16.8296 32.6101 14.7153 32.6101C12.5606 32.6101 10.4224 33.9986 9.02982 33.9986C5.04023 33.9987 0 25.4498 0 18.5779C0 11.8169 4.26623 8.27022 8.26777 8.27022C10.8691 8.27022 12.8878 9.75521 14.2402 9.75521Z" fill="white"/>
                </svg>
                <div className="text-white font-raleway">
                    <p className="text-[6px] lg:text-[8px] text-start">Download on the</p>
                    <p className="text-[12px] lg:text-[14px] text-start">App Store</p>
                </div>
                </button>
                <button className="px-3 py-2 bg-black text-white rounded-lg font-raleway flex items-center gap-2.5 cursor-pointer">
                <svg className='w-[20px] h-[26px]' viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_13_944)">
                <path d="M15.387 8.38238L0.90565 0.105653C0.723679 -7.36862e-06 0.494748 0.00586265 0.318648 0.111523C0.136677 0.217183 0.0251465 0.405024 0.0251465 0.616345C0.0251465 0.616345 0.0310165 1.37945 0.0368865 2.63563L10.5853 13.1841L15.387 8.38238Z" fill="url(#paint0_linear_13_944)"/>
                <path d="M0.0368652 2.63564C0.0544753 7.16729 0.107305 18.1677 0.130786 23.6444L10.5912 13.1841L0.0368652 2.63564Z" fill="url(#paint1_linear_13_944)"/>
                <path d="M23.6754 13.1195L15.3869 8.38239L10.5793 13.1841L16.0032 18.608L23.6812 14.135C23.8632 14.0293 23.9747 13.8356 23.9747 13.6302C23.9747 13.4189 23.8573 13.2252 23.6754 13.1195Z" fill="url(#paint2_linear_13_944)"/>
                <path d="M0.125 23.6444C0.13674 25.5991 0.14261 26.8495 0.14261 26.8495C0.14261 27.0608 0.25414 27.2545 0.436111 27.3543C0.618082 27.4599 0.841142 27.4599 1.02311 27.3543L16.0093 18.6138L10.5854 13.1899L0.125 23.6444Z" fill="url(#paint3_linear_13_944)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_13_944" x1="0.0251465" y1="6.60928" x2="15.3897" y2="6.60928" gradientUnits="userSpaceOnUse">
                <stop stop-color="#63BE6B"/>
                <stop offset="0.506" stop-color="#5BBC6A"/>
                <stop offset="1" stop-color="#4AB96A"/>
                </linearGradient>
                <linearGradient id="paint1_linear_13_944" x1="0.0340476" y1="13.1426" x2="10.5851" y2="13.1426" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3EC6F2"/>
                <stop offset="1" stop-color="#45AFE3"/>
                </linearGradient>
                <linearGradient id="paint2_linear_13_944" x1="10.585" y1="13.4989" x2="23.9733" y2="13.4989" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FAA51A"/>
                <stop offset="0.387" stop-color="#FAB716"/>
                <stop offset="0.741" stop-color="#FAC412"/>
                <stop offset="1" stop-color="#FAC80F"/>
                </linearGradient>
                <linearGradient id="paint3_linear_13_944" x1="0.127583" y1="20.3115" x2="16.009" y2="20.3115" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EC3B50"/>
                <stop offset="1" stop-color="#E7515B"/>
                </linearGradient>
                <clipPath id="clip0_13_944">
                <rect width="24" height="27.46" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <div className="text-white font-raleway">
                    <p className="text-[6px] lg:text-[8px] text-start">Android app on</p>
                    <p className="text-[12px] lg:text-[14px] text-start">Google Play</p>
                </div>
                </button>
            </div>
            <h6 className="text-[20px lg:text-[24px]  font-semibold text-white mt-8">Social handles:</h6>
            <div className="flex items-center gap-4 mt-5">
                <button className="group cursor-pointer">
                    <Facebook className="group-hover:text-primary-green text-white transition-all duration-200 ease-in-out" />
                </button>
                <button className="group cursor-pointer">
                    <Twitter className="group-hover:text-primary-green text-white transition-all duration-200 ease-in-out" />
                </button>
                <button className="group cursor-pointer">
                <Linkedin className="group-hover:text-primary-green text-white transition-all duration-200 ease-in-out" />
                </button>
                <button className="group cursor-pointer">
                    <Youtube  className="group-hover:text-primary-green text-white transition-all duration-200 ease-in-out" />
                </button>
                <button className="group cursor-pointer">
                    <Instagram className="group-hover:text-primary-green text-white transition-all duration-200 ease-in-out" />
                </button>
            </div>
        </div>
        </div>
        <div className="w-full flex items-center justify-center gap-1 pt-4 pb-2 border-t border-gray-500 mt-16">
             <Copyright className="text-white" />
            <p className="text-white font-nunito-sans font-normal text-[14px] lg:text-[18px]">2112023 OPay Digital Services Limited.</p>
        </div>
    </footer>
  )
}

export default Footer