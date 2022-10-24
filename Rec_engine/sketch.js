let sel_main;
let sel_color;

function preload() {
    black_shirt = loadImage("assets/black-shirt.png");
    grey_shirt = loadImage("assets/grey-shirt.png");
    beige_shirt = loadImage("assets/beige-shirt.png");
    beige_pants = loadImage("assets/beige-pants.png");
    grey_pants = loadImage("assets/grey-pants.png");
    black_pants = loadImage("assets/black-pants.png");
    beige_shoes = loadImage("assets/beige-shoes.png");
    grey_shoes = loadImage("assets/grey-shoes.png");
    black_shoes = loadImage("assets/black-shoes.png");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  background(220);
  
  
  sel_main = createSelect();
  sel_main.position(220, 35);
  sel_main.option('shirt');
  sel_main.option('pants');
  sel_main.option('shoes');
  sel_main.option('none');
  sel_main.selected('none');
  sel_main.changed(selTotal);
  
  sel_color = createSelect();
  sel_color.position(220, 80);
  sel_color.option("none");
  sel_color.option("beige");
  sel_color.option("grey");
  sel_color.option("black");
  sel_main.selected('none');
  sel_color.changed(selTotal);
  
}

function draw() {
  text("I need help styling...", 120, 40);
  text("Of this color..." , 120, 87);
}

function selTotal() {
  let item = sel_main.value();
  let i_color = sel_color.value();
  background(220);
  text('You selected: ' + i_color + " " + item + '!', 120, 180);
  
  if (item == 'shirt') {
    if (i_color == "beige") {
      text('We suggest matching beige pants', 120, 200);
      text('We suggest neutral, beige shoes', 120, 220);
      text('Accessorize with a fun burgundy bag!', 120, 240)
      image(beige_shirt, 180, 60, 450, 550);
      
    } else if (i_color == "grey") { //done
      text('We suggest dark grey, ripped jeans', 120, 200);
      text('We suggest chunky black boots', 120, 220);
      image(grey_shirt, 180, 60, 450, 550);
      
    } else if (i_color == "black") { //done
      text('We suggest black jeans', 120, 200);
      text('We suggest white chunky sneakers', 120, 220);
      text('Accessorize with a fun-colored bag!', 120, 240);
      image(black_shirt, 180, 60, 450, 550);
      
    } else { // i_color == white
      text('We have no suggestions', 120, 200);
      
    }
    
  } else if (item == 'pants') {
    if (i_color == "beige") {
      text('We suggest a black v-neck blouse', 120, 200); //done
      text('We suggest slides!', 120, 220);
      image(beige_pants, 180, 60, 450, 550);
      
    } else if (i_color == "grey") {
      text('We suggest light grey faux fur jacket', 120, 200);
      text('We suggest chunky black boots', 120, 220);
      image(grey_pants, 180, 60, 450, 550);
      
    } else if (i_color == "black") {
      text('We suggest a dark brown tube top', 120, 200);
      text('We suggest black and white converse', 120, 220);
      text('Accessorize with a multi-shaded brown bag!', 120, 240);
      image(black_pants, 180, 60, 450, 550);
      
    } else { // i_color == white
        text('We have no suggestions', 120, 200);
        
      }
    
  } else { //item == shoes
    if (i_color == "beige") {
      text('We suggest white, button down shirt', 120, 200);
      text('We suggest dark grey skirt', 120, 220);
      image(beige_shoes, 180, 60, 450, 550);
      
    } else if (i_color == "grey") {
      text('We suggest black tube top', 120, 200);
      text('We suggest black skirt', 120, 220);
      image(grey_shoes, 180, 60, 450, 550);
      
    } else if (i_color == "black") {
      text('We suggest a beige knit sweater', 120, 200);
      text('We suggest blue jeans', 120, 220);
      text('Accessorize with a black, leather tote bag!', 120, 240);
      image(black_shoes, 180, 60, 450, 550);
      
    } else { // i_color == white
        text('We have no suggestions', 120, 200);
        
      } 
  }
}

