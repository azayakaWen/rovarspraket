import "./App.css"
import Translater from "./components/Translater"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Translater />
    </div>
  )
}

export default App
