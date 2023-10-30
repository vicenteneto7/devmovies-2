import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Series from "../pages/Series";
import Movies from "../pages/Movies";
import DefaultLayout from "../layout/DefaultLayout";


export default function Router (){
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            </Route>
        </Routes>
    )
}