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
  
 