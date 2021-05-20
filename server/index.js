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
app.get("/transact/:p1/:p2/:p3",function(req,res){
    var prm1=req.params.p1;
    var prm2=req.params.p2;
    var prm3=req.params.p3;

    console.log(prm1);
    console.log(prm2);
    console.log(prm3);

    global.flag=0;  //send in the form of an object or string, since node cant send number
    global.bal_1=0;
    global.bal_2=0;


    const sqlSearch_1="SELECT * FROM customers WHERE customers.name=(?)";
    db.query(sqlSearch_1,[prm1],function(err,response){
      if(err)
      {
          console.log(err);
      }
      else
      {
          //console.log("Entry saved into DB"); 
          console.log(response);
          bal_1=response[0].balance;
          //console.log(bal_1);
          const sqlSearch_2="SELECT * FROM customers WHERE customers.name=(?)";
          db.query(sqlSearch_2,[prm2],function(err,response){
            if(err)
            {
                console.log(err);
            }
            else
            {
                //console.log("Entry saved into DB"); 
                console.log(response);
                bal_2=response[0].balance;
                bal_1=Number(bal_1)+Number(prm3);
                bal_2=Number(bal_2)-Number(prm3);
                console.log(bal_1,bal_2);
                if(Number(bal_2)<0)
                {
                  console.log("insuff");
                  res.send({"flag":flag});
                }
                
                else{

                console.log(bal_1,bal_2);
                flag=1;
                console.log("success");
                const sqlUpdate_1 = "UPDATE customers SET balance=(?) WHERE name=(?)"
                db.query(sqlUpdate_1,[bal_1,prm1],function(err,reply){
                  if(err)
                  {
                      console.log(err);
                  }
                  else
                  {
                    console.log(reply);
                    res.send({"flag":flag});
                  }
                });
                const sqlUpdate_2 = "UPDATE customers SET balance=(?) WHERE name=(?)"
                db.query(sqlUpdate_2,[bal_2,prm2],function(err,reply){
                  if(err)
                  {
                      console.log(err);
                  }
                  else
                  {
                    console.log(reply);
                  }
                });
              }

            }
          });
        

      }
  });
  
    

})




//SQL database: bankdb, table: customers, fields: name, type, balance


app.listen(3001,function(){ //server running on 3001, client running on 3000
    console.log("Server running on port 3001!");
});
