'use strict'

var createApp = function(canvas) { 
	var c = canvas.getContext("2d");
        var buildings = [];
        canvas.addEventListener("click", function(event) {
               buildings.forEach(function(blg) {
                  if(event.x > blg.x && event.x < blg.x+blg.w && event.y < floor && event.y > floor-blg.h) {
                     blg.h = blg.h + Math.random()*15;
                  }
               })
        });
           

	// Create the ground
	var floor = canvas.height*3/4
	var grad = c.createLinearGradient(0,floor,0,canvas.height)
	grad.addColorStop(0, "green")
	grad.addColorStop(1, "black")
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)

	// common size for windows
	var windowSpacing = 2, floorSpacing = 3
	var windowHeight = 5, windowWidth = 3

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'] 

	//build a building
	var build = function() { 
                buildings.push({
		    x : Math.random()*canvas.width,
		    w : (windowWidth+windowSpacing) * Math.floor(Math.random()*10),
		    h : Math.random()*(canvas.height-(canvas.height-floor)),
                    color : blgColors[Math.floor(Math.random()*4)]
                });
	}

        var carX = -20;
        var carHeight = 10;
        var carWidth = 20;
        var sunX = -20;
        var sunY = 50+Math.random()*100; //range from 50-150
        var sunRadius = 20; 
        var redraw = function() {
          c.clearRect(0,0,canvas.width,floor);
          sunX = sunX + 1;
          c.fillStyle="gold";
          c.beginPath();
          c.arc(sunX,sunY,sunRadius,0,2*Math.PI);
          c.fill();
          c.closePath();
          if(sunX > 1000 + Math.random()*300) { //a variable time that isn't immediately after it goes off the right edge of the canvas
             sunX = -20;
             sunY = 50+Math.random()*100; //range from 50-150
             console.log("Sun reset")
          }
          buildings.forEach(function(blg) {
                var x0 = blg.x
                var blgHeight = blg.h
                var blgWidth = blg.w
                c.fillStyle= blg.color
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		for (var y = floor - floorSpacing; y > floor - blgHeight; y -= floorSpacing + windowHeight) {
			for (var x = windowSpacing; x < blgWidth - windowWidth; x += windowSpacing + windowWidth) {
                                if(Math.random() < .8) {
                                       c.fillStyle = "yellow";
                                } else {
                                       c.fillStyle = "black";
                                }
				c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
			}
		}
          });


          carX = carX + 3;
          c.fillStyle="red";
          c.fillRect(carX,floor-carHeight,carWidth,carHeight);
          if(carX > 1000 + Math.random()*300) { //a variable time that isn't immediately after it goes off the right edge of the canvas
             carX = -20;
          }
        }
        setInterval(redraw,50);

	return {
		build: build
	}
}

window.onload = function() {
	var app = createApp(document.querySelector("canvas"))
	document.getElementById("build").onclick = app.build
}