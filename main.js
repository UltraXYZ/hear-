function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QUHmx7JLk/model.json",modelReady);
}

function modelReady(){
     classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);        
    }
    else{
        console.log(results);
        r = Math.floor(Math.random()* 255);
        g = Math.floor(Math.random()* 255);
        b = Math.floor(Math.random()* 255);

        document.getElementById("resultLabel").innerHTML = "Detected Voice - " + results[0].label;
        document.getElementById("resultLabel").style.color = "rgb(" + r + "," + g +"," + b + ")";

        img = document.getElementById("image");
        if (results[0].label == "Barking" ) {
            img.src = "https://i.makeagif.com/media/3-20-2020/xE1NQs.gif"

        }
        else if (results[0].label == "Meowing") {
            img.src = "https://media2.giphy.com/media/K1tgb1IUeBOgw/200.gif"
        }

        else if (results[0].label == "Roaring") {
            img.src = "https://media3.giphy.com/media/OqFpgF7bet1sRoCmpb/giphy.gif"
        }

        else if (results[0].label == "Chirping") {
            img.src = "https://i.pinimg.com/originals/f9/ca/52/f9ca520efd4ec50fb17a8f695205fba2.gif"
        }

        else if (results[0].label == "Mooing") {
            img.src = "https://media1.giphy.com/media/kdicjggNCgM10dtqvO/giphy.gif"
        }

        else if (results[0].label == "Background Noise") {
            img.src = "https://i.pinimg.com/originals/91/b4/13/91b4134bad6e5ba60fe3dfe32399a7d2.gif"
        }
        
    }

    
}