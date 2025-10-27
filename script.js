// Wedding Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initCountdownTimer();
    initMusicToggle();
    initSmoothScrolling();
    initGalleryLightbox();
    initCalendarButton();
    initMapButton();
    initScrollAnimations();
});

// Countdown Timer
function initCountdownTimer() {
    // Set the wedding date (change this to your actual wedding date)
    const weddingDate = new Date('2025-11-26T06:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Wedding day has arrived!
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            // You can add a special message here
            clearInterval(countdownInterval);
        }
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Music Toggle
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            musicToggle.classList.remove('playing');
            isPlaying = false;
        } else {
            backgroundMusic.play().catch(function(error) {
                console.log('Audio play failed:', error);
            });
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.classList.add('playing');
            isPlaying = true;
        }
    });
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gallery Lightbox
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(this.src, index);
        });
    });
    
    function openLightbox(src, index) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="Wedding Photo">
                <div class="lightbox-nav">
                    <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // Add lightbox styles dynamically
        const lightboxStyle = document.createElement('style');
        lightboxStyle.textContent = `
            .lightbox-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .lightbox-content img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                background: none;
                border: none;
            }
            .lightbox-nav {
                position: absolute;
                top: 50%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                transform: translateY(-50%);
            }
            .lightbox-prev, .lightbox-next {
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border: none;
                padding: 15px;
                cursor: pointer;
                font-size: 1.5rem;
                border-radius: 5px;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(lightboxStyle);
        
        // Close lightbox functionality
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Navigation functionality
        let currentIndex = index;
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        
        prevBtn.addEventListener('click', function() {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
            lightbox.querySelector('img').src = galleryItems[currentIndex].src;
        });
        
        nextBtn.addEventListener('click', function() {
            currentIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
            lightbox.querySelector('img').src = galleryItems[currentIndex].src;
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        });
        
        function closeLightbox() {
            document.body.removeChild(lightbox);
            document.head.removeChild(lightboxStyle);
        }
    }
}

// Calendar Button
function initCalendarButton() {
    const calendarBtn = document.getElementById('addToCalendar');
    
    calendarBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Wedding event details (customize these)
        const eventDetails = {
            title: 'Wedding Ceremony - [Bride Name] & [Groom Name]',
            start: '20251231T060000Z', // Format: YYYYMMDDTHHMMSSZ (UTC)
            end: '20251231T073000Z',
            description: 'Wedding ceremony of [Bride Name] and [Groom Name]',
            location: '[Venue Name], [Venue Address]'
        };
        
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
        
        window.open(googleCalendarUrl, '_blank');
    });
}

// Map Button
function initMapButton() {
    const mapBtn = document.getElementById('viewOnMap');
    
    mapBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Replace with actual venue coordinates or address
        const venueAddress = 'Tamil Thai Samudaya Bhavan, J H Patil Extension, Sominakoppa Road, Vinoba Nagar-577204';
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=13.9625375,75.5516125`;
        
        window.open(googleMapsUrl, '_blank');
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.time-card, .gallery-item, .section-title');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-link.active {
        color: #d4af37;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeNavStyle);

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Add floating hearts animation (optional romantic effect)
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 10}px;
        left: ${Math.random() * window.innerWidth}px;
        top: 100vh;
        pointer-events: none;
        z-index: 1000;
        animation: floatUp 4s linear forwards;
    `;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 4000);
}

// Add floating hearts CSS
const heartsStyle = document.createElement('style');
heartsStyle.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartsStyle);

// Create hearts every 5 seconds (optional - remove if not wanted)
// setInterval(createFloatingHearts, 5000);