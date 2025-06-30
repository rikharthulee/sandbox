function fetchUserDataCallback(callback) {
  // Callback function vs async/await
  // Using a callback to handle the fetched data

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      callback(data); // Call the callback with the data
    });
}

function displayUser(data) {
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
}

// Run the fetch and pass displayUser as the callback
fetchUserDataCallback(displayUser);

// Using async/await to handle the fetched data

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
