const puppeteer = require('puppeteer');
const express = require("express")
const ejs = require("ejs")


const app = express()
app.set("view engine", "ejs")

app.get("/",(req,res)=> {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(100000);
    await page.goto('http://localhost:8000/table');
    await page.pdf({ path: 'hn.pdf', format: 'a4' });
      res.send("Pdf")
    // await browser.close();
  })();
  
})

app.get("/table",(req,res)=> {
  res.render("tableClients")
})

app.listen(8000,()=> {
  console.log("Server running")
})

