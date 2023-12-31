const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", userRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
