# Wedding Website

A beautiful, responsive wedding invitation website inspired by modern design trends.

## Features

- **Elegant Design**: Clean, modern layout with beautiful typography and animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Live countdown timer to wedding day
  - Photo gallery with lightbox view
  - Smooth scrolling navigation
  - Background music toggle
  - Google Calendar integration
  - Google Maps integration
  - WhatsApp RSVP links

## Setup Instructions

### 1. Customize Content

Edit the `index.html` file and replace the following placeholders with your actual information:

- `[Bride Name]` - Replace with the bride's name
- `[Groom Name]` - Replace with the groom's name  
- `[Date]` - Replace with actual wedding dates
- `[VENUE NAME]` - Replace with venue name
- `[Venue Address Line 1]` and `[Venue Address Line 2]` - Replace with venue address
- `[City, State/Province]` - Replace with city and state/province
- `[BRIDE_PHONE]` - Replace with bride's phone number (format: +1234567890)
- `[GROOM_PHONE]` - Replace with groom's phone number (format: +1234567890)

### 2. Update Wedding Date in JavaScript

Edit `script.js` and change the wedding date in the countdown timer:

```javascript
const weddingDate = new Date('2025-12-31T06:00:00').getTime();
```

Change `2025-12-31T06:00:00` to your actual wedding date and time.

### 3. Add Your Photos

Add your wedding photos to the `images/` folder:

- `photo1.jpg` through `photo6.jpg` for the gallery
- `divider-leaves.png` for decorative elements
- `animated-divider.gif` for animated elements

Recommended image sizes:
- Gallery photos: 800x600px or similar aspect ratio
- Decorative elements: PNG format with transparent background

### 4. Add Background Music (Optional)

Add a wedding song to the `audio/` folder:
- Name it `wedding-music.mp3`
- Keep file size reasonable for web (under 5MB recommended)

### 5. Customize Colors and Styling

Edit `styles.css` to change the color scheme. The main brand color is defined as `#d4af37` (gold). You can find and replace this with your preferred color.

### 6. Update Calendar and Map Links

In `script.js`, update the calendar and map integration:

1. **Calendar**: Update the event details in the `initCalendarButton()` function
2. **Maps**: Update the venue address in the `initMapButton()` function

## File Structure

```
wedding/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js          # JavaScript functionality
├── images/            # Photo gallery and decorative images
│   ├── photo1.jpg     # Gallery photos
│   ├── photo2.jpg
│   ├── ...
│   ├── divider-leaves.png
│   └── animated-divider.gif
├── audio/             # Background music
│   └── wedding-music.mp3
└── README.md          # This file
```

## Deployment Options

### Option 1: Netlify (Recommended)
1. Create a free account at [Netlify](https://netlify.com)
2. Drag and drop your entire wedding folder to Netlify
3. Your site will be live with a free subdomain

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings

### Option 3: Traditional Web Hosting
Upload all files to your web hosting provider's public folder.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images before uploading (use tools like TinyPNG)
2. Keep audio files under 5MB
3. Test on mobile devices for performance

## Customization Ideas

- Change the color scheme by updating the CSS variables
- Add more sections (story, wedding party, etc.)
- Include a gift registry section
- Add social media integration
- Include live streaming information

## Support

If you need help customizing the website, consider:
1. Basic HTML/CSS knowledge for simple changes
2. Hiring a web developer for complex modifications
3. Using website builders if coding isn't your preference

## License

This template is free to use for personal wedding websites. Please don't redistribute as a commercial template.

---

**Congratulations on your upcoming wedding! 💒💕**