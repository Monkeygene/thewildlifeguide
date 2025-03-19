const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

function toggleMenu() {
  sidebar.classList.toggle("translate-x-full");
  sidebarOverlay.classList.toggle("hidden");
  sidebar.classList.toggle("z-50"); // Ensure sidebar is on top
  
  bar1.classList.toggle("rotate-45");
  bar1.classList.toggle("translate-y-2");
  bar2.classList.toggle("opacity-0");
  bar3.classList.toggle("-rotate-45");
  bar3.classList.toggle("-translate-y-2");
}

menuButton.addEventListener("click", toggleMenu);

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
  sidebarOverlay.classList.add("hidden");
  sidebar.classList.remove("z-50"); // Remove z-index when closed
  bar1.classList.remove("rotate-45", "translate-y-2");
  bar2.classList.remove("opacity-0");
  bar3.classList.remove("-rotate-45", "-translate-y-2");
});

document.querySelectorAll("[id$='-button']").forEach(button => {
  button.addEventListener("click", () => {
    const menu = document.getElementById(button.id.replace("-button", "-menu"));
    const icon = document.getElementById(button.id.replace("-button", "-icon"));
    menu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});


  function toggleFAQ(element) {
      let content = element.nextElementSibling;
      content.classList.toggle('hidden');
  }

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        document.querySelectorAll(".panel").forEach((item) => {
            if (item !== panel) {
                item.style.maxHeight = null;
                item.classList.remove("py-3");
                item.previousElementSibling.querySelector(".icon").innerText = "+";
            }
        });

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("py-3");
            icon.innerText = "+";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("py-3");
            icon.innerText = "-";
        }
    });
});


function toggleFAQ(element) {
  let content = element.nextElementSibling;
  content.classList.toggle('hidden');
}