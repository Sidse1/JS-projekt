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


  