"use client"

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Youtube from "react-youtube"

export default function VideoPlayer({ youtubeId }) {
   const [isOpen, setIsOpen] = useState(true);
   const option = {
      width: "300",
      height: "250"
   }
   function handleVideoPlayer() {
      setIsOpen((prevState) => !prevState);
   }
   function Player() {
      return (
         <div className="fixed bottom-4 right-4">
            <button className="text-color-primary float-right" onClick={handleVideoPlayer}><XCircle size={32} /></button>
            <Youtube
               videoId={youtubeId}
               onReady={(event) => event.target.pauseVideo}
               opts={option}
               onError={() => alert("Video is broke, please try another")}
            />
         </div>
      );
   }
   function NonPlayer() {
      return (
         <button className="fixed bottom-5 right-4 w-32 bg-color-primary text-color-dark hover:bg-color-accent transition-all shadow-xl rounded" onClick={handleVideoPlayer}>Tonton Trailer</button>
      );
   }
   return (
      isOpen ? <Player /> : <NonPlayer />
   );
}