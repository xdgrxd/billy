import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button variant="contained" color="primary">
            Test
          </Button>
        }
      />
      <Route path="*" element={<p>Error 404</p>} />
    </Routes>
  );
};
