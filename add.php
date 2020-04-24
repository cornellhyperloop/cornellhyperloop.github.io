<?php
include("includes/init.php");
const MAX_FILE_SIZE = 10000000;

?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>New Hyperloop Blog Post</title>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/global.css">
    <link href="./materialize/css/materialize.css" rel="stylesheet"
      type="text/css" />
    <link href="./css/md.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="stylesheet" href="css/blog.css">

    <script language="JavaScript" type="text/javascript" script
      src="js/global.js"></script>



    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>

  <body>
    <div class="page">
      <header>
        <div class="navbar-container-computer">
          <div class="navbar-logo">
            <a href="https://hyperloop.cornell.edu"><img
                src="images/logotextthin.png" alt="Hyperloop Logo"
                /></a>
          </div>

          <nav>
            <ul>
              <li><a class="nav-link" href="">Home</a></li>
              <li><a class="nav-link" href="about">About</a></li>
              <li><a class="nav-link" href="team">Team</a></li>
              <li>
                <a class="nav-link" href="design">Design</a>
              </li>
              <li>
                <a class="nav-link" href="sponsors">Sponsors</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="navbar-container-mobile">
          <div class="navbar-logo">
            <a id="desktop-logo" href="https://hyperloop.cornell.edu"><img
                src="images/logotextthin.png" alt="Hyperloop Logo"
                /></a>

            <a id="mobile-logo" href="https://hyperloop.cornell.edu"><img
                src="images/logo.png" alt="Hyperloop Logo"
                /></a>
          </div>

          <button id="mobile-dropdown-button"
            onclick="handleMobileDropdownButtonClick()">
            <div class="mobile-dropdown-button-bar" id="button-bar1"></div>
            <div class="mobile-dropdown-button-bar" id="button-bar2"></div>
            <div class="mobile-dropdown-button-bar" id="button-bar3"></div>

            <div class="mobile-dropdown-container"
              id="mobile-dropdown-container-hidden">
              <ul>
                <li>
                  <a class="mobile-link" href="https://hyperloop.cornell.edu">Home</a>
                </li>
                <li>
                  <a class="mobile-link" href="about">About</a>
                </li>
                <li>
                  <a class="mobile-link" href="team">Team</a>
                </li>
                <li>
                  <a class="mobile-link" href="design">Design</a>
                </li>
                <li>
                  <a class="mobile-link" href="sponsors">Sponsors</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </header>

      <div class="page-content">
        <div id = "blog_header">
          <h1>Add post to blog</h1>
          <div id="subheader">
            <a href="blog.php" id="return_button">
                <!-- ADD a back arrow icon here? !-->
                <p><- Back to blog</p>
            </a>
          </div>
        </div>

        <div id="container">
            <div class = "blog_entry">

          <form id = "add_form" action = "add.php" method="post" enctype="multipart/form-data" novalidate>
          <?php echo $success_message; ?>
          <input type="hidden" name = "MAX_FILE_SIZE" value="<?php echo MAX_FILE_SIZE ?>" />

          <div class="group_form_element">
            <p class = "feedback"><?php echo $file_feedback ?></p>
            <label for="cover">Upload a selfie! (optional):</label>
            <input name = "image" id="image" type="file" class="text_field">
          </div>

          <div class="group_form_element">
            <p class = "feedback"><?php echo $name_feedback ?></p>
            <label for="name">Name:</label>
            <input name = "name" id="name" type="text" class="text_field">
          </div>

          <div class="group_form_element">
            <p class = "feedback"><?php echo $team_feedback ?></p>
            <label for="team">Team:</label>
            <select name = "team" id="team">
                <option value = "">Select your team:</option>
                <option value = "Team management/administration">Team management/administration</option>
                <option value = "Hardware">Hardware</option>
                <option value = "Software">Software</option>
                <option value = "Business">Business</option>
                <option value = "Suspension">Suspension</option>
                <option value = "Braking">Braking</option>
                <option value = "Propulsion">Propulsion</option>
            </select>
          </div>

          <div class="group_form_element">
            <p class = "feedback"><?php echo $role_feedback ?></p>
            <label for="role">Sub-team and/or role:</label>
            <input name = "role" id="role" type="text">
          </div>

          <div class="group_form_element">
            <p class = "feedback"><?php echo $entry_feedback ?></p>
            <label for="entry">Blog entry:</label>
            <input name = "entry" id="entry" type="text">
          </div>

            <button type="submit" id = "submit">Post</button>

        </div>
            
          </div>
        </div>
      </div>

      
    </div>

  </body>
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

</script>
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-storage.js"></script>
  <script language="JavaScript" type="text/javascript" script
    src="js/template.js"></script>
</html>
