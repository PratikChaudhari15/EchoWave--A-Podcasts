const mockPodcasts = [
  {
    id: 1,
    title: "TechTalk Weekly",
    description: "Explore the latest tech trends, tools, and talks with top innovators shaping the future.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
    episodes: 13,
    subscribers: "10K",
    rating: 3.2,
    author: "Alexander Jawfox",
    duration: "35 min avg"
  },
  {
    id: 2,
    title: "Mindful Daily",
    description: "Recharge with guided meditations, breathing exercises, and calming reflections for every day.",
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Health & Wellness",
    episodes: 18,
    subscribers: "15K",
    rating: 3.9,
    author: "Lesly Juarez",
    duration: "15 min avg"
  },
  {
    id: 3,
    title: "Design Dialogues",
    description: "Hear from the world’s top creatives about their process, struggles, and artistic journeys.",
    image: "https://images.unsplash.com/photo-1643253876364-a0acdb7e8240?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Arts & Culture",
    episodes: 19,
    subscribers: "27K",
    rating: 3.7,
    author: "Rio Marchello",
    duration: "22 min avg"
  },
  {
    id: 4,
    title: "Bussiness Growth Lab",
    description: "Real-world strategies from industry leaders to help you scale, lead, and thrive in business.",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    episodes: 33,
    subscribers: "126K",
    rating: 4.6,
    author: "Razvan Chisu",
    duration: "28 min avg"
  },
  {
    id: 5,
    title: "Smart Science",
    description: "Explore fascinating breakthroughs and scientific stories simplified for curious minds.",
    image: "https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Science",
    episodes: 24,
    subscribers: "38K",
    rating: 3.8,
    author: "Michael Schiffer",
    duration: "18 min avg"
  },
  {
    id: 6,
    title: "Tales Unplugged",
    description: "Journey through vivid soundscapes and personal tales from storytellers around the globe.",
    image: "https://images.unsplash.com/photo-1554734823-d808c1722fb2?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    category: "Entertainment",
    episodes: 31,
    subscribers: "64K",
    rating: 4.6,
    author: "Frank Rolando Romero",
    duration: "38 min avg"
  }
];


const mockEpisodes = [
  {
    id: 1,
    podcastId: 1,
    title: "The Future of AI in Everyday Life",
    description: "How artificial intelligence is transforming our daily experiences.",
    duration: "42:15",
    publishDate: "2025-04-15",
    audioUrl: "https://freesound.org/people/josefpres/sounds/812405/",
    image: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // AI tech theme
    plays: "10.5K",
    isNew: true
  },
  {
    id: 2,
    podcastId: 2,
    title: "5-Minute Morning Meditation",
    description: "Start your day with clarity and intention through guided meditation.",
    duration: "04:32",
    publishDate: "2025-04-14",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Calm space
    plays: "44.9K",
    isNew: true
  },
  {
    id: 3,
    podcastId: 3,
    title: "Digital Art Revolution",
    description: "Exploring how technology is changing the art world forever.",
    duration: "38:22",
    publishDate: "2024-04-13",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1712904140880-d0d49319784c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Digital design
    plays: "15.2K",
    isNew: false
  },
  {
    id: 4,
    podcastId: 4,
    title: "Building a Startup from Scratch",
    description: "Real stories and practical advice from successful entrepreneurs.",
    duration: "51:08",
    publishDate: "2025-04-12",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400", // Startup workspace
    plays: "22.1K",
    isNew: false
  },
  {
    id: 5,
    podcastId: 5,
    title: "Climate Science Updates",
    description: "Latest research and findings in climate science and environmental protection.",
    duration: "33:45",
    publishDate: "2025-04-11",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Science lab / environment
    plays: "7.8K",
    isNew: false
  },
  {
    id: 6,
    podcastId: 6,
    title: "Myths and Legends",
    description: "Ancient stories retold for the modern world with expert analysis.",
    duration: "29:17",
    publishDate: "2025-04-10",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1604140193916-187755174ecf?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Storytelling scene
    plays: "52.6K",
    isNew: false
  }
];


const categories = [
  { name: "Technology", count: 156, color: "linear-gradient(135deg, #a5b4fc, #6366f1)", icon: "💻" },
  { name: "Health & Wellness", count: 89, color: "linear-gradient(135deg, #a7f3d0, #34d399)", icon: "🧘‍♀️" },
  { name: "Business", count: 234, color: "linear-gradient(135deg, #fcd34d, #fbbf24)", icon: "💼" },
  { name: "Arts & Culture", count: 67, color: "linear-gradient(135deg, #fbcfe8, #f472b6)", icon: "🎨" },
  { name: "Science", count: 98, color: "linear-gradient(135deg, #bae6fd, #38bdf8)", icon: "🔬" },
  { name: "Entertainment", count: 178, color: "linear-gradient(135deg, #ddd6fe, #8b5cf6)", icon: "🎭" },
  { name: "Education", count: 143, color: "linear-gradient(135deg, #fde68a, #facc15)", icon: "📚" },
  { name: "News & Politics", count: 87, color: "linear-gradient(135deg, #e5e7eb, #9ca3af)", icon: "📰" }
];


// Global variables
let currentEpisodeIndex = 0;
let isPlaying = false;
let currentAudio = null;
let episodeCarouselIndex = 0;

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const scrollToTop = document.getElementById('scrollToTop');
const audioPlayer = document.getElementById('audioPlayer');
const audioElement = document.getElementById('audioElement');
const newsletterForm = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');
const header = document.getElementById('header');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  setupEventListeners();
  populatePodcasts();
  populateEpisodes();
  populateCategories();
  setupScrollAnimations();
  setupCarousel();
  setupAudioPlayer();
});

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  
  if (shouldBeDark) {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-theme');
    themeToggle.textContent = '🌙';
  }
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark-theme');
  
  if (isDark) {
    document.body.classList.remove('dark-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);
  
  // Mobile menu
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Scroll to top
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', handleScroll);
  
  // Newsletter form
  newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (mobileMenu.classList.contains('show')) {
          toggleMobileMenu();
        }
      }
    });
  });
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('show');
}

function handleScroll() {
  const scrollY = window.scrollY;
  
  // Header scroll effect
  if (scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Scroll to top button
  if (scrollY > 300) {
    scrollToTop.classList.add('show');
  } else {
    scrollToTop.classList.remove('show');
  }
}

// Newsletter
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  
  if (!email) {
    showToast('Please enter your email address', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  
  // Simulate API call
  showToast('Subscribing...', 'info');
  
  setTimeout(() => {
    showToast('Wow... You have Successfully subscribed! 🎉', 'success');
    document.getElementById('emailInput').value = '';
  }, 1000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showToast(message, type = 'info') {
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Content Population
function populatePodcasts() {
  const podcastsGrid = document.getElementById('podcastsGrid');
  
  mockPodcasts.forEach((podcast, index) => {
    const podcastCard = createPodcastCard(podcast);
    podcastCard.style.animationDelay = `${index * 0.1}s`;
    podcastsGrid.appendChild(podcastCard);
  });
}

function createPodcastCard(podcast) {
  const card = document.createElement('div');
  card.className = 'podcast-card';
  card.innerHTML = `
    <div class="podcast-image">
      <img src="${podcast.image}" alt="${podcast.title}" loading="lazy">
      <div class="podcast-category">${podcast.category}</div>
      <button class="play-button" data-episode="${podcast.id - 1}">▶️</button>
    </div>
    <div class="podcast-content">
      <h3>${podcast.title}</h3>
      <p class="podcast-author">by ${podcast.author}</p>
      <p class="podcast-description">${podcast.description}</p>
      <div class="podcast-meta">
        <span>${podcast.episodes} episodes • ${podcast.duration}</span>
        <span>⭐ ${podcast.rating}</span>
      </div>
      <div class="podcast-footer">
        <span>${podcast.subscribers} subscribers</span>
        <button class="btn-text" data-episode="${podcast.id - 1}">Listen</button>
      </div>
    </div>
  `;
  
  // Add event listeners for play buttons
  const playButtons = card.querySelectorAll('[data-episode]');
  playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const episodeId = parseInt(button.dataset.episode);
      playEpisode(mockEpisodes[episodeId]);
    });
  });
  
  return card;
}

function populateEpisodes() {
  const episodesTrack = document.getElementById('episodesTrack');
  
  mockEpisodes.forEach((episode, index) => {
    const episodeCard = createEpisodeCard(episode);
    episodeCard.style.animationDelay = `${index * 0.1}s`;
    episodesTrack.appendChild(episodeCard);
  });
  
  setupCarouselDots();
}

function createEpisodeCard(episode) {
  const card = document.createElement('div');
  card.className = 'episode-card';
  
  const publishDate = new Date(episode.publishDate).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  
  card.innerHTML = `
    <div class="episode-image">
      <img src="${episode.image}" alt="${episode.title}" loading="lazy">
      ${episode.isNew ? '<div class="episode-new">New</div>' : ''}
      <button class="play-button" data-episode-id="${episode.id}">▶️</button>
    </div>
    <div class="episode-content">
      <h3>${episode.title}</h3>
      <p class="episode-description">${episode.description}</p>
      <div class="episode-meta">
        <span>${publishDate} • ${episode.duration}</span>
        <span>${episode.plays} plays</span>
      </div>
      <button class="btn btn-secondary" data-episode-id="${episode.id}">
        ▶️ Play Episode
      </button>
    </div>
  `;
  
  // Add event listeners for play buttons
  const playButtons = card.querySelectorAll('[data-episode-id]');
  playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      playEpisode(episode);
    });
  });
  
  return card;
}

function populateCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  
  categories.forEach((category, index) => {
    const categoryCard = createCategoryCard(category);
    categoryCard.style.animationDelay = `${index * 0.1}s`;
    categoriesGrid.appendChild(categoryCard);
  });
}

function createCategoryCard(category) {
  const card = document.createElement('div');
  card.className = 'category-card';
  card.innerHTML = `
    <div class="category-icon" style="background: ${category.color}">${category.icon}</div>
    <h3 class="category-name">${category.name}</h3>
    <p class="category-count">${category.count} podcasts</p>
    <div class="category-progress">
      <div class="category-progress-fill" style="background: ${category.color}"></div>
    </div>
  `;
  
  return card;
}

// Episodes Carousel
function setupCarousel() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  prevBtn.addEventListener('click', () => moveCarousel(-1));
  nextBtn.addEventListener('click', () => moveCarousel(1));
  
  updateCarouselButtons();
}

function setupCarouselDots() {
  const carouselDots = document.getElementById('carouselDots');
  const maxIndex = Math.max(0, mockEpisodes.length - 3);
  
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');
    
    dot.addEventListener('click', () => {
      episodeCarouselIndex = i;
      updateCarousel();
      updateCarouselDots();
      updateCarouselButtons();
    });
    
    carouselDots.appendChild(dot);
  }
}

function moveCarousel(direction) {
  const maxIndex = Math.max(0, mockEpisodes.length - 3);
  episodeCarouselIndex += direction;
  
  if (episodeCarouselIndex < 0) episodeCarouselIndex = 0;
  if (episodeCarouselIndex > maxIndex) episodeCarouselIndex = maxIndex;
  
  updateCarousel();
  updateCarouselDots();
  updateCarouselButtons();
}

function updateCarousel() {
  const episodesTrack = document.getElementById('episodesTrack');
  const translateX = -(episodeCarouselIndex * (100 / 3));
  episodesTrack.style.transform = `translateX(${translateX}%)`;
}

function updateCarouselDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === episodeCarouselIndex);
  });
}

function updateCarouselButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const maxIndex = Math.max(0, mockEpisodes.length - 3);
  
  prevBtn.disabled = episodeCarouselIndex === 0;
  nextBtn.disabled = episodeCarouselIndex >= maxIndex;
}

// Audio Player
function setupAudioPlayer() {
  const playPauseBtn = document.getElementById('playPauseBtn');
  const closePlayerBtn = document.getElementById('closePlayerBtn');
  const progressSlider = document.getElementById('progressSlider');
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeBtn = document.getElementById('volumeBtn');
  
  playPauseBtn.addEventListener('click', togglePlayPause);
  closePlayerBtn.addEventListener('click', closePlayer);
  progressSlider.addEventListener('input', seekAudio);
  volumeSlider.addEventListener('input', changeVolume);
  volumeBtn.addEventListener('click', toggleMute);
  
  audioElement.addEventListener('timeupdate', updateProgress);
  audioElement.addEventListener('loadedmetadata', updateDuration);
  audioElement.addEventListener('ended', () => {
    isPlaying = false;
    updatePlayButton();
  });
  
  // Setup audio visualizer
  setupAudioVisualizer();
}

function playEpisode(episode) {
  currentAudio = episode;
  isPlaying = true;
  
  // Update player UI
  document.getElementById('playerImage').src = episode.image;
  document.getElementById('playerTitle').textContent = episode.title;
  document.getElementById('playerDescription').textContent = episode.description;
  
  // Load and play audio
  audioElement.src = episode.audioUrl;
  audioElement.play();
  
  // Show player
  audioPlayer.classList.add('show');
  audioPlayer.style.display = 'block';
  
  updatePlayButton();
  updateVisualizer();
}

function togglePlayPause() {
  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
  } else {
    audioElement.play();
    isPlaying = true;
  }
  updatePlayButton();
  updateVisualizer();
}

function updatePlayButton() {
  const playPauseBtn = document.getElementById('playPauseBtn');
  playPauseBtn.textContent = isPlaying ? '⏸️' : '▶️';
}

function closePlayer() {
  audioPlayer.classList.remove('show');
  setTimeout(() => {
    audioPlayer.style.display = 'none';
    audioElement.pause();
    audioElement.src = '';
    isPlaying = false;
    currentAudio = null;
  }, 300);
}

function seekAudio() {
  const progressSlider = document.getElementById('progressSlider');
  const seekTime = (progressSlider.value / 100) * audioElement.duration;
  audioElement.currentTime = seekTime;
}

function changeVolume() {
  const volumeSlider = document.getElementById('volumeSlider');
  audioElement.volume = volumeSlider.value / 100;
  
  const volumeBtn = document.getElementById('volumeBtn');
  volumeBtn.textContent = volumeSlider.value > 0 ? '🔊' : '🔇';
}

function toggleMute() {
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeBtn = document.getElementById('volumeBtn');
  
  if (audioElement.volume > 0) {
    audioElement.volume = 0;
    volumeSlider.value = 0;
    volumeBtn.textContent = '🔇';
  } else {
    audioElement.volume = 0.8;
    volumeSlider.value = 80;
    volumeBtn.textContent = '🔊';
  }
}

function updateProgress() {
  const progressSlider = document.getElementById('progressSlider');
  const progressFill = document.getElementById('progressFill');
  const currentTimeSpan = document.getElementById('currentTime');
  
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressSlider.value = progress || 0;
  progressFill.style.width = `${progress || 0}%`;
  
  currentTimeSpan.textContent = formatTime(audioElement.currentTime);
}

function updateDuration() {
  const durationSpan = document.getElementById('duration');
  durationSpan.textContent = formatTime(audioElement.duration);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function setupAudioVisualizer() {
  const visualizer = document.getElementById('audioVisualizer');
  
  // Create visualizer bars
  for (let i = 0; i < 20; i++) {
    const bar = document.createElement('div');
    bar.className = 'visualizer-bar';
    bar.style.animationDelay = `${i * 0.1}s`;
    visualizer.appendChild(bar);
  }
}

function updateVisualizer() {
  const visualizerBars = document.querySelectorAll('.visualizer-bar');
  
  visualizerBars.forEach((bar, index) => {
    if (isPlaying) {
      const height = Math.random() * 20 + 5;
      bar.style.height = `${height}px`;
      bar.style.animationPlayState = 'running';
    } else {
      bar.style.height = '5px';
      bar.style.animationPlayState = 'paused';
    }
  });
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.podcast-card, .episode-card, .category-card, .section-header');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Auto-update visualizer when playing
setInterval(() => {
  if (isPlaying) {
    updateVisualizer();
  }
}, 100);