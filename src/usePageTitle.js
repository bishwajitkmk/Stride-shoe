import { useEffect } from "react";

// Keeps the document title in sync with the page being viewed.
const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitle;
