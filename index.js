var express = require("express");
var app = express();
// const https = require('https');
const axios = require("axios");

axios.defaults.headers.common = {
  Authorization: "Bearer " + "Hai",
};

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/test", async function (req, res) {
  const options ={
    method: 'get',
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    headers: {
        "Authorization": "auth"
    },
  }
  try {
    const response = await axios(options);

    const result = response.data;
    console.log(result,"response");
    res.send(result);
  } catch (err) {
    console.log(err, "err");
    // logger.error('Http error', err);
    res.status(500).send();
  }
});

// const res = await axios.post('https://httpbin.org/get', data,  { params: { key: "your key" } });

// axios.post('url', {"body":data}, {
//   headers: {
//   'Content-Type': 'application/json'
//   }
// }
// )

// axios({
//   method: 'get',
//   url: url,
//   headers: {
//       "Authorization": auth
//   },
// }).then(function (res) {
//   console.log(res.data)
// });

app.get("/test2", async function (req, res) {
  const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer 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`,
    },
  };

  try {
    const response = await axios.get(url, null, config);
    const result = response.data;
    // console.log(result,"response");
    res.send(result);
  } catch (err) {
    console.log(err, "err");
    // logger.error('Http error', err);
    res.status(500).send();
  }
});

app.listen(80, function () {
  console.log("Listening on port 80...");
});
