import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import Dashboard from "./pages/dashboard/Dashboard";
import Api from "./pages/api/Api";
import RootLayout from "./layout/RootLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="form" element={<Form />} />
      <Route path="dashboard" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="api" element={<Api />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
};

export default App;
