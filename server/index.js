const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
app.use(cors())
app.use(express.json())


app.post("/", async (req, res) => {
    const imageUrl = req.body.imageUrl;
    console.log("request received");
    try {
        const response = await axios.post("http://165.22.18.182:5000/yapayzeka", { imageUrl });
        res.json(response.data); // Başarılı yanıtı istemciye gönder
    } catch (error) {
        console.error("Error making request to external service:", error);
        res.status(500).send("Error processing request"); // Hata mesajını istemciye gönder
    }
})

app.listen("5001", () => {
    console.log("server is listening on 5001")
})
