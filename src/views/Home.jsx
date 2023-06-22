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

  return (
    <div>
      <h1>Homesasas</h1>
      <ul>
        {articles.map((elem) => (
          <li key={elem._id}>
            <p>{elem.product.image}</p>
            <p>Price: {elem.price}</p>
            <p>Supermarket: {elem.supermarket.name}</p>
            <p>Product: {elem.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
