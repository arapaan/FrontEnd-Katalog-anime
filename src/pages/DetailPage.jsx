import React, { useState } from 'react';
import { ChevronLeft, Play, Bell, Star, Eye, Lock, Key, Grid3x3 } from 'lucide-react';
import coverBg from '../assets/cover_history2.jpg';

export default function DetailPage() {
  const [expandedSynopsis, setExpandedSynopsis] = useState(false);

  const animeData = {
    id: 1,
    title: 'Yuusha-kei ni Shosu',
    subtitle: 'Sentenced to Be a Hero',
    rating: 8.25,
    studio: 'Studio KAI',
    date: 'Jan 03, 2026',
    type: 'TV',
    views: '4,2M',
    genres: ['Action', 'Fantasy', 'Adventure'],
    duration: '25:00',
    subscribers: '93,5K',
    currentEpisode: 9,
    totalEpisodes: 12,
    synopsis: 'Bagi sebagian orang, menjadi pahlawan adalah sebuah hukuman paling diindari. Sebab, mereka yang berbuat jahat akan diberikan status Pahlawan dan diharuskan melawan Raja Iblis.Xylo Forbatz, mantan komandan dari regu Ksatria Suci ini akhirnya memimpin...',
    synopsisExpanded: 'Bagi sebagian orang, menjadi pahlawan adalah sebuah hukuman paling diindari. Sebab, mereka yang berbuat jahat akan diberikan status Pahlawan dan diharuskan melawan Raja Iblis.Xylo Forbatz, mantan komandan dari regu Ksatria Suci ini akhirnya memimpin pasukan baru yang terdiri dari penjahat-penjahat berbakat. Mereka akan bekerja sama untuk mengalahkan musuh bersama.',
    premiumPrice: 'Rp. 12.000',
    premiumText: 'No iklan nonton sepuasnya',
    episodes: [
      { num: 12, views: '73,6K', daysAgo: '14 hari lalu', locked: false, keyCount: 0 },
      { num: 11, views: '87,7K', daysAgo: '21 hari lalu', locked: true, keyCount: 1 }
    ],
    heroBg: coverBg
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white pb-20">
      {/* Hero Section with Parallax */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${animeData.heroBg}')`,
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>

        {/* Header with back button */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
          <button className="bg-black/40 hover:bg-black/60 rounded-full p-2 transition">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-lg md:text-xl font-semibold truncate flex-1 ml-3">
            {animeData.title}
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 max-w-2xl mx-auto">
        
        {/* Update Badge */}
        <div className="flex items-center gap-2 text-amber-400 mb-4 -mt-8 relative z-20">
          <div className="w-6 h-6 bg-amber-400/20 rounded flex items-center justify-center">
            <span className="text-sm">📅</span>
          </div>
          <span className="text-sm font-medium">Update Setiap Kamis</span>
        </div>

        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{animeData.title}</h1>
          <p className="text-gray-300 text-lg">{animeData.subtitle}</p>
        </div>

        {/* Info Pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-1 bg-slate-800/50 rounded-full px-3 py-2">
            <Star size={18} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold">{animeData.rating}</span>
          </div>
          <div className="bg-slate-800/50 rounded-full px-4 py-2 text-sm">
            {animeData.studio}
          </div>
          <div className="bg-slate-800/50 rounded-full px-4 py-2 text-sm">
            {animeData.date}
          </div>
          <div className="bg-slate-800/50 rounded-full px-4 py-2 text-sm">
            {animeData.type}
          </div>
        </div>

        {/* Views */}
        <div className="bg-slate-800/50 rounded-full px-4 py-2 inline-block mb-6 text-sm">
          <Eye size={16} className="inline mr-2" />
          {animeData.views} views
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {animeData.genres.map((genre, idx) => (
            <button key={idx} className="border border-amber-600/40 text-amber-400 rounded-full px-5 py-2 text-sm hover:bg-amber-600/10 transition">
              {genre}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 rounded-full py-3 px-6 font-semibold flex items-center justify-center gap-2 transition">
            <Play size={20} className="fill-white" />
            <span>Lanjut Eps {animeData.currentEpisode}</span>
          </button>
          <button className="flex-1 bg-white hover:bg-gray-100 text-black rounded-full py-3 px-6 font-semibold flex items-center justify-center gap-2 transition">
            <Bell size={20} />
            <span>Subscribed</span>
          </button>
        </div>

        {/* Duration & Subscribers */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-300">
          <div className="text-center flex-1">
            <div className="text-gray-500">• {animeData.duration} •</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-gray-500">• {animeData.subscribers} subscribers •</div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Synopsis</h3>
          <p className="text-gray-300 leading-relaxed mb-2">
            {expandedSynopsis ? animeData.synopsisExpanded : animeData.synopsis}
          </p>
          <button 
            onClick={() => setExpandedSynopsis(!expandedSynopsis)}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-2 flex items-center gap-1 transition"
          >
            {expandedSynopsis ? 'Tutup' : 'Selengkapnya'} <span>▼</span>
          </button>
        </div>

        {/* Episodes Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">
              Episodes ({animeData.totalEpisodes})
            </h3>
            <div className="flex gap-2">
              <button className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-2 flex items-center gap-1 text-sm transition">
                <Grid3x3 size={18} />
                <span>Grid</span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg px-3 py-2 text-sm transition">
                Sort: 99 ▼
              </button>
            </div>
          </div>

          {/* Episode List */}
          <div className="space-y-3">
            {animeData.episodes.map((ep, idx) => (
              <div key={idx} className="bg-slate-800/40 hover:bg-slate-800/60 rounded-xl p-4 flex items-center justify-between transition cursor-pointer">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Episode {ep.num}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye size={16} />
                      {ep.views}
                    </span>
                    <span>{ep.daysAgo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {ep.locked ? (
                    <div className="flex items-center gap-1 bg-slate-700/50 rounded-full px-3 py-1">
                      <Lock size={16} />
                      <span className="text-sm">Locked</span>
                    </div>
                  ) : null}
                  {ep.keyCount > 0 && (
                    <div className="flex items-center gap-1 text-amber-400 text-sm font-semibold">
                      <Key size={16} />
                      <span>{ep.keyCount}</span>
                    </div>
                  )}
                  <button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-full p-2 transition flex-shrink-0">
                    <Key size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
