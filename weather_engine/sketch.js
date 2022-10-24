let mode = 0;
var temp_num = 65;
var temp_descrip = "cloudy"

function setup() {
    myFont = loadFont("Raleway.ttf");
}


function draw() {
    resultScreen();
    // switch (mode) {
    //     case 0:
    //       startingScreen();
    //       break;
    //     case 1:
    //       instructScreen();
    //       break;
    //     case 2:
    //       // inputHandle();
    //       gameOn();
    //       break;
    //   }
}

function resultScreen() {
    createCanvas(600, 600);
    background(220);
    textFont(myFont);
    textSize(36);    
    textAlign(CENTER);
    text("Today it is " + temp_num + " and " + temp_descrip, 300, 200);

    if (temp_descrip == "raining") {
        text("Bring an umbrella today", 300, 220);
        if (temp_num <= 65) {
            text("Also! Bring an a jacket it's chilly today", 300, 220);
        } else {

        }

    } else if (temp_descrip == "sunny") {
        text("Bring an sunglasses today", 300, 220);

    } else if (tem_descrip == "cloudy") {

    }
}