
# Melissa Psaras (mrp227)
Welcome to your interview. Let's work the following problem- you may choose and language and ask guiding questions.

## Local Maxima
Write a function `localmax()` that takes a list `lst` and returns a list all local maxima, or peaks within the list, in order.

### Examples
	
```
listA = [0,1,0]
localmax(listA)

>> [1]
```

```
listB = [1,1,0,1]
localmax(listB)

>> [1,1]
```

<link href="./css/materialize/materialize.min.css" rel="stylesheet" type="text/css" />
<link href="./css/md.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="./../css/materialize/js/materialize.min.js"></script>
<script language="JavaScript" type="text/javascript" src="js/md.js"></script>


<form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
  </form>

<button class="btn waves-effect waves-light centered" 
  type="submit" 
  id = "submit-interview-file"
  name="action">
  Submit
    <i class="material-icons right">send</i>
</button>



<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>


<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNvT1iImUnpxGpx6iNNj3jDJM0miVBbfE",
    authDomain: "hyperloop-webpage.firebaseapp.com",
    databaseURL: "https://hyperloop-webpage.firebaseio.com",
    projectId: "hyperloop-webpage",
    storageBucket: "hyperloop-webpage.appspot.com",
    messagingSenderId: "573298529782",
    appId: "1:573298529782:web:e488434aa999edda02e3d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("Hello")
  button = document.getElementById("submit-interview-file")
  button.addEventListner(submitform)
  function submitform(){
    console.log("sumitting..")
  }
</script>
