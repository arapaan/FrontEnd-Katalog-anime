import top2 from '../assets/tate.webp';
import top3 from '../assets/DrStone.webp';
import top1 from '../assets/cover_history2.jpg';
import top4 from '../assets/gachiakuta.png';
import top5 from '../assets/sakamoto-days.jpg';
import star from '../assets/star.png';
import view2 from '../assets/view2.png';

const animeList = [
    {id: 1, title: 'Yuusha-kei ni Shosu', image: top1, rating: 8.50, eps: 12, views: '1,2M', big: true},
    {id: 2, title: 'Tate No Yuusha Season 2', image: top2, rating: 8.23, eps: 12, views: '1,0M', big: false},
    {id: 3, title: 'Dr. Stone Season 4', image: top3, rating: 8.00, eps: 12, views: '999,0K', big: false},
    {id: 4, title: 'Gachiakuta', image: top4, rating: 7.90, eps: 12, views: '995,0K', big: false},
    {id: 5, title: 'Sakamoto Days', image: top5, rating: 7.80, eps: 11, views: '975,0K', big: false},
]

function groupAnime(list) {
    const groups = [];
    groups.push([list[0]]);
    for (let i = 1; i < list.length; i += 2) {
        groups.push(list.slice(i, i + 2));
    }
    return groups;
}

function AnimeCard({anime, big = false}) {
    return (
        <div className={`${big ? 'h-[490px]' : 'h-[235px]'} w-full rounded-xl relative overflow-hidden`}>
            <div className='absolute inset-0 bg-cover bg-center z-0'
                style={{ backgroundImage: `url(${anime.image})` }} />
            <div className='absolute inset-0 bg-black/85 z-10' />
            <div className='absolute top-0 left-0 bg-[#FFB200] text-black w-12 rounded-tl-xl rounded-br-xl px-3 z-30'>
                <span className='font-bold text-xl'>#{anime.id}</span>
            </div>
            <div className='absolute h-full inset-0 flex flex-col justify-center items-center z-20'>
                <div className={`flex flex-col justify-between z-30 items-end w-40 ${big ? 'h-[290px]' : 'h-[100px]'} bg-cover rounded-lg`}
                    style={{ backgroundImage: `url(${anime.image})` }}>
                    <span className='flex items-center gap-1 px-2 bg-black/80 rounded-bl-xl'>
                        <img src={star} alt="" className='w-3 h-3' />
                        {anime.rating.toFixed(2)}
                    </span>
                    <span className='flex rounded-b-lg items-end bg-gradient-to-b from-black/10 to-black h-[50%] w-full'>
                        <span className='px-2 py-2'>Eps {anime.eps}</span>
                    </span>
                </div>
                <div className='pr-4 pl-4 flex flex-col w-full justify-between overflow-hidden z-30 items-start'>
                    <span className={`flex items-center gap-1 px-2 text-[#C4C7CC] ${big ? 'mb-10' : ''}`}>
                        <img src={view2} alt="" className='w-4 h-4' />
                        {anime.views} views
                    </span>
                    <span className='flex w-full items-end text-ellipsis overflow-hidden'>
                        {anime.title}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function TopList() {
    const groups = groupAnime(animeList);

    return(
        <div className="flex flex-col text-white justify-start">
            <div className="flex justify-between items-center w-full">
                <span className="flex flex-col text-2xl">
                    <span className="font-medium">Hot</span> Anime
                </span>
                <span className="text-blue-500 text-lg font-medium">Lihat Peringkat Anime!</span>
            </div>

            <div className='relative mt-5'>
                <div className="flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide pb-3">
                    {groups.map((group, i) => (
                        <div key={i} className={`min-w-[190px] flex-shrink-0 ${group[0].big ? '' : 'flex flex-col gap-5'}`}>
                            {group.map(anime => (
                                <AnimeCard key={anime.id} anime={anime} big={anime.big} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}