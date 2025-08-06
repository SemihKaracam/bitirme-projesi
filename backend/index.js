const express = require("express")
const cors = require("cors")
const app = express()
const fs = require('fs');
const mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'semih1306',
    database: 'firebase'
});

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.json("deneme json")
    console.log("deneme console")
})

app.get("/deneme", (req, res) => {
    console.log("deneme requesti")
    const q = "select * from users"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// app.post("/",(req,res)=>{
//     const q = `insert into users (tcNo,password,healthId) values ?;`;

//     var user={
//         "tcNo":req.body.tcNo,
//         "password":req.body.password,
//         "healthId":req.body.healthId,
//       }

//     db.query(q,user,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })



app.post("/resimYukle", (req, res) => {
    console.log(req.body)
    const q = `insert into images (imageUrl,labelName,metadata) values (?, ?, ?);`;
    var values = [
        req.body.imageUrl,
        null,
        JSON.stringify(req.body.metadata)
    ]

    db.query(q, values, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })

    // Dosya oluşturma ve yazma işlemi

})

app.get("/resimleriGetir", (req, res) => {
    console.log(req.body)
    const q = `select * from images`;
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        console.log("data: ", data)
        return res.json(data)
    })
    // Dosya oluşturma ve yazma işlemi
})


app.delete("/resimSil", (req, res) => {
    const imageUrl = req.body.imageUrl
    const q = `delete from images where imageUrl = ?`;
    db.query(q,[imageUrl],(err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        console.log("data: ", data)
        return res.json(data)
    })
})

app.put("/resimEtiketle", (req, res) => {
    const { imageUrl, labelName } = req.body; // POST isteğiyle gelen verileri al
    console.log(`imageurl:${imageUrl} labelName:${labelName}`)
    if (!imageUrl || !labelName) {
        return res.status(400).send('Eksik bilgi: id, sutunAdi ve yeniDeger zorunludur.');
    }

    // Güncelleme sorgusu
    const sql = `UPDATE images SET labelName = ? WHERE imageUrl = ?`;

    // Sorguyu çalıştırma
    db.query(sql, [labelName,imageUrl], (err, result) => {
        if (err) {
            console.error('Hata:', err.message);
            return res.status(500).send('Veritabanında güncelleme yapılırken bir hata oluştu.');
        }
        console.log('Güncellendi:', result.affectedRows, 'satır güncellendi.');
        res.status(200).send('Satır başarıyla güncellendi.');
    });

})

app.listen("5001", () => {
    console.log("server is listening on 5001")
})
