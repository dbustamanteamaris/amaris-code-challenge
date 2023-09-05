import express, { Request, Response } from "express";
import { Client } from "pg";

const app = express();
const port = 3000;
try {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  client.connect();

  app.get("/employees", (req: Request, res: Response) => {
    client.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(result.rows);
      }
    });
  });

  app.get("/employees/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    client.query(
      "SELECT * FROM employees WHERE id = $1",
      [id],
      (err, result) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.json(result.rows);
        }
      }
    );
  });
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
