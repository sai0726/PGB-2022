const express = require("express");
const path = require("path");
const logger=require('./logger');
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const dbPath = path.join(__dirname, "assignment.db");
const cors=require("cors")
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(5000, () => {
      console.log("Server Running at http://localhost:5000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();
app.use(
  cors({
    origin:"*"
  })
)

app.use(express.json())

app.post("/relate",(request,response)=>{
  try{
    const levels=request.body;
    logger.info(JSON.stringify(levels))
  }
  catch(error){
    logger.info(JSON.stringify(error))
  }
  
})

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/java/", async (request, response) => {
  try{
    const getJavaQuery = `
    SELECT
      *
    FROM
      java;`;
    const javaArray = await db.all(getJavaQuery);
    response.send(javaArray);
    logger.info(JSON.stringify("java questions"))
  }
  catch(error){
    logger.info(JSON.stringify(error))
  }
  
});

app.get("/python/", async (request, response) => {
  try{
    const getPythonQuery = `
    SELECT
     *
    FROM
      python;`;
    const python = await db.all(getPythonQuery);
    response.send(python);
    logger.info(JSON.stringify("python questions"))
  }
  catch(error){
    logger.info(JSON.stringify(error))
  } 
});

app.get("/javascript/", async (request, response) => {
  try{
    const getJavascriptQuery = `
    SELECT
      *
    FROM
    javascript;`;
    const javascript = await db.all(getJavascriptQuery);
    response.send(javascript);
    logger.info(JSON.stringify("javascript questions"))
  }
  catch(error){
    logger.info(JSON.stringify(error))
  }  
});