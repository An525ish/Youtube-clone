import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import "./App.css";

import Header from './Components/Header.jsx'
import Feed from './Components/Feed.jsx'
import SearchResult from './Components/SearchResult.jsx'
import VideoDetails from './Components/VideoDetails.jsx'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col">
        <Header/>
        <Routes>
          <Route path='/' exact element={<Feed/>}></Route>
          <Route path='/searchResult/:searchQuery' element={<SearchResult/>}></Route>
          <Route path='/video/:id' element={<VideoDetails/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
