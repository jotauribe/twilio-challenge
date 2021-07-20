import express from "express";
// import axios from "axios";

const app = express();

app.get(
  [
    // ignore; endpoint for easily viewing the default server
    // response on CodeSandbox
    "/",
    // endpoint initially used by the React app
    "/api/test-endpoint"
  ],
  (req, res) => {
    res.status(200).json({ test: "hello world!" });
  }
);

app.get("/api/users/:username", async (req, res) => {
  // your code here!
});

export default app;