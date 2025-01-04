# Chrome Seed 🌱 - Blazing fast Chrome extension boilerplate

A modern, feature-rich boilerplate for building Chrome extensions. It combines the best tools and practices to help you create powerful extensions quickly and efficiently.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

- 🎯 **TypeScript** - First-class type safety
- ⚛️ **React 19** - Modern UI development
- ⚡ **Vite** - Lightning-fast builds
- 🎨 **Tailwind CSS** - Utility-first styling
- 🔍 **Biome** - Next-gen linting & formatting
- 📦 **PostCSS** - Modern CSS features
- 🧪 **Production-ready** - Optimized build setup
- 📝 **Well-documented** - Comprehensive guides

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 22.12.0
- pnpm (recommended) or npm

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/chrome-seed.git
   cd chrome-seed
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development**
   ```bash
   pnpm dev
   ```

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Lint code with Biome |
| `pnpm format` | Format code with Biome |
| `pnpm type-check` | Run TypeScript checks |
| `pnpm package` | Create distribution package |

### 🔌 Loading the Extension

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` directory

## 🏭 Production Build

Our optimized build process:

1. 🧹 Cleans output directories
3. 📝 Compiles TypeScript
4. 📦 Bundles and minifies with Vite

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
