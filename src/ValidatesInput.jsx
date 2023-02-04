import FetchUrl from "./FetchUrl";
// must be async to await response of FetchUrl
const validatesInput = async (url, name) => {
  // defines url regexp pattern to match/test against
  const urlPattern = new RegExp(
    "^(https://|http://)" + // does it have http:// or https://
      "(www\\.)" + // does it have www.
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name like example.com
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address like 192.168.0.1
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // does it have a port like :5173 or path like /posts
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // does it have a query parameter if its a search page
      "(\\#[-a-z\\d_]*)?$", // does it have an anchor like /about#history" (scrolls to)
    // the 'i' makes this whole pattern case insensitive
    "i"
  );
  // only accept alphanumerical, avoid SQL injections.
  const namePattern = new RegExp(/^[a-zA-Z0-9\s]+$/);
  // // if the URL and name match then fetch
  if (urlPattern.test(url) && namePattern.test(name)) {
    const respondsOk = await FetchUrl(url);
    if (respondsOk) return true;
    // if just the name doesnt match
  } else if (!namePattern.test(name)) {
    alert(
      "Name must be alphanumerical (max 15 characters from a-z/A-Z and 0-9)"
    );
  } else if (!urlPattern.test(url)) {
    // if jsut url isn't written correctly, give example of how to do it right
    alert("URL must look like: https://www.example.com");
  }
  // in any other case, prefer to return false
  return false;
};

export default validatesInput;
