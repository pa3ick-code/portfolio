'use client'
import Link from "next/link";
import { MagicButton } from './ui';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-10 bg-grid-slate-400/5 " id='contact'>
      {/* <div className='w-full absolute left-0 -bottom-72 min-h-80'>
        <img src="/footer-grid.svg" alt="footer img" className='w-full h-full opacity-50 object-contain' />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Ready to take Your <span className="text-purple">digital presence </span> to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Get in touch with me today and let&apos;s talk about how I can help you achieve your objectives!</p>
        <a href="mailto:patrickasubiaro@gmail.com">
            <MagicButton 
                text='Get in touch'
                iconPosition='right'
                icon={<FaLocationArrow/>}
            />
        </a>
      </div>
      <div className='flex flex-col md:flex-row mt-10 justify-center items-center'>
        <p className='text-sm font-light md:text-base md:font-normal'>
            Copyright &copy; {new Date().getFullYear()} Patrickfidel.com
        </p>
      </div>
      <div className='flex items-center justify-center gap-6 md:gap-3'>
        {socialMedia.map(({id, img, link})=>(
            <Link 
                href={link}
                key={id} 
                className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-black-200 bg-opacity-75 border border-black-300 rounded-lg mt-5'
            >
                <img src={img} alt={img} width={20} height={20}/>
            </Link>
        ))}
      </div>
    </footer>
  );
}
