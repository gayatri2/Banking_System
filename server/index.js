const express = require('express')
const bodyParser=require("body-parser");
const cors=require("cors");
const app = express()
const mysql=require('mysql')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'amazing',
    database:'bankdb'
 });

 //inserting entries into database
 /*app.get("/",function(req,res){
      //inserting entries into database
    const sqlInsert="INSERT INTO customers (name, type, balance) VALUES ('Phoebe Adams','current','50000')";
    db.query(sqlInsert,function(err,result){
        if(err)
        {
            console.log(err);
        }else
        {
            console.log("Entry saved into DB");
        }
        res.send("Hello");
    
});*/

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json()); //to fetch something from front end

app.get("/api/get",function(req,res){   //get results ie contents from table and render it to front end
    const sqlSelect="SELECT * FROM customers";
    db.query(sqlSelect,function(err,results){
        console.log(results);
        res.send(results);
        
    });
})


app.post("/api/insert",function(req,res){
    
    const cname=req.body.cname;      //to get the information entered at the front end
    const ctype=req.body.ctype;
    const cbalance=req.body.cbalance;


    const sqlInsert="INSERT INTO customers (name, type, balance) VALUES (?,?,?)";
    db.query(sqlInsert,[cname,ctype,cbalance],function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            //console.log("Entry saved into DB"); 
            console.log(result);
        }
    });
})

app.get("/Customerinfo/:inp",function(req,res){
    var prm=req.params.inp;
    console.log(prm);

    const sqlSearch="SELECT * FROM customers WHERE customers.name=(?)";
    db.query(sqlSearch,[prm],function(err,response){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(response);
        }
    });
    
    

})




//SQL database: bankdb, table: customers, fields: name, type, balance


app.listen(3001,function(){ //server running on 3001, client running on 3000
    console.log("Server running on port 3001!");
});
