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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Circular code snippet image
let codeSnippetImg = document.getElementById('cta-img').src = "img/header-img.png";

//Dom is Awesome text 
let mainTitleContent = ["Dom","Is","Awesome"];
let ctaText = document.querySelector('.cta-text');
let newH1 = document.createElement("h1");
let newH12 = document.createElement("h1");

ctaText.prepend(newH1);
ctaText.prepend(newH12);



ctaTextH1s = document.querySelectorAll('.cta-text > h1');
console.log(ctaTextH1s);

for(i=0; i<mainTitleContent.length; i++){
  ctaTextH1s[i].textContent = mainTitleContent[i];
}

//Populating the Nav Bar 
let navItems = ["Services", "Product", "Vision", "Features", "About", "Contact"]
let navigationAnchors = document.querySelectorAll('nav > a');

for (i=0; i < navItems.length; i++){
  navigationAnchors[i].textContent = navItems[i];
}

//Get Started text in button 
let getStartedButton = document.querySelector('.cta-text > button').textContent = "Get Started";

//Populating Top Section & Bottom Section h4 titles
let SectionHeaders = ["Features","About","Services","Product","Vision"];
let SectionH4 = document.querySelectorAll(".text-content > h4");

for (i=0; i < SectionHeaders.length; i++){
  SectionH4[i].textContent = SectionHeaders[i];
}

//Populating Section paragraphs
let sectionPContent = ["Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."];
let sectionPs = document.querySelectorAll(".text-content > p");

for (i=0; i < sectionPContent.length; i++){
  sectionPs[i].textContent = sectionPContent[i];
}

//Populating middle img 
let middleImg = document.getElementById('middle-img').src = "img/mid-page-accent.jpg";

//Footer selection, alignment
let footerContainer = document.querySelector('footer');
footerContainer.style.textAlign = "left";

//Contact header insertion & styling
let newHeading = document.createElement("h4");
footerContainer.prepend(newHeading);
let contactHeader = document.querySelector('footer > h4').textContent = "Contact";

//contact paragraph population
let footerContent = document.querySelector('footer > p');
let br = document.createElement("br");
let newFooterP = document.createElement("p");
footerContainer.append(newFooterP);
footerContent.textContent = "123 Way 456 Street";
newFooterP.textContent = "Somewhere, USA";
footerContent.style.marginBottom = 0;


let newFooterParagraph2 = document.createElement("p");
footerContainer.append(newFooterParagraph2);
newFooterParagraph2.textContent = "1 (888) 888-8888";
newFooterParagraph2.style.marginTop = "2%";


let newFooterParagraph3 = document.createElement("p");
footerContainer.append(newFooterParagraph3);
newFooterParagraph3.textContent = "sales@greatidea.io";
newFooterParagraph3.style.marginTop = "2%";
newFooterParagraph3.style.marginBottom = "4%";

let newFooterParagraph4 = document.createElement("p");
footerContainer.append(newFooterParagraph4);
newFooterParagraph4.textContent = "Copyright Great Idea! 2018";
newFooterParagraph4.style.textAlign = "center";
newFooterParagraph3.style.marginTop = "2%";

