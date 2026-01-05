/**
 * Utility Functions
 */

/**
 * Truncates text to a specific length and adds ellipsis
 * @param {string} text - The text to truncate
 * @param {number} length - Max length
 * @returns {string}
 */
function truncateText(text, length = 100) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

/**
 * Parses a YouTube URL to get the embed URL
 * @param {string} url - youtube link
 * @returns {string} - embed url
 */
function getYoutubeEmbedUrl(url) {
    if (!url) return '';
    if (url.includes('embed')) return url;
    
    // Handle standard watch URLs
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (videoIdMatch) {
        return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
}

/**
 * Safely creates an element with class and text
 */
function createElement(tag, className, text = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}
