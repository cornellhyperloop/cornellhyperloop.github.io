<?php
include("includes/init.php");


?>
<!DOCTYPE HTML>
<html>
  <head>
    <title>Cornell Hyperloop Blog</title>
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
          <h1>Welcome to the Cornell Hyperloop Blog!</h1>
          <p>Scroll down to take a look at what our team has been up to. Click the add button to post what you've been doing!</p> 
          <div id="subheader">
            <form method="get" action="index.php" id="search_form" novalidate>
              <label for="search">Search the blog: </label>
              <input type="text" name="search" id="search">
              <button type="submit" id = "search_button">Search</button>
            </form>
            
            <a href="add.php" id="add_button">
                <!-- ADD a plus icon here? !-->
                <p>+ Add Post to Blog</p>
            </a>
          </div>
        </div>
        <div id="container">
          <div class = "blog_entry">

            <img src="uploads/1.JPG" class="blog_photo">

            <p class= "label">Name:</p>
            <p class= "content">Ronin Chasan</p>

            <p class= "label">Team:</p>
            <p class= "content">Business</p>

            <p class= "label">Role:</p>
            <p class= "content">Web dev member</p>

            <p class= "label">Blog Entry:</p>
            <p class= "content">Hi everyone! I hope everyone's safe and healthy at home right now. The task I'm working on right now is this coding up this very website. I hope this blog is able to help bring us together while we're away from Cornell and even when we go back. I look forward to seeing what everyone else on the team is working on!</p>
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
