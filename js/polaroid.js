// Polaroid Photo Stack Feature

document.addEventListener("DOMContentLoaded", () => {
  const polaroidBtn = document.getElementById("polaroid-btn");
  const modal = document.getElementById("polaroid-modal");
  const stack = document.getElementById("polaroid-stack");
  
  // Add your photo paths and captions here
  const photos = [
    {
      src: "assets/polaroids/image1.jpg",
      caption: "Our first photo together ❤️"
    },
    {
      src: "assets/polaroids/image2.jpg",
      caption: "That amazing day"
    },
    {
      src: "assets/polaroids/image3.jpg",
      caption: "Always smiling with you"
    },
    {
      src: "assets/polaroids/image4.jpg",
      caption: "My favorite memory"
    },  
    {
      src: "assets/polaroids/image5.jpg",
      caption: "Forever and always"
    }
  ];
  
  function createPolaroids() {
    stack.innerHTML = '';
    
    photos.forEach((photo, index) => {
      const polaroid = document.createElement('div');
      polaroid.classList.add('polaroid');
      
      // Random rotation for each polaroid
      const rotation = (Math.random() - 0.5) * 15; // -7.5 to 7.5 degrees
      polaroid.style.setProperty('--rotation', `${rotation}deg`);
      
      polaroid.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption}" class="polaroid-image" onerror="this.src='assets/images/image1.jpg'">
        <div class="polaroid-caption">${photo.caption}</div>
      `;
      
      stack.appendChild(polaroid);
    });
  }
  
  polaroidBtn.addEventListener("click", () => {
    modal.style.display = "block";
    createPolaroids();
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