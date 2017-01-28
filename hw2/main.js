function setup() {
  imgFuncs = loadImages();
  var btn1 = document.getElementById("buttons1");
  var btn2 = document.getElementById("buttons2");
  var btn3 = document.getElementById("buttons3");
  
  btn1.innerHTML = '<input type="button" value="Start" onclick="imgFuncs.start1()"><input type="button" value="Stop" onclick="imgFuncs.stop1()">'
  btn2.innerHTML = '<input type="button" value="Start" onclick="imgFuncs.start2()"><input type="button" value="Stop" onclick="imgFuncs.stop2()">'
  btn3.innerHTML = '<input type="button" value="Start" onclick="imgFuncs.start3()"><input type="button" value="Stop" onclick="imgFuncs.stop3()">'
}

function loadImages() {
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  //big image url array - imagesets of different cards are subsets of this
  var images = ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
                "http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
                "http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg",
                "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg",
                "http://www.w3schools.com/css/trolltunga.jpg",
                "http://powellong.com/data/wallpapers/1/WDF_500054.jpg",
                "https://static1.squarespace.com/static/553a8716e4b0bada3c80ca6b/553a9655e4b03939abece18a/5731fc75f85082142b12b095/1471894315703/mayfourblocknature.jpg",
                "http://www.planwallpaper.com/static/images/Jennifer-in-Paradi_3204219n.jpg"]

  //update functions are run each time the interval ticks, changing the image
  function update1() {    
    var chosenImg = Math.floor(Math.random()*4)*2; //arbitrarily-chosen numbers for grabbing from a particular subset of images - here, evens
    img1.innerHTML = '<img src="' + images[chosenImg] + '" alt="a thing" width=200 height=200>';
  }

  function update2() {    
    var chosenImg = Math.floor(Math.random()*4); //arbitrarily-chosen numbers for grabbing from a particular subset of images - here, 0-3
    img2.innerHTML = '<img src="' + images[chosenImg] + '" alt="a thing" width=200 height=200>';
  }

  function update3() {    
    var chosenImg = Math.floor(Math.random()*4)+4; //arbitrarily-chosen numbers for grabbing from a particular subset of images - here, 4-7
    img3.innerHTML = '<img src="' + images[chosenImg] + '" alt="a thing" width=200 height=200>';
  }
  
  //declared here so these will have scope across start and stop functions
  var loop1;
  var loop2;
  var loop3;
  var bool1 = false;
  var bool2 = false;
  var bool3 = false;
  //start functions start the interval, if one is not already running
  function start1() {
    //to make sure no more than instance one is running at a time
    if(!bool1) {
      loop1 = setInterval(update1,1000+Math.random()*4); //to choose a new random from 1 to 5 seconds
      bool1 = true;
    }
  }

  function start2() {    
    //to make sure no more than instance one is running at a time
    if(!bool2) {
      loop2 = setInterval(update2,1000+Math.random()*4); //to choose a new random from 1 to 5 seconds
      bool2 = true;
    }
  }

  function start3() {
    //to make sure no more than instance one is running at a time
    if(!bool3) {
      loop3 = setInterval(update3,1000+Math.random()*4); //to choose a new random from 1 to 5 seconds
      bool3 = true;
    }
  }
  
  //stop functions stop the interval, if it's running
  function stop1() {
    if(bool1) {
      clearInterval(loop1);
      bool1 = false;
    }
  }

  function stop2() {
    if(bool2) {
      clearInterval(loop2);
      bool2 = false;
    }
  }

  function stop3() {
    if(bool3) {
      clearInterval(loop3);
      bool3 = false;
    }
  }

  //make sure all intervals are running at the start
  start1();
  start2();
  start3();

  //so the buttons in setup have access to these functions
  return {
    start1 : start1,
    start2 : start2,
    start3 : start3,
    stop1 : stop1,
    stop2 : stop2,
    stop3 : stop3
  };
    
}