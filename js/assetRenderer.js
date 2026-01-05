/**
 * Asset Renderer Module
 * generated HTML for different asset types
 */

/**
 * Creates the HTML for an asset container
 * @param {Object} asset - Asset data object
 * @returns {string} - HTML string
 */
function createAssetContainer(asset) {
    const assetId = asset.asset_id;
    const title = asset.asset_title;
    const description = asset.asset_description;
    const type = asset.asset_type;
    const contentType = asset.asset_content_type;
    const content = asset.asset_content;

    let contentHtml = '';

    // Determine content based on type
    // Determine content based on type
    if (contentType === 'video') {
        const embedUrl = getYoutubeEmbedUrl(content.trim());
        contentHtml = `
            <div class="video-content">
                <iframe src="${embedUrl}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    } else if (contentType === 'threadbuilder') {
        contentHtml = renderThreadBuilder();
    } else if (contentType === 'article') {
        contentHtml = `
            <div class="article-content">
                <p>Read the full article below:</p>
                <a href="${content.trim()}" target="_blank" rel="noopener noreferrer">
                    Click here to read more <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
    } else {
        // Default generic content
        contentHtml = `<div class="generic-content"><p>${content}</p></div>`;
    }

    return `
        <article class="asset-container" id="asset-${assetId}">
            <header class="asset-header">
                <div class="asset-title-container">
                    <span class="asset-title">${title}</span>
                </div>
                <button class="info-icon" aria-label="Info" style="background:none;border:none;color:white;">
                     <i class="fas fa-info-circle"></i>
                </button>
            </header>
            
            <div class="asset-description-box">
                <p class="asset-description-text">
                    <span>Description:</span> 
                    ${description}
                </p>
            </div>

            <div class="asset-content">
                ${contentHtml}
            </div>
        </article>
    `;
}

/**
 * Renders the thread builder specific UI
 */
function renderThreadBuilder() {
    return `
        <div class="thread-section">
            <div class="thread-header-row">
                 <button class="thread-toggle-btn" aria-label="Toggle Thread">
                    <i class="fas fa-chevron-up"></i>
                 </button>
                 <span style="flex:1; margin-left:10px; font-weight:700; font-size:1.1rem;">Thread A</span>
            </div>
            
            <div class="thread-inputs">
                <div class="thread-sub-input">
                    <label>Sub thread 1</label>
                    <textarea placeholder="Enter points..."></textarea>
                </div>
                <div class="thread-sub-input">
                    <label>Sub Interpretation 1</label>
                    <textarea placeholder="Enter interpretation..."></textarea>
                </div>
            </div>

            <div class="thread-actions">
                <button class="icon-btn"><i class="fas fa-lightbulb"></i></button>
                <button class="icon-btn"><i class="fas fa-comment-dots"></i></button>
                <button class="icon-btn"><i class="fas fa-question-circle"></i></button>
                <button class="icon-btn"><i class="fas fa-leaf"></i></button> <!-- Lotus icon replacement -->
                
                <select class="select-category">
                    <option>Select Category</option>
                    <option>Remark</option>
                    <option>Argument</option>
                </select>
                <select class="select-category">
                    <option>Select Process</option>
                    <option>Question</option>
                    <option>Analogy</option>
                </select>
            </div>

            <button class="add-thread-btn">+ Sub-thread</button>
            
            <div class="thread-sub-input" style="margin-top: 10px; width: 100%;">
                 <label>Summary for Thread A</label>
                 <textarea placeholder="Enter summary..."></textarea>
            </div>
        </div>
    `;
}

/**
 * Renders all assets to the DOM
 */
function renderAllAssets(taskData) {
    const assetsList = document.getElementById('assetsList');
    if (!assetsList) return;

    assetsList.innerHTML = ''; // Clear loading state or previous content

    if (!taskData.assets || taskData.assets.length === 0) {
        assetsList.innerHTML = '<p>No assets found for this task.</p>';
        return;
    }

    taskData.assets.forEach(asset => {
        const assetHtml = createAssetContainer(asset);
        assetsList.insertAdjacentHTML('beforeend', assetHtml);
    });
}
