// Vercel Speed Insights initialization
// Import from CDN to avoid bundler requirements
import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2/+esm';

// Initialize Speed Insights
// This will only track data in production (on Vercel)
injectSpeedInsights();
