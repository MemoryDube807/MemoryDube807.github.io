const projects = [
  {
    name: "Memo Weather App",
    language: "HTML, CSS, JavaScript, API",
    description:
      "A front-end weather application created to deliver live forecast data in a clean, user-friendly interface.",
    stars: 18,
    link: "https://github.com/MemoryDube807",
    demo: "https://memo-weather.netlify.app/"
  },
  {
    name: "ZamClimWatch",
    language: "Python, Streamlit, API",
    description:
      "An interactive environmental monitoring application for visualizing air quality and climate-related indicators in real time.",
    stars: 24,
    link: "https://github.com/MemoryDube807",
    demo: ""
  },
  {
    name: "AI-Tutor ZW",
    language: "Python, AI",
    description:
      "A bilingual, offline-first educational assistant aligned with the Zimbabwean curriculum to support student revision and learning.",
    stars: 29,
    link: "https://github.com/MemoryDube807",
    demo: ""
  },
  {
    name: "Spatial Climate Trend Analyzer",
    language: "Python, R, SQL",
    description:
      "A climate analytics workflow for processing environmental datasets, computing indices, and exploring spatial trends and variability.",
    stars: 16,
    link: "https://github.com/MemoryDube807",
    demo: ""
  },
  {
    name: "Katikafwe Private School DBMS",
    language: "SQL",
    description:
      "A custom database system designed to support school operations, records management, and administrative efficiency.",
    stars: 12,
    link: "https://github.com/MemoryDube807",
    demo: ""
  }
];

const communityProjects = [
  {
    name: "Pad Drive for High School Girls",
    language: "Community outreach",
    description:
      "A recurring initiative focused on improving menstrual health access and helping girls remain in education without interruption.",
    stars: 9,
    link: "https://github.com/MemoryDube807",
    demo: ""
  },
  {
    name: "Campus Tree Planting Initiatives",
    language: "Environmental action",
    description:
      "Environmental conservation and awareness activities designed to promote sustainability, stewardship, and community engagement.",
    stars: 11,
    link: "https://github.com/MemoryDube807",
    demo: ""
  }
];

const videos = [
  {
    title: "ZamClimWatch App Walkthrough",
    description: "A brief walkthrough of the application and the climate-monitoring insights it supports.",
    embed: "https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&mute=1"
  },
  {
    title: "Community Tree Planting & Outreach Showcase",
    description: "A short look at outreach and environmental action activities focused on sustainability and community impact.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&mute=1"
  }
];

const projectGrid = document.getElementById("projectsGrid");
const communityGrid = document.getElementById("communityGrid");
const videoGrid = document.getElementById("videoGrid");

function renderProjects(items, container) {
  container.innerHTML = items
    .map(
      (item) => {
        const demoButton = item.demo
          ? `<a href="${item.demo}" target="_blank" rel="noreferrer">Live demo</a>`
          : "";

        return `
          <article class="project-card">
            <div class="project-top">
              <span class="repo-icon">${item.name}</span>
              <span class="lang">${item.language}</span>
            </div>
            <p>${item.description}</p>
            <div class="meta-row">
              <span class="stars">${item.stars}</span>
              <span>Updated recently</span>
            </div>
            <div class="project-links">
              <a href="${item.link}" target="_blank" rel="noreferrer">Repository</a>
              ${demoButton}
            </div>
          </article>
        `;
      }
    )
    .join("");
}

function renderVideos(items) {
  videoGrid.innerHTML = items
    .map(
      (item) => `
        <article class="video-card">
          <div class="video-embed">
            <iframe
              src="${item.embed}"
              title="${item.title}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-body">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

renderProjects(projects, projectGrid);
renderProjects(communityProjects, communityGrid);
renderVideos(videos);

const currentYear = new Date().getFullYear();
console.log(`Portfolio ready for ${currentYear}`);
