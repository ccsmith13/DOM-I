const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Circular code snippet image
let codeSnippetImg = document.getElementById("cta-img");
codeSnippetImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Dom is Awesome text 

ctaTextH1 = document.querySelector('.cta-text > h1');
ctaTextH1.textContent = siteContent["cta"]["h1"];

ctaText = document.querySelector('.cta-text');
ctaText.style.textAlign = "center";


//Nav Bar 
let navigationAnchors = document.querySelectorAll('nav > a');
let navIndex = 1;
navigationAnchors.forEach(navitem => {
  navitem.textContent = siteContent["nav"]["nav-item-"+navIndex];
  navitem.style.color = "green";
  navIndex +=1;
});

//Adding items to nav using appendChild and prepend
let navContainer = document.querySelector("nav");
let prependedNavItem = document.createElement("a");
navContainer.prepend(prependedNavItem);
let firstNavAnchor = document.querySelector('nav > a');
firstNavAnchor.textContent = "New!"
firstNavAnchor.style.color = "green";

let appendedNavItem = document.createElement("a")
appendedNavItem.id = "last-nav-item";
navContainer.appendChild(appendedNavItem);
let lastNavAnchor = document.querySelector('#last-nav-item');
lastNavAnchor.textContent = "Another New Item!";
lastNavAnchor.style.color = "green";


//Get Started text in button 
let getStartedButton = document.querySelector('.cta-text > button')
getStartedButton.textContent = siteContent["cta"]["button"];

getStartedButton.addEventListener('mouseenter',()=>{
  event.target.style.backgroundColor = "pink";
})

getStartedButton.addEventListener('mouseleave',()=>{
  event.target.style.backgroundColor = "purple";
})

//New Button that Updates Content 
let newButton = document.createElement('button');
newButton.id = "update-button";
ctaText.append(newButton);
let newButtonSelector = document.querySelector("#update-button");
newButtonSelector.textContent = "Update Content";


function updateSite(){
  let pSelector = document.querySelector('p');
  pSelector.style.backgroundColor = "hotpink";
  pSelector.textContent = "Look at this new text!";
}

newButtonSelector.addEventListener('click',updateSite, false);

//Populating all Middle Section Content
let middleContent = document.querySelectorAll(".text-content > h4, .middle-img,.text-content > p");
let middleItemIndex = 0;
middleContent.forEach(item =>{
  item.textContent = Object.values(siteContent["main-content"])[middleItemIndex];
  middleItemIndex += 1;
});

//Correcting Middle Img Population
let middleImg = document.querySelector('.middle-img');
middleImg.textContent = "";
middleImg.src = siteContent["main-content"]["middle-img-src"];

//Footer selection, alignment
let footerContainer = document.querySelector('.contact');
footerContainer.style.textAlign = "left";

//Contact header insertion & styling
let newHeading = document.createElement("h4");
footerContainer.prepend(newHeading);
let contactHeader = document.querySelector('.contact > h4').textContent = siteContent["contact"]["contact-h4"];

//contact paragraph population
let footerContent = document.querySelector('.contact > p');
let newFooterP = document.createElement("p");
footerContent.textContent = siteContent["contact"]["address"];
footerContainer.style.width = "150px";


let newFooterParagraph2 = document.createElement("p");
footerContainer.append(newFooterParagraph2);
newFooterParagraph2.textContent = siteContent["contact"]["phone"];
newFooterParagraph2.style.marginTop = "15px";


let newFooterParagraph3 = document.createElement("p");
footerContainer.append(newFooterParagraph3);
newFooterParagraph3.textContent = siteContent["contact"]["email"];
newFooterParagraph3.style.marginTop = "15px";

let newFooterParagraph4 = document.querySelector('footer > p')
newFooterParagraph4.textContent = siteContent["footer"]["copyright"];
newFooterParagraph4.style.textAlign = "center";
newFooterParagraph4.style.justifyContent = "center";

