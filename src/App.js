import { useEffect, useState } from "react";
import articlesData from "./data/articles";


import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ArticleList from "./components/ArticleList";
import Pagination from "./components/Pagination";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // reset page
  };

  const handleCategory = (value) => {
    setCategory(value);
    setCurrentPage(1); // reset page
  };


  const articlesPerPage = 2;

  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || article.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div className="container">
      <h1>GeeksforGeeks Articles</h1>
      <Header />

      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />
      <CategoryFilter category={category} setCategory={handleCategory} />

      {loading ? (
        <p className="loader">Loading articles...</p>
      ) : paginatedArticles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ArticleList articles={paginatedArticles} />
    )}



      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;

