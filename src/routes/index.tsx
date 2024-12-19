import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { BuyPage } from "../pages/BuyPage/BuyPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<BuyPage/>}
      />
      <Route path="*" element={<p>Error 404</p>} />
    </Routes>
  );
};
