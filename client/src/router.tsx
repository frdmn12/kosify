import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DashBoardLayout from "./layout/DashboardLayout";
import MainPage from "./pages/Dashboard/HomePage";
import PropertyPage from "./pages/Dashboard/PropertyPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />,
        <Route path="/about" element={<div>About</div>} />
      </Route>
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route path="home" element={<MainPage />} />
        <Route path="properties" element={<PropertyPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </>
  )
);
