let bannershow = document.getElementById("banner-container");
let paragraffer = bannershow.getElementsByClassName("banner-tekst");
let intervalTid = 3000; //skift tekst efter 3. sek.


function visTekst(index) {
   for (let i = 0; i < paragraffer.length; i++) {
        if (i=== index) {
            paragraffer[i].style.display = "block";
        } else {
            paragraffer[i].style.display = "none";
       }
    }
}

function startbannershow() {
    let index = 0;
    setInterval(function () {
        visTekst(index);
        index = (index + 1) % paragraffer.length;
    }, intervalTid);
}

startbannershow();

bannershow.addEventListener("mouseover", function() {
    bannershow.style.textDecorationColor = "#2B00FF";
});

bannershow.addEventListener("mouseout",function() {
    bannershow.style.textDecorationColor = "#000000";
});

const menuItems = [
    { text: "News & Updates", href: "#news" },
    { text: "Gallery", href: "#gallery" },
    { text: "About", href: "#about" },
    { text: "Help", href: "#help" },
  ];
  
  const navList = document.createElement("ul");
  
  menuItems.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.href;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
  
  document.querySelector("header nav ul").appendChild(navList);


  function toggleNav() {
    var sidebar = document.getElementById("simssidebar");
    if (sidebar.style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
  }
  
  function openNav() {
    document.getElementById("simssidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("simssidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  const languageSelector = document.getElementById("sprog-selector");
  
  languageSelector.addEventListener("change", function() {
    const language = languageSelector.value;
    if (language === "es") {
        // Change the page to Spanish
        document.documentElement.lang = "es";
        document.title = "sims.es";
    } else if (language === "da") {
        // Change the page to Danish
        document.documentElement.lang = "da";
        document.title = "sims.dk"; // Adding title for Danish language
    } else if (language === "en") {
        // Change the page to English
        document.documentElement.lang = "en";
        document.title = "sims.com"; // Adding title for English language
    } 
  });