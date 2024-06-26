function back(){
  window.history.back();
}

function hamburger_click(){
  var home_links = document.getElementsByClassName("home_links_m")[0];
  var line1 = document.getElementsByClassName("line")[0];
  var line2 = document.getElementsByClassName("line")[1];
  var line3 = document.getElementsByClassName("line")[2];
    
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
    var navbar = document.getElementsByClassName("home_nav_mobile")[0];
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
// Gallary Slideshow
var slideNo = 1;
function wrap_around(index) {
  var slides_div = document.querySelector(".home_photos");
  var no_of_slides = slides_div.children.length;
  if (index<1) {
    index = no_of_slides;
  } else if (index>no_of_slides) {
    index = 1;
  }
  return index;
}
function prev_photo(n) {
  slideNo = wrap_around(slideNo - n);
  showSlide(slideNo);
}
function next_photo(n) {
  slideNo = wrap_around(slideNo + n);
  showSlide(slideNo);
}
function showSlide(slideIndex) {
  var ind = slideIndex - 1;
  var slides = document.querySelectorAll(".home_photos img");
  slides.forEach(slide => {slide.classList.remove("active");
  });
  slides[ind].classList.add("active");
}
function minus_page(n) {
  if (current_page > 1) {
    current_page -= n;
  }
  paginate(current_page);
}
function plus_page(n) {
  if (current_page < no_of_pages) {
    current_page += n;
  }
  paginate(current_page);
}
function paginate(page) {
  var start = (page - 1) * imgs_per_page;
  var end = start + imgs_per_page;
  gallery_cards.forEach((card, index) => {
    card.style.display = (index >= start && index < end) ? 'block' : 'none';
  });
  var left_btn = document.getElementById("left_btn");
  var right_btn = document.getElementById("right_btn");
  
  if (page === 1) {
    left_btn.style.display = 'none';
  } else {
    left_btn.style.display = 'block';
  }

  if (page === no_of_pages) {
    right_btn.style.display = 'none';
  } else {
    right_btn.style.display = 'block';
  }
}



function description(element) {
  var par_element = element.parentElement;
  var parent_id = par_element.id;
  var description_id = 'div' + parent_id;
  var clicked_description = document.getElementById(description_id);
  var descriptions = document.querySelectorAll('.event_description');
  var upcoming_events = document.getElementById('upcoming_events');
  descriptions.forEach(description => { description.style.display = 'none'; });
  if (upcoming_events.style.display === "block") {
    clicked_description.style.display = 'block';
    upcoming_events.style.display = 'none';
  } else {
    // upcoming_events.style.display === 'none';
    if (description_id === prev_description_id) {
      upcoming_events.style.display = 'block';
    } else {
      clicked_description.style.display = 'block';
    }
  }
    prev_description_id = description_id;
}





var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var screenAspect_ratio = screenHeight/screenWidth

if (window.location.href.includes("index.html")) {
  showSlide(slideNo);
  
} else if (window.location.href.includes("gallery.html")) {
  var current_page = 1;
  var gallery_cards = Array.from(document.getElementsByClassName('gallery_img'));
  var gallery_img_count = gallery_cards.length;
  var imgs_per_page = 4;
  var no_of_pages = Math.ceil(gallery_img_count / imgs_per_page);
  paginate(current_page);

} else if (window.location.href.includes("events.html")) {
  var upcoming_events = document.getElementById('upcoming_events');
  upcoming_events.style.display = 'block';
  var prev_description_id = '';
  
} else if (window.location.href.includes("about_us.html")) {
  if (screenWidth < '480px') {
    var aboutus_symbl_divs = document.getElementsByClassName("aboutus_symbl");
    var width_div = aboutus_symbl_divs[0].offsetWidth;
    var l_r_margin = (screenWidth - width_div)/2;
    for (var i = 0; i < aboutus_symbl_divs.length; i++) {
    aboutus_symbl_divs[i].style.margin = `2rem ${l_r_margin}px`;
    }
  }
  
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
}