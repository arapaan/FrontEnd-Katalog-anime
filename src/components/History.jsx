import history1 from '../assets/kusuriya.jpg';
import history2 from '../assets/cosmic.jpg';
import history3 from '../assets/cover_history2.jpg';
import history4 from '../assets/DrStone.webp';
import history5 from '../assets/gachiakuta.png';
import history6 from '../assets/sakamoto-days.jpg';
import history7 from '../assets/tate.webp'; 


const animes = [
    {name: 'Kusuriya no Hitorigoto', image: history1, views: '895,0K', rating: 7.90, eps: 12, progress: 75},
    {name: 'Cosmic princess Kaguya!', image: history2, views: '895,0K', rating: 7.90, eps: 12, progress: 40},
    {name: 'Yuusha-kei ni Shosu', image: history3, views: '1,2M', rating: 8.50, eps: 12, progress: 50},
    {name: 'Dr. Stone Season 4', image: history4, views: '999,0K', rating: 8.00, eps: 12, progress: 100},
    {name: 'Gachiakuta', image: history5, views: '995,0K', rating: 7.90, eps: 12, progress:100},
    {name: 'Sakamoto Days', image: history6, views: '975,0K', rating: 7.80, eps: 11, progress: 1},
    {name: 'Tate no Yuusha no Nariagari Season 2', image: history7, views: '1,0M', rating: 8.23, eps: 12, progress: 99},
];

function AnimeList() {
    return (
        <>
        <div className='relative mt-5'>
            <div className='flex flex-nowrap gap-5 overflow-x-auto'>
                {animes.map(anime => (   
                    <div className="flex flex-col w-40 rounded-t-xl shrink-0 text-wrap">
                        <div className='h-16 bg-cover bg-center rounded-t-xl' style={{ backgroundImage: `url(${anime.image})` }}>
                            <span className='flex h-full items-end bg-gradient-to-b from-black/10 to-black/80 w-full'>
                                <span className='px-2 py-2'>Eps {anime.eps}</span>
                            </span>
                        </div>
                        <div className='relative w-full h-1 bg-gray-500'>
                            <div 
                                className='absolute top-0 left-0 h-1 bg-red-600 transition-all duration-300'
                                style={{ width: `${anime.progress}%` }}
                            ></div>
                        </div>

                        <span>{anime.name}</span>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default function History() {
    return (
        <div className="flex flex-col text-white justify-start">
            <div className="flex justify-between items-center w-full">
                <span className="flex flex-col text-2xl"><span className="font-medium">Terakhir</span> Ditonton</span>
                <span className="text-blue-500 text-lg font-medium">Lihat Lainnya!</span>
            </div>
                            
            <AnimeList />                                                                
        </div>
    );
}