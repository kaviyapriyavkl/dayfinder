import express from "express";
const app=express();
const port=3000;


app.get('/',(req,res)=>
{
    const today = new Date();
    const day = today.getDay();
    
    console.log(day);

    let dtp="a weekday";
    let adv="its's time to work hard!!🤓";

    if(day===0||day===6)
    {
       dtp="the weekend";
       adv ="it's time to have some fun💃🕺";
    }

    res.render("index.ejs",{
    dayType:dtp,
    advice: adv
});
});


app.listen(port,()=>
{
    console.log(`Server is running on port ${port}.`)
});

