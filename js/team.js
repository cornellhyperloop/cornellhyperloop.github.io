subteams = []
var subteamInViewCache;
var subteamInViewCacheCenterX;
var subteamInfoContainer;
var subteamInfoContainerRect;
var oldScroll;
var scrollInterval = 0;

var modalDict = {
  "JeremyClerc": "Hyperloop offered the perfect combination of an immersive experience in both business and technology.",
  "MaxGreenberg": "I have always looked up to Elon Musk because of his work ethic and creativity, and at the same time, I had to be a part of a group determined to further establish a new type of transportation that can travel faster than any form of travel we currently have.",
  "AlecWyatt": "Hyperloop is a young team working to do something that’s never been done before. This team represents perhaps the greatest opportunity to do truly innovative work.",
  "DeeptiTalesra": "I've been interested in Hyperloop ever since the first white pages were released by Elon, and after learning that Cornell had a project team for the Hyperloop, I already knew what I wanted to do. And also because ELON MUSK.",
  "TimTran": "I chose Hyperloop because I wanted to work on cutting edge technology and push the boundaries of engineering.",
  "RobertFleming": "I chose Hyperloop over other project teams because I believe Hyperloop will be paramount in order to build a sustainable future.",
  "MatthewCreighton": "The potential to change the way we commute to work and school interested me.",
  "MichaelGuan": "I am genuinely interested in the concept of a hyperloop and this project team really stood out to me as one that allows you to be flexible and try new things out. Also, I would love to attend the SpaceX hyperloop competition.",
  "YoungSeokNa": "I have chosen Hyperloop since its vision of improving the quality of others' lives through innovation resonated with that of mine.",
  "DanaOwens": "I really liked the idea of working with technology that I wasn‘t familiar with and working towards competing in the Hyperloop competition.",
  "RoninSharma": "I chose Hyperloop because I am very interested in the pod technology and wanted to work collectively on a team to further its development.",
  "DavidWolfers": "Hyperloop is a very promising technology, and they have a lot of potential for the future. The idea of working on this technology in an early stage was very appealing. The other team members also seemed very knowledgeable and passionate about the team, so I knew that I could learn a lot from them.",
  "JacobJohansen": "Hyperloop has allowed me to get hands-on experience working with experts within the field of infrastructure and emerging technology.",
  "KaraWang": "I chose Hyperloop because of the chance to work on such a challenging and unique competition goal.",
  "ChristopherYuan": "It captured my imagination more than any of the other ones.",
  "SohniUthra": "I chose Hyperloop because it centers around the idea of building groundbreaking technology to enhance transportation, which is pretty cool.",
  "EliasLittle": "Hyperloop is one of, if not the only team that is developing new technology that is not currently commercially available in some fashion. The opportunity to work on and help develop technology that feasibly could make a difference in our lifetimes is rare, and something I couldn't pass up.",
  "ViancaHurtado": "Hyperloop chose me.",
  "CarleighRoche": "I chose Hyperloop because the team atmosphere is healthy and still competitive, the project itself is fulfilling to work on, and the specific projects I get to work on fit my interests.",
};


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

  subteamInfoContainer = document.getElementsByClassName('roster-info-container')[0]
  subteamInfoContainer.addEventListener('wheel',updateLabelforSubteamInView)

  subteamInfoContainerRect = subteamInfoContainer.getBoundingClientRect()
  console.log("subteamInfoContainerCenterX: " + String(subteamInfoContainerRect.top + subteamInfoContainerRect.height/2) )


  subteamInViewCacheCenterX = subteamInViewCacheRect.top + (subteamInViewCacheRect.height/2)
  console.log("subteamInViewCacheCenterX: " + subteamInViewCacheCenterX)

  Object.keys(modalDict).forEach(function(key) {
    console.log(key);
    var value = modalDict[key];
    console.log(value);
    // createModal(key, value);
    // document.getElementById(key).onclick = createModal(key, value);
    document.getElementById(key).addEventListener("click", function() {
      createModal(key, value);
    });

  });

}

function createModal(key, value) {
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
    div.classList.add("hidden");
  });
  
  var existingImg = document.getElementById(key).childNodes[3];
  var cloneImg = existingImg.cloneNode(true);
  div.appendChild(cloneImg);

  var existingName = document.getElementById(key).childNodes[5];
  var cloneName = existingName.cloneNode(true);
  div.appendChild(cloneName);

  var p = document.createTextNode(value);
  div.appendChild(p);

  var a = document.getElementById(key).childNodes[1];
  var cloneA = a.cloneNode(true);
  // console.log(cloneA.href);

  var newLink = document.createElement("a");
  newLink.href = cloneA.href;
  
  console.log(newLink);

  var linked = document.createElement("img");
  linked.setAttribute('src', "../images/icons/linkedin.png");
  linked.classList.add("linkedin");
  newLink.appendChild(linked);

  div.appendChild(newLink);

  div.showModal();
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
