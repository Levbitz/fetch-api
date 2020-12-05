// javascript for create.html
const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    likes: 0,
  };

  await fetch("https://my-json-server.typicode.com/Levbitz/api/users", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });

  window.location.replace("/");
};

form.addEventListener("submit", createPost);
