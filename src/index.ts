import express, { Request, Response } from "express";
const app = express();
const port = 3000;
const client = app.get("/empleados", (req: Request, res: Response) => {
  db.all("SELECT * FROM employees", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

app.get("/empleados/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  db.get("SELECT * FROM employees WHERE employeeId = ?", [id], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(row);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
