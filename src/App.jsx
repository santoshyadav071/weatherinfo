import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import CheakWeather from "./Components/Pages/CheakWeather";
import Applayout from "./Components/Layout/Applayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudyWeather from "./Components/Pages/StudyWeather";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
         path: "/",
         element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cheakweather",
          element: <CheakWeather />
        },
        {
          path: "/studyweather",
          element: <StudyWeather />
        }
        
    ],
  },
]);

const App = () => {
  return <RouterProvider  router ={router}></RouterProvider>

  
}

export default App
