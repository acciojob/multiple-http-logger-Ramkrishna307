const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Don't change the above line
// Write your code here


async function fetchAndLog(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Response from ${url}:`, data);
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
  }
}

// Make asynchronous requests for each URL
async function makeRequests() {
  for (const url of urls) {
    await fetchAndLog(url);
  }
}

// Start making requests
makeRequests();
