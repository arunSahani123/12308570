// src/components/AudioComponent.jsx
import React, { useRef } from 'react';

function AudioComponent() {
  const audioRef = useRef();

  const handlePlay = () => {
    if (audioRef.current) {
      // Call play() and catch errors
      audioRef.current.play().catch((error) => {
        console.error("Error trying to play audio:", error);
      });
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>My Audio Player 🎵</h3>
      <audio ref={audioRef} src="https://www.w3schools.com/html/horse.mp3" controls style={{ width: '100%' }} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handlePlay} style={{ marginRight: '10px' }}>🎶 Play</button>
        <button onClick={handlePause}>⏸️ Pause</button>
      </div>
    </div>
  );
}

export default AudioComponent;