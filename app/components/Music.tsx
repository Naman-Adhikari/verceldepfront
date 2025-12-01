"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(err => {
        console.log("Autoplay blocked by browser:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
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
          <FaPause size={18} color="#b7e5eb" />
        ) : (
          <FaPlay size={18} color="#b7e5eb" />
        )}
      </button>
    </div>
  );
}
