
const Services = () => {
  return (
    <section className="pt-[120px] pb-[60px] w-full h-fit bg-white flex flex-col items-center justify-center">
        <div className="w-[85%]">
            <p className="text-[20px] font-nunito-sans text-[#333333] text-center">Our services</p>
            <h3 className="text-[40px] font-raleway text-primary-purple text-center font-extrabold">What We Do</h3>
        </div>
        <div className="w-full mt-10 bg-primary-green flex items-center justify-center py-12">
            <div className="w-[85%] flex items-center justify-between">
                <div className="max-w-[600px]">
                    <h5 className="text-[32px] text-white font-raleway font-extrabold">Fund your Account, Make Transfers, Pay Bills</h5>
                    <p className="text-[22px] text-white font-nunito-sans font-normal">Live your life as you see fit. You can transfer money for free to other bank accounts by adding funds to your opay wallet. Take advantage of bonuses on data and airtime top-ups as well as free expedited bill payment.</p>
                </div>
                <div className="flex items-center jusify-center h-full relative">
                    <img className="w-[500px] z-20" src="/assets/images/services-img.png" alt="" />
                    <svg className="absolute top-[-50px] left-[-80px] z-10" width="180" height="137" viewBox="0 0 180 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90 -13.9326C123.137 -13.9326 150 12.9303 150 46.0674C150 79.2045 123.137 106.067 90 106.067C56.8629 106.067 30 79.2045 30 46.0674C30 12.9303 56.8629 -13.9326 90 -13.9326Z" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="70" stroke="#C4FFF6" stroke-width="20"/>
                    <circle cx="90" cy="46.0673" r="80" stroke="#C4FFF6" stroke-width="20"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services