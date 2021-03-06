var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="OSX";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

new Vue({
  el: '#app',
  data: {
    os: OSName
  }
})

// define images
	var images = [
		"static/images/step1.png",
		"static/images/step2.png",
		"static/images/step3.png",
		"static/images/complete.png"
	];
  console.log(window.TweenMax)
	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#screen-shot").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller();
	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#screen-shot", duration: 400})
					.setTween(tween)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller)
          // .setPin("#screen-shot")

  var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 100})
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller)
          .on('enter', function () {
              $("#screen-shot").css("bottom", 0);
          });
