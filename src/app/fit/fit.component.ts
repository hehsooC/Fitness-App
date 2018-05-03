import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {Fit, User, Track } from '../models/exercise';
import { MessagesService } from '../services/messages.service';
import { FitService } from '../services/fit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent implements OnInit {

    Model: Fit;
    Me: User;
    ExerciseList: string[];
    //Record: Track[];
    


  constructor(private http: Http,
              private _Messages: MessagesService,
              private _Fit: FitService,
              private _Router: Router
) {
    this.Me = _Fit.Me;
    this.Model = _Fit.Model;
    
    this.ExerciseList = _Fit.ExerciseStack;
    if(!this.Me){
      _Router.navigate(['/login']);
    } 
    
  // this.Record = [];

    //setInterval(()=> this.refresh(), 1000)
  } 

  ngOnInit() {
  }
/* 
  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }
 */
  submitWorkout(e: MouseEvent, text: string){
    e.preventDefault();
    this._Fit.chooseExercise(text);
    
  }

 /* doneExercise() will track the completed workout that a user checks it as "done"
    */
  doneExercise(e: MouseEvent, text: string, time: number, set: number){
    e.preventDefault();
    this._Fit.makeChosen(text);

    var totalTime = time * set;
    // if the workout list is a newly selected, add it to DoneExerciseList
    if(!this.Me.DoneExerciseList.find( x=> x.Text == text)){
      this.Me.DoneExerciseList.push({Text:text, Time:time, Set:set, TotalTime:totalTime});
      if(this.Me.TotalSetTime == 0){
        this.Me.TotalSetTime = totalTime;
        this._Fit.getTotalTime(this.Me.TotalSetTime);
        }
      this._Fit.selectExercise(this.Me.DoneExerciseList);
      
    }
    // else if user adds more time and set of the selected workout, keep tracking of time and set
    else{
      var user = this.Me.DoneExerciseList.find(x=> x.Text == text);
      user.Time = Number(user.Time) + Number(time);
      user.Set = Number(user.Set) + Number(set);
      user.TotalTime = Number(user.TotalTime) + Number(totalTime);
      this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
      this._Fit.getTotalTime(this.Me.TotalSetTime);
      this._Fit.selectExercise(this.Me.DoneExerciseList);
      
    }

    //this._Fit.getTotalTime();

  }

 


  
/* 
  getDate(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();

  } */

 /*  giveExerciseList(name: string){
    console.log('giveExerciseList executed');
    this.http.get(this._api + "/exercise/getList", { params: { userId: name }})
    .subscribe(data => this.GetExercise = { List: data.json()});
  }
 */
  /*
  differentUser(name: string){
    this.http.get(this._api + "/exercise/share", { params : { userId: name } })
    .subscribe(data=> this.Others =  {Name: name} )
  }
*/

/*     
  AlreadyUser = () => this.Model.Profile.find( x => x.UserId == this.Me.Name);
  MyPlanExercise = () => this.Model.PlanExercise.find( x => x.UserId == this.Me.Name );
  ChosenExercise = () => this.Model.PlanExercise.find( x => x.Chosen ); */
}
