import "./App.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import TransitionHead from "./components/TransitionHead";
function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex-col w-screen max-w-6xl lg:ml-64 mr-auto">
          <Searchbar />
          <TransitionHead />
        </div>
      </div>
    </div>
  );
}

export default App;
