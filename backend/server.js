// GET LIPSTICK PRODUCTS
app.get("/products/lipsticks", (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category = 'lipstick'",
    (err, result) => {
      if (err) res.status(500).json(err);
      else res.json(result);
    }
  );
});
