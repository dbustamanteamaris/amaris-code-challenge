import express, { Request, Response } from "express";
import { Client } from "pg";
const app = express();
const port = 3000;
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
client.connect();

//get all employees
app.get("/employees", (req: Request, res: Response) => {
  client.query("SELECT * FROM employees", (err: any, result: any) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(result.rows);
    }
  });
});

//get employee by id
app.get("/employees/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  client.query(
    "SELECT * FROM employees WHERE id = $1",
    [id],
    (err: any, result: any) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(result.rows);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
