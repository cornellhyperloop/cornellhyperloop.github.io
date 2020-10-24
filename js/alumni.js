// years = []
var yearInViewCache;
var yearInViewCacheCenterX;
var yearInfoContainer;
var yearInfoContainerRect;
var oldScroll;
var scrollInterval = 0;

const alumQuestions = [
  "What was your major and when did you graduate?",
  "What was your role at Hyperloop?",
  "What are you doing now?",
  "What was your favorite memory or part of Cornell Hyperloop?",
]

var modalDict = {
  "BoehringerGillian": [
    "N/A, graduated in 2018",
    "Business Development Lead",
    "Working at N/A",
    "N/A."],
  
  "FayadDaniel": [
    "N/A, graduated in 2018",
    "Electrical Team Lead",
    "Working at N/A",
    "N/A."],
  
  "AlonsoCristian": [
    "N/A, graduated in 2018",
    "Mechanical Team Lead",
    "Working at N/A",
    "N/A."],
  
  "VetterKenny": [
    "N/A, graduated in 2018",
    "MagLev Team Lead",
    "Working at N/A",
    "N/A."],
  
  "KirchhoffTodd": [
    "N/A, graduated in 2018",
    "Fuselage Subteam Lead",
    "Working at N/A",
    "N/A."],
       
  "MaskerAlyse": [
    "N/A, graduated in 2018",
    "Suspension Subteam Lead",
    "Working at N/A",
    "N/A."],
            
  "BigenwaldJacob": [
    "N/A, graduated in 2017",
    "N/A",
    "Working at N/A",
    "N/A."],
            
  "SeongKimJu": [
    "N/A, graduated in 2017",
    "N/A",
    "Working at N/A",
    "N/A."],

  "NarahariManvith": [
    "N/A, graduated in 2018",
    "N/A",
    "Working at N/A",
    "N/A."],

  "LuQuanxing": [
    "N/A, graduated in 2018",
    "N/A",
    "Working at N/A",
    "N/A."],

  "IyerKeshav": [
    "N/A, graduated in 2018",
    "N/A",
    "Working at N/A",
    "N/A."],

  "DasAnshuman": [
    "N/A, graduated in 2018",
    "N/A",
    "Working at N/A",
    "N/A."],
};


// This function scrolls to the year by selecting the #ID of the year and scrolling it into view.
// it then selects the li element with class "year-label-active" making it "year-label-inactive"
// it then selects the li element corresponding to the year and making its classname "year-label-active"
// function scrollToyear(yearIndex) {
//   year = years[yearIndex]

//   document.getElementById(year).scrollIntoView({behavior: 'smooth'});

//   document.getElementById('active-label').id = "inactive-label"

//   getLabelElement(year).id = "active-label"
// }


// This executes once the DOM has been loaded. This selects the buttons and adds a click event listener
// to them once it's safe to manipulate them.
window.onload = function () {
  // years = ['2018','2017'];
  // addEventListenersToLabels()

  // yearInViewCache = 'teamLeads';
  // let yearInViewCacheRect = document.getElementById('teamLeads').getBoundingClientRect()

  // yearInfoContainer = document.getElementsByClassName('roster-info-container')[0]
  // yearInfoContainer.addEventListener('wheel',updateLabelforyearInView)

  // yearInfoContainerRect = yearInfoContainer.getBoundingClientRect()
  // console.log("yearInfoContainerCenterX: " + String(yearInfoContainerRect.top + yearInfoContainerRect.height/2) )


  // yearInViewCacheCenterX = yearInViewCacheRect.top + (yearInViewCacheRect.height/2)
  // console.log("yearInViewCacheCenterX: " + yearInViewCacheCenterX)

  Object.keys(modalDict).forEach(function(key) {
    console.log(key);
    var value = modalDict[key];
    console.log(value);
    // createModal(key, value);
    // document.getElementById(key).onclick = createModal(key, value);
    document.getElementById(key).addEventListener("click", function() {
      createModal(key);
    });

  });

}

function createModal(key) {
  var div = document.createElement("dialog");
  document.body.appendChild(div);

  var x = document.createElement("button");
  x.innerHTML = "X";
  x.classList.add("x");
  div.appendChild(x);

  div.classList.add("profile-modal");
  var id = key.concat("profile-modal");
  div.setAttribute('id', id)

  x.addEventListener("click", function() {
    div.parentNode.removeChild(div)
  });
  
  var existingImg = document.getElementById(key).childNodes[3];
  var cloneImg = existingImg.cloneNode(true);
  div.appendChild(cloneImg);

  var existingName = document.getElementById(key).childNodes[5];
  var cloneName = existingName.cloneNode(true);
  div.appendChild(cloneName);

  // var p = document.createTextNode(value);
  for (let qIndex = 0; qIndex < alumQuestions.length; qIndex++) {
    const QAdiv = document.createElement("div")
    QAdiv.classList.add("qa-box")
    const question = document.createElement("h5")
    question.innerText = alumQuestions[qIndex]
    const answer = document.createElement("p")
    answer.innerText = modalDict[key][qIndex]
    QAdiv.appendChild(question)
    QAdiv.appendChild(answer)
    div.appendChild(QAdiv);
  }


  var a = document.getElementById(key).childNodes[1];
  var cloneA = a.cloneNode(true);
  // console.log(cloneA.href);

  var newLink = document.createElement("a");
  newLink.href = cloneA.href;
  
  console.log(newLink);

  var linked = document.createElement("img");
  linked.setAttribute('src', "images/icons/linkedin.png");
  linked.classList.add("linkedin");
  newLink.appendChild(linked);

  div.appendChild(newLink);

  div.showModal();
}

// function addEventListenersToLabels(){
//   for (let index = 0; index < years.length; index++) {
//     let label = getLabelElement(years[index]);
//     label.addEventListener('click', function () { scrollToyear(index); } )
//   }
// }

function getLabelElement(yearString){
  return document.getElementsByClassName('sidebar-list-label')[years.indexOf(yearString)]
}


function updateLabelforyearInView(){
  yearInViewCacheRect = document.getElementById(yearInViewCache).getBoundingClientRect()
  yearInViewCenterX = yearInViewCacheRect.top + yearInViewCacheRect.height/2
  // console.log("yearInViewCacheCenterX: " + yearInViewCacheCenterX)
  // console.log("yearInViewCenterX: " + yearInViewCenterX)
  delta = Math.abs(yearInViewCenterX - yearInViewCacheCenterX)
  // console.log("Delta: " + delta)
  
  if (delta > yearInViewCacheRect.height * .3){
    // console.log("Movement > .45 detected")
    yearInViewport = getyearInView()
    yearChanged = (yearInViewCache != yearInViewport)
    
    if (yearChanged){
      yearInViewCache = yearInViewport
      console.log("year in viewport changed to: " + yearInViewport)
      document.getElementById("active-label").id = "inactive-label";
      getLabelElement(yearInViewport).id = "active-label"
    }
  }
}

function getyearInView(){

  yearInfoContainerCenterX = yearInfoContainerRect.top + (yearInfoContainerRect.height/2)

  startIndex = years.length + years.indexOf(yearInViewCache) - 1

  
  for (let i = startIndex ; i < i + years.length; i++) {
    let index = i%years.length;
    // console.log("Start Index: " +startIndex % years.length )
    let yearContainerRect = document.getElementById(years[index]).getBoundingClientRect()
    yearContainerCenterX = yearContainerRect.top + yearContainerRect.height/2
    if ( (yearInfoContainerRect.top < yearContainerCenterX) && (yearContainerCenterX < yearInfoContainerRect.bottom)) {
      // console.log("year in View: " + years[index] + " with center: " + yearContainerCenterX)
      // console.log("year in View: " + years[index] + " , return after iterations: " + String(i- startIndex + 1))
      // console.log("year in View: " + years[index] )
      return years[index]
    }
  }
}
