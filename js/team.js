subteams = []
var subteamInViewCache;
var subteamInViewCacheCenterX;
var subteamInfoContainer;
var subteamInfoContainerRect;
var oldScroll;
var scrollInterval = 0;

const questions = [
  "Why did you choose Hyperloop over other project teams?",
  "What's your favorite part of being on Hyperloop?",
  "Tell us a bit about yourself!",
  "Tell us an interesting fact about yourself!"
]

var modalDict = {
  "JeremyClerc": [
    "Hyperloop offered the perfect combination of an immersive experience in both business and technology.",
    "Being surrounded with people of diverse skill set and having the opportunity to listen on meetings and presentations of all the project team divisions.",
    "I am an Information Science major, a business minor, and I really enjoy reading about technology and watching movies",
    "I have the French and American passport."],
  "MaxGreenberg": [
    "I have always looked up to Elon Musk because of his work ethic and creativity, and at the same time, I had to be a part of a group determined to further establish a new type of transportation that can travel faster than any form of travel we currently have.",
    "I love the people I work with and the exposure to technology.",
    "I'm majoring in Computer Science with a Business minor. I love New York sports; I'm a Jets, Yankees, and Knicks fan. I also love listening to music.",
    "I'm an older brother."],
  "AlecWyatt": [
    "Hyperloop is a young team working to do something that’s never been done before. This team represents perhaps the greatest opportunity to do truly innovative work.",
    "Everyone on this team is dedicated to the same goal: produce a pod that’s good enough to compete. It’s rare to be a part of such a dedicated, focused team.",
    "I’m a junior in ECE with interests in aerospace and renewable energy. I enjoy debugging, troubleshooting, testing, and finding out why everything’s broken.",
    "I’m a two-time transfer student. This is my first semester at Cornell and I’m eager to take advantage of all that this place has to offer.",
    ],
  "DeeptiTalesra": [
    "I've been interested in Hyperloop ever since the first white pages were released by Elon, and after learning that Cornell had a project team for the Hyperloop, I already knew what I wanted to do. And also because ELON MUSK.",
    "The energy! Everyone is very passionate and excited about the team and what we're building. Being a part of this community is amazing. ",
    "I am a junior studying CS in the College of Engineering and also a member of the Data Engineering team for Cornell Data Science. I enjoy dancing as well and am a part of Assorted Aces and Cornell's Competitive Ballroom DanceSport.",
    "I <3 the snow! ❄️ ",
    ],
  "TimTran": [
    "I chose Hyperloop because I wanted to work on cutting edge technology and push the boundaries of engineering.",
    "I like being involved in different aspects of the team and learning about how other teams are implementing their pods.",
    "I like playing video games and looking at computer parts online that I can never afford :)) My major is ECE, and (hopefully) CS. I'm taking classes such as ECE 2300, ECE 2200 to get those requirements out. I'm planning to take more CS classes next  semester to affiliate with the major (to unlock them enrollment priorities).",
    "I like taking my computers apart and putting them back together sometimes",
    ],
  "RobertFleming": [
    "I chose Hyperloop over other project teams because I believe Hyperloop will be paramount in order to build a sustainable future.",
    "My favorite part of being on Hyperloop is that I’m always learning new skills and how different tools and materials work.",
    "ECE/MechE. Cornell Science Olympiad, Boxing Club. Currently taking Math 1910, Chem 2090, Ethics of AI, CS 1110,  Intro to Nanotech",
    "I have a good french accent so I can sort of fake fluency.",
    ],
  "MatthewCreighton": [
    "The potential to change the way we commute to work and school interested me.",
    "Gaining skills not taught in the classroom",
    "Jazz saxophone performance, Materials Science major, ultimate frisbee",
    "I have two dogs at home",
    ],
  "MichaelGuan": [
    "I am genuinely interested in the concept of a hyperloop and this project team really stood out to me as one that allows you to be flexible and try new things out. Also, I would love to attend the SpaceX hyperloop competition.",
    "I like the generally chill atmosphere and I think it is really cool how we are allowed to work on something from another subteam that we find interesting",
    "I am a CS major, currently taking CS 3110. I like to play video games, ski, solve puzzles, and program. I am also in the cybersecurity club.",
    "I can solve a Rubik's cube blindfolded in about 6 minutes",
    ],
  "YoungSeokNa": [
    "I have chosen Hyperloop since its vision of improving the quality of others' lives through innovation resonated with that of mine.",
    "Hyperloop gives me a freedom to explore and learn about different compartments that composes not only the electrical portion of the pod but also the mechanical aspects of the pod through the dynamic nature of different subteams.",
    "I am currently a sophomore pursuing a degree in ECE, hopefully double-major with CS. Outside of my academic curriculum, I like to explore different subject areas such as chemistry and music. With my interest in music, I play acoustic guitar in my free time. I am also looking into electronic guitars, though it may be similar to acoustics. Additionally, I like reading fictions in quiet surroundings.",
    "I also go by Alex, which was given by my Canadian cousin.",
    ],
  "DanaOwens": [
    "I really liked the idea of working with technology that I wasn‘t familiar with and working towards competing in the Hyperloop competition.",
    "Learning more about hardware and its applications.",
    "I really like ice skating, hiking and reading. Some of my favorite classes at Cornell are my CS classes.",
    "I have the same name as Queen Latifah! :)",
    ],
  "RoninSharma": [
    "I chose Hyperloop because I am very interested in the pod technology and wanted to work collectively on a team to further its development.",
    "I really enjoy the collaborative environment where I am learning about the work conducted by all subteams.",
    "I am a sophomore ECE major from Westchester, NY.  Aside from Hyperloop, I conduct machine learning research in the Messer Lab, am a consultant for CS 1110, and am an engineering ambassador.  In my free time I enjoy playing badminton and tennis.",
    "I have severe allergies to eggs, so I can't eat most desserts.  That means no cake, brownies, or ice cream.",
    ],
  "DavidWolfers": [
    "Hyperloop is a very promising technology, and they have a lot of potential for the future. The idea of working on this technology in an early stage was very appealing. The other team members also seemed very knowledgeable and passionate about the team, so I knew that I could learn a lot from them.",
    "I enjoy working on such an interesting and complex project, and I really enjoy spending time with other team members. ",
    "I am a Computer Science Major in the College of Engineering. I really enjoy playing and watching soccer and skiing, especially in Colorado. I also play the trumpet and piano, and I particularly enjoy jazz music.",
    "I have travelled to 9 different countries.",
    ],
  "JacobJohansen": [
    "Hyperloop has allowed me to get hands-on experience working with experts within the field of infrastructure and emerging technology. ",
    "Honestly, being able to work on such a cool project",
    "Jacob is a Policy Analysis & Management Major with a Minor in Information Sciences. His main research is focused on Private-Public-Partnerships and infrastructure development for outer space and its impact on Aerospace and Defense markets. Outside of Hyperloop and classes, Jacob is the President of the Global Economic & Finance Society (GEFS) and plays intramural soccer.",
    "Space Nerd",
    ],
  "KaraWang": [
    "I chose Hyperloop because of the chance to work on such a challenging and unique competition goal.",
    "the people :-)",
    "I'm a sophomore studying Mechanical Engineering. I enjoy cooking, photography, hiking, and playing tennis! ",
    "I love love LOVE sushi",
    ],
  "ChristopherYuan": [
    "It captured my imagination more than any of the other ones.",
    "Working on something I've been reading about in science magazines since middle school! ",
    "In my free time, I enjoy listening to hip hop, rnb, and jazz music, reading science fiction books, and spending time in the outdoors. Academically, I'm interested in theoretical cs and artificial intelligence, as well as linguistics and economics.",
    "I can play 5 instruments, the favorite of which is the drums!",
    ],
  "SohniUthra": [
    "I chose Hyperloop because it centers around the idea of building groundbreaking technology to enhance transportation, which is pretty cool.",
    "My favorite part of being on Hyperloop is that I am learning so much that I probably would not have learned in regular classes. I also love how motivated everyone on the team is.",
    "I am a CS major in the College of Engineering. I love dancing and listening to music!",
    "All of my clothes in my closet are organized by color and sleeve-length. ",
    ],
  "EliasLittle": [
    "Hyperloop is one of, if not the only team that is developing new technology that is not currently commercially available in some fashion. The opportunity to work on and help develop technology that feasibly could make a difference in our lifetimes is rare, and something I couldn't pass up.",
    "My favorite part of being on Hyperloop is exchanging ideas for different designs or improvements.",
    "I am a freshman in Engineering, planning to major in either CS or OR. I love coding and doing research in my free time. I also grew up working in a shop and I love getting my hands dirty, which is one of the many reasons I joined Hyperloop, as on outlet for my MechE interests. Outside of Hyperloop, I am also a member of Anything Goes, a musical theatre troupe, where I play the cello in the band. I also enjoy playing many different instruments and genres of music in my free time, in addition to the coding and research I mentioned before.",
    "I performed at Carnegie Hall with my high school orchestra.",
    ],
  "ViancaHurtado": [
    "hyperloop chose me. ",
    "I think its a nice way to spend my mondays from 6-9pm, Mondays 6-8pm and Fridays 4-6pm",
    "SHPE, URMC",
    "I have crocs",
    ],
  "CarleighRoche": [
    "I chose Hyperloop because the team atmosphere is healthy and still competitive, the project itself is fulfilling to work on, and the specific projects I get to work on fit my interests.",
    "My favorite part of being on Hyperloop is being surrounded by talented, hardworking people who never fail to extend an offer of help. They continuously push me to improve and always offer assistance and guidance when asked.",
    "I'm a computer science major in the college of engineering. In my free time, I run on campus. I'm a member of the hall council for my dorm and like organizing social events.I'm also a member of WICC and CCRA.",
    "If I were to change my area of study from engineering, I'd be studying culinary arts. (I love to cook!)",
    ],
    "LuisLondono":[
      "I chose hyperloop because there is not blueprint to what we're doing, so its truly a great example of engineering talent.",
      "Its nice exchanging ideas with others",
      "I am a CS major, I am also a member of URMC and SHPE.",
      "I have the same name as Maluma.",
    ]

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
  subteams = ['teamLeads','webdev' ,'business', 'suspension', 'software', 'hardware', 'braking', 'propulsion'];
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
  for (let qIndex = 0; qIndex < questions.length; qIndex++) {
    const QAdiv = document.createElement("div")
    QAdiv.classList.add("qa-box")
    const question = document.createElement("h5")
    question.innerText = questions[qIndex]
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
