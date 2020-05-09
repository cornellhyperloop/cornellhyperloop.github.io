var infoContainers;
var infoContainerKeyInViewCache;
var infoContainerKeyInViewCacheCenterX;
var rightsideInfoContainer;
var rightsideInfoContainerRect;
var scrollInterval = 0;

function pageSpecificOnLoad() {
  console.log("sponsors window.onload()...");
  infoContainers = {
    all: {
      index: 0,
      infoContainerID: "sponsors"
    },
    propulsion: {
      index: 1,
      infoContainerID: "sponsor-packages"
    },
    braking: {
      index: 2,
      infoContainerID: "sponsors"
    },
    suspension: {
      index: 3,
      infoContainerID: "sponsors"
    },
    
  };

  addEventListenersToLabels();
  console.log("Adding event listeners to labels...");

  infoContainerKeyInViewCache = "sponsors";
  let infoContainerKeyInViewCacheRect = document
    .getElementById(
      infoContainers[infoContainerKeyInViewCache]["infoContainerID"]
    )
    .getBoundingClientRect();

  rightsideInfoContainer = document.getElementById("rightside-info-container");
  rightsideInfoContainer.addEventListener("wheel", updateLabelInView);

  rightsideInfoContainerRect = rightsideInfoContainer.getBoundingClientRect();
  // console.log("rightsideInfoContainerCenterX: " + String(rightsideInfoContainerRect.top + rightsideInfoContainerRect.height/2) )

  infoContainerKeyInViewCacheCenterX =
    infoContainerKeyInViewCacheRect.top +
    infoContainerKeyInViewCacheRect.height / 2;
  // console.log("infoContainerKeyInViewCacheCenterX: " + infoContainerKeyInViewCacheCenterX)
}


function getLabelElement(nameOfKey) {
  labelIndex = infoContainers[nameOfKey]["index"];
  return document.getElementsByClassName("sidebar-list-label")[labelIndex];
}