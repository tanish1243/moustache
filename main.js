noseX= 0;
noseY= 0 ;



function preload(){
    mustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas= createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide()
    posenet = ml5.poseNet(video , modelloaded);
    posenet.on('pose',got_poses);
}
function draw(){
    image(video , 0 , 0 , 300 , 300  )
    image(mustache , noseX , noseY , 30 ,15 )
}
function take_snapshot(){
    save("moustache face.jpg")
}
function modelloaded(){
    console.log("Model loaded successfuly")
}
 function got_poses(results){
  if(results.length > 0){
   console.log(results);
   console.log("nose x = " +  results[0].pose.nose.x  );
   console.log("nose y = " + results[0].pose.nose.y);
   noseX= results[0].pose.nose.x - 16;
   noseY= results[0].pose.nose.y - -5;
  }
}