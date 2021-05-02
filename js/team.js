subteams = []
var subteamInViewCache;
var subteamInViewCacheCenterX;
var subteamInfoContainer;
var subteamInfoContainerRect;
var oldScroll;
var scrollInterval = 0;

const questions = [
  "Hometown",
  "Major & Grad Year",
  "Why did you choose to join Hyperloop?",
  "What's your favorite part about being on Hyperloop?",
  "What do you do outside of Hyperloop?",
  "Tell us one thing most people would not guess about you."
]
//test comment for github push
var modalDict = {
  // "JeremyClerc": [
  //   "N/A",
  //   "N/A",
  //   "Hyperloop offered the perfect combination of an immersive experience in both business and technology.",
  //   "Being surrounded with people of diverse skill set and having the opportunity to listen on meetings and presentations of all the project team divisions.",
  //   "I am an Information Science major, a business minor, and I really enjoy reading about technology and watching movies",
  //   "I have the French and American passport."],
  "MaxGreenberg": [
    "Miami, Florida",
    "Computer Science, December 2021",
    "Elon Musk is one of my role models. In addition, I wanted to be a part of a project focused on revolutionizing long distance travel, particularly through the development of a new mode of transportation.",
    "I love collaborating with my teammates.",
    "I love hanging out with my friends, watching sports, and listening to music.",
    "I can say the alphabet backwards."],
  "DeeptiTalesra": [
    "Edison, NJ",
    "Computer Science 2021",
    "I had been interested in Hyperloop ever since the first white pages were released by Elon, and after learning that Cornell had a project team for the Hyperloop, I already knew what I wanted to do. And also because ELON MUSK.",
    "The people and the energy! Everyone is very passionate and excited about the team and what we're building. Being a part of this community is amazing.",
    "Outside of Hyperloop, I'm also a part of CDS, Assorted Aces, and Find My Food (an app that lets college students know of free food)!",
    "I have a youtube:)",
  ],
  "TimTran": [
    "Ho Chi Minh City",
    "ECE, 2022",
    "I chose Hyperloop because I wanted to innovate and help make the future a reality.",
    "The people, especially on Hardware.",
    "I play video games, and just read about whatever is new in tech.",
    "I make pretty good steak.",
  ],
  "RobertFleming": [
    "Wynnewood, PA",
    "Electrical and Computer Engineering 2023",
    "I believe Hyperloop will be crucial towards building a sustainable future and I want to help us get there.",
    "My favorite part of being on Hyperloop is pushing the limits of my capabilities and learning new skills.",
    "I participate in the Tae Kwon Do and boxing club at Cornell. I’m also an avid fan of all things Marvel/Star Wars.",
    "I have a good french accent so I can sort of fake fluency.",
  ],
  "MatthewCreighton": [
    "Albany, NY",
    "Materials Science & Engineering 2022",
    "I wanted to contribute to changing the way we commute and travel.",
    "Being able to apply classroom knowledge to real systems.",
    "I play the saxophone and ultimate frisbee.",
    "I almost pursued a career in theater tech.",
  ],
  "MichaelGuan": [
    "Ithaca, NY",
    "Computer Science 2022",
    "I chose to join Hyperloop because I thought it would be really cool to work on this technology that has the potential to change the future of transportation. It would be awesome if I could have the chance to participate in the SpaceX competition. Also I really love the logo for Hyperloop :)",
    "I like the generally chill atmosphere and I think it is really cool how we are allowed to work on something from another subteam that we find interesting",
    "Outside of Hyperloop I enjoy skiing, swimming, programming, solving puzzles, playing video games, and watching movies, TV shows, and anime.",
    "I once swam in Cayuga Lake on New Years Day (There were chunks of ice in the water).",
  ],
  // "DanaOwens": [
  //   "Rochester, NY",
  //   "Computer Science, 2021",
  //   "I chose to join Hyperloop because I was interested in the technology and wanted to impact the future of transportation. I love learning new things and I've learned a lot about hardware/software interaction while being on the team!",
  //   "My favorite part of being on Hyperloop is working in a collaborative environment with other students and getting to do research.",
  //   "Outside of Hyperloop I love to read, hike and explore!",
  //   "I have the same name as Queen Latifah!",
  //   ],
  "RoninSharma": [
    "Ardsley, NY",
    "Electrical & Computer Engineering '21",
    "I became interested in Cornell Hyperloop when I learned that this technology can be applied to help improve the efficiency of transportation as well as reduce the time spent in travel. I joined the team to contribute to the development of this innovative technology.",
    "I really enjoy working with the members on the team as I've learned so much as everyone has such a diverse background and skillset.",
    "I am a machine learning researcher in the Messer Lab. I also am a TA for ECE 2300 and CS 2110.",
    "I am an excellent badminton player.",
  ],
  "DavidWolfers": [
    "Lancaster, PA",
    "Computer Science, 2023",
    "Hyperloop is a very promising technology, and they have a lot of potential for the future. I could not pass up the opportunity to help contribute to this amazing development. The other team members also seemed very knowledgeable and passionate about the team, so I knew that I could learn a lot from them.",
    "I most enjoy spending time with my other subteam members during socials or in the ELL.",
    "Outside of Hyperloop I am an Orientation Leader for incoming students. I am also a member of Delta Tau Delta fraternity.",
    "I really enjoy skiing, especially through the glade.",
  ],
  // "JacobJohansen": [
  //   "N/A",
  //   "N/A",
  //   "Hyperloop has allowed me to get hands-on experience working with experts within the field of infrastructure and emerging technology. ",
  //   "Honestly, being able to work on such a cool project",
  //   "Jacob is a Policy Analysis & Management Major with a Minor in Information Sciences. His main research is focused on Private-Public-Partnerships and infrastructure development for outer space and its impact on Aerospace and Defense markets. Outside of Hyperloop and classes, Jacob is the President of the Global Economic & Finance Society (GEFS) and plays intramural soccer.",
  //   "Space Nerd",
  //   ],
  // "SohniUthra": [
  //   "Winston-Salem, NC",
  //   "Computer Science 2023",
  //   "I chose Hyperloop because it centers around the idea of building groundbreaking technology to enhance transportation, which is pretty cool.",
  //   "My favorite part of being on Hyperloop is that I am learning so much that I probably would not have learned in regular classes. I also love how motivated everyone on the team is.",
  //   "I am a member of Cornell Sitara (Bollywood Dance Team) and Society of Women Engineers.",
  //   "My favorite music genre is EDM!",
  //   ],
  "EliasLittle": [
    "Austin, TX",
    "ORIE, 2023",
    "I joined Hyperloop because there hasn't really been a new form of transportation since the airplane, and I think developing this new technology could be extremely impactful for the future.",
    "I really like being able to think about and design components for something that hasn't really been done before. It presents new and unique challenges.",
    "Outside of Hyperloop, I play Cello for Anything Goes a musical theater group, I work on various personal coding projects, and like to read.",
    "People probably wouldn't guess that I play 4 different instruments",
  ],
  // "ViancaHurtado": [
  //   "N/A",
  //   "N/A",
  //   "hyperloop chose me. ",
  //   "I think its a nice way to spend my mondays from 6-9pm, Mondays 6-8pm and Fridays 4-6pm",
  //   "SHPE, URMC",
  //   "I have crocs",
  //   ],
  // "CarleighRoche": [
  //   "Lancaster, PA",
  //   "Computer Science, 2023",
  //   "The team atmosphere was very friendly and I like the project itself too. New technology like the Hyperloop has always been very interesting to me.",
  //   "The team is friendly, welcoming and always willing to help. They've made a great network and make the team super enjoyable.",
  //   "I like to run, read, and cook in my free time.",
  //   "I've been learning tae kwon do for the past year.",
  //   ],
  // "LuisLondono":[
  //   "N/A",
  //   "N/A",
  //   "I chose hyperloop because there is not blueprint to what we're doing, so its truly a great example of engineering talent.",
  //   "Its nice exchanging ideas with others",
  //   "I am a CS major, I am also a member of URMC and SHPE.",
  //   "I have the same name as Maluma.",
  // ],
  "RoninChasan": [
    "Plainview, NY",
    "Information Science, 2022",
    "The concept of working on a futuristic project like Hyperloop was, and still is, kind of a dream for me, even to just have a hand in it. Plus, I looked forward to making a bunch of great new connections with my teammates.",
    "I love the work ethic and passion of the team. Everyone is extraordinarily motivated to achieve our goals, and anyone on the team is welcomed with open arms to lend a hand in whatever project any other sub team is working on.",
    "I am a member of the Delta Chi Fraternity, and write blog articles for a small furniture retail startup called Carter & Clyde. I also create personal coding projects in my spare time.",
    "I was a NY State Bar Association mock trial county champion in high school.",
  ],
  "JacobWise": [
    "Ardsley, NY",
    "Information Science, 2022",
    "I joined Hyperloop to work firsthand on a world-changing technology and revolutionize transportation.",
    "My favorite part about being in Hyperloop is keeping up with progress across all subteams, which each play a unique role in the success of our project.",
    "Outside of Hyperloop I enjoy listening to music and watching basketball.",
    "I once had three dogs at the same time.",
  ],
  // "WeiGeeGoay":[
  //   "Penang, Malaysia",
  //   "Computer Science, 2022",
  //   "I love working at the intersection between software and hardware. It is exciting to see the real-life application of my software development work integrated into a part of the Hyperloop pod!",
  //   "I can take control of the software development projects and be innovative throughout the process.",
  //   "I love swimming, baking, and painting!",
  //   "I almost drowned in a pool once so I decided to pick up swimming. Since then, I have been obsessed with swimming - it is so relaxing!",
  // ],
  "MelissaPsaras": [
    "Monroe, Connecticut",
    "Computer Science, 2023",
    "I chose to join Hyperloop because I wanted to be a part of a project team that would teach me a lot of new things outside of class. Hyperloop does that!",
    "Working with my best friend Sohni on the Web Development team. We are a good team and we learn off each other constantly!",
    "Read, bike, hike, drive around with my older brothers.",
    "Cornell is the seventh school I have gone to in my 14 years of schooling",
  ],
  "AlexanderNutley": [
    "Smithtown, NY",
    "Operations Research, 2022",
    "I decided to join hyperloop because it is a unique opportunity to gain experience working in a team engineering setting, as well as an opportunity to revolutionize transportation which is a vital part of our world.",
    "I love working with my team and SubTeam leads to solve unique problems.",
    "I work in Statler Library on campus, play guitar, and learn graphic design.",
    "I play the bagpipes!",
  ],
  "CoralWang": [
    "Chicago, IL",
    "Mechanical Engineering 2022",
    "I really liked the concept of Hyperloop and wanted to contribute to a meaningful project. Also competing in the Hyperloop competition.",
    "I liked learning new things and being able to apply what I've learned. Meeting new people was also great!",
    "I do research in the Butcher Lab on 3D printable heart valves. My hobbies include swimming, reading, and collecting houseplants.",
    "I can wiggle my ears.",
  ],
  "DanielleFulep": [
    "Dix Hills, NY",
    "Mechanical Engineering, 2022",
    "I joined the Hyperloop team because of the innovative work they do at the forefront on new, revolutionary technology. With new innovations consistently improving our world, I was eager to be a part of a team that helps contribute to the general advancement in the field of engineering. I am interested in designing and building new pieces of technology to improve upon existing products or structures, so I feel this team and its objectives are the right fit for me. Specifically, I am interested in helping to work on designing, CADding, prototyping, and optimizing the suspension system to help the team as a whole make a better project. I had some experience with CAD and wanted to expand on this skill set, as well as develop new skills and work in a team environment that encourages creativity necessary to truly develop the next big thing in the engineering world.",
    "While I have just joined and haven’t had much interaction with the team yet, I look forward to all of the exciting opportunities to work on a project that is creating brand new, innovative transportation technology. I am also excited to work in a creative, collaborative environment with other people who share my drive and passion.",
    "In addition to Hyperloop, I am the treasurer of Cornell’s Science Engineering and Education Development Club, which hosts activities at events in the Ithaca community to engage children and inspire scientific curiosity. We brainstorm, design, and prepare fun and interesting science experiments to complete with the children at the Sciencenter to encourage scientific involvement and exploration. Additionally, I am a member of the Cornell Hillel Engagement Committee, which plans and holds events on campus to engage the Cornell community and immerse them in Jewish culture.",
    "One thing that most people would not guess about me is that I love roller coasters and other fun, high-adrenaline activities, and I hope to go skydiving one day.",
  ],
  "JoshuaCoombs": [
    "Bronxville, NY",
    "Civil Engineering 2024",
    "I chose to join Hyperloop because I have a deep interest and fascination in transportation systems. As part of the team, I get to design and test some of the newest transportation technologies in the world.",
    "Being part of a team that is contributing to the real study and advancement of modern transportation.",
    "Cornell Ski Club, Cornell Outing Club",
    "I am a certified scuba diver.",
  ],
  "WinstonLiu": [
    "Long Island, NY",
    "Computer Science 2023",
    "Hyperloop is a fascinating concept that will change the way we connect with each other as a society. I love to learn more about disruptive innovations and wanted to contribute to this project.",
    "This is my first semester! So, I am looking forward to meeting new members and working on the Pod.",
    "On campus, I am involved with Big Red Ambassadors and ACSU. I also enjoy playing tennis, basketball, and going rock climbing.",
    "I am currently teaching myself how to ride a skateboard!",
  ],
  "FelipeHanuch": [
    "Rochester, NY",
    "Mechanical Engineering, 2022",
    "When I think about how to change the world, I think about a revolution in technology that everyone uses on a day to day basis. With Hyperloop I am glad I can be part of a cohesive team that is working together to bring this revolution to life.",
    "Rolling up the sleeves and building things in the ELL with my teammates.",
    "I play soccer and tennis in my down time and love to go out for a great meal with friends.",
    "I was on ESPN sports center top 10 plays of the night one time in 2017."
  ],
  "ChristelleChemaly": [
    "Middletown, NJ",
    "Mechanical Engineering, 2022",
    "Elon musk is an inspiration of mine. Working on one of his projects is an insanely great opportunity.",
    "I can apply classroom concepts to real life which helps a lot with understanding my studies.",
    "Singing, dancing, having fun.",
    "I hate spicy food.",
  ],
  // "NiaReid-Vicars":[
  //   "Queens, NY",
  //   "ECE, 2023",
  //   "I wanted something to test my electrical ability while building something really fun.",
  //   "Understanding nature.",
  //   "I dance, a lot.",
  //   "I’ve been in Queens my entire life.",
  // ],
  "EdwardGaus": [
    "Watertown, NY",
    "Mechanical Engineering, Class of 2022",
    "It involves lots of exciting projects that I wouldn't be able to learn about otherwise.",
    "Spending time with peers who are also enthusiastic about engineering.",
    "N/A",
    "N/A",
  ],
  "ChelseaFrisch": [
    "Westfield, NJ",
    "Mechanical Engineering, 2022",
    "Cornell Hyperloop allows me to work on a unique project that is unlike anything I have worked on before. Working on something as new as Hyperloop allows for a lot of creativity and innovation. The research that Hyperloop does has the potential to make a big impact.",
    "I like the hands on work that many of my classes do not have as well as the collaborative and welcoming environment.",
    "Outside of Hyperloop, I am part of Alpha Phi Omega, Big Red Ambassadors, Cornell Club Swimming, and I am a youth group advisor. I also love running, hiking, and exploring!",
    "If daylight savings did not exist, I would be born in a different month!",
  ],
  "CourtneyKraft": [
    "Princeton, NJ",
    "Mechanical Engineering 2023",
    "I wanted to be a part of creating the future of transportation and developing new technology.",
    "Getting to meet all of the amazing people on the team and learning new technical skills!",
    "I am on the Cornell Cheerleading team.",
    "I love to go on runs around Cornell's campus to see all of the beautiful scenery.",
  ],
  "RaghavInder": [
    "New York",
    "2023",
    "To experience the engineering process and to build something with others.",
    "It's great being at the forefront of research for this new form of transportation, and hopefully in a few years we can see all of our work manifest in an actual Hyperloop connecting cities around the world.",
    "In my free time I play golf, both for fun and competitively. Otherwise I love camping and exploring the outdoors, playing jeopardy, and watching documentaries.",
    "I love fruits.",
  ],
  // "CourtneyGolden":[
  //   "Albany, NY",
  //   "Electrical and Computer Engineering, 2023",
  //   "I am passionate about electronics and designing new, innovative systems. Hyperloop to me is an opportunity to work with electrical components hands-on, learn about system design and testing, and contribute to a really exciting, innovative project.",
  //   "I love working with others who are passionate about the same things I am.",
  //   "Institute of Electrical and Electronic Engineers, Society of Women Engineers, dance group.",
  //   "I love blueberries!",
  // ],
  // "JamesParker":[
  //   "Horseheads, NY",
  //   "Computer Science, 2021",
  //   "I fell in love with the concept of Hyperloop before I knew that Cornell had a Hyperloop project team.  The moment I learned about the project team I wanted to be on it.",
  //   "Everyone on the team has a personality, and I feel that the work I do is meaningful.",
  //   "I play bassoon in the wind symphony, and I am the president of its associated student group 'CU Winds.",
  //   "My favorite number is 13.",
  // ],
  "SebastianTorres": [
    "Queens, NY",
    "I am a Junior majoring in Mechanical Engineering.",
    "I chose to join Hyperloop because I saw it as an exciting opportunity to contribute to new technology that can potentially revolutionize the way we use public transportation.",
    "I enjoy working with my teammates and being part of a community that shares the same drive and passion for this project.",
    "On campus, I am part of the Cornell Engineering Peer Advisor program. Outside of college, I enjoy playing basketball, watching sports, and hanging out with friends and family.",
    "I am fluent in both Spanish and English.",
  ],
  "JacobJohansen": [
    "Saugerties, New York",
    "Policy Analysis & Management 2021",
    "Cornell Hyperloop is working at the forefront of technology that has the capability to revolutionize the transportation industry.",
    "Cornell Hyperloop has allowed me to work directly with industry professionals and subject matter experts to gain technical skills I could not learn in the classroom. Being able to manage our Business Development team has put me in a position to help connect our University and my team to resources that are beneficial professionally, academically, and personally. ",
    "Former President of the Cornell Global Economic & Finance Society, Club Lacrosse team member, and Aerospace and Defense enthusiast.",
    "Roman History Nerd .",
  ],
  "TabuforTabufor": [
    "Forney, TX",
    "2022 Environmental and Sustainability ",
    "I am passionate about creating a newer innovative form of sustainable transportation and I see Hyperloop as the manifestation of that.",
    "Meeting with the sub team to business strategies for the semester .",
    "I play intramural soccer and I am member of the Phi Gamma Nu Professional Business Fraternity.",
    "I’m a huge fan of Formula 1 racing.",
  ],
  "WillebeekJacob": [
    "Austin, TX",
    "ILR; 2021",
    "I wanted to gain exposure to the business side of tech!",
    "My favorite part of Hyperloop is getting to collaborate with such a diverse and talented group of people.",
    "Outside of Hyperloop, I am a member of the men's club soccer team and a professional business fraternity, Pi Sigma Epsilon.",
    "I got punched by a Monkey in Bali two summers ago.",
  ],
  "StrouseDanny": [
    "Miami, FL",
    "June 2022",
    "Elon Musk's white pages and the possibility of contributing to the future.",
    "The group comradely and interdisciplinary function.",
    "Research reparations for disadvantaged minorities and innovative business strategies.",
    "I grew up in Ecuador.",
  ],
  "BenRotstein": [
    "Reading, Massachusetts ",
    "Mechanical Engineering, 2024",
    "I wanted to work on a project team that was doing something at the cutting edge of science. Hyper loops aren’t yet a major means of transportation, but it is likely that in the future they will be.",
    "It’s a tight knit community with small sub teams that get to know each other well.",
    "I love to mountain bike, play video games, and play tennis.",
    "I’m a lefty.",
  ],
  "JackSt.Louis": [
    "Tucson, Arizona",
    "Mechanical Engineering - 2024",
    "Hyperloop excited me because they are contributing to an entirely novel technology. I wanted to be part of this team so that I could help pioneer the future of transportation.",
    "My favorite part of being on Hyperloop has been learning more about the design and development process.",
    "Outside of Hyperloop, I enjoy spending time with my friends by hiking, skiing, and traveling.",
    "I was a DJ in high school and played at the majority of my school's dances.",
  ],
  "NanditaKathiresan": [
    "Hillsborough, NJ",
    "Computer Science 2024",
    "The ability to apply my CS skills in a meaningful project and get meet people interested in a revolutionary way of travel. ",
    "The people!",
    "I love long-distance running, baking/cooking, and hanging out with my friends.",
    "If there was one food that I could eat for the rest of my life, it would probably be pasta. Italian food>>"
  ],
  "AnoushkaKabra": [
    "Mumbai",
    "Computer Science (CoE) - 2024",
    "I chose to join Hyperloop in order to better understand transpiration and gain skills to work in a team as a software design contributor.",
    "Socials! And meeting new people",
    "Social Entreprise at Cornell (Partnerships co-director) and Cornell Current (Economics Sector), Chess, Squash, hiking.",
    "I had my first internship when I was 11 years old, and I have travelled to 5 out of 7 continents."
  ],
  "OliviaMcGoldrick": [
    "Simsbury, CT",
    "Electrical and Computer Engineering, 2022",
    "I chose to join Hyperloop because I want to be able to apply what I have been learning in my classes to something that is hands-on.  The idea of working on this potentially revolutionary technology in a very early stage of its development also really drew me in. ",
    "",
    "I am a involved in the Society of Women Engineers, the Cornell Rock Climbing Club, and Greek life.  I also really like to sew, play guitar, and be outdoors. ",
    "I can unicycle!"
  ],
  "CameronRobinson": [
    "Landen, OH ",
    "Physics 2024",
    "I wanted to work on technology that will fundamentally alter society in 10-15 years ",
    "Thinking about and implementing futuristic technology.",
    "I'm interested in artificial neural nets, string theory, and everything science & technology.  I enjoy anything competitive and I love watching movies - my favorite director is currently Nolan.",
    "N/A"
  ],
  "JackCrespo": [
    "Lithia FL",
    "MechE 2024",
    "I found the work very interesting.",
    "Being close to innovative technology. ",
    "Im a guitarist and i enjoy working with electronics.",
    "I lived overseas."
  ],

  "MaxGarval": [
    "Fair Lawn, NJ",
    "Electrical and Computer Engineering, 2024",
    "I wanted to be a part of the development of the fifth mode of transportation!",
    "Access to a lot of really cool equipment and people who know how to use it.",
    "I study, I play video games, and sometimes, I write music.",
    "I am an avid enjoyer of peanut butter straight out of the jar."
  ],

  "JaniceLee": [
    "Whippany, NJ",
    "Computer Science, 2024",
    "Hyperloop's revolutionary technology pushes boundaries of innovation in transportation. Being a part of that ambitious team will allow me to grow and think outside the box while also giving me opportunities to bond with people of similar passions.",
    "Learning new things and applying them to real world applications!",
    "I love playing guitar & singing, trying new cooking recipes, and painting with acrylics.",
    "I collect gum wrappers (my own of course) in a glass jar and write down my memories and thoughts in each."
  ],

  "JackRebillard": [
    "Media, PA",
    "Policy Analysis & Management",
    "I wanted to be a part of something that I believe will significantly shape our future lives.",
    "I have enjoyed meeting my team members and look forward to working with all them",
    "Cornell Equity Research, Global Market Analysts Cornell, Global Economics and Finance Society, Paintball",
    "I was once stung by four bees in one day."
  ],

  "SamanthaNa": [
    "Seattle, WA",
    "ILR, 2023",
    "I chose to join Hyperloop because of the recent attention it has been getting in the media and its potential for high-speed, energy efficient travel. Hyperloop is the future!",
    "Even though I am an ILR major and pre law I have always had a passion for STEM. I love being able to combine my interests to bring an ILR perspective in terms of how work is broken down so that we can be more efficient as a team. Hyperloop gives me an opportunity to work with others to develop products and solve problems both within my subteam and across other teams.",
    "I am in the Kappa Delta Sorority, and am probably listening to either T-swift, Pop Smoke, or Polo G. You will most likely catch me on route to study at Duffield Hall with an ice vanilla latte in hand. Please help me fuel my coffee addiction by grabbing Gimme Coffee or Dunkin with me!",
    "I was named after a cat"
  ],

  "FredericMinzberg": [
    "New York, NY",
    "AEM, 2023",
    "I wanted to have a window into the world of tomorrow. My aspirations are being a PM in the tech industry and being on the bizdev team can give me a powerful foundation in supply chain, promotion of new tech, and the establishment of strong relationships for a company",
    "I enjoy working on the promotion of a cutting edge technological initiative with a multi-faceted collection of my peers with a diversity of majors. ",
    "I am a new member of a professional business fraternity, as well as a team member on Cornell University Sustainable Design, Cornell Tech Consulting, and Cornell Blockchain- Advisory.",
    "I am 6'8\". I know you can't see that on zoom. Also, I play the piano and the base guitar."
  ]
};


// This function scrolls to the subteam by selecting the #ID of the subteam and scrolling it into view.
// it then selects the li element with class "subteam-label-active" making it "subteam-label-inactive"
// it then selects the li element corresponding to the subteam and making its classname "subteam-label-active"
function scrollToSubteam(subteamIndex) {
  subteam = subteams[subteamIndex]

  document.getElementById(subteam).scrollIntoView({ behavior: 'smooth' });

  document.getElementById('active-label').id = "inactive-label"

  getLabelElement(subteam).id = "active-label"
}


// This executes once the DOM has been loaded. This selects the buttons and adds a click event listener
// to them once it's safe to manipulate them.
window.onload = function () {
  subteams = ['teamLeads', 'webdev', 'business', 'suspension', 'software', 'hardware', 'braking', 'propulsion'];
  addEventListenersToLabels()

  subteamInViewCache = 'teamLeads';
  let subteamInViewCacheRect = document.getElementById('teamLeads').getBoundingClientRect()

  subteamInfoContainer = document.getElementsByClassName('roster-info-container')[0]
  subteamInfoContainer.addEventListener('wheel', updateLabelforSubteamInView)

  subteamInfoContainerRect = subteamInfoContainer.getBoundingClientRect()
  console.log("subteamInfoContainerCenterX: " + String(subteamInfoContainerRect.top + subteamInfoContainerRect.height / 2))


  subteamInViewCacheCenterX = subteamInViewCacheRect.top + (subteamInViewCacheRect.height / 2)
  console.log("subteamInViewCacheCenterX: " + subteamInViewCacheCenterX)

  Object.keys(modalDict).forEach(function (key) {
    console.log(key);
    // var value = modalDict[key];
    // console.log(value);
    // createModal(key, value);
    // document.getElementById(key).onclick = createModal(key, value);
    document.getElementById(key).addEventListener("click", function () {
      createModal(key);
      document.body.classList.add("stop-scrolling");
      console.log("don't scroll");
    });

  });


}

function createModal(key) {
  if (document.body.classList.contains("stop-scrolling")) {
    document.body.classList.remove("stop-scrolling");
  } else {
    document.body.classList.add("stop-scrolling");
  }

  var div = document.createElement("dialog");
  document.body.appendChild(div);

  var x = document.createElement("button");
  x.innerHTML = "X";
  x.classList.add("x");
  div.appendChild(x);

  div.classList.add("profile-modal");
  var id = key.concat("profile-modal");
  div.setAttribute('id', id)

  x.addEventListener("click", function () {
    div.parentNode.removeChild(div)
    document.body.classList.remove("stop-scrolling");
  });

  var existingImg = document.getElementById(key).childNodes[3];
  var cloneImg = existingImg.cloneNode(true);
  div.appendChild(cloneImg);

  var existingName = document.getElementById(key).childNodes[5];
  var cloneName = existingName.cloneNode(true);
  div.appendChild(cloneName);

  var a = document.getElementById(key).childNodes[1];
  var cloneA = a.cloneNode(true);

  var newLink = document.createElement("a");
  newLink.href = cloneA.href;

  //console.log(newLink);

  var linked = document.createElement("img");
  linked.setAttribute('src', "images/icons/linkedin.png");
  linked.classList.add("linkedin");
  newLink.appendChild(linked);
  div.appendChild(newLink);

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

  div.showModal();

  //Closing modal with click outside of dialog box
  var modal = document.getElementById(id);
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      div.parentNode.removeChild(div)
      document.body.classList.remove("stop-scrolling");
    }
  }
}

function addEventListenersToLabels() {
  for (let index = 0; index < subteams.length; index++) {
    let label = getLabelElement(subteams[index]);
    label.addEventListener('click', function () { scrollToSubteam(index); })
  }
}

function getLabelElement(subteamString) {
  return document.getElementsByClassName('sidebar-list-label')[subteams.indexOf(subteamString)]
}


function updateLabelforSubteamInView() {
  subteamInViewCacheRect = document.getElementById(subteamInViewCache).getBoundingClientRect()
  subteamInViewCenterX = subteamInViewCacheRect.top + subteamInViewCacheRect.height / 2
  // console.log("subteamInViewCacheCenterX: " + subteamInViewCacheCenterX)
  // console.log("subteamInViewCenterX: " + subteamInViewCenterX)
  delta = Math.abs(subteamInViewCenterX - subteamInViewCacheCenterX)
  // console.log("Delta: " + delta)

  if (delta > subteamInViewCacheRect.height * .3) {
    // console.log("Movement > .45 detected")
    subteamInViewport = getSubteamInView()
    subteamChanged = (subteamInViewCache != subteamInViewport)
    console.log(subteamChanged)

    // PROBLEM!!!!! - changes to true and back to false
    if (subteamChanged) {
      subteamInViewCache = subteamInViewport
      console.log("Subteam in viewport changed to: " + subteamInViewport)
      document.getElementById("active-label").id = "inactive-label";
      getLabelElement(subteamInViewport).id = "active-label"
    }
  }
}

function getSubteamInView() {

  subteamInfoContainerCenterX = subteamInfoContainerRect.top + (subteamInfoContainerRect.height / 2)

  startIndex = subteams.length + subteams.indexOf(subteamInViewCache) - 1


  for (let i = startIndex; i < i + subteams.length; i++) {
    let index = i % subteams.length;
    // console.log("Start Index: " +startIndex % subteams.length )
    let subteamContainerRect = document.getElementById(subteams[index]).getBoundingClientRect()
    subteamContainerCenterX = subteamContainerRect.top + subteamContainerRect.height / 2
    if ((subteamInfoContainerRect.top < subteamContainerCenterX) && (subteamContainerCenterX < subteamInfoContainerRect.bottom)) {
      // console.log("Subteam in View: " + subteams[index] + " with center: " + subteamContainerCenterX)
      // console.log("Subteam in View: " + subteams[index] + " , return after iterations: " + String(i- startIndex + 1))
      // console.log("Subteam in View: " + subteams[index] )
      return subteams[index]
    }
  }
}
