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
  const featureButtons = document.getElementById("feature-buttons"); // Changed from getElementsByClassName

  console.log("Feature buttons element:", featureButtons);


  const messages = [
    "Hey… you clicked it.",
    "Okay, that made me smile.",
    "You're really cute, you know that?",
    "Still you.",
    "Always you.",
    "I love you"
  ];

  const noMessages = [
    "Are you sure? ",
    "Pretty please? ",
    "Come on, you know you want to say yes... ",
    "I'll keep asking... Yes? ",
    "One more time... Will you?"
  ];

  let index = 0;
  let noIndex = 0;

  button.addEventListener("click", () => {
    message.textContent = messages[index];
    index++

    if (index === messages.length){
        button.disabled = true;
        button.style.opacity = "0.1";
        const valentine = document.getElementById("valentine");
        valentine.style.display = "block";
    }
  });

  valBtn.addEventListener("click", () => {
  question.style.display = "block";
  valBtn.style.display = "none";
  });

  yesBtn.addEventListener("click", () => {
  response.textContent = "You just made me the happiest person. Happy Valentine's Day, Charlotte ";
  question.style.display = "none";
    // Show feature buttons after saying yes
    setTimeout(() => {
      if (featureButtons) {
        featureButtons.style.display = "flex";
        // Trigger animation
        setTimeout(() => {
          featureButtons.classList.add('show');
        }, 50); // Small delay to ensure display change registers
      } else {
        console.error("Feature buttons element not found!");
      }
    }, 2000);
  createHeartParticles();// Create heart particle effect
  yay.volume = 0.1;
  success.volume = 0.1;
  yay.play().catch(err => console.log("Yay sound error:", err));
  success.play().catch(err => console.log("Success sound error:", err));
  });

  noBtn.addEventListener("click", () => {
    if (noIndex < noMessages.length) {
      response.textContent = noMessages[noIndex];
      noIndex++;
    } else {
      // After all no messages, she has to say yes!
      response.textContent = "You have no choice!";
      noBtn.style.display = "none";
      setTimeout(() => {
        if (featureButtons) {
          featureButtons.style.display = "flex";
          // Trigger animation
          setTimeout(() => {
            featureButtons.classList.add('show');
          }, 50);
        } else {
          console.error("Feature buttons element not found!");
        }
      }, 2000);
    }
  });

    
  function createHeartParticles() {
    const heartCount = 30; // Number of hearts to create
    
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


    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

});