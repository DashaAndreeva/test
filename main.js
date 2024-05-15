const myList = document.querySelector("#app");

fetch("./readList.json")
  .then((response) => response.json())
  .then((data) => {
    parseReadList(data);
  })
  .catch((error) => console.error("Error fetching JSON:", error));

function parseReadList(list) {
  console.log(list); // тут ми отримаємо масив об'єктів
  list.forEach(renderList);
}

function listTemplate(item) {
  return ` <div class="container">
        <p>${item.name}</p>
        <img src="${item.url}" alt="">
        <p>${item.start}</p>
        <p>${item.end}</p>
        <p>${item.grade}</p>
      </div>`;
}

function renderList(item) {
  const markup = listTemplate(item);
  myList.insertAdjacentHTML("beforeend", markup);
}
