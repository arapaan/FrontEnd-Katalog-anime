import history1 from '../assets/cover_history.jpg';
import history2 from '../assets/cover_history1.jpg';
import history3 from '../assets/cover_history2.jpg';

export default function History() {
    return (
        <div className="flex flex-col text-white justify-start">
            <div className="flex justify-between items-center w-full">
                <span className="flex flex-col text-2xl"><span className="font-medium">Terakhir</span> Ditonton</span>
                <span className="text-blue-500 text-lg font-medium">Lihat Lainnya!</span>
            </div>

            <div className='relative mt-5'>
                <div className='flex flex-nowrap gap-5 overflow-x-auto'>
                    <div className="flex flex-col w-40 rounded-t-xl shrink-0 text-wrap">
                        <div className='h-16 bg-cover rounded-t-xl' style={{ backgroundImage: `url(${history1})` }}></div>
                        <div className='flex relative'>
                            <div className='relative bg-red-600 w-full h-1'></div>
                            <div className='bg-gray-500 w-full h-1'></div>
                        </div>
                        <span>Kusuriya no Hitorigoto</span>
                    </div>
                    <div className="flex flex-col w-40 rounded-t-xl shrink-0 text-wrap">
                        <div className='h-16 bg-cover rounded-t-xl' style={{ backgroundImage: `url(${history2})` }}></div>
                        <div className='bg-red-600 w-full h-1'></div>
                        <span>Cosmic Princess Kaguya!</span>
                    </div>
                    <div className="flex flex-col w-40 rounded-t-xl shrink-0 text-wrap">
                        <div className='h-16 bg-cover rounded-t-xl' style={{ backgroundImage: `url(${history3})` }}></div>
                        <div className='bg-red-600 w-full h-1'></div>
                        <span>Yuusha-kei ni Shosu</span>
                    </div>                
                </div>                                
            </div>
        </div>
    );
}