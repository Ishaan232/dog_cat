status1="";
object=[];

function preload(){
dac=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    anoyc=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("aidomc").innerHTML="status: Detecting objects";
}

function modelLoaded(){
console.log("Model is loaded");
status1=true;
anoyc.detect(dac,afn);
}

function afn(error,result){
if (error){
    console.log(error);
}
console.log(result);
object=result;
}

function draw(){
    image(dac,0,0,640,480);
    if(status1 !=""){
        for(var i=0;i<object.length;i++){
    document.getElementById("aidomc").innerHTML="status: Object detected";       
    fill("red");
    noFill("red");
    stroke("red");
    avn=floor(object[i].confidence*100);
    text(object[i].label+ " "+ avn+"%",object[i].x+15,object[i].y+15);
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
}
}