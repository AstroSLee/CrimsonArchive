// The Crimson Archive — renders the flower garden and story entries from stories.js

function flowerSVG() {
  const petals = Array.from({ length: 5 }, (_, i) => {
    const angle = (360 / 5) * i;
    return `<ellipse cx="24" cy="12" rx="7" ry="12" fill="currentColor"
      transform="rotate(${angle} 24 24)" opacity="0.9" />`;
  }).join("");
  return `
    <svg class="flower-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g style="color: var(--petal)">${petals}</g>
      <circle cx="24" cy="24" r="5" fill="#f2c94c" />
    </svg>
  `;
}

function buildGarden() {
  const field = document.getElementById("flower-field");
  field.innerHTML = STORIES.map(
    (story) => `
      <button class="flower-btn" type="button" data-target="entry-${story.id}" aria-label="${story.name}">
        ${flowerSVG()}
        <span class="flower-label">${story.name}</span>
      </button>
    `
  ).join("");
}

function buildEntries() {
  const list = document.getElementById("entries-list");
  list.innerHTML = STORIES.map(
    (story) => `
      <article class="entry" id="entry-${story.id}">
        <div class="entry-header">
          <h3>${story.name}</h3>
          <span class="entry-years">${story.years}</span>
        </div>
        <p class="entry-role">${story.role}</p>
        <p class="entry-summary">${story.summary}</p>
        <button class="entry-toggle" type="button" data-toggle="entry-${story.id}" aria-expanded="false">
          Read the full story
        </button>
        <div class="entry-body">
          <div class="entry-body-inner">
            ${story.body.map((p) => `<p>${p}</p>`).join("")}
            ${story.source ? `<span class="entry-source">Source note: ${story.source}</span>` : ""}
          </div>
        </div>
      </article>
    `
  ).join("");
}

function expandEntry(id) {
  document.querySelectorAll(".entry").forEach((el) => {
    if (el.id === id) {
      el.classList.add("expanded");
      const toggle = el.querySelector(".entry-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
        toggle.textContent = "Collapse";
      }
    }
  });
}

function wireInteractions() {
  document.getElementById("flower-field").addEventListener("click", (e) => {
    const btn = e.target.closest(".flower-btn");
    if (!btn) return;

    document.querySelectorAll(".flower-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const targetId = btn.dataset.target;
    expandEntry(targetId);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("entries-list").addEventListener("click", (e) => {
    const toggle = e.target.closest(".entry-toggle");
    if (!toggle) return;

    const entry = document.getElementById(toggle.dataset.toggle);
    const isExpanded = entry.classList.toggle("expanded");
    toggle.setAttribute("aria-expanded", String(isExpanded));
    toggle.textContent = isExpanded ? "Collapse" : "Read the full story";
  });
}

function wireBloomOnScroll() {
  const flowers = document.querySelectorAll(".flower-btn");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  flowers.forEach((f) => observer.observe(f));
}

document.addEventListener("DOMContentLoaded", () => {
  buildGarden();
  buildEntries();
  wireInteractions();
  wireBloomOnScroll();
});
