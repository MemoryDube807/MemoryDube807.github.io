const projects = [
  {
    name: "ndwi-copperbelt",
    language: "Python, Jupyter",
    description:
      "Tracks 30 years of Landsat water and vegetation data at five Copperbelt dams, showing which reservoir is shrinking, whether rainfall explains it, and whether the land around it is drying.",
    link: "https://github.com/MemoryDube807/ndwi-copperbelt",
    demo: "projects/ndwi-copperbelt/index.html",
    demoLabel: "Dashboard & report",
    sameTab: true
  },
  {
    name: "Spatial-Climate-Trend-Analysis",
    language: "Python, Jupyter",
    description:
      "Maps 1981-2010 MIROC6 temperature and rainfall trends across Zambia's districts, using Sen's slope and Mann-Kendall tests to show where change is strongest and statistically significant.",
    link: "https://github.com/MemoryDube807/Spatial-Climate-Trend-Analysis",
    demo: "projects/spatial-climate-trend-analysis/index.html",
    demoLabel: "Dashboard & report",
    sameTab: true
  },
  {
    name: "climate_data_analysis",
    language: "Python, Jupyter",
    description:
      "Profiles 34 years of ERA5 weather data from four Zambian stations, checking missing values, physical errors, and genuine extremes with robust and multivariate anomaly tests.",
    link: "https://github.com/MemoryDube807/climate_data_analysis",
    demo: ""
  },
  {
    name: "LARS-WG-Climate-Analysis",
    language: "R",
    description:
      "Processes multi-GCM LARS-WG projections into ensembles and compares rainfall and temperature across Southern Hemisphere hydrological seasons.",
    link: "https://github.com/MemoryDube807/LARS-WG-Climate-Analysis",
    demo: ""
  },
  {
    name: "flood-risk-calculator",
    language: "Python, Flask",
    description:
      "Scores flood risk from 48-hour rainfall, elevation, drainage, and soil, then returns a risk level and practical action advisory through a CLI and Flask dashboard.",
    link: "https://github.com/MemoryDube807/flood-risk-calculator",
    demo: ""
  },
  {
    name: "zambia-climate-trend-analysis",
    language: "Python, Jupyter",
    description:
      "Explores historical CMIP6 MIROC6 maximum and minimum temperatures and precipitation across Zambia from 1981 to 2010.",
    link: "https://github.com/MemoryDube807/zambia-climate-trend-analysis",
    demo: ""
  },
  {
    name: "weather_app_project",
    language: "HTML, CSS, JavaScript, Python",
    description:
      "A city-search weather dashboard that displays current conditions and a multi-day forecast.",
    link: "https://github.com/MemoryDube807/weather_app_project",
    demo: "https://memo-weather.netlify.app/"
  },
  {
    name: "my-first-project",
    language: "HTML, CSS, JavaScript",
    description:
      "An early frontend project: search for a city and view its current weather and forecast.",
    link: "https://github.com/MemoryDube807/my-first-project",
    demo: "https://memory-dube-weather-app.netlify.app/"
  },
  {
    name: "my-She-Codes-Project",
    language: "HTML",
    description:
      "A small static landing page from an early web development project.",
    link: "https://github.com/MemoryDube807/my-She-Codes-Project",
    demo: ""
  }
];

const projectGrid = document.getElementById("projectsGrid");

function renderProjects(items, container) {
  container.innerHTML = items
    .map((item) => {
      const demoTarget = item.sameTab ? "" : ' target="_blank" rel="noreferrer"';
      const demoButton = item.demo
        ? `<a href="${item.demo}"${demoTarget}>${item.demoLabel || "Live demo"}</a>`
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
