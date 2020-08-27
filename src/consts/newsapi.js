export const newsAPIKey = "aecdbb6b71774a999fe7e6d4e2c7824a";

export const newsURL = `https://newsapi.org/v2/top-headlines?q=corona&pageSize=20&sources=bbc-news&apiKey=${newsAPIKey}`;

fetch(
  "https://newsapi.org/v2/top-headlines?q=corona&pageSize=1&sources=bbc-news&apiKey=aecdbb6b71774a999fe7e6d4e2c7824a"
)
  .then((r) => r.json())
  .then((r) => r.articles["0"])
  .then((r) => console.log(r.source.name));
