const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select content function
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border
  this.classList.add("tab-border");
  //Grab content
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

//Tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
