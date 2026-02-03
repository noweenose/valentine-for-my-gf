// Background slideshow (dynamic)

document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("background");

  // Automatically detect images in the folder
  // Put all your images in assets/images/ folder
  const imageFolder = "assets/images/";
  
  // List of common image extensions to check
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
  
  // You can set how many images you have here, or use a different approach
  // This version tries to load images and only keeps the ones that exist
  const images = [];
  
  // Try loading images with sequential naming (image1, image2, etc.)
  // You can change this number to match your total image count
  const maxImages = 20; // Adjust this to your needs
  
  let loadedCount = 0;
  let current = 0;
  const interval = 4000; //miliseconds
  
  // Function to check if image exists and load it
  function loadImage(index) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const imagePath = `${imageFolder}image${index}.jpg`;
      
      img.onload = () => resolve(imagePath);
      img.onerror = () => reject();
      
      img.src = imagePath;
    });
  }
  
  // Load all available images
  async function loadAllImages() {
    const imagePromises = [];
    
    for (let i = 1; i <= maxImages; i++) {
      imagePromises.push(
        loadImage(i).then(path => images.push(path)).catch(() => {})
      );
    }
    
    await Promise.all(imagePromises);
    
    // If no images loaded, show error
    if (images.length === 0) {
      console.error("No images found in the folder!");
      return;
    }
    
    // Create slides dynamically
    images.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      if (index === 0) slide.classList.add("active");
      slide.style.backgroundImage = `url(${src})`;
      background.appendChild(slide);
    });
    
    const slides = document.querySelectorAll(".slide");
    
    // Start slideshow
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, interval);
  }
  
  loadAllImages();
});