// Music Player Feature

document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("music-btn");
  const modal = document.getElementById("music-modal");
  const audioPlayer = document.getElementById("audio-player");
  const vinylRecord = document.querySelector(".vinyl-record");
  
  musicBtn.addEventListener("click", () => {
    modal.style.display = "block";
    
    // Pause background music when opening music player
    if (window.bgMusicPlayer) {
      window.bgMusicPlayer.pause();
    }
  });
  
  // Sync vinyl animation with audio playback
  audioPlayer.addEventListener("play", () => {
    vinylRecord.classList.add("playing");
  });
  
  audioPlayer.addEventListener("pause", () => {
    vinylRecord.classList.remove("playing");
  });
  
  audioPlayer.addEventListener("ended", () => {
    vinylRecord.classList.remove("playing");
  });
  
  // Close modal functionality
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    audioPlayer.pause();
    
    // Resume background music when closing
    if (window.bgMusicPlayer) {
      window.bgMusicPlayer.play().catch(err => console.log("Background music resume error:", err));
    }
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      audioPlayer.pause();
      
      // Resume background music when closing
      if (window.bgMusicPlayer) {
        window.bgMusicPlayer.play().catch(err => console.log("Background music resume error:", err));
      }
    }
  });
});