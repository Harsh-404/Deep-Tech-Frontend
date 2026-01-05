/**
 * Data Fetcher Module
 * Handles fetching task data from the API
 */

const API_URL = './project.json';

async function fetchProjectData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching project data:', error);
        // Return null or throw depending on how we want to handle it in main
        throw error;
    }
}
