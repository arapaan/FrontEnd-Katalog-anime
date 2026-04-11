import loupe from '../assets/loupe.png';

export default function Search() {
    return (
        <a href="" className="flex w-full rounded-3xl bg-gradient-to-r from-[#292A25] py-4 px-5 to-[#292A25]/90 justify-start items-start text-gray-300">
            <div className="flex justify-start md:text-2xl items-center gap-3">
                <img src={loupe} alt="" className='w-5 h-5 md:w-6 md:h-6'/>
                <span>Cari Anime Di Sini</span>
            </div>
        </a>
    );
}