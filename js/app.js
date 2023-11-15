const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://api.thecatapi.com/v1/images/search";

button.addEventListener("click", () => {
    xhrHandler()
    .then(data => image.src = data);
})

function xhrHandler() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.responseType = "json";

        xhr.open("GET", url);

        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onload = event => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response[0].url);
            }
        }

        xhr.send();
    })
}