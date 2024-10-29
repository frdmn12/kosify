import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/layout/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<div>Home</div>} />,
        <Route path="/about" element={<div>About</div>} />
      </Route>
    </>
  )
);
