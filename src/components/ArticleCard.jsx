import { useState } from "react";

function ArticleCard({ article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="article-card">
      <h3>{article.title}</h3>

      {/* Show summary OR full content */}
      <p>
        {expanded ? article.content : article.summary}
      </p>

      <button
        className="read-more-btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
}

export default ArticleCard;
