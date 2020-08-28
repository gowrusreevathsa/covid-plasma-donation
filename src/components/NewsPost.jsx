import React, { Component } from "react";
import { newsURL } from "../consts/newsapi.js";
import NewsArticle from "./NewsArticle";

class NewsPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsData: [
        {
          source: "",
          title: "",
          description: "",
          url: "",
          content: "",
        },
      ],
    };
  }

  componentDidMount() {
    this.getNewsData();
  }

  getNewsData() {
    let newsData = [];
    fetch(newsURL)
      .then((r) => r.json())
      .then((r) => r.articles)
      .then((r) => {
        let len = r.length;

        for (let i = 0; i < len; ++i) {
          newsData.push({
            source: r[i]["source"]["name"],
            title: r[i]["title"],
            description: r[i]["description"],
            url: r[i]["url"],
            content: r[i]["content"],
          });
        }
        console.log(newsData);
        this.setState({
          newsData,
        });
      });
  }

  render() {
    const newsArticles = this.state.newsData.map((article) => (
      <NewsArticle
        source={article.source}
        title={article.title}
        description={article.description}
        content={article.content}
        url={article.url}
      />
    ));
    return <>{newsArticles}</>;
  }
}

export default NewsPost;
