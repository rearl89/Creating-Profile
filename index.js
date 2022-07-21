
let content = document.querySelector('.js-generated.content')

//create header element
let header = document.createElement("h1");
header.setAttribute("class", "dog-name"); //<h1> class="dog-name"></h1>
header.append("Rizzo"); //<h1 class="dog-name">Rizzo</h1>
content.append(header);

//create dog-content
let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);

//add dog-image
let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.setAttribute("src", "./assets/rizzo.jpg");
dogContent.append(dogImage);

//add dog-details div
let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
dogContent.append(dogDetails);

//add description h3
let description = document.createElement("h3");
description.textContent = "Description:";
dogDetails.append(description);

//add paragraph
let para = document.createElement("p");
para.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogDetails.append(para);

//add feeding times h3
let times = document.createElement("h3");
times.textContent = "Feeding Times:";
dogDetails.append(times);

//add ul under times
let ulist = document.createElement("ul");
let time1 = document.createElement("li");
time1.textContent = "9:00am";
ulist.append(time1);
let time2 = document.createElement("li");
time2.textContent = "12:00pm";
ulist.append(time2);
let time3 = document.createElement("li");
time3.textContent = "5:00pm";
ulist.append(time3);
dogDetails.append(ulist);

