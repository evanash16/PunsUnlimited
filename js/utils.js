loadFileContents = function(url, callback) {
  $.get(url, callback);
}

createUrl = function(base, queryArgs) {
  let urlParams = new URLSearchParams(queryArgs);
  return base + (Object.keys(queryArgs).length > 0 ? ("?" + urlParams) : "");
}