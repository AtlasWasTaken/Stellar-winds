var getID = function(value){return document.getElementById(value);};

function onload() {	
	var sysStory = 'You enter the system. At its center :sysInsert1:';
	var nebStory = 'You enter :nebInsert0:. Stars :nebInsert1: inside the :nebInsert2: :nebInsert3:.';
	var locStory = 'You are :locInsert1:.';
	var ranStory = ':ranInsert1:.'
	
	var whichStory = [
		sysStory , //System
		locStory, //Location
		nebStory, //Nebula
		nebStory, //Nebula for the second time.
		ranStory, //Random?
	]
	var story = randomInArray(whichStory);
	
	var sysInsert1 = [ 
		'is a :sysInsert01:.',
		'is a:sysInsert11: :sysInsert12:. :sysInsert13:',
		'is a binary pair of stars. One is a:sysInsert11: :sysInsert12:, the other is a :sysInsert12:.',
	];
	var sysInsert01 = ['black hole. Light bends around it', 'black hole. It is pulling you', 'black hole. You ride the gravitational waves', 
					   'quasar. The accretion disk spins', 'quasar. Energy is flung out from the poles', 
					   'neutron star. The remnants of a supermassive star', 'neutron star. The remnants of a supernova', 
					   'neutron star. It will eventually become a black hole',
					   'pulsar. Energy is flung from the poles', 'neutron star. The magnetic field makes your instruments go haywire', 
					   'neutron star. It spins', 'Stellar remnant'];
	var sysInsert11 = [' blue', ' white', ' purple', ' yellow', 'n orange', ' red', ' deep red', ' black',
					   ' Wolf-Rayet', 
					  ];
	var sysInsert12 = ['dwarf star', 'main-sequence star', 'giant star', 'supergiant star', 'dim star', ];
	var sysInsert13 = ['', '', 'It is dying.', 'It is older than you.', 'It is older than the other stars among it.',
					   'It will outlive the univserse.', 'It will outlive you.', 'Stellar winds are :sysInsert131:.', 
					   'rings circle around it.', 'rings circle around it.',
					   ':sysInsert132: planets orbit.', ':sysInsert132: planets circle.', ':sysInsert132: planets circle around it.', 
					  ];
	var sysInsert131 = ['tearing it apart', 'scattering it across the stars', ];
	var sysInsert132 = ['rocky', 'icy', 'volcanic', 'metallic', 'populated', 'atmospheric', 'dead', 'live', ];
	
	var nebInsert0 = [
		'The Menzel 3 Nebula', 
		'The Eagle Nebula', 
		'The Star Queen Nebula', 
		'Barnard&#39s Loop',
		'The Engraved Hourglass Nebula',
		'The Lagoon Nebula',
		'The Horsehead Nebula',
		'The Orion Nebula', 
		'The Crab Nebula',
		'The Helix Nebula',
		'The Cygnus Loop',
		'The Veil Nebula',
		'The Blinking Nebula',
		'Tycho&#39s Nova',
		'Kepler&#39s Nova',
		'The Coalsack',
		'The Witch Head Nebula',
		'The Cat&#39s Eye Nebula',
		'The Little Ghost Nebula',
		'The Helix Nebula',
	];
	var nebInsert1 = ['shine', 'gleam', 'radiate', 'pulse', 'sparkle', 'blaze', ];
	var nebInsert2 = ['red', 'blue', 'dark', 'black', 'stellar', 'obscuring', 'illuminated', ];
	var nebInsert3 = ['clouds', 'cloud of gas', 'dust', ];
	
	var locInsert1 = [
		'near the core of the galaxy', 
		'close to the core', 
		'in the arms of the galaxy', 
		'at the edge of the galaxy',
		'in empty space', 
		'far from any system', 
		'far from the nearest star', 
		'far from the core',
		'far from home', 
		'far from where you came', 
		'far from home',
		'on cosmic shores', 
		'in a sea of light', 
		'in a sea of darkness', 
		'surrounded by light',
		'near home', 
		'observing', 
		'observing the stars', 
		'looking at the stars', 
	];
	var ranInsert1 = [
		'Stellar winds howl',
		'Stardust is carried by stellar winds',
		
	];
	
	var newStory = story;
	if(newStory == nebStory) {
		newStory = newStory.replace(':nebInsert0:', randomInArray(nebInsert0));
		newStory = newStory.replace(':nebInsert1:', randomInArray(nebInsert1));
		newStory = newStory.replace(':nebInsert2:', randomInArray(nebInsert2));
		newStory = newStory.replace(':nebInsert3:', randomInArray(nebInsert3));
		//console.log('Nebula story printed.');
	}
	if(newStory == sysStory) {
		newStory = newStory.replace(':sysInsert1:', randomInArray(sysInsert1));
		newStory = newStory.replace(':sysInsert01:', randomInArray(sysInsert01));
		newStory = newStory.replace(':sysInsert11:', randomInArray(sysInsert11));
		newStory = newStory.replace(':sysInsert12:', randomInArray(sysInsert12));
		newStory = newStory.replace(':sysInsert12:', randomInArray(sysInsert12));
		newStory = newStory.replace(':sysInsert13:', randomInArray(sysInsert13));
		newStory = newStory.replace(':sysInsert131:', randomInArray(sysInsert131));
		newStory = newStory.replace(':sysInsert132:', randomInArray(sysInsert132));
		//console.log('System story printed.');
	}
	if(newStory == locStory) {
		newStory = newStory.replace(':locInsert1:', randomInArray(locInsert1));
		//console.log('Location story printed.');
	}
	if(newStory == ranStory) {
		newStory = newStory.replace(':ranInsert1:', randomInArray(ranInsert1));
		//console.log('Random story printed.');
	}
	
	getID('story').innerHTML+=newStory + '<br>';
	//Length
	getID('length').innerHTML=newStory.length + ' characters. ';
	getID('length').innerHTML+=140-newStory.length + ' characters to spare.';
	if(newStory.length > 140) {
		console.log('String too long.');
	}
	//window.requestAnimationFrame(onload);
	
	var timeout = 750;
	setTimeout(onload, timeout);
}
function randomInArray(array) {
	var random = Math.floor(Math.random()*array.length);
	return array[random];
}