import React, { useState, useEffect } from 'react';
import articleService from '../services/articleService';

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await articleService.getArticles();
      setArticles(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <ul>
        {articles.map((elem) => (
          <li key={elem._id}>
            <img src={elem.product.image} alt="" />
            <p>{elem.price} € </p>
            <p>{capitalizeFirstLetter(elem.supermarket.name)}</p>
            <p>{elem.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
