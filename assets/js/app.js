// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------
var options = {
	particleColor: '#fff',
	background: 'http://parsfibernet.com/zero.png',
	interactive: true,
	speed: 'fast',
	density: 'medium'
};
var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), options);