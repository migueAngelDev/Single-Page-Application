import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

import { router } from "./routers/index.routes";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
