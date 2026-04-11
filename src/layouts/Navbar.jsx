import { useState } from 'react';
import home from '../assets/home.png';
import calender from '../assets/calendar-date.png';
import history from '../assets/clock.png';
import subscribe from '../assets/subscribe.png';
import account from '../assets/account.png';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { icon: home, title: 'Home', path: '/' },
    { icon: calender, title: 'Jadwal', path: '/schedule' },
    { icon: history, title: 'History', path: '/history' },
    // { icon: subscribe, title: 'Subscribe', path: '' },
    { icon: account, title: 'Profile', path: '/profile' },
];

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='flex z-50 items-end justify-center max-h-20 py-5 px-5 fixed bottom-0 bg-[#161719] w-full gap-10'>
            {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                    <button
                        key={index}
                        onClick={() => navigate(item.path)}
                        className='flex flex-col items-center gap-1'
                    >
                        <div className={`p-2 md:p-4 rounded-full transition-all duration-200 
                            ${isActive ? 'bg-blue-600/30' : ''
                        }`}>
                            <img 
                                src={item.icon} 
                                alt={item.title} 
                                className={`w-5 h-5 md:w-8 md:h-8 transition-all duration-200 ${
                                    isActive ? 'brightness-200' : 'opacity-50'
                                }`} 
                            />
                        </div>

                        {isActive && (
                            <span className='text-blue-400 text-xs md:text-xl font-medium'>
                                {item.title}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}