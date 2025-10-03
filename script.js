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

// Daily Inspiration Quotes
const inspirationalQuotes = [
  "Be the rainbow in someone's cloud 🌈",
  "Believe you can and you're halfway there ⭐",
  "Life is beautiful when you choose to see beauty 🌸",
  "Every day is a fresh start, embrace it 🌅",
  "Your smile can change the world 😊",
  "Dream big, work hard, stay humble 💫",
  "Be yourself, everyone else is taken ✨",
  "Spread love wherever you go 💕",
  "Today is full of endless possibilities 🚀",
  "Choose joy, choose kindness, choose you 🌟"
];

// Pick quote based on day of the year (so it's consistent daily)
function getDailyQuote() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return inspirationalQuotes[dayOfYear % inspirationalQuotes.length];
}

// Insert into page
const input = document.getElementById("positivityInput");
const charCount = document.getElementById("charCount");
const confirmation = document.getElementById("confirmation");
const wall = document.getElementById("positivityWall");
const shareButton = document.getElementById("shareButton");
const messageCards = document.getElementById("messageCards");

// Default community messages
let communityMessages = [
  { text: "You are stronger than you think! 💪", time: new Date(Date.now() - 5 * 60000) },
  { text: "Today is a gift, that's why it's called the present! 🎁", time: new Date(Date.now() - 10 * 60000) },
  { text: "Your kindness creates ripples of joy! 🌊", time: new Date(Date.now() - 15 * 60000) }
];

// Character counter
input.addEventListener("input", () => {
  charCount.textContent = input.value.length;
});

shareButton.addEventListener("click", () => {
  const message = input.value.trim();

  if (message.length < 10) {
    alert("🌟 Your message should be at least 10 characters.");
    return;
  }

  // Show confirmation
    confirmation.classList.remove("hidden");
  confirmation.textContent = "💖 Your positivity has been shared!";

  communityMessages.unshift({ text: message, time: new Date() });
  if (communityMessages.length > 3) communityMessages.pop();

  renderCommunityMessages();
  input.value = "";
  charCount.textContent = "0";
});

function timeAgo(date) {
  const now = new Date();
  const diff = Math.floor((now - date) / 60000);
  if (diff < 1) return "Just now";
  if (diff === 1) return "1m ago";
  if (diff < 60) return `${diff}m ago`;
  return `${Math.floor(diff / 60)}h ago`;
}

function renderCommunityMessages() {
  messageCards.innerHTML = "";
  communityMessages.forEach(msg => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <p>"${msg.text}"</p>
      <div class="card-footer">💖 <span>${timeAgo(msg.time)}</span></div>
    `;
    messageCards.appendChild(card);
  });
}

// Initial load
renderCommunityMessages();