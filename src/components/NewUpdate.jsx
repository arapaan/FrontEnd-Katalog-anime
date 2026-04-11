import cover1 from '../assets/kusuriya.jpg';
import cover2 from '../assets/cover_history2.jpg';
import cover3 from '../assets/DrStone.webp';
import cover4 from '../assets/gachiakuta.png';
import cover5 from '../assets/sakamoto-days.jpg';
import cover6 from '../assets/tate.webp';
import star from '../assets/star.png';
import view from '../assets/view2.png';

const animes = [
    {name: 'Kusuriya no Hitorigoto', image: cover1, views: '895,0K', rating: 7.90, eps: 12},
    {name: 'Yuusha-kei ni Shosu', image: cover2, views: '1,2M', rating: 8.50, eps: 12},
    {name: 'Dr. Stone Season 4', image: cover3, views: '999,0K', rating: 8.00, eps: 12},
    {name: 'Gachiakuta', image: cover4, views: '995,0K', rating: 7.90, eps: 12},
    {name: 'Sakamoto Days', image: cover5, views: '975,0K', rating: 7.80, eps: 11},
    {name: 'Tate no Yuusha no Nariagari Season 2', image: cover6, views: '1,0M', rating: 8.23, eps: 12},
];

function AnimeList() {
    return(
        <>
            <div className='relative mt-5'>
                <div className='flex flex-wrap flex-col-span-3 justify-start gap-5'>
                    {animes.map(anime => (        
                    <div className="flex flex-col w-[114px] md:w-[180px] rounded-t-xl shrink-0 text-wrap overflow-hidden">
                        <div className='flex relative flex-col justify-between items-end h-40 md:h-56 w-full bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${anime.image})` }}>
                            <div className='flex absolute justify-between w-full'>
                                <span className='flex rounded-tl-xl rounded-br-xl px-2 md:text-2xl bg-blue-500 textwhite font-bold'>New</span>
                                <span className='flex items-center gap-1 px-2 md:text-2xl bg-black/80 rounded-bl-xl rounded-tr-xl'>
                                    <img src={star} alt="" className='md:w-4 w-3 md:h-4 h-3' />
                                    {anime.rating.toFixed(2)}
                                </span>
                            </div>
                            <span className='flex h-full rounded-b-lg items-end md:text-xl bg-gradient-to-b from-black/10 to-black w-full'>
                                <span className='px-2 py-2'>Eps {anime.eps}</span>
                            </span>
                        </div>  
                        <div className='flex gap-1 justify-start items-center'>
                            <img src={view} alt="" className='md:w-4 w-3 md:h-4 h-3'/>
                            <span className='text-xs md:text-xl'>{anime.views} views</span>
                        </div>                      
                        <span className='md:text-2xl truncate'>{anime.name}</span>
                    </div>                                                                 
                    ))}
                </div>                                
            </div>
        </>
    );
}

export default function NewUpdate() {    
    return(
        <div className="flex flex-col text-white justify-start">
            <div className="flex justify-between items-center w-full">
                <span className="flex flex-col text-2xl md:text-3xl"><span className="font-medium">New </span>Update Anime</span>
                <span className="text-blue-500 text-lg md:text-2xl font-medium">Lihat Jadwal!</span>
            </div>

            <AnimeList />
        </div>
    );
}