import arrow from '../assets/arrow.png';
import profile from '../assets/profile.jpg';
import cam from '../assets/camera.png';
import Navbar from '../layouts/Navbar';

export default function ProfilePage() {
    return (
        <div className='px-2 py-3'>
            <a href='/' className='sm:flex md:hidden'>
                <img src={arrow} alt="" className='w-6 h-6 rotate-180'/>
            </a>

            <div className='flex gap-2 text-white font-light flex-col relative justify-center items-center'>
                <div className='relative'>
                    <div className='rounded-full absolute right-0 bottom-0 p-2 bg-blue-600'>
                        <img src={cam} alt="" className='w-4 h-4' />                    
                    </div>
                    <img src={profile} alt="" className='w-32 h-32 rounded-full'/>
                </div>
                <span>Blue</span>
                <span>#6941613</span>
            </div>

            <div className='flex justify-center items-center text-white gap-4'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <span>4601</span>
                    <span>menit menonton</span>
                </div>                
                <div className='flex flex-col justify-center items-center text-center'>
                    <span>0</span>
                    <span>Jumlah Komentar</span>
                </div>                
                <div className='flex flex-col justify-center items-center text-center'>
                    <span>13</span>
                    <span>bulan bergabung</span>
                </div>                
                <div className='flex flex-col justify-center items-center text-center'>
                    <span>1</span>
                    <span>teman</span>
                </div>                
            </div>

            <Navbar />
        </div>        
    );
}