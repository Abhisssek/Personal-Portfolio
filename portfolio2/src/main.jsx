import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import { About } from "./components/about/About.jsx";
import { Process } from "./components/Process.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Blog } from "./components/Blog.jsx";
import { Services } from "./components/Services.jsx";
import { Contact } from "./components/Contact.jsx";


const router = createBrowserRouter([{ path: "/", element: <Home /> },
{path:"/about",
  element:<About full={true} half={false}/>
},

{path:"/portfolio",
  element:<Portfolio full={true} isHome={false}/>
},
{path:"/blog",
  element:<Blog/>
},
{path:"/services",
  element:<Services full={true}/>
},
{path:"/contact",
  element:<Contact full={true}/>
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
