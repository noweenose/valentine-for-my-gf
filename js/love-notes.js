// Love Notes Feature

document.addEventListener("DOMContentLoaded", () => {
  const loveNotesBtn = document.getElementById("love-notes-btn");
  const modal = document.getElementById("love-notes-modal");
  const grid = document.getElementById("love-notes-grid");
  
  // Add your love notes here
  const notes = [
    "You make every day brighter just by being in it ☀️",
    "I fall in love with you more every single day 💕",
    "Your smile is my favorite thing in the world 😊",
    "Thank you for being my best friend and my love ❤️",
    "I love the way you laugh at my silly jokes 😄",
    "You make me want to be a better person 🌟",
    "I'm so grateful the universe brought us together 🌌",
    "Every moment with you is a moment I treasure 💎",
    "You're the first person I think of every morning ☀️",
    "I love how we can talk about anything and everything 💬",
    "You make me feel so loved and appreciated 🥰",
    "I can't wait to make more memories with you 📸",
    "You're my favorite hello and hardest goodbye 👋",
    "Being with you feels like coming home 🏡",
    "I love you more than words can say 💝"
  ];
  
  function createLoveNotes() {
    grid.innerHTML = '';
    
    notes.forEach((note, index) => {
      const card = document.createElement('div');
      card.classList.add('love-note-card');
      
      card.innerHTML = `
        <div class="note-front">💌</div>
        <div class="note-back">${note}</div>
      `;
      
      card.addEventListener('click', () => {
        card.classList.toggle('revealed');
      });
      
      grid.appendChild(card);
    });
  }
  
  loveNotesBtn.addEventListener("click", () => {
    modal.style.display = "block";
    createLoveNotes();
  });
  
  // Close modal functionality
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});