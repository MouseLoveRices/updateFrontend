import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../src/components/videos/ListVideo";
import Video from "../src/components/video/Video";
import MainPage from "./components/main/MainPage";
import User from "./components/user/User";
import Contact from "./components/contact/Contact";
import NewHeader from "./components/header/NewHeader";
import Body from "./components/body/Body";
import Search from "./components/search/Search";


function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route index element={<Test/>}></Route>
        <Route path="/video/:id" element={<Video/>} />
        <Route path="/home" element={<MainPage/>}></Route>
        <Route path="/user/:id" element={<User/>}></Route>
        <Route path="/contact" element={<Body/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>   
    </Router>

    </div>
  );
}

export default App;
