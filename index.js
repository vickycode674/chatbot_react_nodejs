const express = require("express");
const cors = require("cors");
const {default:axios}=require("axios")  //refering axios to connect apis

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
      const r=await axios.put(
        'https://api.chatengine.io/users/',
        {username:username,secret:username,first_name:username},
        {headers:{"private-key":"3feda8f6-7ef8-424e-9b92-1741da4f07b8"}}
      );
      return  res.status(r.status).json(r.data);
  }catch(e){
    return  res.status(e.response.status).json(e.response.data);

  }
});

app.listen(3001);