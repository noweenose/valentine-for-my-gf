// Falling Hearts/Petals Background Effect

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("falling-hearts");
  
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '🌸', '🌺', '🌹'];
  
  function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation duration (10-20 seconds)
    const duration = 10 + Math.random() * 10;
    heart.style.animationDuration = duration + 's';
    
    // Random delay (start immediately or with small delay)
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    // Random size
    const size = 1 + Math.random() * 1.5;
    heart.style.fontSize = size + 'rem';
    
    container.appendChild(heart);
    
    // Remove after animation completes + delay
    setTimeout(() => {
      if (heart.parentNode) {
        heart.remove();
      }
    }, (duration + 2) * 1000);
  }
  
  // Create initial hearts
  for (let i = 0; i < 15; i++) {
    setTimeout(createFallingHeart, i * 500);
  }
  
  // Continuously create new hearts
  setInterval(createFallingHeart, 2000);
});