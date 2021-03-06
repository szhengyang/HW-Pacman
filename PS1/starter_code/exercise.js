/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.bw = 800; //browser width = 800px
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};
exercise.updatePosition = function() {
    exercise.pos.x += exercise.increment
    exercise.img1.style.left = exercise.pos.x + 'px' 

    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
};
exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan1.png';
            console.log(exercise.img1.style.left);
            exercise.flag = 0;

        } else {
            exercise.img1.src = 'PacMan2.png';
            console.log(exercise.img1.style.left);
            exercise.flag = 1;
        }

    }
    else if (exercise.increment < 0) {

        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan3.png';
            console.log(exercise.img1.style.left);
            exercise.flag = 0;
        } 
        else {
            exercise.img1.src = 'PacMan4.png';
            console.log(exercise.img1.style.left);
            exercise.flag = 1;
        }
    }
};
exercise.checkWallCollision = function() {
    if (exercise.pos.x>0 && exercise.pos.x<(exercise.bw-exercise.img1.width)){
        exercise.increment = exercise.increment; //collision
    }
    else if (exercise.pos.x==(exercise.bw-exercise.img1.width) && exercise.increment>0){
        exercise.increment = -1 * exercise.increment; //collision with right side of wall (occurs when x=600 since browserwidth=800 and imgwidth=200)
    }
    else if (exercise.pos.x==0 && exercise.increment<0){
        exercise.increment = -1 * exercise.increment; //collision with left side of wall
    }
  


    // reset the direction of motion if wall is hit
    // you need to take into account image width


};