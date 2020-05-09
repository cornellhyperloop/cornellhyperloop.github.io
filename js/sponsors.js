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
  infoContainer = infoContainers[infoContainerKey];

  document
    .getElementById(infoContainer["infoContainerID"])
    .scrollIntoView({ behavior: "smooth" });

  document.getElementById("active-label").id = "inactive-label";

  getLabelElement(infoContainerKey).id = "active-label";
}

// This executes once the DOM has been loaded. This selects the buttons and adds a click event listener
// to them once it's safe to manipulate them.
function pageSpecificOnLoad() {
  console.log("sponsors window.onload()...");
  infoContainers = {
    sponsors: {
      index: 0,
      labelInnerText: "sponsors",
      infoContainerID: "sponsors"
    },
    sponsorPackages: {
      index: 1,
      labelInnerText: "Become A Sponsor",
      infoContainerID: "sponsor-packages"
    }
  };

  addEventListenersToLabels();
  addEventListenersToLogos();
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

function toggleLogoDescription(tierName, entering) {
  listOfPerksElements = document.getElementsByClassName(
    "sponsorship-description-wrapper"
  )[0].firstElementChild.children;
  // document.querySelector("span.pioneer-perk").classList.toggle("inactive");
  // document.querySelector("span." + tierName + "-perk").classList.toggle("inactive");

  logoSizesSpanList = document.querySelectorAll("span");
  for (let i = 0; i < logoSizesSpanList.length; i++) {
    const element = logoSizesSpanList[i];
    if (entering) {
      if (element.classList.contains(tierName + "-perk")) {
        element.classList.remove("inactive");
      } 
      else{
        element.classList.add("inactive");
      }
    }
    else{
      // Exiting, turn off all tags except for defaut pioneer one
      if(!element.classList.contains("pioneer-perk")){
        element.classList.add("inactive");
      }
      else{
        element.classList.remove("inactive");
      }
    }
  }

  for (let index = 0; index < listOfPerksElements.length; index++) {
    const element = listOfPerksElements[index];
    if (entering) {
      if (element.classList.contains(tierName + "-perk")) {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0.23;
      }
    } else {
      element.style.opacity = null;
    }

    // element.classList.toggle("opacity-25")
  }

  // tierDescriptionElement = document.getElementById(tierName + "-description")

  // tierDescriptionElement.classList.toggle("active-tier-description")
}

function untoggleAllSponsorshipLabel(tierToExclude) {
  tiers.forEach(tierName => {
    if (tierName != tierToExclude && tierToExclude != "pioneer") {
      document
        .querySelector("span." + tierName + "-perk")
        .classList.toggle("inactive");
    }
  })

  const tierLogos = document.getElementsByClassName("tier-packages-logos")[0]
    .children;
  for (let i = 0; i < tierLogos.length; i++) {
    const element = tierLogos[i];
    if (element.id != tierToExclude + "-logo") {
      element.classList.remove("active-package-logo");
    }
  }
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
