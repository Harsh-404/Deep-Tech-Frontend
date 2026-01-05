# DT Frontend - Storyboard Web App

A responsive storyboard web application built for the DeepThought recruitment platform. This application dynamically fetches task data and renders interactive asset containers.

## Features

- **Dynamic Data Rendering**: Fetches project data from a live JSON API.
- **Collapsible Sidebar**: "Journey Board" expands and collapses.
- **Interactive Assets**: Supports Video, Article, and Threadbuilder asset types.
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox.
- **Vanilla JavaScript**: Lightweight and fast without external framework dependencies.

## Project Structure

```
dt-frontend/
├── index.html              # Entry point
├── project.json            # Local data source (CORS bypass)
├── css/
│   └── style.css           # Global styles
├── js/
│   ├── main.js             # Init and event handling
│   ├── assetRenderer.js    # HTML generation components
│   ├── dataFetcher.js      # API interaction
│   └── utils.js            # Helper functions
└── README.md
```

## How to Run

1. Serving the project locally is recommended to avoid CORS issues with the remote API.
2. Run a local server (e.g., `npx http-server . -p 3000`).
3. Open `http://localhost:3000` in your browser.

## API Endpoint
Data is consumed from: `https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json`
