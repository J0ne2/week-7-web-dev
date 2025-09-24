// =============================================
// PART 1: CSS3 ANIMATIONS & TRANSITIONS
// (Handled in styles.css)
// =============================================

// =============================================
// PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES
// =============================================

// Global variables
let animationCount = 0;
const userPreferences = {
    theme: 'light',
    animationsEnabled: true
};

// Function with parameters and return value
function calculateAnimationDuration(baseDuration, complexity) {
    // Local scope variables
    const multiplier = complexity > 5 ? 1.5 : 1;
    const duration = baseDuration * multiplier;
    
    // Return calculated duration
    return duration;
}

// Function demonstrating scope awareness
function updateAnimationCounter() {
    // This variable is function-scoped
    let localCount = 0;
}