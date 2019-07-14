// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPzfgvLx_OEwqJN-pb3YQJbUECysbLAbE",
    authDomain: "train-dfde1.firebaseapp.com",
    databaseURL: "https://train-dfde1.firebaseio.com",
    projectId: "train-dfde1",
    storageBucket: "train-dfde1.appspot.com",
    messagingSenderId: "627968779483",
    appId: "1:627968779483:web:fdf7a749c04b5562"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const trainData = firebase.database()

$('#currentTime').append(moment().format("hh:mm"))
$('addTrain').on('click', _ => {
    event.preventDefault()
    let trainName = $('#trainNameInput').value()
    let destination = $('#destinationInput').value()
    let firstTrain = moment($('#firstTrainInput').value(), "hh:mm")
    let frequency = $('frequecnyInput').value()

    const newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequecny: frequency
    }

    trainData.push(newTrain)
    console.log(newTrain.name + " Congrats its New Train!")

    $("#trainNameInput").value("");
    $("#destinationInput").value("");
    $("#firstTrainInput").value("");
    $("#frequencyInput").value("");

    return false;
});


trainData.on("child_added", _ => {
    let data = childSnapshot.value();
    let trainNames = data.name;
    let trainDestination = data.destination;
    let trainFrequency = data.frequecny
    let theFirstTrain = data.firstTrain;

    console.log(newTrain)


})