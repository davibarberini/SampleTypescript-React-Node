import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

const app = express();

const port = 3000;

// add middlewares
app.use(express.static(path.join(__dirname, '../..', 'build')));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, '../..', 'build', 'index.html'));
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
