$(document).ready(function() {
  // Cache jQuery selections
  const $menuBtn = $("#menu-btn");
  const $navLinks = $("#nav-links");
  const $menuBtnIcon = $menuBtn.find("i");

  // Add a click event listener to the menu button
  $menuBtn.on("click", function() {
    // Toggle the 'open' class on the navigation links container
    $navLinks.toggleClass("open");

    // Check if the navigation links container has the 'open' class
    const isOpen = $navLinks.hasClass("open");

    // Set the icon class based on whether the navigation links container is open or not
    $menuBtnIcon.attr("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  // Add a click event listener to the navigation links container
  $navLinks.on("click", function() {
    // Remove the 'open' class from the navigation links container
    $navLinks.removeClass("open");

    // Set the icon class to the menu icon
    $menuBtnIcon.attr("class", "ri-menu-line");
  });

  // ScrollReveal options
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Apply ScrollReveal to elements
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".about__content p", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
  });
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".blog__card", {
    duration: 1000,
    interval: 500,
  });

  ScrollReveal().reveal(".blog__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".contact__image img", {
    ...scrollRevealOption,
  });
});