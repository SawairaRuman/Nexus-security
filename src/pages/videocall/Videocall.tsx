import { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, PhoneOff, MonitorUp } from 'lucide-react';

export const VideoCall = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Investor Collaboration Call</h2>
        <div className="bg-red-600 px-3 py-1 rounded text-sm animate-pulse flex items-center gap-1">
          <span className="text-xs">●</span> LIVE
        </div>
      </div>

      {/* Video Grid Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
        <div className="bg-gray-800 rounded-lg flex items-center justify-center border-2 border-blue-500 relative">
          <span className="absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-xs">You (Investor)</span>
          {isVideoOn ? <div className="text-gray-400 italic text-sm">Camera is on</div> : <VideoOff size={48} className="text-gray-600" />}
        </div>
        <div className="bg-gray-800 rounded-lg flex items-center justify-center border-2 border-gray-700 relative">
          <span className="absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-xs">Entrepreneur</span>
          <div className="text-gray-400 italic text-sm">Waiting for participant...</div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="mt-8 flex justify-center gap-6 bg-gray-800 p-4 rounded-full max-w-fit mx-auto shadow-2xl">
        <button onClick={() => setIsMicOn(!isMicOn)} className={`p-4 rounded-full ${isMicOn ? 'bg-gray-700' : 'bg-red-500'}`}>
          {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
        </button>
        <button onClick={() => setIsVideoOn(!isVideoOn)} className={`p-4 rounded-full ${isVideoOn ? 'bg-gray-700' : 'bg-red-500'}`}>
          {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
        </button>
        <button className="p-4 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
          <MonitorUp size={24} />
        </button>
        <button className="p-4 bg-red-600 rounded-full hover:bg-red-700 transition-colors" onClick={() => alert('Call Ended')}>
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
};
