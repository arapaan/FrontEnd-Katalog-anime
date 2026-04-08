import top2 from '../assets/tate.webp';
import top3 from '../assets/DrStone.webp';
import top1 from '../assets/cover_history2.jpg';
import top4 from '../assets/gachiakuta.png';
import top5 from '../assets/sakamoto-days.jpg';
import star from '../assets/star.png';
import view2 from '../assets/view2.png';

export default function TopList() {
    return(
        <div className="flex flex-col text-white justify-start">
            <div className="flex justify-between items-center w-full">
                <span className="flex flex-col text-2xl"><span className="font-medium">Hot</span> Anime</span>
                <span className="text-blue-500 text-lg font-medium">Lihat Peringkat Anime!</span>
            </div>

            <div className='relative mt-5'>                
                <div className="flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide pb-3">
                    
                    <div className='min-w-[190px] h-[490px] rounded-xl relative overflow-hidden flex-shrink-0'>                    
                        <div className='absolute inset-0 bg-cover bg-center z-0' 
                            style={{ backgroundImage: `url(${top1})` }} />
                        <div className='absolute inset-0 bg-black/85 z-10' />
                        <div className='absolute top-0 left-0 bg-[#FFB200] text-black w-12 rounded-tl-xl rounded-br-xl px-3 z-30'>
                            <span className='font-bold text-xl'>#1</span>
                        </div>
                        <div className='absolute inset-0 flex flex-col justify-center items-center z-20'>
                            <div className='flex flex-col justify-between z-30 items-end w-40 h-[290px] bg-cover rounded-lg' style={{ backgroundImage: `url(${top1})` }}>
                                <span className='flex items-center gap-1 px-2 bg-black/80 rounded-bl-xl'>
                                    <img src={star} alt="" className='w-3 h-3' />
                                    8.50
                                </span>
                                <span className='flex rounded-b-lg items-end bg-gradient-to-b from-black/10 to-black h-[50%] w-full'>
                                    <span className='px-2 py-2'>Eps 12</span>
                                </span>
                            </div>
                            <div className='pr-4 pl-4 flex flex-col w-full justify-between overflow-hidden z-30 items-start'>
                                <span className='flex items-center gap-1 px-2 mb-10 text-[#C4C7CC]'>                                
                                    <img src={view2} alt="" className='w-4 h-4'/>
                                    1,2M views 
                                </span>
                                <span className='flex w-full items-end text-ellipsis overflow-hidden'>Yuusha-kei ni Shosu</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='min-w-[190px] flex-shrink-0 flex flex-col gap-5'>
                        <div className='w-full h-[235px] rounded-xl relative overflow-hidden'>                    
                            <div className='absolute inset-0 bg-cover bg-center z-0' 
                                style={{ backgroundImage: `url(${top2})` }} />
                            <div className='absolute inset-0 bg-black/85 z-10' />
                            <div className='absolute top-0 left-0 bg-[#FFB200] text-black w-12 rounded-tl-xl rounded-br-xl px-3 z-30'>
                                <span className='font-bold text-xl'>#2</span>
                            </div>
                            <div className='absolute h-full inset-0 flex flex-col justify-center items-center z-20'>
                                <div className='flex flex-col justify-between z-30 items-end w-40 h-[100px] bg-cover rounded-lg' style={{ backgroundImage: `url(${top2})` }}>
                                    <span className='flex items-center gap-1 px-2 bg-black/80 rounded-bl-xl'>
                                        <img src={star} alt="" className='w-3 h-3' />
                                        8.23
                                    </span>
                                    <span className='flex rounded-b-lg items-end bg-gradient-to-b from-black/10 to-black h-[50%] w-full'>
                                        <span className='px-2 py-2'>Eps 12</span>
                                    </span>
                                </div>
                                <div className='pr-4 pl-4 flex flex-col w-full justify-between overflow-hidden z-30 items-start'>
                                    <span className='flex items-center gap-1 px-2 text-[#C4C7CC]'>                                
                                        <img src={view2} alt="" className='w-4 h-4'/>
                                        1,0M views 
                                    </span>
                                    <span className='flex w-full items-end text-ellipsis overflow-hidden'>Tate No Yuusha</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[235px] rounded-xl relative overflow-hidden'>                    
                            <div className='absolute inset-0 bg-cover bg-center z-0' 
                                style={{ backgroundImage: `url(${top3})` }} />
                            <div className='absolute inset-0 bg-black/85 z-10' />
                            <div className='absolute top-0 left-0 bg-[#FFB200] text-black w-12 rounded-tl-xl rounded-br-xl px-3 z-30'>
                                <span className='font-bold text-xl'>#3</span>
                            </div>
                            <div className='absolute h-full inset-0 flex flex-col justify-center items-center z-20'>
                                <div className='flex flex-col justify-between z-30 items-end w-40 h-[100px] bg-cover rounded-lg' style={{ backgroundImage: `url(${top3})` }}>
                                    <span className='flex items-center gap-1 px-2 bg-black/80 rounded-bl-xl'>
                                        <img src={star} alt="" className='w-3 h-3' />
                                        8.00
                                    </span>
                                    <span className='flex rounded-b-lg items-end bg-gradient-to-b from-black/10 to-black h-[50%] w-full'>
                                        <span className='px-2 py-2'>Eps 12</span>
                                    </span>
                                </div>
                                <div className='pr-4 pl-4 flex flex-col w-full justify-between overflow-hidden z-30 items-start'>
                                    <span className='flex items-center gap-1 px-2 text-[#C4C7CC]'>                                
                                        <img src={view2} alt="" className='w-4 h-4'/>
                                        999,0K views 
                                    </span>
                                    <span className='flex w-full items-end text-ellipsis overflow-hidden'>Dr. Stone Season 4</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='min-w-[190px] flex-shrink-0 flex flex-col gap-5'>
                        <div className='w-full h-[235px] rounded-xl relative overflow-hidden'>                    
                            <div className='absolute inset-0 bg-cover bg-center z-0' 
                                style={{ backgroundImage: `url(${top4})` }} />
                            <div className='absolute inset-0 bg-black/85 z-10' />
                            <div className='absolute top-0 left-0 bg-[#FFB200] text-black w-12 rounded-tl-xl rounded-br-xl px-3 z-30'>
                                <span className='font-bold text-xl'>#4</span>
                            </div>
                            <div className='absolute h-full inset-0 flex flex-col justify-center items-center z-20'>
                                <div className='flex flex-col justify-between z-30 items-end w-40 h-[100px] bg-cover rounded-lg' style={{ backgroundImage: `url(${top4})` }}>
                                    <span className='flex items-center gap-1 px-2 bg-black/80 rounded-bl-xl'>
                                        <img src={star} alt="" className='w-3 h-3' />
                                        7.90
                                    </span>
                                    <span className='flex rounded-b-lg items-end bg-gradient-to-b from-black/10 to-black h-[50%] w-full'>
                                        <span className='px-2 py-2'>Eps 12</span>
                                    </span>
                                </div>
                                <div className='pr-4 pl-4 flex flex-col w-full justify-between overflow-hidden z-30 items-start'>
                                    <span className='flex items-center gap-1 px-2 text-[#C4C7CC]'>                                
                                        <img src={view2} alt="" className='w-4 h-4'/>
                                        995,0K views 
                                    </span>
                                    <span className='flex w-full items-end text-ellipsis overflow-hidden'>Gachiakuta</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[235px] rounded-xl relative overflow-hidden'>                    
                            <div className='absolute inset-0 bg-cover bg-center z-0' 
                                style={{ backgroundImage: `url(${top5})` }} />
                            <div className='absolute inset-0 bg-black/85 z-10' />
                            <div className='absolute top-0 left-0 bg-[#FFB200] text-black w-12 rounded-tl-xl rounded-br-xl px-3 z-30'>
                                <span className='font-bold text-xl'>#5</span>
                            </div>
                            <div className='absolute h-full inset-0 flex flex-col justify-center items-center z-20'>
                                <div className='flex flex-col justify-between z-30 items-end w-40 h-[100px] bg-cover rounded-lg' style={{ backgroundImage: `url(${top5})` }}>
                                    <span className='flex items-center gap-1 px-2 bg-black/80 rounded-bl-xl'>
                                        <img src={star} alt="" className='w-3 h-3' />
                                        7.80
                                    </span>
                                    <span className='flex rounded-b-lg items-end bg-gradient-to-b from-black/10 to-black h-[50%] w-full'>
                                        <span className='px-2 py-2'>Eps 11</span>
                                    </span>
                                </div>
                                <div className='pr-4 pl-4 flex flex-col w-full justify-between overflow-hidden z-30 items-start'>
                                    <span className='flex items-center gap-1 px-2 text-[#C4C7CC]'>                                
                                        <img src={view2} alt="" className='w-4 h-4'/>
                                        975,0K views 
                                    </span>
                                    <span className='flex w-full items-end text-ellipsis overflow-hidden'>Sakamoto Days</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}