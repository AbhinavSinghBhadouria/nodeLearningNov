const express = require("express");
const app = express(); 

// Multiply
app.get("/multiply", (req, res) => {
  const n = Number(req.query.a);
  const m = Number(req.query.b);
  res.send("The multiplication of the two values a and b is: " + (m * n));
});

// Add
app.get("/add", (req, res) => {
  const n = Number(req.query.a);
  const m = Number(req.query.b);
  res.send("The addition of the two values a and b is: " + (m + n));
});

// Subtract
// like initially we are doing the easy task but if someone sends the request in such a way that instead of writing the /routename?a=1&b=1
// if the user tries to access it like a/b then what we need to do is 
app.get("/sub/:a/:b", (req, res) => {
  const n = Number(req.query.a);
  const m = Number(req.query.b);
  res.send("The subtraction of the two values a and b is: " + (m - n));
});

// (/:a/:b) so by doing this we can create a dynamic get end point that can fetch data from user


// Divide
app.get("/divide", (req, res) => {
  const n = Number(req.query.a);
  const m = Number(req.query.b);

  if (n === 0) {
    res.send("Division by zero is not allowed!");
  } else {
    res.send("The division of a by b is: " + (m / n));
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
