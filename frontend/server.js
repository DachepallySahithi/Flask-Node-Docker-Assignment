console.log("Server started");

const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

const BACKEND_URL =
    process.env.BACKEND_URL || "http://localhost:5000/submit";

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", async (req, res) => {

    try {
        const response = await axios.post(
            BACKEND_URL,
            req.body,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(response.data);

        res.sendFile(
            path.join(__dirname, "public", "success.html")
        );

    } catch (error) {
        console.log(error.message);
        res.send("Error communicating with backend");
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});