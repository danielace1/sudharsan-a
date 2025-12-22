import { Canvas } from "@react-three/fiber";
import TheNavbar from "./components/TheNavbar";
import ParallaxStars from "./components/ParallaxStars";
import GradientBackground from "./components/GradientBackground";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

const App = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <TheNavbar />

      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ParallaxStars />
        </Canvas>
      </div>

      <div className="absolute inset-0 dark:hidden transition-opacity duration-700">
        <GradientBackground />
      </div>

      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};
export default App;
