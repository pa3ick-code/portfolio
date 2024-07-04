import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectPinProps{
    title: string;
    des: string;
    img: string;
    iconLists?: string[];
}

export default function ProjectPin({title, des, img, iconLists}: ProjectPinProps) {
  return (
    <>
     <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 sm:w-[570px] w-[20rem]">
        <img 
        src={img}
        alt={img}
        className="flex flex-1 w-full rounded-lg mb-4"
        />

        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
        {title}
        </h3>

        <div className="text-sm !m-0 !p-0 font-normal">
        <span className="text-slate-500 ">
            {des}
        </span>
        </div>

        <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
                {iconLists?.map((icon, i) => (
                    <div key={icon} className='border border-white/[0.2] rounded-full w-8 h-8 flex items-center justify-center' style={{ transform: `translateX(-${5 * i * 2}px)`}}>
                        <img src={icon} alt={icon} className='p-2'/>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <p className="flex text-purple text-sm lg:text-sm md:text-xs">Check Live Site</p>
                <HiOutlineExternalLink  className='ms-3' color='#cbacf9' />
            </div>
        </div>
    </div> 
    </>
  );
}
