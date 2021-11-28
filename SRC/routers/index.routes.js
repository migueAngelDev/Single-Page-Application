import { pages } from "../controllers/index";

let $content = document.getElementById("root");
const router = async (route) => {
  $content.innerHTML = "";

  switch (route) {
    case "#/": {
      return $content.appendChild(pages.home());
    }
    case "#/post":
      return $content.appendChild(await pages.post());
    case "#/about":
      return $content.appendChild(pages.about());
    case "#/users":
      return $content.appendChild(pages.users());
    default:
      return $content.appendChild(pages.notFound());
  }
};

export { router };
