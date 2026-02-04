// Message in a Bottle Feature

document.addEventListener("DOMContentLoaded", () => {
  const bottleBtn = document.getElementById("bottle-btn");
  const modal = document.getElementById("bottle-modal");
  const openBottleBtn = document.getElementById("open-bottle");
  const bottleAnimation = document.getElementById("bottle-animation");
  const bottleMessage = document.getElementById("bottle-message");
  const bottleText = document.getElementById("bottle-text");
  
  // Your special message in the bottle
  const message = `My Dearest Charlotte,

If you're reading this, you've opened my heart in a bottle. 

These past 10 months have been the most beautiful journey of my life. You've shown me what it means to truly care for someone, to laugh until my cheeks hurt, to find comfort in the quiet moments, and to dream about a future together.

Every day with you feels like a gift I never want to take for granted. You make me want to be better, to love deeper, and to cherish every single moment we share.

Thank you for choosing me, for staying with me, and for loving me in all the ways that matter most.

Here's to many more months, years, and lifetimes together.

Forever yours,
With all my love, Nowee`;
  
  bottleBtn.addEventListener("click", () => {
    modal.style.display = "block";
    bottleAnimation.style.display = "block";
    bottleMessage.style.display = "none";
  });
  
  openBottleBtn.addEventListener("click", () => {
    bottleAnimation.style.display = "none";
    bottleMessage.style.display = "block";
    bottleText.textContent = message;
  });
  
  // Close modal functionality
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    bottleAnimation.style.display = "block";
    bottleMessage.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      bottleAnimation.style.display = "block";
      bottleMessage.style.display = "none";
    }
  });
});