const TestimonialCard = () => {
  return (
    <div id='testimonial-card' className='opacity-0 scale-75 w-full md:w-[304px] rounded-[8px] bg-[#F8F8F8] p-5 relative'>
        <div className="flex items-center justify-end gap-3">
            <div className="">
                <h6 className='text-[14px] font-semibold font-raleway text-[#333333]'>Abdulqudus Komolafe</h6>
                <p className='text-[14px] font-normal font-nunito-sans text-[#8F9AA0] text-end'>@qudus</p>
            </div>
            <img src="/assets/images/testimonial-avatar.png" alt="Profile avatar" />
        </div>
        <p className='text-[12px] font-normal font-nunito-sans text-[#333333] my-3'>Opay makes banking very easy for me Thay make all their transaction flow to be seamless. I give opay a solid 10/10.</p>
        <p className='text-[12px] font-normal font-nunito-sans text-[#333333] text-end italic'>15th Oct 2024</p>
        <div className="size-[20px] bg-[#1DC99B40] rounded-full absolute top-[20px] left-[20px] z-20"></div>
    </div>
  )
}

export default TestimonialCard