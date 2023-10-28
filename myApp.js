let bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log("Hello World");
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();

});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
});
app.use("/public", express.static(__dirname + "/public"));

app.post("/name", (req, res) => {
  let string = req.body.first + " " + req.body.last;
  res.json({ name: string });
  
});


// app.get("/json", function(req, res) {
//   if(process.env.MESSAGE_STYLE === "uppercase"){
//     res.json({"message": "HELLO JSON"});
//   } else {
//     res.json({"message": "Hello json"});
//   }
  
// });

// app.get("/now", (req, res, next) => {
//         req.time = new Date().toString();
//         next();
//     }, 
//   (req, res) => {
//         res.send({
//             time: req.time
//         });
//     }
// )

// app.get("/:word/echo", (req, res) => {
//   const { word } = req.params;
//   res.json({
//     echo: word
//   });
// });

// app.get("/name", (req, res) => {
//   let string = req.query.first + " " + req.query.last;
//   res.json({ name: string });
// });






























 module.exports = app;
