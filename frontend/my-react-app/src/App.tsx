import Navbar from "./components/navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition">
      <Navbar />
      {/* <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default App;
