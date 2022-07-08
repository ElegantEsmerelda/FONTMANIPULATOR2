function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    video.position(150,140)

    canvas = createCanvas(400, 400);
    canvas.position(1000, 180)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}
function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
    }
}