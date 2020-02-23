
// C:\Users\Mehdi\Documents\mehdi\Projets Videos\WIP\Serie_Documentaire\Test\Export
var paranoid_path = "\\..\\00_Test\\Export\\Paranoid_Park_Dream_Sequence.mp4"
let video;

function video_lauch()
{
	video.loop();
	video.volume(5);
}

function setup()
{
	//background(255);
	createCanvas(displayWidth, displayHeight);
	video = createVideo([paranoid_path], video_lauch);
	// video.size(displayWidth, displayHeight);
	video.hide();
}

function draw()
{
	
	background(200);


	let text_current_width = 'Current mouse X position : ' + mouseX ;
	let text_current_height = 'Current mouse Y position : ' + mouseY ;

	fill(50);
	text(text_current_width, displayWidth - 200, 65);
	text(text_current_height, displayWidth - 200, 50);
	noFill();
	beginShape();
	vertex(60,10);
	if(mouseIsPressed)
		video.pause();
	if(mouseX < 200 && mouseX > 30) 
	{
		image(video, 200, 200);
		bezierVertex(   mouseX- 5, mouseY - 5, 
						mouseX - 20, mouseY - 20, 
						60, displayHeight ); 
	}
	else
	{
		image(video, 0, 0);	
		vertex(60, displayHeight);		
	}

	endShape();
}


// let fingers;

// function setup() {
//   createCanvas(710, 400);
//   // specify multiple formats for different browsers
//   fingers = createVideo([paranoid_path]);
//   fingers.hide(); // by default video shows up in separate dom
//   // element. hide it and draw it to the canvas
//   // instead
// }

// function draw() {
//   background(150);
//   image(fingers, 10, 10); // draw the video frame to canvas
//   filter(GRAY);
//   image(fingers, 150, 150); // draw a second copy to canvas
// }

// function mousePressed() {
//   fingers.loop(); // set the video to loop and start playing
// }
