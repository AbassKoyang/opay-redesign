
const Download = () => {
  return (
    <section className="min-h-[100vh] w-full py-[60px] flex items-center justify-center relative">
    <div className="w-[85%] flex flex-col lg:flex-row lg:items-start justify-between gap-[10%]">
        <div className="flex flex-col justify-end relative">
            <div className="z-20 absolute bottom-[20px] left-[50%] translate-x-[-50%]">
                <img src="/assets/images/phone.png" alt="Phone" />
            </div>
            <img className="z-10 w-full lg:w-fit" src="/assets/images/phone-circle.png" alt="Phone Circle" />
        </div>
        <div className="w-full g:w-[70%] mt-4 lg:mt-0">
            <h4 className="text-[28px] lg:text-[35px] font-raleway text-primary-purple font-extrabold mb-8 max-w-[690px]">Download the app and start your journey to stress-free payments now
            </h4>
            <div className="w-full flex items-center lg:items-end justify-center gap-3 lg:gap-5">
                <img className="w-[100px] lg:w-fit" src="/assets/images/qr-code.png" alt="" />
                <div className="lg: max-w-[450px]">
                    <p className="text-[16px] lg:text-[20px] font-nunito-sans text-[#4E4B4E] font-medium mb-3 lg:mb-5">Use your phones camera to scan and download the Opay app</p>
                    <p className="text-[12px] lg:text-[16px] font-nunito-sans text-[#4E4B4E] font-extrabold lg:mb-4">Available on <span className="text-primary-green">IOS</span> and <span className="text-primary-green">Android</span></p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Download