import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />,
        <Route path="/about" element={<div>About</div>} />
      </Route>
      <Route path="/login" element={<LoginPage />} /> 
    </>
  )
);
