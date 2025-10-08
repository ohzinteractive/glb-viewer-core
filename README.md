# glb-viewer-core

A shared core library for viewing and inspecting GLB/GLTF 3D models, used by both a standalone web viewer and a VS Code extension.

## Overview

`glb-viewer-core` provides the foundational UI components and rendering logic for GLB/GLTF model visualization across multiple platforms. This repository contains all the shared code that powers:

- **Web Viewer**: A standalone web application for viewing gltf files. [glb-viewer-web](https://github.com/ohzinteractive/glb-viewer-web)
- **VS Code Extension**: An integrated GLB viewer within Visual Studio Code. [glb-viewer-vscode](https://github.com/ohzinteractive/glb-viewer-vscode)

By maintaining a single source of truth for the viewer logic, both implementations benefit from the same features, bug fixes, and improvements.

## Features

### 🎨 Material Inspection
- View and inspect all materials in your GLB model
- Detailed material properties and parameters
- PBR material property visualization

### 🖼️ Texture Viewer
- Preview all textures embedded in your model
- Support for compressed textures (Basis Universal, Draco)
- Texture details and metadata

### 📐 Geometry Analysis
- Inspect mesh geometries and their attributes
- View vertex counts, indices, and buffer information
- Geometry hierarchy visualization

### 🎬 Animation Controls
- Play, pause, and scrub through animations
- Timeline controls with precise frame navigation
- Support for multiple animation tracks

### 🌳 Scene Hierarchy
- Interactive scene tree view
- Search scene nodes
- Node selection and inspection

### ⚙️ Advanced Settings
- Skeleton visualization for rigged models

## Technology Stack

- **Three.js** - 3D rendering engine
- **Vite** - Build tool and dev server
- **Pug** - HTML templating
- **SCSS** - Styling
- **pit-js** - UI framework

## Useful Commands

```bash
# Install dependencies
yarn install
```
```bash
# Start development server with hot reload
yarn start
```

> The development server will start on `http://localhost:1235`.


```bash
# Build for production
yarn build

```

The build process compiles all Pug templates, SCSS styles, and JavaScript modules into optimized bundles. The `copy-public` script moves the built assets to the appropriate location for consumption by the parent projects.

## Project Structure

```
src/
├── js/              # Core JavaScript modules
│   ├── main.js              # Entry point
│   ├── Renderer.js          # Three.js rendering logic
│   ├── SceneController.js   # Scene management
│   ├── UIController.js      # UI coordination
│   ├── Materials.js         # Material inspection
│   ├── Textures.js          # Texture viewing
│   ├── Geometries.js        # Geometry analysis
│   ├── Animations.js        # Animation controls
│   └── HierarchyTree.js     # Scene hierarchy
├── styles/          # SCSS stylesheets
├── views/           # Pug templates
└── index.pug        # Main HTML template

public/
├── fonts/           # Font files
└── lib/             # External libraries
    ├── basis/       # Basis Universal texture support
    └── draco/       # Draco geometry compression
```

## Integration

This core library is designed to be consumed by:

1. [**Web Viewer**](https://github.com/ohzinteractive/glb-viewer-web): Builds standalone HTML/JS/CSS files for web deployment
2. [**VS Code Extension**](https://github.com/ohzinteractive/glb-viewer-vscode): Integrates into webview panels with VS Code API bindings

Both implementations share the same codebase but may have platform-specific integrations (e.g., `VSCodeContext.js` for VS Code-specific features).

## License

[Licence](LICENSE.md)

## Author
[![OHZI Interactive Studio](https://raw.githubusercontent.com/ohzinteractive/legendary-parakeet/edda06cd1dab6a283aff73834ce8ac06787ea117/app/assets/images/common/logo.svg?token=ABVOKZLQABBTLTQEHKOOAT3I432HC) - OHZI Interactive Studio](https://ohzi.io?utm_source=vscode)

