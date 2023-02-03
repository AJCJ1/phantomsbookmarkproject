const validatesInput = async (url) => {
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
  if (urlPattern.test(url)) {
    // if jsut url isn't written correctly, give example of how to do it right
    return true;
  }
  if (!urlPattern.test(url)) {
    // if jsut url isn't written correctly, give example of how to do it right
    alert("URL must look like: https://www.example.com");
  }
  // in any other case, prefer to return false
  return false;
};

export default validatesInput;
