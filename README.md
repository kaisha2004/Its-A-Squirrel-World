
<img src="https://i.gifer.com/fxZd.gif" width="220" height="200" />

# Project Overview

## It's A Squirrel's World (Let's Go Nuts!)

## Project Description

Have you ever stayed up at night wondering what the  Sciurus Carolinensis (Eastern gray) squirrels in Central Park are doing? Have you ever wondered why does it seem like these squirrels have all the fun? With the help of 323 volunteer Squirrel Sighters who tracked over 3,000 squirrels, we developed a mobile app full of trivia designed to unlock the user's inner squirrel (come on we all have one!) and to have while doing it. This app is a fun way to learn about the squirrel's daily activities and grow your appreciation of our favorite furry friends! 
 

## API and Data Sample

.[NYC OPEN DATA].(https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw)

```
[
    {
       
        "date": "10142018",
        "hectare_squirrel_number": "3",
        "combination_of_primary_and": "+",
        "running": false,
        "chasing": false,
        "climbing": false,
        "eating": false,
        "foraging": false,
        "kuks": false,
        "quaas": false,
        "moans": false,
        "tail_flags": false,
        "tail_twitches": false,
        "approaches": false,
        "indifferent": false,
        "runs_from": false,

```
## Wireframes

This is a wireframe of the Trivia on a mobile device.
Wireframe Link: https://wireframe.cc/IaPhmU

### MVP/PostMVP

#### MVP 

- Find and use external api 
- Render data on page 
- Allow user to choose on "clickable" squirrel images
- Question prompt and content customized by the squirrel chosen
- Game reset option for unlimited plays.

#### PostMVP  

- Add squirrel animation 
- Add more dynamic feature to event listener (such as styling changes based on squirrel clicked)
- Add audio/video content to bring squirrel activities to life 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 13-17| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Complete
|July 13| Skeleton Application Structure (HTML, CSS, JS etc) | Complete
|July 13| External Images & Content Gathering | Complete
|July 14| Pseudocode / actual code | Complete
|July 14| Finalize HTML  | Complete
|July 15| Initial Clickable Model  | Complete
|July 15| Finalize CSS | Complete
|July 16| Finalize JS | Complete
|July 16| MVP/ Host Upload | Complete
|July 17| Presentations | Incomplete

## Priority Matrix

https://imgur.com/1eGFcLq

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Writing Code| H | 7hrs| 8hrs | 8hrs |
| Working with API | H | 3hrs| 6hrs | 6hrs |
| Clickable Model | H | 4hrs| 8hrs | 8hrs |
| External Image Gathering | M | 1.5hrs| 1.5hrs| 1.5hrs |
| Layout Design | H | 2.5hrs| 4hrs | 4.5hrs |
| Adding Animation | L | 4hrs| 2hrs | 2hrs |
| Adding Audio | L | 4hrs| 1hr | 1hr |
| Total | H | 31hrs| 31hrs | 31hrs |

## Code Snippet
The game reset button was something that drove me insane. After hours of toiling with this, I learned depending on the button's use...you may not want to include the "e.preventDefault". In this case, I wanted the page to refresh everytime. Also, there will be times you will have to call elements directly as I could not manipulate the display at a parent level and had to code each element. 

```
// GAME RESET

const resetBTN = document.querySelector('#reset');
resetBTN.addEventListener('click', () => {
 
  const squirrel1 = document.querySelector('#squirrel1');
  const squirrel2 = document.querySelector('#squirrel2');
  const squirrel3 = document.querySelector('#squirrel3');
  const squirrel4 = document.querySelector('#squirrel4');
  squirrel1.style.display = 'block';
  squirrel2.style.display = 'block';
  squirrel3.style.display = 'block';
  squirrel4.style.display = 'block';

})
```

## Change Log
 
- Using JS to filter. Having a huge data set of over 1,000 sightings, after some time, I noticed the data had duplicate data and was double counting. I was able to use JS to clean the data by leveraging the filter method to identify and remove unnecessary duplication. 

- Adding the "Next Question" button. This button was not a part of my original design because I wanted the next question to automatically pop. After testing the user experience, I found this caused a negative experience in that the user was not given sufficient time to read the squirrel facts. I did not allow for users' differing reading times. After realizing this, I added the extra button so the user more autonomy over the flow of the app. 
