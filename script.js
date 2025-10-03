const fortunes = [
  "Your creativity will bloom like a flower in spring! 🌸",
  "A surprise bun will hop into your life soon! 🐰",
  "Today's challenges are tomorrow's strengths! 💪",
  "A smile is your passport to happiness! 😊",
  "Your potential is limitless, just like the stars! ⭐",
  "Every small step leads to big adventures! 🚀",
  "Kindness is your superpower! 💖",
  "Your dreams are seeds waiting to grow! 🌱",
  "Laughter is the best medicine for any day! 😄",
  "You're exactly where you need to be! 🎯",
  "Magic happens when you believe in yourself! ✨",
  "Your story is just beginning! 📚",
  "Courage grows with every brave step! 🦁",
  "You're a masterpiece in progress! 🎨",
  "Today is full of beautiful possibilities! 🌈",
  "Your light shines brighter than you know! 💡",
  "Adventure awaits around every corner! 🗺️",
  "You have the power to make today amazing! ⚡",
  "Your heart knows the way forward! 💝",
  "Happiness is a choice you make every moment! 🌟",
  "You're capable of incredible things! 🏆"
];

const cookie = document.getElementById("cookie");
const fortuneBox = document.getElementById("fortune");
const instruction = document.getElementById("instruction");

cookie.addEventListener("click", () => {
  // pick random fortune
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  
  // show it
  fortuneBox.textContent = randomFortune;
  fortuneBox.classList.remove("hidden");
  
  // change instruction text
  instruction.textContent = "Your fortune has been revealed! Click again for another...";
  
  // little wobble effect
  cookie.style.transform = "rotate(-10deg)";
  setTimeout(() => cookie.style.transform = "rotate(10deg)", 150);
  setTimeout(() => cookie.style.transform = "rotate(0deg)", 300);
});