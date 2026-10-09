
/* =========================================
   CAREERLY - CAREER READINESS PROTOTYPE
   ========================================= */

/*
  Careerly uses predefined career profiles.
  All calculations happen in the browser.
*/

// 1. CAREER DATABASE
// Each career has required skills, learning steps,
// and project ideas.

const careers = {
  "web-developer": {
    name: "Web Developer",
    description:
      "Build websites and interactive web applications.",

    skills: [
      {
        id: "html",
        name: "HTML",
        description: "Structure web pages"
      },
      {
        id: "css",
        name: "CSS",
        description: "Style websites"
      },
      {
        id: "javascript",
        name: "JavaScript",
        description: "Create interactive features"
      },
      {
        id: "git",
        name: "Git & GitHub",
        description: "Manage and share code"
      },
      {
        id: "responsive",
        name: "Responsive Design",
        description: "Support mobile and desktop screens"
      },
      {
        id: "api",
        name: "APIs",
        description: "Connect applications and services"
      }
    ],

    roadmap: [
      {
        title: "Learn HTML",
        detail: "Understand page structure, forms, links, and semantic elements.",
        skills: ["html"]
      },
      {
        title: "Master CSS",
        detail: "Practice layouts, Flexbox, Grid, and responsive design.",
        skills: ["css", "responsive"]
      },
      {
        title: "Learn JavaScript",
        detail: "Practice variables, functions, arrays, objects, and DOM manipulation.",
        skills: ["javascript"]
      },
      {
        title: "Learn Git and GitHub",
        detail: "Track changes, create repositories, and publish projects.",
        skills: ["git"]
      },
      {
        title: "Explore APIs",
        detail: "Learn HTTP requests and how frontends communicate with services.",
        skills: ["api"]
      }
    ],

    projects: [
      {
        title: "Personal Portfolio",
        detail: "Build a website showcasing your introduction, skills, and projects.",
        level: "Beginner",
        skills: ["html", "css", "responsive"]
      },
      {
        title: "Interactive Task Manager",
        detail: "Create a task list with add, complete, and delete actions.",
        level: "Beginner–Intermediate",
        skills: ["javascript", "html", "css"]
      },
      {
        title: "API Explorer",
        detail: "Display information from a public API and handle loading states.",
        level: "Intermediate",
        skills: ["javascript", "api"]
      },
      {
        title: "Responsive Landing Page",
        detail: "Create a polished website that adapts to phones and desktops.",
        level: "Beginner",
        skills: ["html", "css", "responsive"]
      }
    ]
  },

  "python-developer": {
    name: "Python Developer",
    description:
      "Use Python to build applications, automate tasks, and work with data.",

    skills: [
      {
        id: "python",
        name: "Python Fundamentals",
        description: "Variables, conditions, loops, and functions"
      },
      {
        id: "oop",
        name: "Object-Oriented Programming",
        description: "Classes, objects, and inheritance"
      },
      {
        id: "sql",
        name: "SQL & Databases",
        description: "Store and retrieve information"
      },
      {
        id: "git",
        name: "Git & GitHub",
        description: "Manage and share code"
      },
      {
        id: "apis",
        name: "APIs",
        description: "Connect applications and services"
      },
      {
        id: "testing",
        name: "Testing & Debugging",
        description: "Find and fix errors in programs"
      }
    ],

    roadmap: [
      {
        title: "Strengthen Python Fundamentals",
        detail: "Practice data types, conditions, loops, functions, and collections.",
        skills: ["python"]
      },
      {
        title: "Learn OOP",
        detail: "Build programs using classes, objects, and reusable code.",
        skills: ["oop"]
      },
      {
        title: "Work with Databases",
        detail: "Practice SQL queries and connecting Python to a database.",
        skills: ["sql"]
      },
      {
        title: "Build and Use APIs",
        detail: "Understand requests, responses, and JSON data.",
        skills: ["apis"]
      },
      {
        title: "Practice Testing and Git",
        detail: "Debug programs, write tests, and track changes with Git.",
        skills: ["testing", "git"]
      }
    ],

    projects: [
      {
        title: "Expense Tracker",
        detail: "Record expenses, categorize transactions, and calculate totals.",
        level: "Beginner",
        skills: ["python", "sql"]
      },
      {
        title: "Student Record System",
        detail: "Create, update, search, and delete student records.",
        level: "Beginner–Intermediate",
        skills: ["python", "oop", "sql"]
      },
      {
        title: "Task Automation Tool",
        detail: "Automate a repetitive file or data-management task.",
        level: "Beginner",
        skills: ["python", "testing"]
      },
      {
        title: "API Data Application",
        detail: "Retrieve JSON data from an API and present useful results.",
        level: "Intermediate",
        skills: ["python", "apis"]
      }
    ]
  },

  "data-analyst": {
    name: "Data Analyst",
    description:
      "Turn raw data into insights that support better decisions.",

    skills: [
      {
        id: "excel",
        name: "Excel & Spreadsheets",
        description: "Organize, clean, and analyze data"
      },
      {
        id: "sql",
        name: "SQL",
        description: "Query and filter databases"
      },
      {
        id: "python",
        name: "Python",
        description: "Analyze data programmatically"
      },
      {
        id: "visualization",
        name: "Data Visualization",
        description: "Create meaningful charts and dashboards"
      },
      {
        id: "statistics",
        name: "Statistics",
        description: "Understand trends and distributions"
      },
      {
        id: "communication",
        name: "Data Storytelling",
        description: "Explain findings clearly"
      }
    ],

    roadmap: [
      {
        title: "Learn Spreadsheets",
        detail: "Practice formulas, sorting, filtering, and pivot tables.",
        skills: ["excel"]
      },
      {
        title: "Learn SQL",
        detail: "Practice SELECT, WHERE, JOIN, GROUP BY, and aggregations.",
        skills: ["sql"]
      },
      {
        title: "Understand Statistics",
        detail: "Explore averages, variation, distributions, and basic probability.",
        skills: ["statistics"]
      },
      {
        title: "Analyze Data with Python",
        detail: "Explore data cleaning and analysis using Python libraries.",
        skills: ["python"]
      },
      {
        title: "Build Visual Reports",
        detail: "Create charts and explain findings using clear visual stories.",
        skills: ["visualization", "communication"]
      }
    ],

    projects: [
      {
        title: "Student Performance Analysis",
        detail: "Explore a sample dataset to identify trends in student results.",
        level: "Beginner",
        skills: ["excel", "statistics"]
      },
      {
        title: "Sales Dashboard",
        detail: "Summarize sales, compare categories, and visualize performance.",
        level: "Beginner–Intermediate",
        skills: ["excel", "visualization"]
      },
      {
        title: "SQL Business Report",
        detail: "Use queries to answer business questions from sample data.",
        level: "Intermediate",
        skills: ["sql", "statistics"]
      },
      {
        title: "Python Data Explorer",
        detail: "Clean a public dataset and communicate its main findings.",
        level: "Intermediate",
        skills: ["python", "visualization", "communication"]
      }
    ]
  },

  "java-developer": {
    name: "Java Developer",
    description:
      "Develop software applications using Java and related technologies.",

    skills: [
      {
        id: "java",
        name: "Java Fundamentals",
        description: "Syntax, conditions, loops, and methods"
      },
      {
        id: "oop",
        name: "Object-Oriented Programming",
        description: "Classes, objects, and inheritance"
      },
      {
        id: "collections",
        name: "Java Collections",
        description: "Lists, sets, maps, and data structures"
      },
      {
        id: "sql",
        name: "SQL & Databases",
        description: "Store and query application data"
      },
      {
        id: "jdbc",
        name: "JDBC",
        description: "Connect Java applications to databases"
      },
      {
        id: "git",
        name: "Git & GitHub",
        description: "Manage and share code"
      }
    ],

    roadmap: [
      {
        title: "Learn Java Fundamentals",
        detail: "Practice variables, types, conditions, loops, and methods.",
        skills: ["java"]
      },
      {
        title: "Understand OOP",
        detail: "Work with classes, objects, inheritance, and interfaces.",
        skills: ["oop"]
      },
      {
        title: "Practice Collections",
        detail: "Use lists, sets, maps, and appropriate data structures.",
        skills: ["collections"]
      },
      {
        title: "Learn SQL and JDBC",
        detail: "Connect Java programs to a database and perform CRUD operations.",
        skills: ["sql", "jdbc"]
      },
      {
        title: "Publish a Java Project",
        detail: "Organize your source code and publish it using GitHub.",
        skills: ["git"]
      }
    ],

    projects: [
      {
        title: "Student Management System",
        detail: "Manage student records using Java and a database.",
        level: "Beginner–Intermediate",
        skills: ["java", "oop", "sql"]
      },
      {
        title: "Library Management System",
        detail: "Track books, borrowing records, and returns.",
        level: "Intermediate",
        skills: ["java", "oop", "jdbc"]
      },
      {
        title: "Personal Expense Manager",
        detail: "Record transactions and generate category summaries.",
        level: "Beginner–Intermediate",
        skills: ["java", "collections"]
      },
      {
        title: "Database CRUD Application",
        detail: "Build an application that creates, reads, updates, and deletes records.",
        level: "Intermediate",
        skills: ["java", "sql", "jdbc"]
      }
    ]
  }
};


// 2. SELECT HTML ELEMENTS

const careerForm = document.getElementById("career-form");
const careerSelect = document.getElementById("career-select");
const skillsContainer = document.getElementById("skills-container");

const resultsSection = document.getElementById("results");
const resultsIntro = document.getElementById("results-intro");
const resultsSummary = document.getElementById("results-summary");

const skillGaps = document.getElementById("skill-gaps");
const roadmapList = document.getElementById("roadmap-list");
const projectList = document.getElementById("project-list");

const editSkillsButton = document.getElementById("edit-skills");
const startOverButton = document.getElementById("start-over");


// 3. DISPLAY SKILLS FOR THE SELECTED CAREER

function displaySkills(careerId, previouslySelected = []) {
  const career = careers[careerId];

  // If no career is selected, show a helpful message.
  if (!career) {
    skillsContainer.innerHTML = `
      <p class="empty-state">
        Select a career above to see its relevant skills.
      </p>
    `;
    return;
  }

  // Create a checkbox for every skill in the career profile.
  skillsContainer.innerHTML = career.skills.map(skill => `
    <label class="skill-option">
      <input
        type="checkbox"
        name="skills"
        value="${skill.id}"
        ${previouslySelected.includes(skill.id) ? "checked" : ""}
      >

      <span>
        ${skill.name}
        <small>${skill.description}</small>
      </span>
    </label>
  `).join("");
}


// 4. HANDLE CAREER SELECTION

careerSelect.addEventListener("change", () => {
  // Hide old results when the career changes.
  resultsSection.hidden = true;

  // Display the skills for the newly selected career.
  displaySkills(careerSelect.value);
});


// 5. ANALYZE THE USER'S SKILLS

function analyzeSkills(careerId, selectedSkillIds) {
  const career = careers[careerId];

  // Find which required skills the student selected.
  const knownSkills = career.skills.filter(skill =>
    selectedSkillIds.includes(skill.id)
  );

  // Find the remaining skills.
  const missingSkills = career.skills.filter(skill =>
    !selectedSkillIds.includes(skill.id)
  );

  // Calculate the percentage of selected skills.
  const totalSkills = career.skills.length;

  const percentage = Math.round(
    (knownSkills.length / totalSkills) * 100
  );

  return {
    career,
    knownSkills,
    missingSkills,
    totalSkills,
    percentage
  };
}


// 6. DISPLAY SUMMARY CARDS

function displaySummary(analysis) {
  resultsSummary.innerHTML = `
    <div class="summary-card">
      <p>Target career</p>
      <strong style="font-size:1.25rem">
        ${analysis.career.name}
      </strong>
    </div>

    <div class="summary-card">
      <p>Skills you selected</p>
      <strong>
        ${analysis.knownSkills.length}/${analysis.totalSkills}
      </strong>
    </div>

    <div class="summary-card">
      <p>Skill coverage</p>
      <strong>${analysis.percentage}%</strong>
    </div>
  `;
}


// 7. DISPLAY SKILL-GAP ANALYSIS

function displaySkillGaps(analysis) {
  if (analysis.missingSkills.length === 0) {
    skillGaps.innerHTML = `
      <div class="gap-item is-known">
        <strong>Great progress!</strong>
        <p>
          You selected every skill in this career profile.
          Keep practising and building projects to strengthen
          your abilities.
        </p>
        <span class="gap-status">All profile skills selected</span>
      </div>
    `;
    return;
  }

  const missingHTML = analysis.missingSkills.map(skill => `
    <div class="gap-item">
      <strong>${skill.name}</strong>
      <p>${skill.description}</p>
      <span class="gap-status">Recommended learning area</span>
    </div>
  `).join("");

  const knownHTML = analysis.knownSkills.length > 0
    ? `
      <div class="gap-item is-known">
        <strong>Skills you already know</strong>
        <p>
          ${analysis.knownSkills.map(skill => skill.name).join(", ")}
        </p>
        <span class="gap-status">Selected by you</span>
      </div>
    `
    : "";

  skillGaps.innerHTML = knownHTML + missingHTML;
}


// 8. BUILD A PERSONALIZED ROADMAP

function displayRoadmap(analysis) {
  const selectedSkillIds = analysis.knownSkills.map(
    skill => skill.id
  );

  // Put learning steps for missing skills first.
  // Then include the remaining steps for practice.
  const orderedRoadmap = [
    ...analysis.career.roadmap.filter(step =>
      step.skills.some(id => !selectedSkillIds.includes(id))
    ),
    ...analysis.career.roadmap.filter(step =>
      step.skills.every(id => selectedSkillIds.includes(id))
    )
  ];

  roadmapList.innerHTML = orderedRoadmap.map((step, index) => {
    const alreadyKnown = step.skills.every(id =>
      selectedSkillIds.includes(id)
    );

    return `
      <div class="roadmap-item">
        <span class="roadmap-number">${index + 1}</span>

        <div>
          <strong>
            ${step.title}
            ${alreadyKnown ? " ✓" : ""}
          </strong>

          <p>${step.detail}</p>

          <p>
            <small>
              ${alreadyKnown
                ? "Suggested for revision and practice"
                : "Suggested learning step"}
            </small>
          </p>
        </div>
      </div>
    `;
  }).join("");
}


// 9. RECOMMEND PROJECTS

function displayProjects(analysis) {
  const selectedSkillIds = analysis.knownSkills.map(
    skill => skill.id
  );

  // Prefer projects related to skills the student still needs.
  const rankedProjects = analysis.career.projects
    .map(project => {
      const matchingGaps = project.skills.filter(id =>
        !selectedSkillIds.includes(id)
      ).length;

      return {
        ...project,
        matchingGaps
      };
    })
    .sort((a, b) => b.matchingGaps - a.matchingGaps);

  projectList.innerHTML = rankedProjects.map(project => `
    <article class="project-card">
      <h4>${project.title}</h4>

      <p>${project.detail}</p>

      <p>
        <small>
          Skills: ${
            project.skills
              .map(id =>
                analysis.career.skills.find(skill => skill.id === id)?.name || id
              )
              .join(", ")
          }
        </small>
      </p>

      <span class="project-level">${project.level}</span>
    </article>
  `).join("");
}


// 10. HANDLE FORM SUBMISSION

careerForm.addEventListener("submit", event => {
  // Prevent the browser from reloading the page.
  event.preventDefault();

  const careerId = careerSelect.value;

  // Check whether the career exists.
  if (!careers[careerId]) {
    alert("Please select a career before continuing.");
    careerSelect.focus();
    return;
  }

  // Read the checked skill checkboxes.
  const selectedSkillIds = Array.from(
    skillsContainer.querySelectorAll(
      'input[name="skills"]:checked'
    )
  ).map(input => input.value);

  // Analyze the skills.
  const analysis = analyzeSkills(
    careerId,
    selectedSkillIds
  );

  // Populate the results dashboard.
  resultsIntro.textContent =
    `Your starting roadmap for ${analysis.career.name}. ` +
    `These recommendations are based on the skills you selected.`;

  displaySummary(analysis);
  displaySkillGaps(analysis);
  displayRoadmap(analysis);
  displayProjects(analysis);

  // Show the results.
  resultsSection.hidden = false;

  // Scroll to the results so the student sees the outcome.
  resultsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


// 11. EDIT SKILLS

editSkillsButton.addEventListener("click", () => {
  // Keep the chosen career and selected checkboxes.
  resultsSection.hidden = true;

  document.getElementById("career-tool").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


// 12. START OVER

startOverButton.addEventListener("click", () => {
  // Reset the form and clear the previous results.
  careerForm.reset();
  resultsSection.hidden = true;

  // Restore the default message.
  displaySkills("");

  // Return to the beginning of the tool.
  document.getElementById("career-tool").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


// 13. INITIAL PAGE SETUP

displaySkills(careerSelect.value);

console.log("Careerly is ready!");