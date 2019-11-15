var active = "#all";

function update(e) {
    $(active).removeClass("active");
    $(active + "-desc").removeClass("active");
    $(active + "-img").css("opacity", 0.1);
    if (active == "#all") {
        $("#fuselage-img").css("opacity", 0.1);
        $("#all-desc img").css("display", "none")
    }
    active = e;
    $(active).addClass("active");
    $(active + "-desc").addClass("active");
    $(active + "-img").css("opacity", 1);
    if (active == "#all") {
        $("#fuselage-img").css("opacity", 1);
        $("#all-desc img").css("display", "inherit")
    }
}

$(window).on("load", function(){
    if (active == "#all") {
        $("#fuselage-img").css("opacity", 1);
    }
});
