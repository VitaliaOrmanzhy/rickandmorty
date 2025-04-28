export const getPageNumber = (url) => {
  if (!url) return null;
  const queryString = new URL(url).search;
  return new URLSearchParams(queryString).get("page");
};
