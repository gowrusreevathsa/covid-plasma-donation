export function getUserCountry() {
  let userCountry = "none";

  fetch("https://extreme-ip-lookup.com/json/")
    .then((res) => res.json())
    .then((response) => {
      console.log("Country: ", response.country);
      userCountry = response.country;
    })
    .catch((data, status) => {
      console.log("Request failed");
    });
  console.log("Country is - ", userCountry);
  return userCountry;
}



getUserCountry() {
    console.log("Inside getUserCountry");
    let country = "all";
    return fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => (country = response.country))
      .then(() => this.setState({ country }))
      .catch((data, status) => {
        console.log("Request failed");
      });
  }

  getCountryCases() {
    console.log("Inside getCountryCases");
    let covidCases = 0;
    fetch(
      "https://covid-193.p.rapidapi.com/statistics?country=" +
        this.state.country,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "7462fc126bmsh61e1b04c8ef6952p1c3ffdjsn332eaa43c91d",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => (covidCases = data.response["0"]["cases"]["total"]))
      .then(() => this.setState({ covidCases }))
      .catch((err) => {
        console.log(err);
      });
  }