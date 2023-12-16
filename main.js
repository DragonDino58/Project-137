video = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}


function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
     console.log(results);
     objects = results;
    }
}

function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video,gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are" + objects.length;
        
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
        }
    }

    if(objects[i].label == objectDetector){
      video.stop();
      objectDetector.detect;
      objectDetector(gotResult);
      document.getElementById("status").innerHTML = "Status : Object Mentioned Found";
    speech = SpeechSynthesis;
     utterThis = SpeechSynthesisUtterance("Object Mentioned Found");
     speech.speak();
     utterThis; 
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
 