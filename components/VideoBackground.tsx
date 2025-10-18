"use client";

import { useEffect, useRef } from "react";
import { useAudio } from "@/lib/AudioContext";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted } = useAudio();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      {/* Video pozadie */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/nebula4.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Tmavý overlay pre lepšiu čitateľnosť textu */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-10" />
    </>
  );
}
