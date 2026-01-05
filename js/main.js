/**
 * Main Application Script
 */

document.addEventListener('DOMContentLoaded', async () => {
    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const taskTitleEl = document.getElementById('taskTitle');
    const taskDescriptionEl = document.getElementById('taskDescription');
    const taskSubtitleEl = document.getElementById('taskSubtitle');
    const journeyListEl = document.getElementById('journeyList');

    // Initialize App
    // Initialize App
    try {
        const projectData = await fetchProjectData();

        if (projectData && projectData.tasks && projectData.tasks.length > 0) {
            const currentTask = projectData.tasks[0]; // Assuming we display the first task

            // Populate Header Info
            taskTitleEl.textContent = currentTask.task_title;
            taskDescriptionEl.innerHTML = currentTask.task_description.replace(/\r\n/g, '<br>');
            taskSubtitleEl.textContent = "Explore the world of management"; // Static or derived if available

            // Populate Sidebar Journey List
            populateJourneyList(currentTask.assets);

            // Render Assets
            // Render Assets
            renderAllAssets(currentTask);

            // Initialize Interactivity
            initializeInteractivity();
        } else {
            document.getElementById('assetsList').innerHTML = '<p>Error: Invalid project data format.</p>';
        }

    } catch (error) {
        document.getElementById('assetsList').innerHTML = `<p>Error loading data: ${error.message}</p>`;
    }

    // Sidebar Toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    /**
     * Populate the sidebar journey list.
    /**
     * Populate the sidebar journey list.
     */
    function populateJourneyList(assets) {
        journeyListEl.innerHTML = '';
        if (assets) {
            assets.forEach(asset => {
                const li = document.createElement('li');
                li.textContent = asset.asset_title;
                // Add click to scroll to asset?
                journeyListEl.appendChild(li);
            });
        }
    }

    /**
     * Initialize event listeners for dynamic content
     */
    function initializeInteractivity() {
        // Delegate events for any dynamic elements if needed
        // For example, collapsing descriptions (though user req specified collapse descriptions, 
        // the design inspection suggests description is always visible at top, 
        // but let's add expand/collapse for long descriptions if needed)

        // Example: Thread toggle functionality
        document.querySelectorAll('.thread-toggle-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const content = this.closest('.thread-section').querySelectorAll('.thread-inputs, .thread-actions, .add-thread-btn, .thread-sub-input:last-child');
                content.forEach(el => {
                    if (el.style.display === 'none') {
                        el.style.display = 'flex'; // or block based on orig
                        if (el.classList.contains('thread-sub-input') && el.style.marginTop) el.style.display = 'block';
                    } else {
                        el.style.display = 'none';
                    }
                });
                // Rotate icon
                const icon = this.querySelector('i');
                icon.classList.toggle('fa-chevron-up');
                icon.classList.toggle('fa-chevron-down');
            });
        });
    }
});
