"use strict";
// DROP-DOWN LIST FUNCTIONALITY
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const burgerOpen = document.querySelector(".main-nav__burger");
const closeDropDown = document.querySelector(".main-nav__close");
const navList = document.querySelector(".main-nav__list");
// const dropDown = document.querySelector('.drop-down');

function showDropDown() {
  const mainNav = document.querySelector(".main-nav");
  navList.classList.add("hide");
  const ddBox = document.createElement("div");
  ddBox.classList.add("drop-down");
  mainNav.appendChild(ddBox);
  const ddContent = `
	<ul class="drop-down__list">
    <li><a class="drop-down__item" href="#">Text</a></li>
    <li><a class="drop-down__item" href="#">Text</a></li>
    <li><a class="drop-down__item" href="#">Text</a></li>
    <li><a class="drop-down__item" href="#">Text</a></li>
  </ul>
	<a class="popup-btn" href="#google">Open pop-up button</a>
	`;
  ddBox.innerHTML = ddContent;

  this.classList.add("hide");
  closeDropDown.classList.remove("hide");
}

function hideDropDown() {
  document.querySelector(".drop-down").remove();
  navList.classList.remove("hide");
	burgerOpen.classList.remove('hide');
	this.classList.add('hide');
}

burgerOpen.addEventListener("click", showDropDown);
closeDropDown.addEventListener("click", hideDropDown);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//END OF DROP-DOWN LIST FUNCTIONALITY

// SLIDER
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//END OF SLIDER
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*