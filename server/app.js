const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

app.use(bodyParser.json());
app.post("/api/login", (req, res) => {
  const { username, password } = req.body; //req.body ifadesi, bir POST isteğinin gövdesindeki veriye erişmek için kullanılır. İstek gövdesi, genellikle kullanıcı tarafından doldurulan bir formdan veya bir API isteğinin içinden gelen JSON verisinden oluşur.

  // Check if username and password are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  // Find metodu aslında bir döngü
  // for (let user in users) {
  //   if (user.password == password) {
  //     return user
  //   }
  // }
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  // If user exists, return success message
  res.json({ message: "Login successful!" });
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ error: "Username already exists." });
  }
  users.push({ username, password });
  res.json({ message: "User registered successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
