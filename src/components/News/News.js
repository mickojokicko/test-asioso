import React from "react";
import styles from "./News.module.css";
import { useState, useEffect } from "react";

export const News = function () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [startIndex, setStartIndex] = useState(20);
  const itemsPerPage = 3;

  const API_KEY = "7dc3f24354704719ab823cb3b3ca7bd3";

  useEffect(() => {
    const fetchedNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=technology&pageSize=100&apiKey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Network news response doesn't work!");
        }
        const resultData = await response.json();
        setData(resultData.articles);
        setLoading(false);
      } catch (err) {
        setErrMessage(err.message);
        setLoading(false);
      }
    };
    fetchedNews();
  }, []);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  if (loading) return <div>Loading...</div>;
  if (errMessage) return <div>{errMessage}</div>;

  const handleNextPage = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex((startIndex += itemsPerPage));
    }
  };

  const handlePreviousPage = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((startIndex -= itemsPerPage));
    }
  };

  return (
    <div className={styles.news}>
      {isModalOpen && selectedArticle && (
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={styles.modalImage}
            style={{ backgroundImage: `url(${selectedArticle.urlToImage})` }}
          ></div>
          <div>
            <div className={styles.closeButton} onClick={closeModal}>
              &times;
            </div>
            <h2>{selectedArticle.title}</h2>
            <h3>{selectedArticle.description}</h3>
            <p>{selectedArticle.content}</p>
          </div>
        </div>
      )}

      <div className={styles.newsHeading}>
        <div className={styles.above}>CURIOSITY</div>
        <div>News and trends</div>
        <div>
          <button className={styles.btn} onClick={handlePreviousPage}>
            Previous
          </button>
          <button className={styles.btn} onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>

      <div className={styles.cards}>
        {data.slice(startIndex, startIndex + itemsPerPage).map((item) => (
          <div
            key={item.urlToImage}
            className={styles.card}
            // onClick={() => openModal(item)}
          >
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${item.urlToImage})` }}
              onClick={() => openModal(item)}
            ></div>
            <div className={styles.cardPublisher}>{item.source.name}</div>
            <div className={styles.cardTitle} onClick={() => openModal(item)}>
              {" "}
              {item.title}
            </div>
            <div className={styles.cardDescription}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
