import view from "../views/post.html";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const postsElement = divElement.querySelector("#posts");

  let totalPost = divElement.querySelector("#total");

  const post = await getPosts();

  totalPost.innerHTML = post.length;

  post.forEach((post) => {
    postsElement.innerHTML += `
    <li class="mt-5">
    <h5 class="text-center">${post.title}</h5>
    <p>
    ${post.body}
    </p>
    </li>
    `;
  });

  return divElement;
};
