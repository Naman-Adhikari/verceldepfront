"use client";
import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Default paused

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.volume = 0.25;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/sound/kyrr.mp3" loop />
      <button onClick={togglePlay} className="music-btn">
        {isPlaying ? (
          <FaVolumeUp size={18} color="#b7e5eb" />
        ) : (
          <FaVolumeMute size={18} color="#b7e5eb" />
        )}
      </button>
    </div>
  );
}
