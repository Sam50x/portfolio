import Nav from "./sections/Nav"
import Projects from "./sections/Projects"

function App() {

  return (
    <main className="bg-background min-h-screen w-full xl:px-25 lg:px-16 md:px-8 px-3 transition-all duration-500 font-gugi">
      <Nav />
      <Projects />
    </main>
  )
}

export default App
