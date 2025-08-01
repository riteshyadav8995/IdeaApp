/**
 * write the logic to create the controller for the idea resources
 */

import ideas from '../models/ideas.model.js';
let id=3;// initial count of id ..
/**
 * create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * return list of all the ideas
 */
 const getAllIdeas=(req,res)=>{
// first read all the ideas from the idea model file


// return all those ideas
res.status(200).send(ideas);
}
/** 
 * controller that fetches idea based on the id
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/id
 */
 const getIdeaBasedOnId=(req,res)=>{
    // we need to first read the idea id from the req path param
    let idea_id=req.params.id;

    // using id check if the idea that is id is present
      if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id]);
      }
      else{
        res.status(404).send({
            message:"idea with the given idea_id is not found"
        }); // 404 -> means not found
      }

    //if present return the id
}

/**
 * controller to create a new idea using post method and we send the
 * response from the postman
 */

const CreateIdea=(req,res)=>{
  // i need to read the request body
  let idea_object=req.body;
   id++;// we need this because id is auto generated when we create a idea
   idea_object["id"]=id // setting the id in the new created idea object
  // add a new object provided in the ideas object
  ideas[id]=idea_object;

  //return the responses
  res.status(201).send( idea_object);// status code 201 for created something
}

/** 
 * controller for updating the idea
 * 
 */
const updateIdea=(req,res)=>{
  // read the idea id
  let id=req.params.id;
  //check if the idea id is present or not
  if(ideas[id]){
    let idea_obj=req.body;
    ideas[id]=idea_obj;
    res.status(200).send(idea_obj);
  }
  else{
    res.status(404).send({
        message:"idea id wanted to update doesn't exist"
    })
  }
  //read the new idea body and replace it

  //return the updated idea
}

/**
 * controller for deleting the idea from ideaApp
 */
const deleteIdea=(req,res)=>{
    let id=req.params.id;
    if(ideas[id]){
          delete ideas[id];
          res.status(202).send({
            message:`Idea ${id} deleted`
          })
    }
    else{
        res.status(404).send({
            message:"idea od wanted to delete is doesn't exist"
        })
    }
}

export default{
    getAllIdeas,
    getIdeaBasedOnId,
    CreateIdea,
    updateIdea,
    deleteIdea,
}