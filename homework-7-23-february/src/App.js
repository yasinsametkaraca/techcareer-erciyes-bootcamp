import React from 'react';
import {Route, Routes} from "react-router";
import ProductPage from "./pages/ProductPage";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
