import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavBar = () => {
    useGSAP(() => {
        gsap.from('#inner-div', {
            y: -80,
            duration: 1,
            ease: 'power2.inOut'
        })
        gsap.from('#nav-cta', {
            x: 170,
            duration: 1,
            ease: 'power2.inOut',
            delay: 1
        })
    }, [])

  return (
    <header className='w-full flex items-center justify-center py-3 fixed top-0 left-0 z-100 overflow-hidden'>
        <div id='inner-div' className="w-full max-w-[85%] flex items-center justify-between py-2 px-4 lg:px-5 pl-2 bg-white shadow-sm rounded-[45px] overflow-hidden">
            <a id='logo' href="#">
                <img className='w-[100px] lg:w-fit' src="/assets/images/opay-logo.png" alt="Opay logo" />
            </a>
            <div className="flex items-center gap-10">
                <nav className='lg:block hidden'>
                    <ul className='flex items-center gap-5'>
                        <li id='nav-link' className='flex items-center justify-center'>
                            <a href="#" className='text-[16px] font-medium font-raleway text-black hover:text-primary-green duration-150 transition-all ease-in-out'>Personal</a>
                        </li>
                        <li id='nav-link' className='flex items-center justify-center'>
                            <a href="#" className='text-[16px] font-medium font-raleway text-black hover:text-primary-green duration-150 transition-all ease-in-out'>Business</a>
                        </li>
                        <li id='nav-link' className='flex items-center justify-center'>
                            <a href="#" className='text-[16px] font-medium font-raleway text-black hover:text-primary-green duration-150 transition-all ease-in-out'>Company</a>
                        </li>
                        <li id='nav-link' className='flex items-center justify-center'>
                            <a href="#" className='text-[16px] font-medium font-raleway text-black hover:text-primary-green duration-150 transition-all ease-in-out'>CSR</a>
                        </li>
                    </ul>
                </nav>

                <button id='nav-cta' className='px-4 py-2 rounded-[45px] bg-primary-green text-white text-[14px] lg:text-[16px] font-medium cursor-pointer hover:bg-primary-green/95'>Create account</button>
            </div>
        </div>
    </header>
  )
}

export default NavBar