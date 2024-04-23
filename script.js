function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var yOffset = -70; // Adjust as needed, depending on your layout
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var y = section.getBoundingClientRect().top + window.pageYOffset + yOffset - navbarHeight;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
