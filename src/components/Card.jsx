import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    const { article } = props;

  return (
    <div>
        <Link to={`/articles/${article._id}`}>
        <img
          src={article.image}
          alt={article.name}
        />
        </Link>
    </div>
  )
}
