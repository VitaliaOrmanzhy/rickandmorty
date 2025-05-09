export const getPageNumberFromURL = (url: string): number | null => {
  const queryString = new URL(url).search;
  const page = new URLSearchParams(queryString).get("page");
  return page ? Number(page) : null;
};

