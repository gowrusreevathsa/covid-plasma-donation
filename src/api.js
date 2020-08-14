function apiTest() {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    "GET",
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada"
  );
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "covid-19-coronavirus-statistics.p.rapidapi.com"
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "7462fc126bmsh61e1b04c8ef6952p1c3ffdjsn332eaa43c91d"
  );

  xhr.send(data);
  console.log(xhr.response);
}
