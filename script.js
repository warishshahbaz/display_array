// Simulated API endpoints
const API_ENDPOINT_1 = "https://dummyjson.com/posts";
const API_ENDPOINT_2 = "https://dummyjson.com/products";
const API_ENDPOINT_3 = " https://dummyjson.com/todos";

// Simulated fetch function
function fetchData(url, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: `Data from ${url}` };
      console.log(`Fetched data from ${url}:`, data);
      const element = document.createElement("div");
      element.textContent = data.message;
      document.body.appendChild(element);
      resolve(true);
    }, time);
  });
}

// Function to fetch data from API endpoint 1
function PromiseAPI1() {
  return fetchData(API_ENDPOINT_1, 1000);
}

// Function to fetch data from API endpoint 2
function PromiseAPI2() {
  return fetchData(API_ENDPOINT_2, 2000);
}

// Function to fetch data from API endpoint 3
function PromiseAPI3() {
  return fetchData(API_ENDPOINT_3, 3000);
}

// Function to start the promise chain
function startPromiseChain() {
  console.log("Promise chain started");
  PromiseAPI1()
    .then((result) => {
      if (result) {
        return PromiseAPI2();
      }
    })
    .then((result) => {
      if (result) {
        return PromiseAPI3();
      }
    })
    .then((result) => {
      if (result) {
        console.log("Promise chain completed");
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

// Add click event listener to start the promise chain when the button is clicked
const button = document.getElementById("startButton");
button.addEventListener("click", startPromiseChain);
