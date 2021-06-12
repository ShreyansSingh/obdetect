img="";
status = "" ;
var objects = [];
function preload(){
img= loadImage("dog_cat.jpg");

}

function setup()
{

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded, Have a horrible day human"); ;
    status = true ; 
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
     objects = results;
}

function draw()
{
image(img,0,0,640,420);
if(status != ""){
    for(var i = 0; i < object.length; i++){
        fill("#5500FF");
        percent =floor(objects[i].confidence * 100);
        text(objects[i].label +" "+percent + "%",objects[i].x,objects[i].y);
        noFill();
        stroke("#5500FF");
        rect(objects[i].x , objects[i].y ,objects[i].width, object[i].height );
    }
}
}