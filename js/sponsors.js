var infoContainers; 
var infoContainerKeyInViewCache;
var infoContainerKeyInViewCacheCenterX;
var rightsideInfoContainer;
var rightsideInfoContainerRect;
var scrollInterval = 0;



// This function scrolls to the infoContainer by selecting the #ID of the infoContainer and scrolling it into view.
// it then selects the li element with class "infoContainer-label-active" making it "infoContainer-label-inactive"
// it then selects the li element corresponding to the infoContainer and making its classname "infoContainer-label-active"
function scrollToContainer(infoContainerKey) {
  infoContainer = infoContainers[infoContainerKey]

  document.getElementById(infoContainer["infoContainerID"]).scrollIntoView({behavior: 'smooth'});

  document.getElementById('active-label').id = "inactive-label"

  getLabelElement(infoContainerKey).id = "active-label"
}


// This executes once the DOM has been loaded. This selects the buttons and adds a click event listener
// to them once it's safe to manipulate them.
<<<<<<< HEAD
window.onload = function () {
=======
function pageSpecificOnLoad() {
  console.log("sponsors window.onload()...")
>>>>>>> d92c9034cbe3ae795c01d7fd2a3cbad6649c7769
  infoContainers = {
    "sponsors": {
      "index" : 0,
      "labelInnerText": "sponsors",
      "infoContainerID": "sponsors"
      
      },
    "sponsorPackages":{
      "index" : 1,
      "labelInnerText": "Become A Sponsor",
      "infoContainerID": "sponsor-packages"
    }
  };

  addEventListenersToLabels()
<<<<<<< HEAD
=======
  console.log("Adding event listeners to labels...")
>>>>>>> d92c9034cbe3ae795c01d7fd2a3cbad6649c7769

  infoContainerKeyInViewCache = "sponsors";
  let infoContainerKeyInViewCacheRect = document.getElementById(infoContainers[infoContainerKeyInViewCache]["infoContainerID"]).getBoundingClientRect()

  rightsideInfoContainer = document.getElementById('rightside-info-container')
  rightsideInfoContainer.addEventListener('wheel',updateLabelInView)

  rightsideInfoContainerRect = rightsideInfoContainer.getBoundingClientRect()
  // console.log("rightsideInfoContainerCenterX: " + String(rightsideInfoContainerRect.top + rightsideInfoContainerRect.height/2) )


  infoContainerKeyInViewCacheCenterX = infoContainerKeyInViewCacheRect.top + (infoContainerKeyInViewCacheRect.height/2)
  // console.log("infoContainerKeyInViewCacheCenterX: " + infoContainerKeyInViewCacheCenterX)

}

function addEventListenersToLabels(){
  for (const key in infoContainers) {
<<<<<<< HEAD
    // console.log(key)
    if (infoContainers.hasOwnProperty(key)) {
      let label = getLabelElement(key);
      label.addEventListener('click', function () { scrollToContainer(key); console.log("hi")} )
=======
    console.log(key)
    if (infoContainers.hasOwnProperty(key)) {
      let label = getLabelElement(key);
      label.addEventListener('click', function () { scrollToContainer(key); 
    } )
>>>>>>> d92c9034cbe3ae795c01d7fd2a3cbad6649c7769
    }
  }
}

function getLabelElement(nameOfKey){
  // console.log("getLabelElement: nameOfKey: " + nameOfKey)
  labelIndex = infoContainers[nameOfKey]["index"]
  return document.getElementsByClassName('sidebar-list-label')[labelIndex]
}


function updateLabelInView(){
  infoContainerKeyInViewCacheRect = document.getElementById(infoContainers[infoContainerKeyInViewCache]["infoContainerID"]).getBoundingClientRect()
  infoContainerInViewCenterX = infoContainerKeyInViewCacheRect.top + infoContainerKeyInViewCacheRect.height/2
  // console.log("infoContainerKeyInViewCacheCenterX: " + infoContainerKeyInViewCacheCenterX)
  // console.log("infoContainerInViewCenterX: " + infoContainerInViewCenterX)
  delta = Math.abs(infoContainerInViewCenterX - infoContainerKeyInViewCacheCenterX)
  // console.log("Delta: " + delta)
  
  if (delta > infoContainerKeyInViewCacheRect.height * .3){
    // console.log("Movement > .45 detected")
    infoContainerInViewport = getinfoContainerKeyInView()
    infoContainerChanged = (infoContainerKeyInViewCache != infoContainerInViewport)
    
    if (infoContainerChanged){
      infoContainerKeyInViewCache = infoContainerInViewport
      // console.log("infoContainer in viewport changed to: " + infoContainerInViewport)
      document.getElementById("active-label").id = "inactive-label";
      getLabelElement(infoContainerInViewport).id = "active-label"
    }
  }
}

function getinfoContainerKeyInView(){

  rightsideInfoContainerCenterX = rightsideInfoContainerRect.top + (rightsideInfoContainerRect.height/2)

  for (const key in infoContainers) {
    if (infoContainers.hasOwnProperty(key)) {
      let infoContainerContainerRect = document.getElementById(infoContainers[key]["infoContainerID"]).getBoundingClientRect()
      infoContainerContainerCenterX = infoContainerContainerRect.top + infoContainerContainerRect.height/2
      if ( (rightsideInfoContainerRect.top < infoContainerContainerCenterX) && (infoContainerContainerCenterX < rightsideInfoContainerRect.bottom)) {
        return key
      }
    }
  }

}
