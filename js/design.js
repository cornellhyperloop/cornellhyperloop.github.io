var infoContainers;
var infoContainerKeyInViewCache;
var infoContainerKeyInViewCacheCenterX;
var rightsideInfoContainer;
var rightsideInfoContainerRect;
var scrollInterval = 0;

function pageSpecificOnLoad() {
  console.log("design window.onload()...");
  infoContainers = {
    all: {
      index: 0,
      infoContainerID: "the-pod"
    },
    propulsion: {
      index: 1,
      infoContainerID: "propulsion"
    },
    braking: {
      index: 2,
      infoContainerID: "braking"
    },
    suspension: {
      index: 3,
      infoContainerID: "suspension"
    },
    
  };

  addEventListenersToLabels();
  console.log("Adding event listeners to labels...");

  infoContainerKeyInViewCache = "all";
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

function addEventListenersToLabels() {
  for (const key in infoContainers) {
    console.log(key);
    if (infoContainers.hasOwnProperty(key)) {
      let label = getLabelElement(key);
      label.addEventListener("click", function() {
        scrollToContainer(key);
      });
    }
  }
}

function scrollToContainer(infoContainerKey) {
  infoContainer = infoContainers[infoContainerKey];

  document
    .getElementById(infoContainer["infoContainerID"])
    .scrollIntoView({ behavior: "smooth" });

  document.getElementById("active-label").id = "inactive-label";

  getLabelElement(infoContainerKey).id = "active-label";
}


function getLabelElement(nameOfKey) {
  labelIndex = infoContainers[nameOfKey]["index"];
  return document.getElementsByClassName("sidebar-list-label")[labelIndex];
}
function updateLabelInView() {
  if (window.innerWidth < tabletMaxWidth) {
    return;
  }
  infoContainerKeyInViewCacheRect = document
    .getElementById(
      infoContainers[infoContainerKeyInViewCache]["infoContainerID"]
    )
    .getBoundingClientRect();
  infoContainerInViewCenterX =
    infoContainerKeyInViewCacheRect.top +
    infoContainerKeyInViewCacheRect.height / 2;
  // console.log("infoContainerKeyInViewCacheCenterX: " + infoContainerKeyInViewCacheCenterX)
  // console.log("infoContainerInViewCenterX: " + infoContainerInViewCenterX)
  delta = Math.abs(
    infoContainerInViewCenterX - infoContainerKeyInViewCacheCenterX
  );
  // console.log("Delta: " + delta)

  if (delta > infoContainerKeyInViewCacheRect.height * 0.3) {
    // console.log("Movement > .45 detected")
    infoContainerInViewport = getinfoContainerKeyInView();
    infoContainerChanged =
      infoContainerKeyInViewCache != infoContainerInViewport;

    if (infoContainerChanged) {
      infoContainerKeyInViewCache = infoContainerInViewport;
      // console.log("infoContainer in viewport changed to: " + infoContainerInViewport)
      document.getElementById("active-label").id = "inactive-label";
      getLabelElement(infoContainerInViewport).id = "active-label";
    }
  }
}
function getinfoContainerKeyInView() {
  rightsideInfoContainerCenterX =
    rightsideInfoContainerRect.top + rightsideInfoContainerRect.height / 2;

  for (const key in infoContainers) {
    if (infoContainers.hasOwnProperty(key)) {
      let infoContainerContainerRect = document
        .getElementById(infoContainers[key]["infoContainerID"])
        .getBoundingClientRect();
      infoContainerContainerCenterX =
        infoContainerContainerRect.top + infoContainerContainerRect.height / 2;
      if (
        rightsideInfoContainerRect.top < infoContainerContainerCenterX &&
        infoContainerContainerCenterX < rightsideInfoContainerRect.bottom
      ) {
        return key;
      }
    }
  }
}