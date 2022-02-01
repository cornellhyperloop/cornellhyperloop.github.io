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
  // "MaxGreenberg": [
  //   "Miami, Florida",
  //   "Computer Science, December 2021",
  //   "Elon Musk is one of my role models. In addition, I wanted to be a part of a project focused on revolutionizing long distance travel, particularly through the development of a new mode of transportation.",
  //   "I love collaborating with my teammates.",
  //   "I love hanging out with my friends, watching sports, and listening to music.",
  //   "I can say the alphabet backwards."],
  // "DeeptiTalesra": [
  //   "Edison, NJ",
  //   "Computer Science 2021",
  //   "I had been interested in Hyperloop ever since the first white pages were released by Elon, and after learning that Cornell had a project team for the Hyperloop, I already knew what I wanted to do. And also because ELON MUSK.",
  //   "The people and the energy! Everyone is very passionate and excited about the team and what we're building. Being a part of this community is amazing.",
  //   "Outside of Hyperloop, I'm also a part of CDS, Assorted Aces, and Find My Food (an app that lets college students know of free food)!",
  //   "I have a youtube:)",
  // ],
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
    "I am part of the Taekwondo club and Academy FC at Cornell. I'm also a fan of all things Marvel/Star Wars.",
    "I share the same birthday as my sister but two years apart.",
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
    "Electrical & Computer Engineering '22",
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
    "I'm a big fan of watching basketball, hockey, and baseball. I also currently work as a part-time software developer.",
    "I've travelled to 32 of the 50 states.",
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
  // "MelissaPsaras": [
  //   "Monroe, Connecticut",
  //   "Computer Science, 2023",
  //   "I chose to join Hyperloop because I wanted to be a part of a project team that would teach me a lot of new things outside of class. Hyperloop does that!",
  //   "Working with my best friend Sohni on the Web Development team. We are a good team and we learn off each other constantly!",
  //   "Read, bike, hike, drive around with my older brothers.",
  //   "Cornell is the seventh school I have gone to in my 14 years of schooling",
  // ],
  "AlexanderNutley": [
    "Smithtown, NY",
    "Operations Research, 2022",
    "I chose to join hyperloop because the concept is so interesting! Having the opportunity to innovate and gain valuable experience right here on campus has been invaluable.",
    "My favorite part of Cornell Hyperloop is its interdisciplinary nature. Learning from and working with students from a wide range of academic backgrounds is awesome.",
    "Outside of Hyperloop, I love to write songs and play music, watch Motorsport, and tinker with tech and computers!",
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
  // "WinstonLiu": [
  //   "Long Island, NY",
  //   "Computer Science 2023",
  //   "Hyperloop is a fascinating concept that will change the way we connect with each other as a society. I love to learn more about disruptive innovations and wanted to contribute to this project.",
  //   "This is my first semester! So, I am looking forward to meeting new members and working on the Pod.",
  //   "On campus, I am involved with Big Red Ambassadors and ACSU. I also enjoy playing tennis, basketball, and going rock climbing.",
  //   "I am currently teaching myself how to ride a skateboard!",
  // ],
  "FelipeHanuch": [
    "Rochester, NY",
    "Mechanical Engineering, 2022",
    "When I think about how to change the world, I think about a revolution in technology that everyone uses on a day to day basis. With Hyperloop I am glad I can be part of a cohesive team that is working together to bring this revolution to life.",
    "Rolling up the sleeves and building things in the ELL with my teammates.",
    "I play soccer and tennis in my down time and love to go out for a great meal with friends.",
    "I was on ESPN sports center top 10 plays of the night one time in 2017."
  ],
  // "ChristelleChemaly": [
  //   "Middletown, NJ",
  //   "Mechanical Engineering, 2022",
  //   "Elon musk is an inspiration of mine. Working on one of his projects is an insanely great opportunity.",
  //   "I can apply classroom concepts to real life which helps a lot with understanding my studies.",
  //   "Singing, dancing, having fun.",
  //   "I hate spicy food.",
  // ],
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
  // "RaghavInder": [
  //   "New York",
  //   "2023",
  //   "To experience the engineering process and to build something with others.",
  //   "It's great being at the forefront of research for this new form of transportation, and hopefully in a few years we can see all of our work manifest in an actual Hyperloop connecting cities around the world.",
  //   "In my free time I play golf, both for fun and competitively. Otherwise I love camping and exploring the outdoors, playing jeopardy, and watching documentaries.",
  //   "I love fruits.",
  // ],
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
  // "JacobJohansen": [
  //   "Saugerties, New York",
  //   "Policy Analysis & Management 2021",
  //   "Cornell Hyperloop is working at the forefront of technology that has the capability to revolutionize the transportation industry.",
  //   "Cornell Hyperloop has allowed me to work directly with industry professionals and subject matter experts to gain technical skills I could not learn in the classroom. Being able to manage our Business Development team has put me in a position to help connect our University and my team to resources that are beneficial professionally, academically, and personally. ",
  //   "Former President of the Cornell Global Economic & Finance Society, Club Lacrosse team member, and Aerospace and Defense enthusiast.",
  //   "Roman History Nerd .",
  // ],
  // "TabuforTabufor": [
  //   "Forney, TX",
  //   "2022 Environmental and Sustainability ",
  //   "I am passionate about creating a newer innovative form of sustainable transportation and I see Hyperloop as the manifestation of that.",
  //   "Meeting with the sub team to business strategies for the semester .",
  //   "I play intramural soccer and I am member of the Phi Gamma Nu Professional Business Fraternity.",
  //   "I’m a huge fan of Formula 1 racing.",
  // ],
  // "WillebeekJacob": [
  //   "Austin, TX",
  //   "ILR; 2021",
  //   "I wanted to gain exposure to the business side of tech!",
  //   "My favorite part of Hyperloop is getting to collaborate with such a diverse and talented group of people.",
  //   "Outside of Hyperloop, I am a member of the men's club soccer team and a professional business fraternity, Pi Sigma Epsilon.",
  //   "I got punched by a Monkey in Bali two summers ago.",
  // ],
  // "StrouseDanny": [
  //   "Miami, FL",
  //   "June 2022",
  //   "Elon Musk's white pages and the possibility of contributing to the future.",
  //   "The group comradely and interdisciplinary function.",
  //   "Research reparations for disadvantaged minorities and innovative business strategies.",
  //   "I grew up in Ecuador.",
  // ],
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
  // "OliviaMcGoldrick": [
  //   "Simsbury, CT",
  //   "Electrical and Computer Engineering, 2022",
  //   "I chose to join Hyperloop because I want to be able to apply what I have been learning in my classes to something that is hands-on.  The idea of working on this potentially revolutionary technology in a very early stage of its development also really drew me in. ",
  //   "",
  //   "I am a involved in the Society of Women Engineers, the Cornell Rock Climbing Club, and Greek life.  I also really like to sew, play guitar, and be outdoors. ",
  //   "I can unicycle!"
  // ],
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

  "AdityaDeshpande": [
      "Pune, India",
      "Computer Science and Music, 2022",
      "I wanted to be part of a team whose mission is based around developing a project that looks towards the future",
      "I like how everyone has an equal opportunity to play an active role in the team",
      "I love playing and improvising at the piano, as well reading about history.",
      "I used to write my own rap lyrics in middle school."
  ],

  "JaniceLee": [
    "Whippany, NJ",
    "Information Science (ISST), 2024",
    "Hyperloop's revolutionary technology pushes boundaries of innovation in transportation. Being a part of an ambitious team will allow me to grow and think outside the box while also bonding with people of similar passions.",
    "Learning new things and applying them to real world projects!",
    "I love playing guitar, cooking, and playing badminton.",
    "I have two cats, two guinea pigs, and one dog."
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

  // "FredericMinzberg": [
  //   "New York, NY",
  //   "AEM, 2023",
  //   "I wanted to have a window into the world of tomorrow. My aspirations are being a PM in the tech industry and being on the bizdev team can give me a powerful foundation in supply chain, promotion of new tech, and the establishment of strong relationships for a company",
  //   "I enjoy working on the promotion of a cutting edge technological initiative with a multi-faceted collection of my peers with a diversity of majors. ",
  //   "I am a new member of a professional business fraternity, as well as a team member on Cornell University Sustainable Design, Cornell Tech Consulting, and Cornell Blockchain- Advisory.",
  //   "I am 6'8\". I know you can't see that on zoom. Also, I play the piano and the base guitar."
  // ]

  "JasonNg": [
    "Rancho Cucamonga",
    "AEM 2024",
    "I chose to join Hyperloop because I felt that it was a project team that interlaced both 3d modeling and business.",
    "The community and how it is relatively small so I can ask anyone for help.",
    "On my free time, I trade stocks, cook, and collect watches.",
    "My favorite color is black."
  ],

  "HenryScharff": [
    "Los Angeles, CA",
    "AEM 2024",
    "I wanted to contribute to a cause that betters our world and changes the way humans and goods are transported.",
    "The opportunity to make real, substantive societal change for the future in a sustainable way.",
    "I love to play chess, watch movies, and watch the Green Bay Packers play on Sundays.",
    "I am a German citizen!"
  ],

  "ElliePerlitz": [
    "Simsbury, CT",
    "Operations Research Engineering, 2024",
    "I chose to join Hyperloop because I wanted to be part of something revolutionary that will make a big impact on the future of transportation!",
    "My favorite part about being on Hyperloop is being able to work with my sub team to promote Hyperloop.",
    "Outside of Hyperloop I am a member of the Pi Beta Phi sorority, Base Productions Dance Team, Society of Women Engineers, and the Cornell Dairy Club.",
    "I was a Starbucks Barista for over 2 years."
  ],

  "PranavKengeri": [
    "New Hyde Park",
    "AEM 2024",
    "I really wanted to dive deep into the business side of a tech focused club. Hyperloop seemed like the perfect place to develop new skills while learning more about this high speed transportation technology.",
    "The people. There are many great people in Hyperloop and, especially, on the business team!",
    "I am in Cornell Business Analytics, The Daily Sun Business Team, and the Cornell Paintball team. ",
    "I was once stuck in an airport for 40 hours",
  ],

  "MathieuBoyer": [
    "Santa Clara",
    "Mechanical Engineering 2024",
    "I wanted to join a team heavily focused on mechanical engineering to work on something bigger than me and gain valuable experience and skills in mechanical engineering as well as build strong interpersonal skills.",
    "My favorite part is using Solidworks to make our ideas into a reality.",
    "I am on the club soccer team Academy FC, and enjoy spending time with my friends.",
    "I am French."
  ],

  "MarkEdwards": [
    "Naples, Florida",
    "Mechanical Engineering 2025",
    "Hyperloop allows you the opportunity to discover a whole new form of transportation and contribute to the next big discovery in engineering.  ",
    "The ability to learn new things that I wouldn't be able to experience in just courses",
    "I really enjoy playing hockey, spikeball, and going to the beach",
    "I was in the national history bee, but got second to last place."
  ],

  "AshnaGupta": [
    "Basking Ridge, New Jersey",
    "Mechanical Engineering, 2025",
    "Joining Hyperloop will help me achieve my  dream of being an automotive engineer. I can help revolutionize transportation through research and hands-on work.",
    "Being able to use cool software and have hands-on experience in labs.",
    "I like to go outside and spend time with my friends",
    "I did gymnastics in high school"
  ],

  "RachelTong": [
    "Chino Hills, CA",
    "Undecided, 2025",
    "Cornell Hyperloop allows me to work on an innovative project that can revolutionize the future of transportation and create lasting impacts in the world.",
    "Working with other people who are also passionate about creating new technology",
    "Outside of Hyperloop, I am involved in alpha phi omega, tip, and WICC.",
    "I love going on morning runs!"
  ],

  "CatherineTom": [
    "Long Island, NY",
    "Information Science, 2024",
    "The Hyperloop mission is bold and exciting; I wanted to help design a website that reflects that.",
    "Working with my teammates! Everyone is always so passionate and willing to lend a hand.",
    "I spend a lot of time reading, TA-ing, and watching videos on the Internet.",
    "My dream is to start a charity.",
  ],

  "RidhitBhura": [
    "Mumbai, India",
    "Computer Science 2024",
    "To be a part of the journey of developing the most transformative transportation mode.",
    "The collaborative work sessions and socials",
    "I'm a tenor at Cornell Tarana, a south Asian A Capella group. Apart from that, I play for Cornell Badminton and Cornell Cricket. ",
    "I make cool maps (https://ridhitbhura.com/visualizations)",
  ],

  "DavidGlantz": [
    "Scarsdale, NY",
    "Computer Scienxe 2024",
    "To learn more about the future of transportation and get an opportunity to get hands on experience working with other passionate students.",
    "I love the sense of community and being driven by my peers.",
    "I love to play chess and do sudoku puzzles, I am a big fan of the Mets and baseball",
    "I am Brasilian ",
  ],

  "KelvinWang": [
    "Ithaca, NY",
    "Computer Science, 2024",
    "I wanted to work on a project involving technology that can affect the future.",
    "I have found that Hyperloop involves a mix of creativity, dedication, perseverance and diligence; improving and refining these parts of my character and workflow remain a lifelong goal of mine.",
    "I like to rock climb, watch movies, go bird watching, and eat poke with Michael Sheen.",
    "I was on a prank show in China.",
  ],

  "RyanMao": [
    "Ithaca, NY",
    "CS & ORIE, 2024",
    "I thought the idea was pretty neat, and it seemed like a fun experience.",
    "It is so chill.",
    "I am dying to Algo.",
    "I love cats.",
  ],

  "VanshajJain": [
    "Jaipur, Rajasthan, India ",
    "Computer Science 2024",
    "Enhancing the hyperloop technology and be part of this emerging community. ",
    "Favorite part of Hyperloop is the team. The team is very friendly and I love the socials that we have and other group bonding activites.",
    "I am the president of Society for India, member of the bollywood fusion dance team Sitara, and on the Cornell Table Tennis and Cornell Cricket team.",
    "I am a big fan of Pokemon. I have almost all knowledge about pokemon games and anime in general.",
  ],

  "KyraWatts": [
    "Poughkeepsie, NY",
    "Physics & CS, Class of 2024",
    "It seemed like a really interesting, cutting edge project! It's the only project team really working on something completely new!",
    "Gettin the chance to work with so many talented, passionate people!",
    "I work in the Space Systems Design Studio Lab on the CisLunar Project, and I play the violin here on campus in the Symphony Orchestra!",
    "Fun fact: My favorite color is definitely yellow, and 'yellow' was actually the third word I ever said as a baby :)",
  ],

  "KennyYamashita": [
    "Schenectady, NY",
    "Computer Science 2024",
    "I wanted to contribute to the creation of a revolutionary technology.",
    "Everyone has been super nice and working on the GUI has been a lot of fun.",
    "I like playing sports, music, and video games.",
    "My ethnicity is Chinese, not Japanese.",
  ],

  "LikitaGangireddy": [
    "Plymouth, Minnesota",
    "Computer Science, 2024",
    "I chose to join Hyperloop because I want to use my CS skills to work towards developing groundbreaking technology ",
    "Working with really smart and nice people ",
    "I am an AEW facilitator for CS 1110 and I am in an a cappella group called Cornell Tarana",
    "I like to sing :)",
  ],

  "JonathanChen": [
    "Queens, NY",
    "Computer Science, 2025",
    "Hyperloop appealed to me mainly because it occupied a unique niche; almost as if it were a hidden secret. Almost everyone has been in or at least seen a car, plane, or boat before, but very few people have ever even heard about this. Hyperloop exists for the purpose of revolutionizing transportation, which is something that I believe is of great importance.",
    "The social events are always enjoyable, I really do enjoy strengthening bonds with fellow team members outside of our usual work.",
    "I serve on my local community's student government and work at the bowling alley in Helen Newman.",
    "I have a rock collection, and my current goal is to get one from every state.",
  ],

  "MorganLo": [
    "Poughkeepsie, NY",
    "Computer Science, 2025",
    "I joined Hyperloop because I want to be part of a team that contributes toward the development of a revolutionary and re-imagined transportation system that is greener, safer, more economical, and convenient. ",
    "My favorite part about being on Hyperloop is the people, a diverse, talented, and fun group who share the same passion in pursuing the mission associated with Hyperloop.  ",
    "I like to hike and dance. ",
    "I've danced ballet for 15 years.",
  ],

  "EdwardLiu": [
    "Millbrae, CA",
    "ECE + CS 2023",
    "I've always been a bit discontent with the time spent on traveling, and Hyperloop has been one of the most interesting solutions in the present time--something that I'm glad to contribute to!",
    "Working with all the team members.",
    "I love to go climbing and making personal electronics projects.",
    "I went to high school in Canada!",
  ],

  "EshitaSangani": [
    "Austin, Texas",
    "ECE 2024",
    "I love that I get to work on something that will help make the world more sustainable and work on crazy cool technology!!  ",
    "Learning cool things in school and applying them to real world applications and getting to work with so many cool people!! ",
    "I love to bike, speedskate, rock climb, and cook!",
    "I hate chocolate and have only tried it once!! ",
  ],

  "ChristopherChan": [
    "",
    "",
    "",
    "",
    "",
    "",
  ],

  "AfuaAnsah": [
    "Accra, Ghana",
    "Electrical and Computer Engineering, 2024",
    "Cornell Hyperloop stood out to me as an avenue to work on a project that is far from conventional and pushes the boundaries of science and technology",
    "The challenge of gaining more knowledge and researching on computing systems technology",
    "I'm on the society of Women Engineers DiverSWEty Committee where we meet to plan and coordinate events to foster diversity and inclusion in our community. I enjoy binge-watching Netflix and solving coding challenges as well :)",
    "I love rock climbing!",
  ],

  "SchuylerSeyram": [
    "Accra, Ghana",
    "Electrical and Computer Engineering 2024",
    "Very eager to join a team that was working on something that could possibly be the next big thing when it comes to transportation",
    "Hands-on experience and meddling with new technology.",
    "I'm into music and I mostly read novels or check device specs. Car specs too.",
    "I have no idea. I think I'm like an open book.",
  ],

  "YuemingLiu": [
    "Brooklyn, NY",
    "Mechanical Engineering 2024",
    "The concept behind Hyperloop is revolutionary and innovative! I hope to see it being constructed and widely used in real life 🚅. ",
    "Working with teammates on a project we love ❤️. ",
    "Painting and choreographed swords fighting ⚔️.",
    "I craft daggers and develop games🎮.",
  ],

  "MaddeHart": [
    "",
    "",
    "",
    "",
    "",
    "",
  ],

  "EvaCantalapledra": [
    "Rye, New York",
    "Mechanical Engineering 2025",
    "Being part of the Hyperloop Project team is an honor because we are all able to contribute to revolutionizing technology that people use every day: transportation. By working with other dedicated students of various fields, the Hyperloop team can find innovative solutions to challenges that help humanity progress.",
    "I love being part of a team of motivated engineers working together to solve real world problems. There is a great sense of community within the team and so many people are willing to uplift one another. ",
    "I love to hike with friends and bake in my free time. I played soccer, squash, and golf in high school. ",
    "My favorite place is the beach, but I'm terrified of the ocean.",
  ],

  "JuliaKruse": [
    "New York",
    "Civil, 2024",
    "I chose to join Hyperloop because it aligns perfectly with the career path I plan to pursue and the projects it focuses on correspond to my passions. Working with this team provides me with the opportunity to get involved with my field and get practical hands-on experience.",
    "Designing something that could very well be part of our future.",
    "Outside of Hyperloop I enjoy rock climbing and the occasional docu-series.",
    "I was born outside of the country.",
  ],

  "SienaGavin": [
    "",
    "",
    "",
    "",
    "",
    "",
  ],

  "KerenGross": [
    "Tenafly, NJ",
    "Mechanical Engineering 2025",
    "I choose to join Hyperloop because it offers a great team environment where I can learn new skills and help contribute to the development of the hyperloop.",
    "So far I love the team environment and I like learning new skills such as how to use Solidworks.",
    "Outside of Hyperloop, I play ultimate frisbee on the Cornell Thorny Roses team. I also spend a lot of my time reading.",
    "Something most people wouldn’t guess about me is that I was a three year consecutive champion of my high school’s pie eating competition.",
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

var modalOpen = false;

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

  console.log(key);

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

  // document.getElementById(id).showModal();
  // div.setAttribute("open", "");

  $('#'+id).show();
  $("#backdrop").show();
  $(".roster-info-container").addClass("stop-scrolling");

  //Closing modal with click outside of dialog box
  var modal = document.getElementById(id);
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      div.parentNode.removeChild(div)
      // $('#'+id).modal('hide');
      document.body.classList.remove("stop-scrolling");
    }
  }

  $("body").click(function() {
    if ($('#'+id).is(":visible")) {
        // $('#'+id).modal('hide');
        // $('#'+id).hide();
    }
 });
  setTimeout( ()=>{
    modalOpen = true;},
  100);
}

$(document).on("click", (event) => {
  //if you click on anything except the modal itself, close the modal
  if (modalOpen){
    if (!$(event.target).closest(".profile-modal").length) {
      // $(".profile-modal").modal("hide");
      $(".profile-modal").remove();
      $("#backdrop").hide();
      $(".roster-info-container").removeClass("stop-scrolling");
      $("body").removeClass("stop-scrolling");
      modalOpen = false;
      console.log("modal hidden")
    }
  }
});

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
