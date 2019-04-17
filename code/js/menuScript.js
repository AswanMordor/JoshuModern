var isToggled = false;
/*FLIP version of sidebar toggle animation*/
function toggleSideNav() {
  page = document.querySelector(".page");
  sidebar = document.querySelector(".sidebar");

  const pagefirst = page.getBoundingClientRect();
  const sidebarfirst = sidebar.getBoundingClientRect();

  if (isToggled) {
    if(window/innerWidth <= 500){
      closeNavSmall();
    }
    else{
      closeNav();
    }
    isToggled = false;
  } else {
    if(window.innerWidth <= 500){
      openNavSmall();
    }
    else{
      openNav();
    }
    isToggled = true;
  }
  const pagelast = page.getBoundingClientRect();
  const pagedeltaX = pagefirst.left - pagelast.left;
  const pagedeltaY = pagefirst.top - pagelast.top;
  const pagedeltaW = pagefirst.width / pagelast.width;
  const pagedeltaH = pagefirst.height / pagelast.height;

  const sidebarlast = sidebar.getBoundingClientRect();
  const sidebardeltaX = sidebarfirst.left - sidebarlast.left;
  const sidebardeltaY = sidebarfirst.top - sidebarlast.top;
  const sidebardeltaW = sidebarfirst.width / sidebarlast.width;
  const sidebardeltaH = sidebarfirst.height / sidebarlast.height;

  page.animate(
    [
      {
        transformOrigin: "top left",
        transform: `
      translate(${pagedeltaX}px, ${pagedeltaY}px)
      scale(${pagedeltaW}, ${pagedeltaH})
    `
      },
      {
        transformOrigin: "top left",
        transform: "none"
      }
    ],
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "both"
    }
  );

  sidebar.animate(
    [
      {
        transformOrigin: "top left",
        transform: `
      translate(${sidebardeltaX}px, ${sidebardeltaY}px)
      scale(${sidebardeltaW}, ${sidebardeltaH})
    `
      },
      {
        transformOrigin: "top left",
        transform: "none"
      }
    ],
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "both"
    }
  );
}

function openNavSmall(){
  document.getElementById("sideMenu").style.width = "50%";
}

function closeNavSmall(){
  document.getElementById("sideMenu").style.width = "0%";
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sideMenu").style.width = "20%";
  document.getElementById("page").style.marginLeft = "20%";
  document.getElementById("page").style.width = "80%";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sideMenu").style.width = "0%";
  document.getElementById("page").style.marginLeft = "0%";
  document.getElementById("page").style.width = "100%";
}

function createMenu() {
  document.getElementById("sideMenu").innerHTML =
    '<a href="javascript:void(0)" class="closebtn" onclick="toggleSideNav()">&times;</a> \n' +
    '<a href="#">Home</a> \n' +
    '<a href="#">Kana</a> \n' +
    '<a href="#">Kanji</a> \n' +
    '<a href="#">Vocabulary</a> \n' +
    '<a href="#">Grammar</a> \n' +
    '<a href="#">Counters</a> \n' +
    '<a href="#">Reading</a> \n' +
    '<a href="#">Listen/Speak</a> \n' +
    '<a href="#">Culture</a> \n' +
    '<a href="#">Links</a> \n';
}
