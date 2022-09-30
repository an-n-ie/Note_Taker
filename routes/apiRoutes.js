const router=require("express").Router()
const fs=require("fs")
const db=require("../db/db.json")

router.get("/api/notes", (req,res)=>{
    res.json(db)
})
// create POST

router.post("/api/notes",(req,res)=>{
    // res.json(db)
    console.log(req.body);
 
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
      };
  
      readAndAppend(newNote, './db/db.json');
    } else {
      res.error('Error in adding tip');
    }

    // db is an array; need array function to add new element or value of an array
// think about updating the revides db with new data itno the db.json
})

// router.delete(`/api/notes/${id}`,(req,res)=>{

// })

module.exports=router