import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import RecommendVideo from "./RecommendVideo/RecommendVideo";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Search from "./Components/SearchPage/Search";

function App() {
    return <BrowserRouter>
        <div className={"app"}>
            <Header/>
            <Routes>
                <Route path={"/search/:searchTerm"} element={<div className={"sidebar-page"}>
                    <Sidebar/>
                    <Search/>
                </div>}/>
                <Route path={"/"} element={<div className={"sidebar-page"}>
                    <Sidebar/>
                    <RecommendVideo/>
                </div>}/>
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>

        </div>
    </BrowserRouter>
}

export default App;
