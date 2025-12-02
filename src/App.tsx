import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"

function App() {

  return (
    <main className="bg-background min-h-screen w-full xl:px-25 lg:px-16 md:px-8 px-3 transition-all duration-500 font-gugi overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </main>
  )
}

export default App
