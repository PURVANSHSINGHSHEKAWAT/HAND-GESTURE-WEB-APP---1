prediction_1 = ""
prediction_2 = ""
Webcam.set({
    width:350,
    height:300,
    image_format  : 'png' ,
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(deta_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+deta_uri+'"/>';

    });
}

console.log('ml5.vesion:',ml5.version);
classifier = ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/TTl2UXBwe/model.json',modelLocated);

function modeLoaded()
{
    console.log('Model Loaded');
}