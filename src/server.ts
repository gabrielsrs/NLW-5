import express from "express";

const app = express();

app.get("/", (request, response) => {
 return response.json({ message: "Response get..."})
})

app.post("/", (request, response) => {
 return response.json({ message: "Response post..."})
})

app.listen(5000, () => console.log("server is run!!"))