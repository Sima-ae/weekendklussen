# Weekendklussen - 3D Physics Simulation

A modern, interactive 3D physics simulation application built with Next.js 14, React Three Fiber, and Rapier physics engine. Inspired by Google Antigravity.

## 🚀 Features

- **3D Physics Simulation**: Real-time physics using Rapier WASM engine
- **Interactive Objects**: Drag and manipulate 3D objects in real-time
- **Modern UI**: Beautiful gradient backgrounds and smooth animations with Framer Motion
- **Performance Optimized**: WebGL optimizations and GPU acceleration
- **TypeScript**: Full type safety with strict mode enabled
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React Three Fiber** - React renderer for Three.js
- **React Three Rapier** - Physics engine integration
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **@use-gesture/react** - Drag and gesture interactions

## 📦 Installation

This project uses **yarn** as the package manager.

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Run the development server:**
   ```bash
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
weekend-klussen/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with Canvas setup
│   └── globals.css         # Global styles and WebGL optimizations
├── components/
│   ├── PhysicsScene.tsx    # Main 3D scene with physics objects
│   └── UIOverlay.tsx       # UI controls and overlay
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # Utility functions
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎮 Controls

- **Left-click + drag**: Move objects in the scene
- **Scroll**: Zoom in/out
- **Right-click + drag**: Rotate camera
- **Middle-click + drag**: Pan camera

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

The project is pre-configured for Vercel deployment with:
- Optimized WebGL settings
- WASM support for Rapier physics
- Performance optimizations

### Build for Production

```bash
yarn build
yarn start
```

## ⚙️ Configuration

### Next.js Config

The `next.config.js` includes:
- WebAssembly support for Rapier physics engine
- Three.js bundle optimizations
- Performance optimizations (compression, etc.)

### TypeScript Config

Strict mode is enabled with:
- `noUnusedLocals` and `noUnusedParameters`
- `noUncheckedIndexedAccess` for safer array access
- Path aliases configured for clean imports

### Tailwind Config

Custom animations and colors are configured:
- Gradient animations
- Custom color palette
- Dark mode support

## 🎨 Customization

### Adding New Physics Objects

Edit `components/PhysicsScene.tsx` to add new objects:

```tsx
<RigidBody position={[x, y, z]} colliders="sphere">
  <mesh>
    <sphereGeometry args={[radius]} />
    <meshStandardMaterial color="your-color" />
  </mesh>
</RigidBody>
```

### Modifying Physics Settings

Update the Physics component in `app/page.tsx`:

```tsx
<Physics gravity={[0, -9.81, 0]} timeStep={1 / 60}>
  {/* Your scene */}
</Physics>
```

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🔧 Troubleshooting

### WASM Loading Issues

If you encounter WASM loading errors, ensure:
1. Your `next.config.js` has `asyncWebAssembly: true` in experiments
2. You're using a modern browser with WebAssembly support
3. The build process completes without errors

### Performance Issues

- Reduce the number of physics objects
- Lower the canvas DPR (device pixel ratio)
- Disable shadows if not needed
- Use simpler geometries for better performance

## 📄 License

MIT

## 🙏 Acknowledgments

- Inspired by [Google Antigravity](https://antigravity.google/)
- Built with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Physics powered by [Rapier](https://rapier.rs/)
