import Navbar from "../layouts/Navbar";
import cover1 from '../assets/tate.webp';
import cover2 from '../assets/kusuriya.jpg';
import cover3 from '../assets/gachiakuta.png';

const historyData = [
    {
        date: '03 Apr 2026',
        animes: [
            { title: 'Mamonogurai no Boukensha', episode: 1, time: '22:58', watched: '03:26', total: '13:00', progress: 26, image: cover3 },
        ]
    },
    {
        date: '30 Mar 2026',
        animes: [
            { title: 'Tate no Yuusha no Nariagari Season 2', episode: 3, time: '20:03', watched: '11:09', total: '23:40', progress: 47, image: cover1 },
            { title: 'Kusuriya no Hitorigoto', episode: 2, time: '08:47', watched: '03:30', total: '22:52', progress: 15, image: cover2 },
        ]
    },
    {
        date: '21 Mar 2026',
        animes: [
            { title: 'Kimi wa Meido-sama.', episode: 1, time: '18:12', watched: '05:00', total: '24:00', progress: 20, image: cover3 },
        ]
    },
];

function AnimeCard({ anime }) {
    return (
        <div className="flex bg-[#1E1F24] rounded-xl overflow-hidden mb-2">
            <img src={anime.image} alt={anime.title} className="w-24 h-28 object-cover" />
            <div className="flex flex-col flex-1 px-3 py-2 justify-between">
                <div className="flex justify-between items-start">
                    <span className="text-white font-bold text-base flex-1 pr-2">{anime.title}</span>
                </div>
                <span className="text-gray-400 text-sm">Episode {anime.episode}</span>
                {/* Progress bar */}
                <div className="relative w-full h-1 bg-gray-600 rounded-full mt-1">
                    <div
                        className="absolute top-0 left-0 h-1 bg-red-500 rounded-full"
                        style={{ width: `${anime.progress}%` }}
                    />
                </div>
                <span className="text-gray-500 text-xs text-right mt-1">
                    {anime.watched} / {anime.total}
                </span>
            </div>
        </div>
    );
}

export default function History() {
    return (
        <div className="relative min-h-screen bg-[#161719] pb-28">
            {/* Header */}
            <div className="flex flex-col w-full bg-[#161719] justify-center items-center py-4 px-5">
                <span className="font-extrabold text-2xl text-white">Riwayat Menonton</span>
            </div>

            <div className="relative px-5">
                {/* Garis vertikal timeline */}
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-700 z-0" />

                {historyData.map((group, i) => (
                    <div key={i} className="relative mb-6">
                        {/* Badge tanggal */}
                        <div className="relative z-10 inline-block bg-blue-600 text-white font-bold px-5 py-2 rounded-full mb-4 text-sm">
                            {group.date}
                        </div>

                        {/* List anime */}
                        <div className="ml-2">
                            {group.animes.map((anime, j) => (
                                <AnimeCard key={j} anime={anime} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Navbar />
        </div>
    );
}