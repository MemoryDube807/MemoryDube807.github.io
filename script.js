const projects = [
  {
    name: "FloodSense Action — Flood Risk Calculator",
    language: "Python, HTML",
    description:
      "A flood risk assessment tool with a command-line interface and Flask dashboard, built as a prototype for flood-risk intelligence and early warning.",
    link: "https://github.com/MemoryDube807/flood-risk-calculator",
    demo: ""
  },
  {
    name: "Multi-GCM Ensemble Downscaling & Climatological Analysis",
    language: "R",
    description:
      "Automates climate projection processing, ensemble averaging, and visualization using LARS-WG data and hydrological seasons.",
    link: "https://github.com/MemoryDube807/LARS-WG-Climate-Analysis",
    demo: ""
  },
  {
    name: "Zambia Climate Data Quality Assessment",
    language: "Python, Jupyter Notebook",
    description:
      "Assesses quality and anomalies in 1991–2024 daily weather data from four Zambian stations using statistical profiling and outlier detection.",
    link: "https://github.com/MemoryDube807/climate_data_analysis",
    demo: ""
  },
  {
    name: "Zambia Climate Trend Analysis",
    language: "Jupyter Notebook",
    description:
      "Spatial analysis of historical maximum and minimum temperatures and precipitation in Zambia from 1981–2010 using CMIP6 MIROC6 data.",
    link: "https://github.com/MemoryDube807/zambia-climate-trend-analysis",
    demo: ""
  },
  {
    name: "BreezeAlert Weather App",
    language: "HTML, CSS, JavaScript, Python",
    description:
      "A weather application that provides current conditions and forecast information for a searched city.",
    link: "https://github.com/MemoryDube807/weather_app_project",
    demo: "https://memo-weather.netlify.app/"
  },
  {
    name: "My First Weather Application",
    language: "HTML, CSS, JavaScript",
    description:
      "A city-search weather application built as an early web development project.",
    link: "https://github.com/MemoryDube807/my-first-project",
    demo: "https://memory-dube-weather-app.netlify.app/"
  },
  {
    name: "my-She-Codes-Project",
    language: "HTML",
    description: "A simple HTML landing page with a Netlify link.",
    link: "https://github.com/MemoryDube807/my-She-Codes-Project",
    demo: ""
  }
];

const projectGrid = document.getElementById("projectsGrid");

function renderProjects(items, container) {
  container.innerHTML = items
    .map((item) => {
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
          <div class="project-links">
            <a href="${item.link}" target="_blank" rel="noreferrer">Repository</a>
            ${demoButton}
          </div>
        </article>
      `;
    })
    .join("");
}

renderProjects(projects, projectGrid);

const currentYear = new Date().getFullYear();
console.log(`Portfolio ready for ${currentYear}`);
