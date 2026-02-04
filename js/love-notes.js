// Love Notes Feature

document.addEventListener("DOMContentLoaded", () => {
  const loveNotesBtn = document.getElementById("love-notes-btn");
  const modal = document.getElementById("love-notes-modal");
  const grid = document.getElementById("love-notes-grid");
  
  // Add your love notes here
  const notes = [
    "You make my everyday brighter",
    "I fall in love with you more every single day",
    "You have the best smile, it makes my heart flutter each time",
    "Thank you for being my best friend and my love",
    "I love the way you laugh with your mouth wide open 😂",
    "You make me want to be a better person every day",
    "I'm so grateful the universe brought us together",
    "Every moment with you is a dream come true",
    "Not a single day passes when i don't think of you",
    "I love how we can talk about anything and everything",
    "You make me feel so loved and appreciated",
    "I can't wait to make more memories with you",
    "You're the most amazing person I've ever met",
    "Being with you feels like coming home",
    "I love you more than words can say"
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