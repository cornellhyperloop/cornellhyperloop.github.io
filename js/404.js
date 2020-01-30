function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}


function pageSpecificOnLoad(){
    console.log("Drawing Logo")
    drawLogo()
}

function drawLogo(){
    const outerRadius = 450
    const w = (2/15)*outerRadius
    const p = w/2.5
    const middleRadius = outerRadius - w - p
    const innerRadius = middleRadius - w - p
    const leftCenter = {"x":outerRadius,"y":outerRadius}
    const rightCenter = {"x":outerRadius + middleRadius*2 -w,"y":450}
    const angleBuffer = 0
    
    leftInner = document.getElementById("left-inner").setAttribute("d", describeArc(leftCenter.x, leftCenter.y, innerRadius, -180+angleBuffer, 90,"v",-1));
    leftMiddle = document.getElementById("left-middle").setAttribute("d", describeArc(leftCenter.x, leftCenter.y, middleRadius, -90 + angleBuffer, 90,"h",1));
    leftOuter = document.getElementById("left-outer").setAttribute("d", describeArc(leftCenter.x, leftCenter.y, outerRadius, 0 + angleBuffer, 90,"v",1));

    rightInner = document.getElementById("right-inner").setAttribute("d", describeArc(rightCenter.x, rightCenter.y, innerRadius, 0, 270.1));
    rightMiddle = document.getElementById("right-middle").setAttribute("d", describeArc(rightCenter.x, rightCenter.y, middleRadius, 90, 270.1,"h",-1));
    rightOuter = document.getElementById("right-outer").setAttribute("d", describeArc(rightCenter.x, rightCenter.y, outerRadius, 180, 270.1,"v",-1));

    function describeArc(x, y, radius, startAngle, endAngle, direction = "v",cardinality = 1){
        split= false
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var end2 = polarToCartesian(x, y, radius-w, endAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        
        if (split){
            var d = [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            direction, cardinality*w,
            "A", radius-w, radius-w, 0, largeArcFlag, 1, end2.x, end2.y,
            "Z"
        ].join(" ");
        }
        else{
            var d = [
                    "M", start.x, start.y, 
                    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
                    direction, cardinality*w,
                    "A", radius-w, radius-w, 0, largeArcFlag, 1, end2.x, end2.y,
                ].join(" ");

            // if (direction == "v"){
            //     var d = [
            //         "M", start.x, start.y, 
            //         "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            //         "M", end.x, end.y+cardinality*w,
            //         "A", radius-w, radius-w, 0, largeArcFlag, 1, end2.x, end2.y,
            //         "Z"
            //     ].join(" ");
            // }
            // else{
            //     var d = [
            //         "M", start.x, start.y, 
            //         "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            //         "M", end.x+cardinality*w, end.y,
            //         "A", radius-w, radius-w, 0, largeArcFlag, 1, end2.x, end2.y,
            //         "Z"
            //     ].join(" ");
            // }
            
        }
        

        return d;       
    }
}