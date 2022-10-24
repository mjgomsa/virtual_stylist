let temperature = 0;
let weather = "";
let json;

function preload() {
  // imperial = F, metric = C
  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);

  bundle = loadImage("assets/bundle.png");
  clouds = loadImage("assets/clouds.png");
  jacket_scarf = loadImage("assets/jacket-scarf.png");
  light_jacket = loadImage("assets/light-jacket.png");
  rain = loadImage("assets/rain.png");
  snow = loadImage("assets/snow.png");
  sun = loadImage("assets/sun.png");
  sundress = loadImage("assets/sundress.png");

}

function setup() {
  createCanvas(200, 200);

  temperature = json.main.temp;
  weather = json.weather[0].description;
}

function draw() {
    createCanvas(400, 400);
    background('black');
    fill('white');
    textSize(15);
    textAlign(CENTER);
    text("Location: New York City", 200, 20);
    push();
    textSize(20);
    text("Today, it is " + temperature + "°C and " + weather, 200, 70);
    pop();

    if (temperature <= 0) {
        text("It's freezing out! Bundle up!", 200, 340);
        image(bundle, 30, 65, 380, 300);
    } else if ((temperature > 0) && (temperature <= 15)) {
        text("It's chilly out! Wear a jacket and a scarf!", 200, 340);
        image(jacket_scarf, 30, 65, 380, 300);
    } else if  ((temperature > 15) && (temperature <= 25)) {
        text("Nice temperature! Bring a light jacket just in case!", 200, 340);
        image(light_jacket, 30, 65, 380, 300);
    } else {
        text("It's hot out! Bring out your sun dresses!", 200, 340);
        image(sundress, 30, 65, 380, 300);
    }

    if ((weather.includes("rain")) || (weather.includes("drizzle"))) {
        text("Rain! Bring an umbrella today", 200, 360);  
        image(rain, 30, 80, 380, 300); 
    } else if ((weather.includes("clear"))) {
        text("Bring your sunglasses today", 200, 360);  
        image(sun, 30, 80, 380, 300);
    } else if (weather.includes("snow")) {
        text("Wear snowboots today!", 200, 360);  
        image(snow, 30, 80, 380, 300);
    } else {
        text("Cozy up for the clouds!", 200, 360);
        image(clouds, 30, 80, 380, 300);
    }
}
