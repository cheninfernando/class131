function setup(){
    canvas=createCanvas(640,420)
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status:Detecting objects"
}
img="";
status=""
function preload(){
    img= loadImage('img3.jpeg');
}

function draw(){
    image(img,0,0,640,420);
   
}

function modelloaded(){
    console.log("modelloaded")
    status=true;
    objectdetector.detect(img,gotresults);

}

function gotresults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)

}