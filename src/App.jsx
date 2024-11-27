import React from "react";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import TodoPage from "./Pages/TodoPage";
import SettingsPage from "./Pages/SettingsPage";
import MainLayout from "./Layout/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TodoPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
