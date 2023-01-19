// const githubapi = require("./githubapi");

const { Octokit } = require("@octokit/rest");
require("dotenv").config();
const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

const run = async () => {
  const results = await octokit.rest.search.repos({
    q: "advent+of+code+2022",
  });
  console.log({ results });
};

run();
