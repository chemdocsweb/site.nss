function back(){
  window.history.back();
}
function hamburger_click(){
  var home_links = document.getElementById("home_links_p");
  var line1 = document.getElementsByClassName("line1")[0];
  var line2 = document.getElementsByClassName("line2")[0];
  var line3 = document.getElementsByClassName("line3")[0];
    
  if (home_links.style.display === 'block') {
    home_links.style.display = 'none';
    
    line1.style.width = '2rem';
    line2.style.width = '2rem';
    line3.style.width = '2rem';
    line1.style.transform = 'rotate(0deg)  translateX(0) translateY(0)';
    line2.style.opacity = 1;
    line3.style.transform = 'rotate(0deg)  translateX(0) translateY(0)';
    
  } else {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var navbar = document.getElementById("home_nav_portrait");
    var hamburger = document.getElementById("hamburger");
    
    var hamburger_start_x = hamburger.offsetLeft;
    var navbar_end_y = navbar.offsetTop + navbar.offsetHeight;
    home_links.style.display = 'block';
    home_links.style.top = `${navbar_end_y}px`;
    home_links.style.right = `${screenWidth-hamburger_start_x}px`

    line1.style.width = '2.3rem';
    line2.style.width = '2.3rem';
    line3.style.width = '2.3rem';
    
    line1.style.transform = 'rotate(-45deg) translateX(.05rem) translateY(.82rem)';
    line2.style.opacity = 0;
    line3.style.transform = 'rotate(45deg) translateX(.05rem) translateY(-.82rem)';
  }
}
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var screenAspect_ratio = screenHeight/screenWidth

if (window.location.href.includes("index.html")) {
  
} else if (window.location.href.includes('unit_1_leads.html') || window.location.href.includes('unit_2_leads.html')) {
  
  // unit background adjustment
  var img = document.getElementById("background");
  var aspect_ratio = img.naturalHeight / img.naturalWidth;

  if (screenAspect_ratio >= 1) {
    var new_width = 0.60 * screenWidth;
    var new_height = aspect_ratio * new_width;
    var top_bottom_margin = (screenHeight - new_height) / 2;
    var left_right_margin = 0.2 * screenWidth;
  } else {
    var new_height = 0.60 * screenHeight;
    var new_width = (1/aspect_ratio) * new_height;
    var top_bottom_margin = 0.2*screenHeight;
    var left_right_margin = (screenWidth - new_width)/2;
  }

  img.style.height = `${new_height}px`
  img.style.width = `${new_width}px`
  img.style.margin = `${top_bottom_margin}px ${left_right_margin}px ${top_bottom_margin}px ${left_right_margin}px`;
} else {
  
}