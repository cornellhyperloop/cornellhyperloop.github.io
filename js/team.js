subteams = []
var subteamInViewCache;
var subteamInViewCacheCenterX;
var subteamInfoContainer;
var subteamInfoContainerRect;
var oldScroll;
var scrollInterval = 0;



// This function scrolls to the subteam by selecting the #ID of the subteam and scrolling it into view.
// it then selects the li element with class "subteam-label-active" making it "subteam-label-inactive"
// it then selects the li element corresponding to the subteam and making its classname "subteam-label-active"
function scrollToSubteam(subteamIndex) {
  subteam = subteams[subteamIndex]

  document.getElementById(subteam).scrollIntoView({behavior: 'smooth'});

  document.getElementById('active-label').id = "inactive-label"

  getLabelElement(subteam).id = "active-label"
}


// This executes once the DOM has been loaded. This selects the buttons and adds a click event listener
// to them once it's safe to manipulate them.
window.onload = function () {
  subteams = ['teamLeads', 'business', 'suspension', 'software', 'hardware', 'braking', 'propulsion'];
  addEventListenersToLabels()

  subteamInViewCache = 'teamLeads';
  let subteamInViewCacheRect = document.getElementById('teamLeads').getBoundingClientRect()

  subteamInfoContainer = document.getElementById('rightside-info-container')
  subteamInfoContainer.addEventListener('wheel',updateLabelforSubteamInView)

  subteamInfoContainerRect = subteamInfoContainer.getBoundingClientRect()
  console.log("subteamInfoContainerCenterX: " + String(subteamInfoContainerRect.top + subteamInfoContainerRect.height/2) )


  subteamInViewCacheCenterX = subteamInViewCacheRect.top + (subteamInViewCacheRect.height/2)
  console.log("subteamInViewCacheCenterX: " + subteamInViewCacheCenterX)

}

function addEventListenersToLabels(){
  for (let index = 0; index < subteams.length; index++) {
    let label = getLabelElement(subteams[index]);
    label.addEventListener('click', function () { scrollToSubteam(index); } )
  }
}

function getLabelElement(subteamString){
  return document.getElementsByClassName('sidebar-list-label')[subteams.indexOf(subteamString)]
}


function updateLabelforSubteamInView(){
  subteamInViewCacheRect = document.getElementById(subteamInViewCache).getBoundingClientRect()
  subteamInViewCenterX = subteamInViewCacheRect.top + subteamInViewCacheRect.height/2
  // console.log("subteamInViewCacheCenterX: " + subteamInViewCacheCenterX)
  // console.log("subteamInViewCenterX: " + subteamInViewCenterX)
  delta = Math.abs(subteamInViewCenterX - subteamInViewCacheCenterX)
  // console.log("Delta: " + delta)
  
  if (delta > subteamInViewCacheRect.height * .3){
    // console.log("Movement > .45 detected")
    subteamInViewport = getSubteamInView()
    subteamChanged = (subteamInViewCache != subteamInViewport)
    
    if (subteamChanged){
      subteamInViewCache = subteamInViewport
      console.log("Subteam in viewport changed to: " + subteamInViewport)
      document.getElementById("active-label").id = "inactive-label";
      getLabelElement(subteamInViewport).id = "active-label"
    }
  }
}

function getSubteamInView(){

  subteamInfoContainerCenterX = subteamInfoContainerRect.top + (subteamInfoContainerRect.height/2)

  startIndex = subteams.length + subteams.indexOf(subteamInViewCache) - 1

  
  for (let i = startIndex ; i < i + subteams.length; i++) {
    let index = i%subteams.length;
    // console.log("Start Index: " +startIndex % subteams.length )
    let subteamContainerRect = document.getElementById(subteams[index]).getBoundingClientRect()
    subteamContainerCenterX = subteamContainerRect.top + subteamContainerRect.height/2
    if ( (subteamInfoContainerRect.top < subteamContainerCenterX) && (subteamContainerCenterX < subteamInfoContainerRect.bottom)) {
      // console.log("Subteam in View: " + subteams[index] + " with center: " + subteamContainerCenterX)
      // console.log("Subteam in View: " + subteams[index] + " , return after iterations: " + String(i- startIndex + 1))
      // console.log("Subteam in View: " + subteams[index] )
      return subteams[index]
    }
  }
}
