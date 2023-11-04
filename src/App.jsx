import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="form" element={<Form />} />
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
