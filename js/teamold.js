

// This function executes when switching to another subteam. Does not run when collapsing the active subteam.
function collapseSubteam (oldExpandedTeam){
  var oldId = "#" + oldExpandedTeam;
  $(oldId).removeClass("in");
  // console.log("collapseSubteam");

  var imgId = "#" + oldExpandedTeam + "Img";
  // console.log(imgId);
  var imgPath = "images/icons/" + (oldExpandedTeam.toLowerCase()) + "_off.png";
  // console.log(imgPath);
  $(imgId).attr("src", imgPath);
}


// This jQuery function executes once when the page loads and the DOM is safe to manipulate.
$(document).ready(function() {

  var expanded = "";

  // id = #one refers to the Team Leads Button
  $("#one").mouseover(function() {
    // console.log("Mousing over #one")
    $("#leadsImg").attr("src", "images/icons/leads_on.png");
  })
  $("#one").mouseout(function() {
    if (expanded != "leads") {
      $("#leadsImg").attr("src", "images/icons/leads_off.png");
    }
  })
  $("#one").click(function() {
    if($("#leads").hasClass("in")) {
      // if subteam expanded
      $("#leadsImg").attr("src", "images/icons/leads_off.png");
      expanded = "";
    } else {
      // if subteam not expanded
      $("#leadsImg").attr("src", "images/icons/leads_on.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "leads";
    }
  })

  // Business
  $("#two").mouseover(function() {
    $("#businessImg").attr("src", "images/icons/business_on.png");
  })
  $("#two").mouseout(function() {
    if (expanded != "business") {
      $("#businessImg").attr("src", "images/icons/business_off.png");
    }
  })
  $("#two").click(function() {
    if($("#business").hasClass("in")) {
      $("#businessImg").attr("src", "images/icons/business_off.png");
      expanded = "";
    } else {
      // console.log("else");
      $("#businessImg").attr("src", "images/icons/business_on.png");
      if (expanded != "") {
        // console.log("expanded = " + expanded);
        // console.log("in if");
        collapseSubteam(expanded);
      }
      expanded = "business";
    }
  })

  // Electrical
  $("#three").mouseover(function() {
    $("#electricalImg").attr("src", "images/icons/electrical_on.png");
  })
  $("#three").mouseout(function() {
    if (expanded != "electrical") {
      $("#electricalImg").attr("src", "images/icons/electrical_off.png");
    }
  })
  $("#three").click(function() {
    if($("#electrical").hasClass("in")) {
      $("#electricalImg").attr("src", "images/icons/electrical_off.png");
      expanded = "";
    } else {
      $("#electricalImg").attr("src", "images/icons/electrical_on.png");

      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "electrical";
    }
  })

  // Fuselage
  $("#four").mouseover(function() {
    $("#fuselageImg").attr("src", "images/icons/fuselage_on.png");
  })
  $("#four").mouseout(function() {
    if (expanded != "fuselage") {
      $("#fuselageImg").attr("src", "images/icons/fuselage_off.png");
    }
  })
  $("#four").click(function() {
    if($("#fuselage").hasClass("in")) {
      $("#fuselageImg").attr("src", "images/icons/fuselage_off.png");
      expanded = "";
    } else {
      $("#fuselageImg").attr("src", "images/icons/fuselage_on.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "fuselage";
    }
  })

  // Maglev
  $("#five").mouseover(function() {
    $("#maglevImg").attr("src", "images/icons/maglev_on.png");
  })
  $("#five").mouseout(function() {
    if (expanded != "maglev") {
      $("#maglevImg").attr("src", "images/icons/maglev_off.png");
    }
  })
  $("#five").click(function() {
    if($("#maglev").hasClass("in")) {
      $("#maglevImg").attr("src", "images/icons/maglev_off.png");
      expanded = "";
    } else {
      $("#maglevImg").attr("src", "images/icons/maglev_on.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "maglev";
    }
  })

  // Suspension
  $("#six").mouseover(function() {
    $("#suspensionImg").attr("src", "images/icons/suspension_on.png");
  })
  $("#six").mouseout(function() {
    if (expanded != "suspension") {
      $("#suspensionImg").attr("src", "images/icons/suspension_off.png");
    }
  })
  $("#six").click(function() {
    if($("#suspension").hasClass("in")) {
      $("#suspensionImg").attr("src", "images/icons/suspension_off.png");
      expanded = "";
    } else {
      $("#suspensionImg").attr("src", "images/icons/suspension_on.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "suspension";
    }
  })

})
