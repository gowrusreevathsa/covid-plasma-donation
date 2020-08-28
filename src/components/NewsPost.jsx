import React, { Component } from "react";
import { newsURL } from "../consts/newsapi.js";
import NewsArticle from "./NewsArticle";

class NewsPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsData: "",
    };
  }

  componentDidMount() {
    this.getNewsData();
    console.log("Done");
  }

  getNewsData() {
    let newsData = [];
    fetch(newsURL)
      .then((r) => r.json())
      .then((r) => r.articles)
      .then((r) => {
        // console.log(r);
        let len = r.length;
        console.log(len);

        for (let i = 0; i < len; ++i) {
          newsData.push({
            source: r[i]["source"]["name"],
            title: r[i]["title"],
            description: r[i]["description"],
            url: r[i]["url"],
            content: r[i]["content"],
          });
          console.log(r[i]["source"]["name"]);
        }

        this.setState({
          newsData,
        });
      });
  }

  render() {
    return (
      <>
        <h3>This is News Post section</h3>
        {/* <h3>{this.state.newsData}</h3> */}
        {newsURL}
        <NewsArticle />
      </>
    );
  }
}

export default NewsPost;
