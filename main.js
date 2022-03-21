var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (e) {

    console.log(e);

       content = e.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;

    if(content == "take my selfie")
    {

        console.log("taking selfie --- ")
        speak();
    }
    else{

        var synth = window.speechSynthesis;

    speak_data2 = "Please Say Take My Selfie if you want your selfie to be taken";

    var uttterThis = new SpeechSynthesisUtterance(speak_data2);

    uttterThis.rate = 0.8;

    synth.speak(uttterThis);

    }

    

}

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking Your Selfie in 5 seconds";

    var uttterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(uttterThis);
    Webcam.attach(camera);

    setTimeout(function(){

        take_snapshot();
        save();
    },5000);
}

Webcam.set({

    width:360,
    height:250,
    image_format : 'png',
    png_quality:100
});

camera = document.getElementById("camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="selfie_image"  src="'+data_uri+'" >';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}