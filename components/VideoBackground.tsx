import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-container flex items-center justify-center w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/craft.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full text-white text-center pb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          I&apos;ll be notifying you as soon as I&apos;m done! 📨
        </h2>
      </div>
    </div>
  );
};

export default VideoBackground;
