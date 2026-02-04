// Memory Timeline Feature

document.addEventListener("DOMContentLoaded", () => {
  const timelineBtn = document.getElementById("timeline-btn");
  const modal = document.getElementById("timeline-modal");
  const container = document.getElementById("timeline-container");
  const prevBtn = document.getElementById("prev-month");
  const nextBtn = document.getElementById("next-month");
  const indicator = document.getElementById("month-indicator");
  
  // Add your memories for each month here
  const memories = [
    {
      month: "Month 1",
      title: "The Beginning",
      description: "The moment we first met and everything changed. I still remember how nervous I was, but how right it felt."
    },
    {
      month: "Month 2",
      title: "Getting to Know You",
      description: "Every conversation revealed something new and wonderful about you. I couldn't stop thinking about you."
    },
    {
      month: "Month 3",
      title: "First Adventures",
      description: "Our first trip together, exploring new places and creating memories that I'll treasure forever."
    },
    {
      month: "Month 4",
      title: "Growing Closer",
      description: "The moment I realized this was something special. You became my favorite person to talk to about anything."
    },
    {
      month: "Month 5",
      title: "Inside Jokes",
      description: "We started having our own language, our own jokes. Every little thing reminded me of you."
    },
    {
      month: "Month 6",
      title: "Halfway There",
      description: "Six months of laughter, comfort, and love. I couldn't imagine my days without you."
    },
    {
      month: "Month 7",
      title: "Deeper Connection",
      description: "We talked about our dreams, our fears, our future. You made everything feel possible."
    },
    {
      month: "Month 8",
      title: "Comfortable Love",
      description: "The kind of love that feels like home. Being with you is my favorite place to be."
    },
    {
      month: "Month 9",
      title: "Forever Feelings",
      description: "Nine months of you being the best part of my every day. I love you more than I can express."
    },
    {
      month: "Month 10",
      title: "Here and Now",
      description: "Ten months of us, and I'm more in love with you than ever. Here's to forever, Charlotte."
    }
  ];
  
  let currentIndex = 0;
  
  function displayMemory(index) {
    const memory = memories[index];
    container.innerHTML = `
      <div class="timeline-month">
        <h3>${memory.month}: ${memory.title}</h3>
        <p>${memory.description}</p>
      </div>
    `;
    
    indicator.textContent = `${index + 1} / ${memories.length}`;
    
    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === memories.length - 1;
  }
  
  timelineBtn.addEventListener("click", () => {
    modal.style.display = "block";
    currentIndex = 0;
    displayMemory(currentIndex);
  });
  
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      displayMemory(currentIndex);
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentIndex < memories.length - 1) {
      currentIndex++;
      displayMemory(currentIndex);
    }
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