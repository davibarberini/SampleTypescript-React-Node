import express from 'express';
import path from 'path';

const app = express();

const port = 3000;

// add middlewares
app.use(express.static(path.join(__dirname, "../..", "build")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../..", "build", "index.html"));
});


app.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})