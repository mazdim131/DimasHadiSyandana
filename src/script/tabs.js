const tabContent = document.getElementById("tabContent");
const tabGrid = document.getElementById("tabGrid");
const tabProjects = document.getElementById("tabProjects");
const tabSaved = document.getElementById("tabSaved");

const contents = {
  grid: myCertificate,
  projects: myPortofolio,
  saved: `
    <div class="text-center py-5 text-muted">
      <i class="bi bi-bookmark fs-1"></i>
      <p class="mt-2">Belum ada item yang disimpan.</p>
    </div>
  `,
};

function switchTab(activeIcon, contentKey) {
  tabGrid.style.color = "#8e8e8e";
  tabProjects.style.color = "#8e8e8e";
  tabSaved.style.color = "#8e8e8e";

  activeIcon.style.color = "#000";
  tabContent.innerHTML = contents[contentKey];
}

tabGrid.addEventListener("click", () => switchTab(tabGrid, "grid"));
tabProjects.addEventListener("click", () => switchTab(tabProjects, "projects"));
tabSaved.addEventListener("click", () => switchTab(tabSaved, "saved"));

switchTab(tabGrid, "grid");

function follow() {
  window.location.href = "https://www.linkedin.com/in/dimashadisyandana/";
}