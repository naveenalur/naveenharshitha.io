// Wedding Website Configuration
// Edit these values to customize your wedding website

const weddingConfig = {
    // Couple Information
    couple: {
        bride: "Bride Name",
        groom: "Groom Name"
    },
    
    // Wedding Dates and Times
    events: {
        reception: {
            date: "Sunday, [Date] 2025",
            time: "7:30 PM onwards"
        },
        ceremony: {
            date: "Monday, [Date] 2025", 
            time: "06:00 AM to 07:30 AM"
        },
        // Main wedding date for countdown (YYYY-MM-DDTHH:MM:SS format)
        countdownDate: "2025-12-31T06:00:00"
    },
    
    // Venue Information
    venue: {
        name: "VENUE NAME",
        address: {
            line1: "Address Line 1",
            line2: "Address Line 2", 
            city: "City, State/Province"
        },
        // Full address for Google Maps
        fullAddress: "Venue Name, Full Address, City, State"
    },
    
    // Contact Information
    contact: {
        bride: {
            name: "Bride Name",
            phone: "+1234567890" // Include country code
        },
        groom: {
            name: "Groom Name", 
            phone: "+1234567890" // Include country code
        }
    },
    
    // Calendar Event Details
    calendar: {
        title: "Wedding Ceremony - [Bride Name] & [Groom Name]",
        startTime: "20251231T060000Z", // UTC format: YYYYMMDDTHHMMSSZ
        endTime: "20251231T073000Z",   // UTC format: YYYYMMDDTHHMMSSZ
        description: "Wedding ceremony celebration",
        timezone: "America/New_York" // Your timezone
    },
    
    // Theme Colors (CSS color values)
    theme: {
        primary: "#d4af37",      // Gold
        secondary: "#b8941f",    // Darker gold
        background: "#f8f8f8",   // Light gray
        text: "#333333",         // Dark gray
        white: "#ffffff"
    },
    
    // Features Toggle
    features: {
        backgroundMusic: true,
        floatingHearts: false,   // Set to true for romantic floating hearts
        lightboxGallery: true,
        smoothScrolling: true,
        countdownTimer: true
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingConfig;
}