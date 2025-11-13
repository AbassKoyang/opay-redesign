import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Safety = () => {
    useGSAP(() => {
        gsap.set(".safety-svg", {visibility:"visible"});
        gsap.to('#safety-card', {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#safety-con',
            start: 'top center',
          }
        })
        gsap.to('#safety-img', {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#safety-con',
            start: 'top center',
          }
        })
        gsap.fromTo('.safety-svg',
          { drawSVG: "0% 0%" },
          {
            duration: 3,
            ease: 'power2.inOut',
            drawSVG: "0% 100%",
            scrollTrigger: {
              trigger: '#safety-con',
              start: 'top center',
            },
          }
        );
        
      }, [])

  return (
    <section id="safety-con" className="w-full py-[60px] flex items-center justify-center">
        <div className="w-[85%]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-[50%]">
                    <h3 className="text-[32px] lg:text-[40px] font-raleway text-primary-purple font-extrabold mb-5 max-w-[690px]">Your safety and confidentiality are our foremost concern.</h3>
                    <div id="safety-card" className="w-full lg:w-[546px] px-5 py-3 rounded-2xl bg-[#EBEBEB] shadow-xs opacity-0 scale-50">
                    <h6 className="text-[18px] lg:text-[20px] font-raleway text-primary-purple font-bold mb-1">Advanced Fraud Detection</h6>
                    <p className="text-[14px] lg:text-[16px] font-nunito-sans text-[#333333] font-normal">Security Product
                    Quick dial *955*131# or *955*132# to lock account or card if stolen or misplaced.</p>
                    </div>
                    <div id="safety-card" className="w-full lg:w-[546px] px-5 py-3 rounded-2xl bg-[#EBEBEB] shadow-xs opacity-0 scale-50 mt-3">
                    <h6 className="text-[18px] lg:text-[20px] font-raleway text-primary-purple font-bold mb-1">Security Product Safe Transactions</h6>
                    <p className="text-[14px] lg:text-[16px] font-nunito-sans text-[#333333] font-normal">We are compliant with PCI DSS. Your transactions are always encrypted and secured.</p>
                    </div>
                    <div id="safety-card" className="w-full lg:w-[546px] px-5 py-3 rounded-2xl bg-[#EBEBEB] shadow-xs opacity-0 scale-50 mt-3">
                    <h6 className="text-[18px] lg:text-[20px] font-raleway text-primary-purple font-bold mb-1">Security Product</h6>
                    <p className="text-[14px] lg:text-[16px] font-nunito-sans text-[#333333] font-normal">Your data is stored and encrypted using strong cryptography. We scan our systems daily against security threats.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
                    <img id="safety-img" className="opacity-0 scale-50 w-full lg:w-[500px]" src="/assets/images/shield.png" alt="Shield" />
                </div>
            </div>
        </div>
        <svg className='w-full absolute left-0 top-[50%] translate-y-[-50%] z-10' width="1486" height="534" viewBox="0 0 1486 534" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='safety-svg' d="M-29 533.075L143.956 491.115C252.497 464.783 365.675 464.056 474.545 488.993L537.618 503.44C622.31 522.839 710.662 519.089 793.406 492.586C878.16 465.438 968.757 462.176 1055.24 483.158L1085.58 490.516C1199.95 518.265 1319.99 511.481 1430.51 471.021L1485 451.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 520.075L143.956 478.115C252.497 451.783 365.675 451.056 474.545 475.993L537.618 490.44C622.31 509.839 710.662 506.089 793.406 479.586C878.16 452.438 968.757 449.176 1055.24 470.158L1085.58 477.516C1199.95 505.265 1319.99 498.481 1430.51 458.021L1485 438.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 488.075L143.956 446.115C252.497 419.783 365.675 419.056 474.545 443.993L537.618 458.44C622.31 477.839 710.662 474.089 793.406 447.586C878.16 420.438 968.757 417.176 1055.24 438.158L1085.58 445.516C1199.95 473.265 1319.99 466.481 1430.51 426.021L1485 406.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 475.075L143.956 433.115C252.497 406.783 365.675 406.056 474.545 430.993L537.618 445.44C622.31 464.839 710.662 461.089 793.406 434.586C878.16 407.438 968.757 404.176 1055.24 425.158L1085.58 432.516C1199.95 460.265 1319.99 453.481 1430.51 413.021L1485 393.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 526.075L143.956 484.115C252.497 457.783 365.675 457.056 474.545 481.993L537.618 496.44C622.31 515.839 710.662 512.089 793.406 485.586C878.16 458.438 968.757 455.176 1055.24 476.158L1085.58 483.516C1199.95 511.265 1319.99 504.481 1430.51 464.021L1485 444.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 513.075L143.956 471.115C252.497 444.783 365.675 444.056 474.545 468.993L537.618 483.44C622.31 502.839 710.662 499.089 793.406 472.586C878.16 445.438 968.757 442.176 1055.24 463.158L1085.58 470.516C1199.95 498.265 1319.99 491.481 1430.51 451.021L1485 431.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 481.075L143.956 439.115C252.497 412.783 365.675 412.056 474.545 436.993L537.618 451.44C622.31 470.839 710.662 467.089 793.406 440.586C878.16 413.438 968.757 410.176 1055.24 431.158L1085.58 438.516C1199.95 466.265 1319.99 459.481 1430.51 419.021L1485 399.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 468.075L143.956 426.115C252.497 399.783 365.675 399.056 474.545 423.993L537.618 438.44C622.31 457.839 710.662 454.089 793.406 427.586C878.16 400.438 968.757 397.176 1055.24 418.158L1085.58 425.516C1199.95 453.265 1319.99 446.481 1430.51 406.021L1485 386.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 405.075L143.956 363.115C252.497 336.783 365.675 336.056 474.545 360.993L537.618 375.44C622.31 394.839 710.662 391.089 793.406 364.586C878.16 337.438 968.757 334.176 1055.24 355.158L1085.58 362.516C1199.95 390.265 1319.99 383.481 1430.51 343.021L1485 323.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 392.075L143.956 350.115C252.497 323.783 365.675 323.056 474.545 347.993L537.618 362.44C622.31 381.839 710.662 378.089 793.406 351.586C878.16 324.438 968.757 321.176 1055.24 342.158L1085.58 349.516C1199.95 377.265 1319.99 370.481 1430.51 330.021L1485 310.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 360.075L143.956 318.115C252.497 291.783 365.675 291.056 474.545 315.993L537.618 330.44C622.31 349.839 710.662 346.089 793.406 319.586C878.16 292.438 968.757 289.176 1055.24 310.158L1085.58 317.516C1199.95 345.265 1319.99 338.481 1430.51 298.021L1485 278.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 347.075L143.956 305.115C252.497 278.783 365.675 278.056 474.545 302.993L537.618 317.44C622.31 336.839 710.662 333.089 793.406 306.586C878.16 279.438 968.757 276.176 1055.24 297.158L1085.58 304.516C1199.95 332.265 1319.99 325.481 1430.51 285.021L1485 265.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 398.075L143.956 356.115C252.497 329.783 365.675 329.056 474.545 353.993L537.618 368.44C622.31 387.839 710.662 384.089 793.406 357.586C878.16 330.438 968.757 327.176 1055.24 348.158L1085.58 355.516C1199.95 383.265 1319.99 376.481 1430.51 336.021L1485 316.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 385.075L143.956 343.115C252.497 316.783 365.675 316.056 474.545 340.993L537.618 355.44C622.31 374.839 710.662 371.089 793.406 344.586C878.16 317.438 968.757 314.176 1055.24 335.158L1085.58 342.516C1199.95 370.265 1319.99 363.481 1430.51 323.021L1485 303.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 353.075L143.956 311.115C252.497 284.783 365.675 284.056 474.545 308.993L537.618 323.44C622.31 342.839 710.662 339.089 793.406 312.586C878.16 285.438 968.757 282.176 1055.24 303.158L1085.58 310.516C1199.95 338.265 1319.99 331.481 1430.51 291.021L1485 271.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 340.075L143.956 298.115C252.497 271.783 365.675 271.056 474.545 295.993L537.618 310.44C622.31 329.839 710.662 326.089 793.406 299.586C878.16 272.438 968.757 269.176 1055.24 290.158L1085.58 297.516C1199.95 325.265 1319.99 318.481 1430.51 278.021L1485 258.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 276.075L143.956 234.115C252.497 207.783 365.675 207.056 474.545 231.993L537.618 246.44C622.31 265.839 710.662 262.089 793.406 235.586C878.16 208.438 968.757 205.176 1055.24 226.158L1085.58 233.516C1199.95 261.265 1319.99 254.481 1430.51 214.021L1485 194.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 263.075L143.956 221.115C252.497 194.783 365.675 194.056 474.545 218.993L537.618 233.44C622.31 252.839 710.662 249.089 793.406 222.586C878.16 195.438 968.757 192.176 1055.24 213.158L1085.58 220.516C1199.95 248.265 1319.99 241.481 1430.51 201.021L1485 181.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 231.075L143.956 189.115C252.497 162.783 365.675 162.056 474.545 186.993L537.618 201.44C622.31 220.839 710.662 217.089 793.406 190.586C878.16 163.438 968.757 160.176 1055.24 181.158L1085.58 188.516C1199.95 216.265 1319.99 209.481 1430.51 169.021L1485 149.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 218.075L143.956 176.115C252.497 149.783 365.675 149.056 474.545 173.993L537.618 188.44C622.31 207.839 710.662 204.089 793.406 177.586C878.16 150.438 968.757 147.176 1055.24 168.158L1085.58 175.516C1199.95 203.265 1319.99 196.481 1430.51 156.021L1485 136.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 269.075L143.956 227.115C252.497 200.783 365.675 200.056 474.545 224.993L537.618 239.44C622.31 258.839 710.662 255.089 793.406 228.586C878.16 201.438 968.757 198.176 1055.24 219.158L1085.58 226.516C1199.95 254.265 1319.99 247.481 1430.51 207.021L1485 187.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 256.075L143.956 214.115C252.497 187.783 365.675 187.056 474.545 211.993L537.618 226.44C622.31 245.839 710.662 242.089 793.406 215.586C878.16 188.438 968.757 185.176 1055.24 206.158L1085.58 213.516C1199.95 241.265 1319.99 234.481 1430.51 194.021L1485 174.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 224.075L143.956 182.115C252.497 155.783 365.675 155.056 474.545 179.993L537.618 194.44C622.31 213.839 710.662 210.089 793.406 183.586C878.16 156.438 968.757 153.176 1055.24 174.158L1085.58 181.516C1199.95 209.265 1319.99 202.481 1430.51 162.021L1485 142.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 211.075L143.956 169.115C252.497 142.783 365.675 142.056 474.545 166.993L537.618 181.44C622.31 200.839 710.662 197.089 793.406 170.586C878.16 143.438 968.757 140.176 1055.24 161.158L1085.58 168.516C1199.95 196.265 1319.99 189.481 1430.51 149.021L1485 129.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 147.075L143.956 105.115C252.497 78.7829 365.675 78.0563 474.545 102.993L537.618 117.44C622.31 136.839 710.662 133.089 793.406 106.586C878.16 79.4378 968.757 76.1757 1055.24 97.1578L1085.58 104.516C1199.95 132.265 1319.99 125.481 1430.51 85.0213L1485 65.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 134.075L143.956 92.1153C252.497 65.7829 365.675 65.0563 474.545 89.993L537.618 104.44C622.31 123.839 710.662 120.089 793.406 93.5855C878.16 66.4378 968.757 63.1757 1055.24 84.1578L1085.58 91.5163C1199.95 119.265 1319.99 112.481 1430.51 72.0213L1485 52.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 102.075L143.956 60.1153C252.497 33.7829 365.675 33.0563 474.545 57.993L537.618 72.4401C622.31 91.8388 710.662 88.0895 793.406 61.5855C878.16 34.4378 968.757 31.1757 1055.24 52.1578L1085.58 59.5163C1199.95 87.2647 1319.99 80.4805 1430.51 40.0213L1485 20.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 89.075L143.956 47.1153C252.497 20.7829 365.675 20.0563 474.545 44.993L537.618 59.4401C622.31 78.8388 710.662 75.0895 793.406 48.5855C878.16 21.4378 968.757 18.1757 1055.24 39.1578L1085.58 46.5163C1199.95 74.2647 1319.99 67.4805 1430.51 27.0213L1485 7.07495" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 140.075L143.956 98.1153C252.497 71.7829 365.675 71.0563 474.545 95.993L537.618 110.44C622.31 129.839 710.662 126.089 793.406 99.5855C878.16 72.4378 968.757 69.1757 1055.24 90.1578L1085.58 97.5163C1199.95 125.265 1319.99 118.481 1430.51 78.0213L1485 58.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 127.075L143.956 85.1153C252.497 58.7829 365.675 58.0563 474.545 82.993L537.618 97.4401C622.31 116.839 710.662 113.089 793.406 86.5855C878.16 59.4378 968.757 56.1757 1055.24 77.1578L1085.58 84.5163C1199.95 112.265 1319.99 105.481 1430.51 65.0213L1485 45.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 95.075L143.956 53.1153C252.497 26.7829 365.675 26.0563 474.545 50.993L537.618 65.4401C622.31 84.8388 710.662 81.0895 793.406 54.5855C878.16 27.4378 968.757 24.1757 1055.24 45.1578L1085.58 52.5163C1199.95 80.2647 1319.99 73.4805 1430.51 33.0213L1485 13.075" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        <path className='safety-svg' d="M-29 82.075L143.956 40.1153C252.497 13.7829 365.675 13.0563 474.545 37.993L537.618 52.4401C622.31 71.8388 710.662 68.0895 793.406 41.5855C878.16 14.4378 968.757 11.1757 1055.24 32.1578L1085.58 39.5163C1199.95 67.2647 1319.99 60.4805 1430.51 20.0213L1485 0.0749512" stroke="#1DC99B" stroke-opacity="0.6" stroke-width="0.15" stroke-linecap="round"/>
        </svg>
    </section>
  )
}

export default Safety