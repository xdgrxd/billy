import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home page</p>} />
      <Route path="*" element={<p>Error 404</p>} />
    </Routes>
  );
};
