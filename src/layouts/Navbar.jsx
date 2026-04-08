import { useState } from 'react';
import home from '../assets/home.png';
import calender from '../assets/calendar-date.png';
import history from '../assets/clock.png';
import subscribe from '../assets/subscribe.png';
import account from '../assets/account.png';

const navItems = [
    { icon: home, title: 'Home', path: '', class: 'w-8 h-8' },
    { icon: calender, title: 'Jadwal', path: '', class: 'w-9 h-9' },
    { icon: history, title: 'History', path: '', class: 'w-8 h-8' },
    { icon: subscribe, title: 'Subscribe', path: '', class: 'w-8 h-8' },
    { icon: account, title: 'Profile', path: '', class: 'w-8 h-8' },
];

export default function Navbar() {
    const [datas, setDatas] = useState(navItems); 

    return (
        <div className="flex z-50 items-end justify-center py-5 px-5 fixed bottom-0 bg-[#161719] w-full gap-10">
            {datas?.map((data, index) => (
                <a key={index}>
                    <img src={data.icon} alt={data.title} className={data.class}/>
                </a>
            ))}
        </div>
    );
}