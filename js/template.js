var storage = firebase.storage();

var storageRef = firebase.storage().ref();

const fileButton = document.getElementById("file-submit-input");

fileButton.addEventListener('change', function (e) {
  console.log("File selected")
  var file = e.target.files[0];
  // 
  const uploadRef = storage.ref().child('sp20/' + file.name);

  var task = uploadRef.put(file)

  task.on('state_changed',
    function progress(snapshot) {

    }
  )

}
)

// var file = ... // use the Blob or File API
//   ref.put(file).then(function (snapshot) {
//     console.log('Uploaded a blob or file!');
//   });