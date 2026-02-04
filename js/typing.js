// Typing effect for the message

window.bgMusicPlayer = null;

(function () {
  const target = document.getElementById("typed-text");
  const header = document.getElementById("header-text");
  const tapMe = document.getElementById("love-button")
  const startButton = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const mainContent = document.getElementById("main-content");
  const textHeader = CONFIG.header;
  const text = CONFIG.message;

  let headerIndex = 0;
  let messageIndex = 0;
  const speed = 60; // milliseconds per character
  const typeSound = new Audio('assets/music/writing.mp3');
  const bgMusic = new Audio('assets/music/romanticpiano.mp3');

  // Set background music to loop
  bgMusic.loop = true;
  typeSound.loop = true;
  bgMusic.volume = 0.02;
  typeSound.volume = 0.5;  

  window.bgMusicPlayer = bgMusic;

  function typeMessage() {
    if (messageIndex < text.length) {
      target.textContent += text.charAt(messageIndex);
      messageIndex++;
      setTimeout(typeMessage, speed);
    }
    else{
        typeSound.pause();
        typeSound.currentTime = 0;
        tapMe.style.display = "block";
    }
  }

  function typeHeader() {
    if (headerIndex < textHeader.length) {
      header.textContent += textHeader.charAt(headerIndex);
      headerIndex++;
      setTimeout(typeHeader, speed);
    } else {
      typeMessage();
    }
  }

  function startExperience() {
    // Hide start screen
    startScreen.style.display = "none"; 
    
    // Show main content
    mainContent.style.display = "flex";
    mainContent.style.flexDirection = "column";
    mainContent.style.alignItems = "center";
    
    // Start background music
    typeSound.play().catch(err => console.log("Type sound error:", err));
    bgMusic.play().catch(err => console.log("Background music error:", err));
    
    // Start typing effect
    typeHeader();
  }

  // Start everything when button is clicked
  startButton.addEventListener("click", startExperience);
})();