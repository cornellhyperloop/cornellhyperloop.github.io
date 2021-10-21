cellularMaxWidth = 767;
tabletMaxWidth = 1023;
initialLoadDone = false;

pageType = {
  "404": -1,
  index: 0,
  about: 1,
  team: 2,
  design: 3,
  sponsors: 4
};

function getPageType() {
  var path = window.location.pathname;
  if (path == "/") {
    return 0;
  } else {
    var pageName = path.split("/").pop();
    return pageName.lastIndexOf(".") == -1
      ? pageType[pageName]
      : pageType[pageName.substring(0, pageName.lastIndexOf("."))];
  }
}

pageIndex = getPageType();

window.onload = function () {
  console.log("Global window.onload()...");
  window.addEventListener("resize", resizeElements);
  resizeElements();
  try {
    pageSpecificOnLoad();
  } catch (error) { }
  // configureMobileDropdown();
};

// window.onresize = resizeElements
function scrollscript() {
  var elementToScrollTo = document.getElementById("down-arrow");
  elementToScrollTo.scrollIntoView({behavior: "smooth"});

}
//var scrolldown = document.getElementById("down-arrow");
//scrolldown.addEventListener("mousedown", function(){window.scrollTo(300,500);})


function handleMobileDropdownButtonClick() {
  const dropdownContainer = document.getElementsByClassName(
    "mobile-dropdown-container"
  )[0];
  console.log("Executing mobile dropdown display on");
  // console.log("dropdown Container diplay is currently: " + dropdownContainer.style.display)
  const bar1 = document.getElementsByClassName("mobile-dropdown-button-bar")[0];
  const bar2 = document.getElementsByClassName("mobile-dropdown-button-bar")[1];
  const bar3 = document.getElementsByClassName("mobile-dropdown-button-bar")[2];

  if (dropdownContainer.id == "mobile-dropdown-container-hidden") {
    // Create X with bars
    // bar1.style.transform = "translate(0px ,20px) rotate(45deg)"
    // bar2.style.opacity = "0"
    // bar3.style.transform = "translate(0px ,-20px) rotate(-45deg)"

    bar1.id = "button-bar1-X";
    bar2.id = "button-bar2-X";
    bar3.id = "button-bar3-X";

    dropdownContainer.id = "mobile-dropdown-container-visible";
  } else {
    // Restore bars
    // bar1.style.transform = "unset"
    // bar2.style.opacity = "unset"
    // bar3.style.transform = "unset"

    bar1.id = "button-bar1";
    bar2.id = "button-bar2";
    bar3.id = "button-bar3";

    dropdownContainer.id = "mobile-dropdown-container-hidden";
  }
}

function configureMobileDropdown() {
  // const dropdownButton = document.getElementById("mobile-dropdown-button")
  // dropdownButton.addEventListener("click", ()=> {
  //     const dropdownContainer = document.getElementsByClassName("mobile-dropdown-container")[0];
  // })
}

function resizeElements() {
  console.log(
    "Resizing Elements on: Page Index: " +
    String(pageIndex) +
    " html: " +
    window.location.pathname
  );

  if ([2, 3, 4].includes(pageIndex)) {
    // Don't resize on mobile backgrounds

    console.log("Resizing Page Background");
    resizePageBackground();
  }
  if ([0].includes(pageIndex)) {
    console.log("Resizing Landing Video");
    resizeLandingVideo();
  }
}

function resizePageBackground() {
  // W1600 × L880 =

  const pageAspectRatio = 0.55;
  windowAspectRatio = window.innerHeight / window.innerWidth;

  // console.log("windowAspectRatio: " + String(windowAspectRatio).substring(0,4));
  // console.log("Resizing event occured: Client Aspect Ratio: " + String(windowAspectRatio));
  var page = document.getElementsByClassName("page")[0];

  var offset;

  if (window.innerWidth < 1023) {
    page.style.height = null;
    page.style.backgroundPositionX = null;
    return;
  }

  if (windowAspectRatio < pageAspectRatio) {
    console.log("Height is too small for video");
    offset = (window.innerWidth * pageAspectRatio - window.innerHeight) / 2;
    page.style.height = window.innerHeight + "px";
    page.style.width = String(window.innerWidth) + "px";
    page.style.backgroundPositionX = "";
    page.style.backgroundPositionY = "-" + String(offset) + "px";
    page.style.left = "";
    page.style.width = "";
    // page.style.height = String(pageAspectRatio * window.innerWidth) + "px";
    // console.log("Making page height: " + String(pageAspectRatio * window.innerWidth));
  } else {
    console.log("Width is too small for background");
    // console.log("clientHeight: " + String(window.innerHeight))
    offset =
      ((1 / pageAspectRatio) * window.innerHeight - window.innerWidth) / 2;
    page.style.height = String(window.innerHeight) + "px";
    // page.style.overflow-x = "hidden";
    page.style.width = "";
    page.style.top = "";
    page.style.backgroundPositionX = "-" + String(offset) + "px";
    page.style.backgroundPositionY = "";
    // page.style.width = String((1/pageAspectRatio) * window.innerHeight) + "px";
    // console.log("Making page width: " + String((1/pageAspectRatio) * window.innerHeight));
    // page.style.height = "";
  }
}

function getDisplayCategory() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    return "cellular";
  } else if (windowWidth < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
}
function getHeaderHeight() {
  return parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue("--" + getDisplayCategory() + "HeaderHeight")
    .replace(/\D/g, ""));
}

function resizeLandingVideo() {
  if (window.innerWidth < cellularMaxWidth) {
    console.log("Resizing Video Aborted");
    return;
  }

  const landingVideo = document.getElementById("landing-video");

  try {
    const offsetDivElement = document.getElementsByClassName(
      "landing-page-video-offset-div"
    )[0];
    if (getComputedStyle(landingVideo).position == "static") {
      const headerHeight = getHeaderHeight()
      const marginNeeded = Math.round(
        landingVideo.getBoundingClientRect().bottom - headerHeight
      );
      offsetDivElement.style.marginTop = marginNeeded + "px";
    } else {
      // Remove margin
      offsetDivElement.style.marginTop = "";
    }
  } catch (error) {

  }



  // if (!initialLoadDone) {
  //   initialLoadDone = true;
  //   return;
  // }
  const landingVideoAspectRatio = 0.5625;
  const windowWidth = window.innerWidth;

  windowAspectRatio = window.innerHeight / windowWidth;


  landingVideo.style.width = String(windowWidth) + "px";


  // if (windowAspectRatio < landingVideoAspectRatio) {
  if (landingVideo.getBoundingClientRect().height + getHeaderHeight() >= window.innerHeight) {
    landingVideo.style.position = "static";
    landingVideo.style.top = "0px";
  } else {
    // console.log("Width is too small for video");
    landingVideo.style.position = "";
    landingVideo.style.top = "";
  }
  //   Adjust offset div's margin for landing page content to be below video

  // 1920 x 1080
}
