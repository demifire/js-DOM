/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var tay = document.getElementById('name1');
tay.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var khaled = document.getElementById('position2');
khaled.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var piko = document.getElementById('alias3');
piko.innerText = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var prince = document.getElementsByClassName('profile')[0];
prince.innerHTML = 1999;

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var bruce = document.getElementsByClassName('profile')[1];
bruce.innerText = "Adapt what is useful, reject what is useless, and add what is specifically your own.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var sam = document.getElementsByClassName('alias')[2];
sam.innerHTML = "The guy from pulp fiction";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var peter = document.createElement('div');
peter.id = 'name7';
peter.innerHTML = "Peter Griffin";
nameParent.appendChild(peter);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var tim = document.createElement('div');
tim.id = 'alias8';
tim.innerHTML = 'Old Man Riverwalk';
aliasParent.appendChild(tim);

//Final Boss
/*9. Create your own profile.*/

var targetDiv = document.getElementsByClassName('block3')[2].getElementsByTagName('img')[0];
targetDiv.id = 'poop';
document.getElementById("poop").src="http://chazkondo.com/wp-content/uploads/bb-plugin/cache/2016-05-0dsd5-09.52.46-295x300-circle.jpg";
targetDiv.innerHTML = '<img src="http://chazkondo.com/wp-content/uploads/bb-plugin/cache/2016-05-0dsd5-09.52.46-295x300-circle.jpg" alt="Chaz">'
var something = document.createElement('div');
something.innerHTML = 'Chaz Kondo <br> Just a guy <br> Programming novice <br> "..I like things and stuff sometimes"' ;
something.id = 'alias8';
var doodoo = document.getElementsByClassName('block3')[2];
doodoo.appendChild(something);

