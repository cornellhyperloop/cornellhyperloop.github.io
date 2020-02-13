var storage = firebase.storage();
var storageRef = storage.ref();

const fileInput = document.getElementById("file-input")
const submitButton = document.getElementById("interview-file-submit-button");

submitButton.addEventListener('click', function (e) {


  var file = fileInput.files[0];
  // 
  const first_name = document.getElementById("first_name").value
  const last_name = document.getElementById("last_name").value
  const uploadRef = storage.ref().child('sp20/' + first_name + "_" + last_name + "localmax");

  var task = uploadRef.put(file)

  task.on('state_changed',
    function progress(snapshot) {

    }
  )

}
)