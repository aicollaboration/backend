var express = require("express");
var app = express();
// const https = require('https');
const axios = require("axios");
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://exrcpfgiopxnpdbziykr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDIwMjQ5NiwiZXhwIjoxOTI5Nzc4NDk2fQ.Z6awBtD8HNl_FWJposOdSLcU8oE2wErlHqiJR4jZKPE'
);

const GITAPI_KEY = "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";

axios.defaults.headers.common = {
  Authorization: "Bearer " + "Hai",
};



app.get("/", function (req, res) {
  res.send("Welcome!");
});

app.get("/test", async function (req, res) {
  const options = {
    method: "get",
    url: "http://httpbin.org/get",
    headers: {
      Authorization: "auth",
    },
  };
  try {
    const response = await axios(options);

    const result = response.data;
    console.log(result, "response");
    res.send(result);
  } catch (err) {
    console.log(err, "err");
    // logger.error('Http error', err);
    res.status(500).send();
  }
});

app.get("/test1", async function (req, res) {
  res.send("Simply Hello World!");
});

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


app.get("/createRepoTest/:reponame", async function (req, res) {
  const template = "aicollaboration/solution-app-template";
  const owner = "vimalkovath";
  const name = req.params.reponame ||"vimal";

  console.log(owner,name,template)
  const url = `https://api.github.com/repos/${template}/generate`;
  const data = {
    owner,
    name,
  };

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITAPI_KEY}`,
    },
  };

  console.log(url)

  https://api.github.com/repos/aicollaboration/solution-app-template/generate



  try {
    const response = await axios.post(url, data, config);
    const result = response.data;
    console.log(result, "response");

    res.send(result.data);
  } catch (err) {
    console.log(err.response.data, "err");
    // logger.error('Http error', err);
    res.status(500).send();
  }
});




app.get("/createRepo/:template/:owner/:name", async function (req, res) {
  const template = req.params.template || "test";
  const owner = req.params.owner || "test";
  const name = req.params.name || "test";

  const url = `https://api.github.com/repos/${template}/generate`;
  const data = {
    owner,
    name,
  };

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITAPI_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, config);
    const result = response.data;

    // this.loadingMessages.push('Store in database');
    // const database = await this.solutionService.createSolution(solution);
    // this.loadingMessages.push(`Stored in database`);


    solution.author = this.supabase.auth.user().id;
    const { data, error } = await this.supabase.from('solution').insert(solution);


    console.log(result, "response");
    // res.send(url+ 'data: ' + JSON.stringify(data));

    res.send(result);
  } catch (err) {
    console.log(err.response, "err");
    // logger.error('Http error', err);
    res.status(500).send();
  }
});

// reponse back

app.listen(80, function () {
  console.log("Listening on port 80...");
});
