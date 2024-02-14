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

for (let i = 0; i < paragraffer.length; i++) {
    paragraffer[i].addEventListener("mouseover", function() {
        this.style.color = "#2B00FF";
    });

    paragraffer[i].addEventListener("mouseout", function() {
        this.style.color = "#000000";
    });
}

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


  let sidebarArray = []; // Deklarerer en tom array

  function toggleNav() {
    let sidebar = document.getElementById("simssidebar");
    if (sidebar.style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
  }
  
const toggleButton = document.getElementById("toggleButton");
const simssidebar = document.getElementById("simssidebar");

toggleButton.addEventListener("click",()=> {
  if (simssidebar.style.right === "-250px") {
    openNav();
  } else {
    closeNav();
  }
});

  function openNav() {
    document.getElementById("simssidebar").style.right = "0";
    sidebarArray.push("Sidebar åbnet"); 
    console.log(sidebarArray); 
  }
  
  function closeNav() {
    document.getElementById("simssidebar").style.right = "-250px";
    sidebarArray.push("Sidebar lukket"); 
    console.log(sidebarArray); 
  }
  
 
  document.getElementById("toggleButton").addEventListener("click", toggleNav);
  
  




  const languageSelector = document.getElementById("sprog-selector");
const languages = ["es", "da", "en"]; 

languageSelector.addEventListener("change", function() {
  let language = languageSelector.value; 
  if (languages.includes(language)) { 
    let languageIndex = languages.indexOf(language); 
    changeLanguage(language, languageIndex); 
  }
});

function changeLanguage(language, languageIndex) {
  if (language === "es") {
    
    document.documentElement.lang = "es";
    document.title = "Sims.es"; 
  } else if (language === "da") {
  
    document.documentElement.lang = "da";
    document.title = "Sims.dk"; 
  } else if (language === "en") {
    
    document.documentElement.lang = "en";
    document.title = "Sims.com";  
  }
  updateLanguageIndex(languageIndex); 
}

function updateLanguageIndex(languageIndex) {
  let temp = languages[0];
  languages[0] = languages[languageIndex];
  languages[languageIndex] = temp;
}




