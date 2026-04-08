import bell from '../assets/notification.png';
import profile from '../assets/profile.jpg';

export default function Header() {
    return (
        <div className="flex gap-2 justify-end items-center px-5">
            <div className='flex text-sm text-right flex-col text-white'>
                <span className='font-bold'>Blue</span>
                <span>#6941613</span>
            </div>

            <div className='relative'>
                <img src={profile} alt="profile" className='w-8 h-8 rounded-full object-cover ring-2 ring-violet-500' />
                <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]'/>
            </div>
            
            <div className='relative rounded-full text-white bg-[#212224] p-2'>
                <div className='absolute -top-1 -right-1 flex justify-center items-center text-xs font-bold rounded-full bg-red-600 w-5 h-5 z-10'>
                    30
                </div>
                <img src={bell} alt="" className='w-6 h-6' />
            </div>            
        </div>        
    );
}