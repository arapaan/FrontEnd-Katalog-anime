import history1 from '../assets/kusuriya.jpg';
import history2 from '../assets/cosmic.jpg';
import history3 from '../assets/cover_history2.jpg';

const ListAnime = [
    {
        
    }
]

export default function NewUpdate() {
    return(
        <div className="flex flex-col text-white justify-start">
            <div className="flex justify-between items-center w-full">
                <span className="flex flex-col text-2xl"><span className="font-medium">New </span>Update Anime</span>
                <span className="text-blue-500 text-lg font-medium">Lihat Lainnya!</span>
            </div>

            <div className='relative mt-5'>
                <div className='flex flex-wrap flex-col-span-3 justify-start gap-5'>
                    <div className="flex flex-col w-[114px] rounded-t-xl shrink-0 text-wrap">
                        <div className='h-40 w-full bg-cover rounded-t-xl' style={{ backgroundImage: `url(${history1})` }}></div>                        
                        <span>Kusuriya no Hitorigoto</span>
                    </div>
                    <div className="flex flex-col w-[114px] rounded-t-xl shrink-0 text-wrap">
                        <img src={history2} alt="" className='h-40 bg-cover rounded-t-xl' />                        
                        <span>Cosmic Princess Kaguya!</span>
                    </div>
                    <div className="flex flex-col w-[114px] rounded-t-xl shrink-0 text-wrap">
                        <img src={history3} alt="" className='h-40 bg-cover rounded-t-xl' />                        
                        <span>Yuusha-kei ni Shosu</span>
                    </div>                                             
                </div>                                
            </div>
        </div>
    );
}