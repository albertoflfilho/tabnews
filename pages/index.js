import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const app = document.getElementById("app");
      if (app) {
        document.body.style.margin = "0";
        document.body.style.overflow = "auto";
        document.body.style.backgroundColor = "black";

        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        function drawMatrix() {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "#0f0";
          ctx.font = `${fontSize}px monospace`;
          drops.forEach((y, x) => {
            const text =
              matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, x * fontSize, y * fontSize);
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
              drops[x] = 0;
            }
            drops[x]++;
          });
        }
        setInterval(drawMatrix, 50);

        app.style.position = "relative";
        app.style.top = "20px";
        app.style.left = "50%";
        app.style.transform = "translateX(-50%)";
        app.style.fontFamily = "monospace";
        app.style.textAlign = "center";
        app.style.padding = "20px";
        app.style.color = "#0f0";
        app.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        app.style.border = "1px solid #0f0";
        app.style.borderRadius = "10px";
        app.style.boxShadow = "0 0 15px #0f0";
        app.style.width = "90%";
        app.style.maxWidth = "600px";
        app.style.boxSizing = "border-box";
        app.style.zIndex = "2";

        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = "-1";

        function createElement(tag, text, className) {
          const el = document.createElement(tag);
          if (text) el.textContent = text;
          if (className) el.className = className;
          return el;
        }

        const title = createElement("h1", "albertolacerda.com");
        const subtitle = createElement("h2", "Alberto Lacerda");
        const location = createElement("p", "📍 Montréal, QC");
        const description = createElement("p", "Quality Assurance Engineer");
        description.style.fontWeight = "bold";
        description.style.fontSize = "16px";
        description.style.color = "#0f0";
        const specialization = createElement(
          "p",
          "Test Automation | Agile | CI/CD"
        );
        const skills = createElement(
          "p",
          "Skills: Selenium Webdriver, Cypress, React.js, Jest, Node.js, AWS, Python, PostgreSQL"
        );
        const experience = createElement(
          "p",
          "Experience: WorkJam, Synergie Canada, Blue Badger, Groupe Dynamite, Accenture, AlayaCare"
        );
        const education = createElement("p", "Bachelor's in Computer Science");
        const languages = createElement("p", "English, Portuguese, French");

        const resumeLink = document.createElement("p");
        resumeLink.innerHTML = `📄 <a href="/AlbertoLacerdaResumeQA_2025.pdf" target="_blank" style="color: #0f0;">Download Resume (PDF)</a>`;

        const links = document.createElement("p");
        links.innerHTML = `🔗 <a href="https://www.linkedin.com/in/albertoflfilho" target="_blank" style="color: #0f0;">LinkedIn</a> | 🔗 <a href="https://github.com/albertoflfilho" target="_blank" style="color: #0f0;">GitHub</a>`;

        const experienceContainer = document.createElement("div");
        experienceContainer.style.display = "grid";
        experienceContainer.style.gridTemplateColumns =
          "repeat(auto-fit, minmax(200px, 1fr))";
        experienceContainer.style.gap = "10px";
        experienceContainer.style.marginTop = "20px";

        const experiences = [
          {
            company: "WorkJam",
            role: "Front End Developer",
            dates: "2021-2023",
            tasks: "Developed web applications, optimized UI/UX.",
          },
          {
            company: "Synergie Canada",
            role: "Web Developer",
            dates: "2020-2021",
            tasks: "Built web solutions for clients.",
          },
          {
            company: "Blue Badger",
            role: "Front End Developer",
            dates: "2020",
            tasks: "Worked with e-commerce projects.",
          },
          {
            company: "Groupe Dynamite",
            role: "Full Stack Developer",
            dates: "2019-2020",
            tasks: "Maintained internal web applications.",
          },
          {
            company: "AlayaCare",
            role: "Web Developer",
            dates: "2018-2019",
            tasks: "Built healthcare platform features.",
          },
          {
            company: "Accenture",
            role: "Software Developer Analyst",
            dates: "2014-2016",
            tasks: "Developed enterprise solutions.",
          },
        ];

        experiences.forEach((exp) => {
          const expCard = document.createElement("div");
          expCard.style.border = "1px solid #0f0";
          expCard.style.padding = "10px";
          expCard.style.borderRadius = "5px";
          expCard.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          expCard.innerHTML = `<strong>${exp.company}</strong><br>${exp.role}<br><small>${exp.dates}</small><br>${exp.tasks}`;
          experienceContainer.appendChild(expCard);
        });

        app.append(
          title,
          subtitle,
          description,
          location,
          specialization,
          skills,
          experience,
          education,
          languages,
          links,
          experienceContainer
        );
      }
    }
  }, []);

  return <div id="app"></div>;
}
