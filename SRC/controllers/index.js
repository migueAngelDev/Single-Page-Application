import Home from "./home.controller";
import Post from "./post.controller";
import About from "./about.controller";
import Users from "./users.controller";
import notFound from "./404.controller";

const pages = {
  home: Home,
  post: Post,
  about: About,
  users: Users,
  notFound: notFound,
};

export { pages };
