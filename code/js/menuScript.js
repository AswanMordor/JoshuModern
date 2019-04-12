/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sideMenu").style.width = "15%";
  document.getElementById("page").style.marginLeft = "15%";
  document.getElementById("page").style.width = "85%";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("page").style.marginLeft = "0";
  document.getElementById("page").style.width = "100%";
}

function createMenu() {
  document.getElementById("sideMenu").innerHTML =
    '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> \n' +
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
