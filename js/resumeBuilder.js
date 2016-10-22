/*
  code to build the resume will go here.
 */



var bio = {
	"name":"Steve Mwiti",

	"role":"Fullstack web developer",

	"contacts":  {
		"mobile" : "0728599135", 
		"email" : "ennovathedons@gmail.com",
		"github" : "stevex2",
		"twitter" : "@iamstevex",
		"location" : "Nairobi"
	},

	"welcomemessage" :["<br><br>Hi there,  I'm steve I'm a web developer and I absolutely love technology.	" + 
	" Who am I ? <br> <br> A web developer,  a deliverer of things (on time might I add) and I possess: Great communication skills, I get along great with people ",
					" I'm a fast learner, who can find solutions to problems quickly and I’m also a self starter, oh!," + 
					"  did i mention my great passion for technology?   Especially software development because ", 
			 		"programming is a craft, an art and a science its quite fascinating really, plus", 
					" watching a creation you are responsible for grow up and do things, fills you with a sense of pride and" + 
					" accomplishment. Like having a Kid i guess :-)   ",
					" <br> <br>I am very intrigued by the possibilities of Big Data Analytics, we live in an ever expanding world of data afterall,  and Cloud computing", 
					
					
			 		"<a>I believe teamwork makes the dream work, cliche i know, but true.. <br>"+
			 		"<a>open source intelligence"
			 		],

	"skills":["Web Development: Front-end: Javascript(angular), HTML5,CSS3,Bootstrap, Backend: Python(Django) PHP(Laravel) <br>", " Basketball", "Delivering things",
 "Awesomeness","NodeJs "],

 "biopic":"images/mycv.png"
}
bio.display = function(){

var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedrole);

var formattedname = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedname);

if (bio.skills.length > 0){
	
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBiopic);
	
	$("#header").append(HTMLskillsStart);


	for (skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
	    $("#skills").append(formattedSkills);
	};

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
	$("#header").append(formattedMessage);

}

}
bio.display();

bio.contacts.display = function(){
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
}
bio.contacts.display();

var techsummary = {
	"techList" :[
	{

	"title":"Languages",
	//another way of displaying the list instead of using an array i just used the <br> tag :-)
	"Description" : "Python(django)<br>Javascript(angular and nodejs, jquery library)<br>PHP(Laravel)<br>" +
		"HTML5<br>CSS<br>Java<br>C<br>Well versed in OOP analysis and design methodologies<br>MVC design patterns as well," + 
		"in python and PHP(Django, Laravel)<br>Bootstrap UI Framework<br>"+
		"LAMP(linux, apache, mysql, php)<br>MEAN stack(MongoDB, Express, Angular, NodeJs)<br>"+
		"Well versed in object oriented methodologies <br>"+
		"Well versed in MVC(MTV) patterns and frameworks"
				},
	{	
	"title":"Databases",									
	"Description" : "Mysql<br>Postgre<br>Oracle 11g<br>MongoDB<br>Datastore<br>"
	},

	{
		"title":"Systems",
	"Description" : "Ubuntu <br> Gnome<br>Lubuntu<br>Xubuntu<br>UNIX<br>MacOSX<br>Windows<br>"
	},
 
	{
		"title":"Servers",
	"Description" : "Linux Ubuntu<br>Windows Server 2012<br>"
	},

	{
		"title":"CMS",
		"Description" : "Wordpress<br>Joomla<br>Drupal<br>Wagtail<br>"
	},
	{
		"title":"VCS",
		"Description" : "GIT<br>Github<br>Mercurial<br>Bitbucket<br>"
	},


	{
		"title":"APIs",
		"Description" : "Locu, Mpesa, GoogleAPIs like Googlemaps, Google translate and many more from programmableweb.com<br>"
	},
	
	
	{
		"title":"Project Management",
		"Description" : "DSDM atern<br>"
	},
	{
		"title":"More",
		"Description" : "Hadoop <br>Google App Engine, Google Compute Engine <br>PhotoShop"
	}
	
	
	
	]
}
techsummary.display = function(){
	for (tech in techsummary.techList){

	$("#techsummary").append(HTMLtechsummary);
	var formattedTechTitle = HTMLTechTitle.replace("%data%", techsummary.techList[tech].title);
	$(".tech-entry:last").append(formattedTechTitle);
	var formattedTechDescription = HTMLTechDescription.replace("%data%", techsummary.techList[tech].Description);
	$(".tech-entry:last").append(formattedTechDescription);
}

};
techsummary.display();	



var projects = {

	"projectsList":[
	{
		"title" : " This  Resume ",
		"githubname": "View the Github Repo",
		"githublink" : "https://github.com/stevex2/stevemwiti",
		"Description" : "<br>This resume you are currently viewing was built with HTML5, CSS3 and alot of Javascript," + 
		" mostly Javascript"+
		" <br> <br>I am yet to intergrate the d3 js library for the tech summary section to have more interactive resume ",
		"images": ["images/mycv.png"],

		
	},

	{
		"title" : "Shooter",
		"githubname": "View the Github Repo<br>",
		"githublink" :  "https://github.com/stevex2/rpg",
		"Description" : "<br>This game was built with HTML5 canvases and Javascript ",
		"images": ["images/ralphyrobot.png"],
		

	},
	{
		"title" : "Movie Reminder",
		"githubname": "View the Github Repo<br>",
		"githublink" : "myurl.com",
		"Description" : "<br>Reminds end users of movie releases and links to info on movies",
		"images": ["images/me.png"],
		
		
	},

	{
		"title" : "Globalstylings",
		"githubname": "View the Github Repo<br>",
		"githublink" : "https://github.com/stevex2/globalstyling",
		"Description" : ["Developed a Dynamic website for globastylings, a fictitious international hair salon, " + 
		"it included an appointment system that allow users<br> to create a record for themselves and " + 
		"then log in to the system to book an appointment at one of the three salons in London, Paris or New York. <br>" + 
		"The system also accessed a web service to convert from pounds into euros and dollars, using current exchange" + 
		" rates used PHP,CSS, Javascript :-) and a Mysql DB."],
		"images": ["images/6.jpeg"],
		
	},
	{
		"title" : "2-do",
		"githubname": "View the Github Repo<br>",
		"githublink" : "https://github.com/stevex2/2do",
		"Description" : "A to-do list application built with python django framework",
		"images": ["images/4.jpeg"],
		

	},
	
	{
		"title" : "<br><br>Image Loader",
		"githubname": "View the Github Repo<br>",
		"githublink" : "https://github.com/stevex2/imgloader",
		"Description" : "NodeJs is an absoulutely brilliant platform, the event driven model makes for "+
		" excellent applications which are not only fast but efficient<br>"+
		" Thank you Ryan Dahl<br>"+  
		"This simple image loader is built with nodejs, the use case:<br>"+
		"The user should be able to use our application with a web browser<br>"+
		"The user should see a welcome page when requesting http://localhost:8888/start which displays a file upload form<br>"+
		"and finally choose an image file to upload and submitting the form, this image should then be"+
"		uploaded to http://localhost:8888/upload, where it is displayed once the upload is finished<br>",
		"images": ["images/11.jpeg"],


	},
	{
		"title" : "Blogging System",
		"githubname": "View the Github Repo<br>",
		"githublink" :  "myurl.com",
		"Description" : "Built entirely with python django frame work, it allows a user to manage their blogs",
		"images": ["images/2.jpeg"],
		//"<div class=github-link><br>Github link</div><br><br>",
		

	},
	{
		"title" : "Tweeter app",
		"githubname": "View the Github Repo<br>",
		"githublink" :  "myurl.com",
		"Description" : "This app built with Python and Angular javascript helps users manage their tweets",
		"images": ["images/9.jpeg"],
		
	}

]
}
projects.display = function(){

	for (project in projects.projectsList){

	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectsList[project].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectsList[project].Description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedgithub = HTMLGithub.replace("%data%", projects.projectsList[project].githubname).replace("#", projects.projectsList[project].githublink);
	$(".project-entry:last").append(formattedgithub);



	for(img in projects.projectsList[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectsList[project].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}

			

	



}

};
projects.display();





// square brackets are arrays



var work = {
	"jobs": [
	{
		"employer" : "Self",
		"title" : "freelance developer",
		"location": "Nairobi",
		"responsibility" : [
			"I develop cool web applications with javascript and HTML5 including games <br>" + 
			"Some cool python(django) sites and applications.<br>this inventory management system built with python " + 
			" and Qt library.<br>Android conference management app called conference manager running on app engine it has a java backend, datastore database and  HTML CSS Javascript(angular) frontend ."
			]
	
	},
		{
		"employer" : "Locked Installations",
		"title" : "Web developer & CCTV technician",
		"location": "Embu",
		"responsibility" : [
			"Developed and deployed their website<br>Sale of fire equipment<br>Electric fence installation<br>" + 
			"CCtv installation and monitoring<br>P.O.S development customization and installation"]
	},


	{
		"employer" : "Ripe Logistics",
		"title" : "Web developer",
		"location": "Nairobi",
		"responsibility" : "Maintained and secured the website with encryption methodologies such as sha, md5.<br>" + 
		"Developing, testing, evaluating, and installing upgrades and new software like POS and Inventory management system<br>" + 
		"Liased with vendors and suppliers."
	},

	{
		"employer" : "KARLO formerly KARI",
		"title" : "Helpdesk technician ",
		"location": "Embu",
		"responsibility" : [
			"Desktop support for onsite and remote users.<br>Active directory user and group management.<br>" + 
			"Pc and Software troubleshooting<br>User and email account creation and maintenance.<br>" + 
			"Maintained LAN/WAN/WLAN connectivity<br>Network security using various tools."]
	}	
	]
} 

 work.displayWork = function(){

 	for (job in work.jobs){
	
	$("#workExperience").append(HTMLworkStart);

	var formatterEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formatterEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].responsibility);
	$(".work-entry:last").append(formattedDescription);

}

 }
 work.displayWork();
	



var education = {
	"schools":[
	{
		"name":"Multimedia",
		"city":"Nairobi",
		"degree":"<br>Bsc. Business Information systems",
		"major":"Web Development"

	},
	
	{
		"name":"<br>IAT",
		"city":"Nairobi",
		"degree":"<br>Diploma in ICT management<br><br>",
		"major":"ICT Management"
	
	}
 ]


}
education.display = function (){
for (school in education.schools){
	
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(formattedSchoolName);

	var formattedDegree= HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);

	var formattedCity= HTMLschoolLocation.replace("%data%", education.schools[school].city);
	$(".education-entry:last").append(formattedCity);

}
};
education.display();

var onlineCourses = {

	"onlineCourse": [
	{
		"school":"Udacity",
		"name":"Javascript <br> Mobile Development <br><br>",
		"url" : ""
	},

	{
		"school":"Udacity",
		"name":"Javascript HTML5 Game development<br><br>",
		"url" : ""
	},
	{
		"school":"Udacity<br>",
		"name":"Android development<br><br>",
		"url" : ""
	},
	
	{
		"school":"Udacity<br>",
		"name":"Google Compute Engine and App engine<br>currently studying Machine Learning<br><br>",
		"url" : ""
	},


]
}




onlineCourses.display= function (){
for (course in onlineCourses.onlineCourse){
	
	$("#online").append(HTMLonlineClasses);

	var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.onlineCourse[course].school);
	$(".online-entry:last").append(formattedSchool);

	var formattedCourseName = HTMLonlineTitle.replace("%data%", onlineCourses.onlineCourse[course].name);
	$(".online-entry:last").append(formattedCourseName);
}
};
onlineCourses.display();







function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newlocation = work_obj.jobs[job].location;
		locationArray.push(newlocation);
	}

	return locationArray;
}

// console.log(locationizer(work));

function inName(name){
	name = name.trim().split(" ");
	console.log(name); 
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);