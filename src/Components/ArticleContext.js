import { createContext, useContext, useState, useEffect } from "react";

const ArticleContext = createContext();

export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
  const url = "https://win23-assignment.azurewebsites.net/api/articles";
  const [results, setResults] = useState([]);
  const [article, setArticle] = useState({});
  const controller = new AbortController();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getProduct = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (response.status === 200) {
        const data = await response.json();
        setArticle(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [controller.signal, url]);

  return (
    <ArticleContext.Provider
      value={{ results, setResults, article, setArticle, formatDate, getProduct }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
