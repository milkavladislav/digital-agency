import React from "react";
import "./Blog.css";

import News1 from "../../assets/blog/News1.png";
import News2 from "../../assets/blog/News2.png";
import News3 from "../../assets/blog/News3.png";
import News4 from "../../assets/blog/News4.png";
import News5 from "../../assets/blog/News5.png";

import RightArrow from "../../assets/common/right-arrow.png";

interface INews {
  title: string;
  image: string;
  date?: string;
  category: string;
  text?: string;
}

const lastNews: INews = {
  title: "I think night-time is dark so you can imagine with less distraction",
  category: "Website design",
  image: News1,
  date: "Thursday, 26 March 2020",
  text: "The engine that gives its mysterious inner life to a work of art must be the subterranean expression of a wish, working its way to the surface of a narrative. change is an easy panacea. it takes character to stay in one...",
};

const news: INews[] = [
  {
    title:
      "The individual is born of nature, but the artist is born of that individual",
    category: "website development",
    image: News2,
  },
  {
    title:
      "A life without it is like a sunless garden when the flowers are dead",
    category: "Brand Design",
    image: News3,
  },
  {
    title: "All sorrows can be borne if they can be put into a story",
    category: "UI UX Design",
    image: News4,
  },
  {
    title: "Love is friendship set on fire. certain thoughts are prayers",
    category: "Brand Design",
    image: News5,
  },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2>
        From our <span>blog</span>
      </h2>
      <div className="blog__parts">
        <div className="blog__main">
          <img src={lastNews.image} alt={lastNews.title} />
          <p>{lastNews.category + " | " + lastNews.date}</p>
          <h3>{lastNews.title}</h3>
          <p>{lastNews.text}</p>
          <div className="read__more">
            <a href="/">Read more</a>
            <img src={RightArrow} alt="right-arrow" />
          </div>
        </div>
        <div className="blog__sidebar">
          {news.map(({ title, category, image }) => (
            <div className="blog__sidebar-card">
              <img src={image} alt={title} />
              <div className="blog__sidebar-card-text">
                <p>{category}</p>
                <h3>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
