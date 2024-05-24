const express = require("express");
const cors=require("cors")
const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.send({
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
  }
  );
});

// age api
app.get("/age",(request,response)=> {
  response.send({"age":24})
})

app.listen(3000,()=> {
    console.log("started")
});