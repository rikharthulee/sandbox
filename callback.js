// Callback function vs async/await
// Using a callback to handle the fetched data

function fetchUserDataCallback(callback) {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      callback(data); // Call the callback with the data
    });
}

// The data that comes back is sent to the parameter called user
// This function will be called after the data is fetched (if the fetch is successful).
function displayUser(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
}

// Run the fetch User Date function and pass displayUser as the callback.
// Aka, the data will be fetched and then display user will be called with the fetched data.
fetchUserDataCallback(displayUser);

//Using async/await to handle the fetched data

async function fetchUserDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const data = await response.json();
    console.log("Fetched data:");
    displayUser(data); // call the next function
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

function displayUser(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
}

fetchUserDataAsync();
