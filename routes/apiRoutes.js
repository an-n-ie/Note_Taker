const router = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")

router.get("/api/notes", (req,res)=>{
    res.json(db)
})
// create POST

router.post("/api/notes",(req,res)=>{

    console.log(req.body);

    const { title, text } = req.body;

 
    if (title && text ) {
      const newNote = {
        title,
        text,
      };

 }})

//  create DELETE
// router.delete(`/api/notes/${id}`,(req,res)=>{

// })

module.exports=router