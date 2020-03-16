const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', './view');
app.set('view engine', 'ejs');

let studentList = [
  {
    id: 1,
    picture: "🌽",
    name: "sonter",
    age: 18,
    point: 75,
    discription:
      "I'm sonter from computer engineering A university. I'm 18 years old."
  },
  {
    id: 2,
    picture: "🥑",
    name: "nat",
    age: 19,
    point: 78,
    discription:
      "I'm nat from computer engineering B university. I'm 19 years old."
  },
  {
    id: 3,
    picture: "🥦",
    name: "tle",
    age: 22,
    point: 97,
    discription:
      "I'm tle from computer engineering C university. I'm 22 years old."
  }
];

// app.get('/',function (req,res) {
//   res.send('Hello, World');
// })

// app.get('/findByName', function(req,res){
//   let name = req.query.name;
//   let targetStudent;
//   for(let i = 0; i < studentList.length; i++){
//     if( studentList[i].name == name){
//         targetStudent = studentList[i];
//     }

//   }
//   res.send(targetStudent);
// })

// app.get('/findByName', function(req,res){
//   let name = req.query.name;
//   let targetStudent;
//   for(let student of studentList){
//     if( student.name == name){
//       targetStudent = student;
//     }

//   }
//   res.send(targetStudent);

// })

app.get("/findByName", function(req, res) {
  let name = req.query.name;
  let targetStudent = studentList.find(function(student) {
    return student.name == name;
  });
  res.send(targetStudent);
});

app.get('/', function(req,res){
  res.render('index', {studentList})
})



app.listen(8000, function() {
  console.log("server is running on port 8000");
});
