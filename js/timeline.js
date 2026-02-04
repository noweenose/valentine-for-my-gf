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
      month: "Month 1 (April)",
      title: "The Beginning",
      description: `I still remember the first time we met. You got in my car and nahihiya ka pa makipag usap sakin, naramdaman ko yung tension nun and I tried my best to make conversation. Little did I know that moment would change my life forever
        I didnt expect na yung conversation natin dun sa jollibee and sa condo mo would lead to something so beautiful. From that day on, I found myself looking forward to every moment we spent together. I'm thankful that I found my bestfriend and the love of my.`
    },
    {
      month: "Month 2 (May)",
      title: "Getting to Know You",
      description: `I remember I would always be with you sa taft, we couldn't get enough of each other. Every little thing about you fascinated me, your laugh, your stories, the way you saw the world. I felt like I was discovering a whole new side of life.
      I grew alot because of you. You taught me patience, kindness, and the importance of being present in the moment. Every day with you felt like a new adventure, and I cherished every second we spent together. The 2nd month was when I realized I was falling for you.`
    },
    {
      month: "Month 3 (June)",
      title: "Living Together!",
      description: `3rd month palang living together na tayo HAHAHAHAHHA, and I loved every minute of it. I know it was rough at times, adjusting to each other's habits and quirks, but we made it work. Living with you made me appreciate the little things even more 
      the way you sleep drooling, our late nights talk that we don't even realize it is morning na, and the way you always know how to make me smile after a long day. I miss living with you. I cherish every memory we made during that month. I miss you so much.
       I look forward to the day we can live together again. and I know it was rough at times talaga, I was very difficult to live with HAHAHAHAHHA but I hope you know how much I love you and appreciate you for putting up with me.` 
    },
    {
      month: "Month 4 (July)",
      title: "Adventure Time!",
      description: `Our 4th month together was filled with adventures. From our spontaneous road trips to our cozy movie nights at home, every moment felt special because I was with you. 
      I remember we would go to tagaytay and late night MILO runs! and then go home and watch movies and eat till we get big, we would always get CHICK CHICKEN! and it was the best. The late night buldaks, the laughter, 
      the shared dreams for the future, I hold all these memories dear to my heart. Dito rin pala tayo nag laguna! miss mo na ba mag kawa bath HAHAHAHAHAHA balik tayo dun baby :(`
    },
    {
      month: "Month 5 (August)",
      title: "Calm days?",
      description: "Wala tayo masyadong pics ng august so i think calm days na natin to. But you were still staying here satin afaik, Dito rin pala tayo nag ppares sa marikina :( I think calm days na nga natin to and late night trips hehe, we would go billiards with yusuke at times too. I miss you more every time i remember"
    },
    {
      month: "Month 6 (September)",
      title: "Halfway There",
      description: `Six months of laughter, comfort, and love. This is the month na nag tyler concert ka!. I think dito rin ako gumagawa ng thesis and nagfail kami :(
       But through it all, you were my rock. Your support and encouragement meant the world to me. I couldn't have made it through without you by my side.`
    },
    {
      month: "Month 7 (October)",
      title: "Deeper Connection",
      description: `This month ko nakilala kela aleks! and i met most of your friends. I felt so welcomed and loved by everyone you care about. 
      It made me realize how lucky I am to have you in my life. We also made our promise rings this month, I know you lost it but don't worry baby, we will make new ones soon.
      We also went to boracay this month with ashley, i'm glad you met my cousin because she is one of the most closest people to me. That made me really happy.
      `
    },
    {
      month: "Month 8 (November)",
      title: "Graduation month!",
      description: `My birthday and the month my baby graduated. You looked dazzling on that stage baby, im so proud of you. I know how hard you worked for this moment, and seeing you achieve your dreams made my heart swell with pride.
      You deserve all the success and happiness in the world, and I can't wait to see what the future holds for you. Congratulations again, my love. With that, i also passed my thesis this month because of your support and love. Thank you for believing in me even when I doubted myself.
      I'm always here through thick and thin, just like you've been there for me. I know you'll achieve great things, and I'll be cheering you on every step of the way.`
    },
    {
      month: "Month 9 (December)",
      title: "Christmas Time!",
      description: `9 months together and our first Christmas together! I also got my computer this month hehe. I want to thank you for the gifts you gave me, but you are the best gift I could ever ask for. Your love and presence in my life make every day feel like a celebration.
      You made this christmas extra special for me, and I will always cherish the memories we created together. This is the first christmas where I felt truly happy and complete because of you. I love you so much baby.`
    },
    {
      month: "Month 10 (January)",
      title: "Here and Now",
      description: `Ten months of us, and I'm more in love with you than ever. Here's to forever, Charlotte. I'm so grateful for every moment we've shared and excited for all the memories yet to come. Happy 10th monthsary, my love! I will always choose you, now and forever.`
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