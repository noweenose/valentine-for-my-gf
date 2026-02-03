// Love Button interaction

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("love-button");
  const message = document.getElementById("love-message");
  const valBtn = document.getElementById("valentine-button");
  const question = document.getElementById("valentine-question");
  const yesBtn = document.getElementById("valentine-yes");
  const noBtn = document.getElementById("valentine-no");
  const response = document.getElementById("valentine-response");
  const yay = new Audio('assets/music/yay.mp3');
  const success = new Audio('assets/music/success.mp3');


  const messages = [
    "Hey, you clicked it.",
    "Okay, that made me smile.",
    "You're really cute, you know that?",
    "Still you.",
    "Always you.",
    "I love you "
  ];

  const noMessages = [
    "Hey.. you clicked it.",
    "Okay, that made me smile.",
    "You're really cute, you know that?",
    "Still you.",
    "Always you.",
    "I love you ",
    "Okas smile.",
    "You're su know that?",
    "Sts",
    "Alwaysu.",
    "I lsou "
  ];

  let index = 0;

  button.addEventListener("click", () => {
    message.textContent = messages[index];
    index++
    if (index === messages.length){
        button.disabled = true;
        button.style.opacity = "0.1";
        const valentine = document.getElementById("valentine");
        valentine.style.display = "block";
        index = 0;
    }
  });

  valBtn.addEventListener("click", () => {
  question.style.display = "block";
  valBtn.style.display = "none";
  });

  yesBtn.addEventListener("click", () => {
  response.textContent =
      "You just made me the happiest person. Happy Valentine's Day, Charlotte ";
  question.style.display = "none";
  createHeartParticles();// Create heart particle effect
  yay.play().catch(err => console.log("Yay sound error:", err));
  success.play().catch(err => console.log("Success sound error:", err));
  });

  noBtn.addEventListener("click", () => {
    message.textContent = noMessages[index];
    if (index === noMessages.length - 1){
        index = 0;
    }   
    index++
  });

    
  function createHeartParticles() {
    const heartCount = 800; // Number of hearts to create
    
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.textContent = '❤️';
        
        // Random starting position
        const startX = Math.random() * window.innerWidth;
        heart.style.left = startX + 'px';
        heart.style.bottom = '-50px';
        
        // Random animation duration and delay
        const duration = 3 + Math.random() * 2; // 3-5 seconds
        heart.style.animationDuration = duration + 's';
        
        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 200; // -100 to 100px
        heart.style.setProperty('--drift', drift + 'px');
        
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
          heart.remove();
        }, duration * 1000);
      }, i * 100); // Stagger the hearts
    }
  }

});

