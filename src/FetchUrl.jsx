const FetchUrl = async (url) => {
  // Define a constant for the CORS proxy URL
  const corsProxy = "https://cors-anywhere.herokuapp.com/";

  try {
    // Fetch the URL using the CORS proxy and the HEAD method (less data transfer)
    const response = await fetch(corsProxy + url, { method: "HEAD" });
    // Check if the response status code is in the success range (200-299)
    if (response.status >= 200 && response.status <= 299) {
      console.log("response is 200-299")
    }
  } catch (error) {
    // If there was an error with the fetch operation, show an alert with the error message
    alert(`problem trying to fetch the site${error}`);
  }
  return false;
};

export default FetchUrl;
