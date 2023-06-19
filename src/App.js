import "./App.css";
import Header from "./Components/Header";
//I changed the file name from SideBar.js to Sidebar.js and it's giving me this error and I'm not entirely sure why.
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
