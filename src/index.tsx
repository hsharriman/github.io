import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import cv from "./assets/cv.md";
import { ProjectPage } from "./components/ProjectPage";
import { PublicationPage } from "./components/PublicationPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MarkdownCV } from "./routes/CV";
import { Home } from "./routes/Home";
import { Illustrations } from "./routes/Illustrations";
import { projects, publications } from "./utils/consts";

const objs: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/illustrations",
    element: <Illustrations />,
  },
  {
    path: "/cv",
    element: <MarkdownCV mdFile={cv} />,
  },
];

const publicationPageRoutes: RouteObject[] = publications
  .filter((pub) => pub.links.pdf)
  .map((pub) => {
    return { path: pub.id, element: <PublicationPage {...pub} /> };
  });

const projectPageRoutes: RouteObject[] = projects.map((proj) => {
  return { path: proj.link, element: <ProjectPage {...proj} /> };
});

const router = createHashRouter(
  objs.concat(publicationPageRoutes).concat(projectPageRoutes)
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
