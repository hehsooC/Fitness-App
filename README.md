# 2018Spring: Web Programming Project
## Exercise Project: Fitness Tracker App
<br/>
## Features Required
<br/>
1) Profile Management
<br/>
2) Exercise Log
<br/>
3) Sharing Workout Log with Friends
<br/>

## Project Description
<br />
The goal of this project is to create a fitness tracker app. This app will manage a user's profile, keep tracking of exercise log (e.g. exercise time, what kind of exercise, etc.), and share the progress with friends who are using the same app (or the local server in our case). 
<br />A user can use this app as if it's a workout diary. 
<br />"SignUpComponent", "LoginComponent": user can sign-up if a user is new to the app, or sign-in if a user is already signed up. 
<br /> "ProfileComponent", "EditProfileComponent": When the user sign-up, the user can create a profile. If the user wants to edit the profile, the user can go to "Profile" in the navbar, and the user is able to edit their profile.
<br />"FitComponent": the user will be able to set the month and date, and with that day, the user can add many workout plans. In that workout plans, the user can set the workout time and the set (how many sets you did). If the user hits 'Done' button, the workout list will be added to the completed workout list. The time and set will be calculated as Total time. And with the entire completed workout lists, the Total Set Time (the entire time of your workout) will be calculated. If the user hits 'Dismiss' button, the plan list will be removed from the workout plan.
<br />
'Reset' button will reset the current page and shows the component to set a new workout month and date for a new workout log. 
<br />
"HistoryComponent": user can review their workout history. If the user clicks the date, the corresponding workout history will be displayed. If the user updates their workout list on the specific date, the user can click the date again to see the updates.
<br />
"ShareComponent": user can see other users in the same server in 'Other Users.' user can send a friend request by clicking 'request' button. If the userA send a friend request to another userB, userB will have a notice on the 'Friend Request,' and userB's name will be removed from the 'Other Users.' userB can accept or decline by clicking 'Confirm' button. If userB clicks 'Ok' button to accept the friend request, that userA will be added to 'Friends List.' If userB clicks 'Cancel' button to decline the friend request, userB name will be added to 'Other Users' again. In 'Friends List,' user can click 'Display' button, the workout days will be added to 'Friend's Workout Date.' If user clicks the specific date, user can see friend's workout summary in 'Friend's Workout Achievement.' 
<br />
The design concept for this app is simple and minimalistic.
<br />
## Project Structure
<br />
The client model is called "Fit". This "Fit" has "Person," which contains "Name, Password, Profile, PlanExercise, DoneExerciseList, Record, TotalSetTime, EachShare, Notice, Requested, FriendList, History, Month, Date, Summary, and FriendSummary."
<br />
### These Properties are for Local Me (client side) to show the data
<br />
PlanExercise: contains the workout lists of user's planned workout list. 
<br />
DoneExerciseList: contains the completed workout lists.
<br />
Record: will keep tracking of friend's workout summary.
<br />
TotalSetTime: is the total workout time of entire completed workout list, will be updated whenever user updates their workout lists.
<br />
EachShare: will have other users name. 
<br />
Notice: if other users send a friend request, Me(this user) will have that other users' names here.
<br /> 
Requested: if a user gets a friend request, this will be marked as 'true'
<br />
FriendList: contains a list of friends.
<br />
History: this will keep tracking of workout history by month and date (key).
<br />
Month, Date: current month and date of workout
<br />
Summary: will have the selected workout history.
<br />
FriendSummary: will have the selected workout history of friend.



