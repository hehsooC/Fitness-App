var express = require('express');
var Fit = require('./model');

var app = express.Router();

var fit = new Fit(); 
 

module.exports = app
    .get('/exercise', (req, res) =>{
     res.send( fit.GetExerciseList(req.query.userId) ) 
    })
    .get('/state', (req, res) => res.send(fit))
    // this works but couldn't find api database for workout
    //.post('/exercise/info', (req, res) => res.send( fit.GetHealthInfo()))
    .post('/exercise', (req, res) => {
        
        try {
            fit.SubmitWorkout(req.body.Text, req.body.UserId);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message }); 
        }
    })
 
    // need to work on this
    .post('/exercise/choose', (req, res) => { 
    
        fit.DoneExercise(req.body.Text);
        res.send( { success: true } );
         
    })
    // need to work on this
    .post('/exercise/profile', (req, res) =>{
        console.log(req.body);
        fit.ProfileAdd(req.body);
    });
  
 
 