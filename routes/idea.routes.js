/**
 * NOTE-> 127.0.0.1:port -> it is adress of your local machine
 * route for
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */
import idea_controller from '../controllers/idea.controller.js';
export default (app)=>{
    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas);

    //GET 127.0.0.1:8000/ideaApp/api/v1/ideas/id
    app.get("/ideaApp/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId);

    //post 27.0.0.1:8000/ideaApp/api/v1/ideas
    app.post("/ideaApp/api/v1/ideas",idea_controller.CreateIdea);
}