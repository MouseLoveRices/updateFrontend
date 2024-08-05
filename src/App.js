import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../src/components/videos/ListVideo";
import Video from "../src/components/video/Video";
import MainPage from "./components/main/MainPage";
import User from "./components/user/User";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route index element={<Test/>}></Route>
        <Route path="/video/:id" element={<Video/>} />
        <Route path="/home" element={<Header/>}></Route>
        <Route path="/user/:id" element={<User/>}></Route>
      </Routes>   
    </Router>

    </div>
  );
}

export default App;
