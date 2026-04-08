import view from '../assets/view.png';
import cover from '../assets/testing _cover.jpg';

export default function Highlight() {
    return (        
        <div className="flex w-full h-40 flex-col rounded-xl bg-cover" style={{ backgroundImage: `url(${cover})` }}>
            <div className='flex justify-between items-start text-white'>
                <div className='bg-black/40 rounded-tl-xl py-2 px-3'>
                    <span className='font-extrabold text-xl'>#2</span>
                </div>
                <div className='flex justify-start items-center bg-[#2B2C31] rounded-3xl my-2 mx-3 py-4 px-4 h-4 gap-2'>
                    <img src={view} alt="" className='h-5 w-5'/>
                    1.048.954
                </div>
            </div>
            <div className='flex h-full items-end'>
                <div className='flex w-full py-3 px-5 rounded-b-xl justify-center items-end text-white bg-gradient-to-t from-black/70 to-black/40'>
                    <span className='text-ellipsis overflow-hidden'>Tate no Yuusha no Nariagari Season 2</span>
                </div>
            </div>
        </div>
    );
}