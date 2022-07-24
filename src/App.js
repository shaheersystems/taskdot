import "./App.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 max-w-6xl mr-auto">
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default App;
