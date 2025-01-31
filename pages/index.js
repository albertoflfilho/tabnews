document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  app.style.fontFamily = "Arial, sans-serif";
  app.style.textAlign = "center";
  app.style.padding = "20px";
  app.style.color = "#fff";
  app.style.backgroundColor = "#121212";

  function createElement(tag, text, className) {
    const el = document.createElement(tag);
    if (text) el.textContent = text;
    if (className) el.className = className;
    return el;
  }

  const title = createElement("h1", "albertolacerda.com [QA]");
  const subtitle = createElement("h2", "Alberto Lacerda");
  const location = createElement("p", "📍 Montréal, QC");

  const description = createElement("p", "Quality Assurance Engineer | Test Automation | Agile | CI/CD");

  const links = document.createElement("p");
  links.innerHTML = `🔗 <a href="https://www.linkedin.com/in/albertolacerda" target="_blank" style="color: #0a66c2;">LinkedIn</a> | 🔗 <a href="https://github.com/albertolacerda" target="_blank" style="color: #fff;">GitHub</a>`;

  const summaryTitle = createElement("h3", "Professional Summary");
  const summaryText = createElement("p", "Software Engineer with 7+ years of experience, transitioning into Quality Assurance (QA) and test automation. Strong background in web development, Agile methodologies, and CI/CD.");

  const skillsTitle = createElement("h3", "Technical Skills");
  const skillsList = [
    "🔹 Test Automation: Selenium WebDriver, Cypress, Playwright, Jest.js",
    "🔹 API Testing: Postman, REST Assured, Newman",
    "🔹 Performance Testing: JMeter, Locust",
    "🔹 CI/CD & DevOps: Jenkins, GitHub Actions, Docker",
    "🔹 Programming: JavaScript, TypeScript, Python, Node.js",
  ];
  const skillsUl = document.createElement("ul");
  skillsList.forEach(skill => {
    const li = createElement("li", skill);
    skillsUl.appendChild(li);
  });

  const educationTitle = createElement("h3", "Education & Certifications");
  const educationList = [
    "🎓 Bachelor’s Degree in Computer Science",
    "🎓 Automation Testing with Selenium WebDriver – CESAR.edu",
  ];
  const educationUl = document.createElement("ul");
  educationList.forEach(edu => {
    const li = createElement("li", edu);
    educationUl.appendChild(li);
  });

  app.append(title, subtitle, description, location, links, summaryTitle, summaryText, skillsTitle, skillsUl, educationTitle, educationUl);
});
