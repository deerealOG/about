const dropDownContent = document.getElementsByClassName("profileDropdown")[0];
const dropDownBtn = document.getElementsByClassName("down")[0];

dropDownBtn.onclick = function () {
  dropDownContent.classList.toggle(".show");
};
