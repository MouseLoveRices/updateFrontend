import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayVideo from "./pages/PlayVideo";
import UserProfile from "./pages/UserProfile";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/HistoryPage";
import WatchLaterPage from "./pages/WatchLaterPage";


function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route index element={<HomePage/>}></Route>       
        <Route path="/video/:id" element={<PlayVideo/>} />
        <Route path="/us" element={<AboutUsPage/>}></Route>
        <Route path="/user/:id" element={<UserProfile/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/history" element={<HistoryPage/>}></Route>
        <Route path="/later" element={<WatchLaterPage/>}></Route>
      </Routes>   
    </Router>

    </div>
  );
}

export default App;
