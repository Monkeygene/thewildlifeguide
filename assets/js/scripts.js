document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu selectors
  const menuButton = document.getElementById("menu-button");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const bars = {
    bar1: document.getElementById("bar1"),
    bar2: document.getElementById("bar2"),
    bar3: document.getElementById("bar3")
  };

  // Toggle the sidebar and update ARIA state
  function toggleMenu() {
    const isOpen = !sidebar.classList.contains("translate-x-full");
    sidebar.classList.toggle("translate-x-full");
    sidebarOverlay.classList.toggle("hidden");
    sidebar.classList.toggle("z-50"); // Ensure sidebar is on top

    bars.bar1.classList.toggle("rotate-45");
    bars.bar1.classList.toggle("translate-y-2");
    bars.bar2.classList.toggle("opacity-0");
    bars.bar3.classList.toggle("-rotate-45");
    bars.bar3.classList.toggle("-translate-y-2");

    // Update aria-expanded attribute for accessibility
    menuButton.setAttribute("aria-expanded", String(!isOpen));
  }

  menuButton.addEventListener("click", toggleMenu);

  // Close sidebar when overlay is clicked
  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    sidebarOverlay.classList.add("hidden");
    sidebar.classList.remove("z-50");

    bars.bar1.classList.remove("rotate-45", "translate-y-2");
    bars.bar2.classList.remove("opacity-0");
    bars.bar3.classList.remove("-rotate-45", "-translate-y-2");

    // Reset ARIA state
    menuButton.setAttribute("aria-expanded", "false");
  });

  // Toggle dropdown menus within the sidebar
  document.querySelectorAll("[id$='-button']").forEach((button) => {
    // Initialize aria-expanded if not set
    if (!button.hasAttribute("aria-expanded")) {
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", () => {
      const menu = document.getElementById(button.id.replace("-button", "-menu"));
      const icon = document.getElementById(button.id.replace("-button", "-icon"));

      menu.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");

      // Toggle aria-expanded for accessibility
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
    });
  });

  // Accordion functionality
  document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const icon = this.querySelector(".icon");

      // Close other panels
      document.querySelectorAll(".panel").forEach((item) => {
        if (item !== panel) {
          item.style.maxHeight = null;
          item.classList.remove("py-3");
          const otherIcon = item.previousElementSibling.querySelector(".icon");
          if (otherIcon) {
            otherIcon.innerText = "+";
          }
        }
      });

      // Toggle the clicked panel
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
});

// FAQ

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

