import cover1 from '../assets/gachiakuta.png';
import cover2 from '../assets/kusuriya.jpg';
import cover3 from '../assets/DrStone.webp';
import view from '../assets/view2.png'; 
import star from '../assets/star.png';
import arrow from '../assets/arrow.png';
import Navbar from '../layouts/Navbar';

const animeList = [
    { id: 1, cover: cover1, time: '01.25', title: 'Gachiakuta', episode: 13, views: '995,0K', rating: 7.90, status: 'Sudah Tayang',         color: 'bg-yellow-400', textColor: 'text-yellow-400' },
    { id: 2, cover: cover2, time: '23.54', title: 'Kusuriya',   episode: 13, views: '995,0K', rating: 7.90, status: 'Menunggu Update Baru', color: 'bg-[#888888]',   textColor: 'text-[#888888]' },
    { id: 3, cover: cover3, time: '00.00', title: 'Dr. Stone Season 3', episode: 13, views: '995,0K', rating: 7.90, status: 'Telat / Libur / Tamat', color: 'bg-[#E03A37]', textColor: 'text-[#E03A37]' },
];

function Schedule() {
    return(
        <div className="flex gap-7 md:gap-14 justify-center items-center md:text-xl font-bold shadow-sm shadow-gray-400 py-5 text-gray-400">
            <div className="flex flex-col justify-center items-center">
                <span className="text-blue-600">Min</span>
                <span className="py-1 px-3 rounded-lg text-white font-extrabold bg-blue-600">5</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span>Sen</span>
                <span>6</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span>Sel</span>
                <span>7</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span>Rab</span>
                <span>8</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span>Kam</span>
                <span>9</span>
                <div className="mt-1 rounded-full bg-blue-600 w-1 h-1"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span>Jum</span>
                <span>10</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span>Sab</span>
                <span>11</span>
            </div>
        </div>        
    );
}

function ListAnime() {
    return(
        <div className='mt-4 px-2 flex flex-col gap-2'>
            {animeList.map(anime => (
                <div key={anime.id} className="flex text-white rounded-r-lg bg-[#1E1F24] overflow-hidden">
                    
                    {/* ← div warna: self-stretch agar full height */}
                    <div className={`w-1 self-stretch ${anime.color}`}></div>

                    <span className="flex items-center font-extrabold px-3 text-xl">{anime.time}</span>
                    <img src={anime.cover} alt="" className='w-20 h-28 object-cover rounded-lg' />
                    <div className='flex flex-col pl-2 py-2 justify-start overflow-hidden'>
                        <span className='text-xl truncate'>{anime.title}</span>
                        <span className='text-sm text-[#9D9EA0]'>Episode {anime.episode}</span>
                        <div className='flex gap-2'>
                            <div className='flex text-[#77787A] items-center gap-1 text-md'>
                                <img src={view} alt="" className='w-3 h-3' />
                                <span>{anime.views}</span>
                            </div>
                            <div className='flex text-[#77787A] items-center gap-1 text-md'>
                                <img src={star} alt="" className='w-3 h-3' />
                                <span>{anime.rating}</span>
                            </div>
                        </div>
                        <div className={`flex gap-1 text-sm items-center mt-2 ${anime.textColor}`}>
                            <div className={`${anime.color} rounded-full w-2 h-2`}></div>
                            {anime.status}
                        </div>
                    </div>
                </div>
            ))}
        </div>        
    );
}

function Pagination() {
    return(
        <div className='flex w-full fixed bottom-0 z-40 mb-14 justify-between items-center px-2 pb-8'>            
                <div className='flex items-center gap-1 justify-start rounded-3xl w-auto py-2 px-3 bg-black text-white'>
                    <img src={arrow} alt="" className='w-5 h-5 rotate-180'/>
                    Sabtu
                </div>
                        
                <div className='flex items-center gap-1 justify-end rounded-3xl w-auto py-2 px-3 bg-black text-white'>
                    Senin
                    <img src={arrow} alt="" className='w-5 h-5'/>
                </div>                    
        </div>
    );
}

export default function Schedule_Page() {
    return (
        <div className='bg-[#161719]'>
            <div className="flex w-full relative shadow-sm shadow-gray-400 justify-center items-center py-3">
                <span className="font-extrabold text-4xl text-white py-2">Jadwal Tayang</span>
            </div>
            <Schedule />
            <ListAnime />
            <Pagination />

            <Navbar />
        </div>
    );
}