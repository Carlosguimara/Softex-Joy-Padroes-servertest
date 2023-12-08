import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo ao meu web service!');
});

const porta = 3000;

app.listen(porta, () => {
  console.log(`URL do servidor http://localhost:${porta}`);
});