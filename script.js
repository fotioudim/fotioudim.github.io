// =========================================================
// 1. SINGLE SOURCE OF TRUTH (Data layer)
// =========================================================
const portfolioData = {
    role: "Software engineer dedicated to building cutting-edge, scalable applications, architectures, and infrastructure. A collaborative problem-solver, always eager to learn and contribute to impactful projects.",
    skills: {
        "Cloud & DevOps": ["Kubernetes", "Docker", "Terraform", "Jenkins", "CI/CD"],
        "Software Engineering": ["Microservices", "Event-Driven Architecture", "Domain-Driven Design", "REST/gRPC/SOAP/Netconf", "Object-Oriented Programming (OOP)", "Java", "Quarkus", "Linux", "Javascript", "Apache Kafka", "Node.js", "MongoDb", "MariaDb", "Python", "Springboot", "Osgi", "C#", ".Net", "ReactJs", "MySQL", "Git", "C"],
        "Cutting Edge Tech": ["Internet Of Things", "Machine Learning", "Edge Computing", "Software Defined Networks", "Space Software"]
    },
    experience: [
        {
            role: "Senior Software Engineer", company: "Nokia", date: "Jul 2025 - Present",
            desc: "Developing cloud software ecosystem for managing Broadband Fiber Software-Defined Networks"
        },
        {
            role: "Senior API Engineer", company: "Vodafone", date: "May 2021 - Jul 2025",
            desc: "Promotion from API Engineer to Senior API Engineer in August 2023. <br> ● Technical team lead, driving R&D, architecture enhancements and tech debt resolution. <br> ● Architectural design consulting focused on scalability and maintainability. <br> ● Development of a highly-performant and scalable microservice ecosystem (REST & SOAP APIs), which constitutes a high-traffic middleware that meets the demands of a big Telco | Java, Quarkus, Springboot, Kafka, MongoDb, Nodejs <br> ● Hands-on experience with CI-CD pipelines and DevOps practices, automating the infrastructure | Docker, Kubernetes, Helm"
        },
        {
            role: "Software Engineer", company: "Epafos LTD", date: "Jul 2019 - May 2021",
            desc: "● Full-stack development of web applications for educational/governmental administration | Java-Springboot, .NET(C#) <br> ● Implementation of p2p real-time communication projects | Nodejs, WebRTC, socket.io <br> ● Relational database design and implementation | MySQL"
        },
        {
            role: "Web Developer", company: "Freelancer", date: "Jun 2018 - Sep 2018",
            desc: "● Developed and maintained responsive and user-friendly websites, using WordPress <br> ● Collaborated with clients to implement design, functionality, and content updates <br> ● Linux server provisioning"
        },
    ],
    education: [
        { degree: "MEng Electrical and Computer Engineering", school: "ECE, National Technical University of Athens", date: "2011 - 2018", desc: "Specialization in Telecommunications and Computer Networks || Diploma thesis on an <a href='https://dspace.lib.ntua.gr/xmlui/handle/123456789/47987' target='_blank' class='text-link'>e2e telemedicine-fall detection IoT system</a>" },
        { degree: "MSc, Space Technologies, Applications and Services", school: "DI, National Kapodistrian University of Athens", date: "2021 - 2026", desc: "Specialization in Space Downstream || Master Thesis <a href='https://pergamos.lib.uoa.gr/uoa/dl/object/5322280' target='_blank' class='text-link'>“Space-Age DevOps: Integrating ESA’s NanoSat MO Framework with Kubernetes for Seamless Satellite Operations”</a>" }
    ],
    certifications: [
        { title: "Certified Kubernetes Application Developer (CKAD)", desc: "Cloud Native Computing Foundation (CNCF) certification verifying the ability to design, build, configure, and expose cloud-native applications for Kubernetes.", date: "Issued: Aug 2025" },
        { title: "Dive Into Refactoring", desc: "Refactoring Guru certification with advanced training on code refactoring, design patterns, and clean code principles.", date: "Issued: Dec 2024" },
        { title: "Generative AI Foundations", desc: "MIT Horizon certification focusing on foundational knowledge in Generative Artificial Intelligence technologies and enterprise applications.", date: "Issued: Jun 2024" },
        { title: "IoT and Machine Learning applications", desc: "National & Kapodistrian University of Athens advanced learning program focused on the intersection of the Internet of Things and ML.", date: "Issued: Jun 2020" },
        { title: "MCSD: App Builder", desc: "Microsoft Certified Solutions Developer. Validates the skills needed to build modern mobile and web applications and services.", date: "Issued: May 2020" },
        { title: "MCSA: Web Applications", desc: "Microsoft Certified Solutions Associate. Demonstrates expertise in implementing modern web apps.", date: "Issued: Apr 2020" },
        { title: "Blockchain and finance", desc: "National & Kapodistrian University of Athens specialized course covering blockchain technologies and their application in the financial sector.", date: "Issued: Jun 2020" },
        { title: "Member of Technical Chamber of Greece", desc: "Licensed professional engineer membership.", date: "Issued: Oct 2019" }
    ],
    projects: [
        { title: "NWC-SAFer", desc: "An awesome CLI tool simplifying NetCDF data extraction of NWC-SAF products and transformation to different file formats!", stack: ["Python", "Poetry", "Typer", "Watchdog"], link: "https://github.com/fotioudim/NWC-SAFer" },
        { title: "quick-qr", desc: "QuickQR is a lightweight, modern web application that instantly generates QR codes through both a clean web interface and a flexible REST API. Built with Quarkus, Kotlin, and Gradle (Kotlin DSL).", stack: ["Kotlin", "Quarkus", "Gradle", "Qute"], link: "https://github.com/fotioudim/quick-qr" },
        { title: "quarkus-langchain-doc-helper", desc: "Quarkus Java app using Langchain4j library and RAG process and providing REST API to interact with LLMs", stack: ["Java", "Quarkus", "Langchain4j", "Ollama"], link: "https://github.com/fotioudim/quarkus-langchain-doc-helper" },
        { title: "SOAP-Geolocation", desc: "Java WSDL-based SOAP web service with Springboot (Spring-WS, Contract first) and nearest neighbor search", stack: ["Java", "Springboot"], link: "https://github.com/fotioudim/SOAP_Geolocation" },
        { title: "GoogleEarthEngine-Green-Spaces-in-Athens", desc: "Study about Urban Green Spaces in Athens GR, using the Google Earth Engine platform, along with Landsat 8 and 9 imagery and Random Forest supervised machine learning algorithms.", stack: ["Javascript", "Google Earth Engine", "Random forest ML algorithm"], link: "https://github.com/fotioudim/GoogleEarthEngine-Green-Spaces-in-Athens" },
        { title: "Google-Earth-Engine-environmental-projects", desc: "A repository to showcase environmental projects implemented with Google Earth Engine platform, Javascript and machine learning algorithms.", stack: ["Javascript", "Google Earth Engine"], link: "https://github.com/fotioudim/Google-Earth-Engine-environmental-projects" }
    ],
    languages: ["English (Fluent / C2)", "Greek (Native)", "German (Upper Intermediate / B2)"],
    hobbies: ["Travelling", "Trekking", "Music", "Traditional dances"]
};

// =========================================================
// 2. DOM RENDERER (Builds the UI from Data)
// =========================================================
function renderUI() {
    const skillsContainer = document.getElementById("skills-container");
    for (const [category, skills] of Object.entries(portfolioData.skills)) {
        skillsContainer.innerHTML += `<div class="skill-category"><h3>${category}</h3><div class="tech-stack">${skills.map(s => `<span>${s}</span>`).join('')}</div></div>`;
    }

    const expContainer = document.getElementById("experience-container");
    portfolioData.experience.forEach(job => {
        expContainer.innerHTML += `<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><h3>${job.role} <span class="at">@ ${job.company}</span></h3><span class="date">${job.date}</span><p>${job.desc}</p></div></div>`;
    });

    const eduContainer = document.getElementById("education-container");
    portfolioData.education.forEach(edu => {
        eduContainer.innerHTML += `<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><h3>${edu.degree}</h3><span class="date">${edu.school} | ${edu.date}</span>${edu.desc ? `<p>${edu.desc}</p>` : ''}</div></div>`;
    });

    const certsContainer = document.getElementById("certifications-container");
    portfolioData.certifications.forEach(cert => {
        certsContainer.innerHTML += `<div class="project-card"><h3>${cert.title}</h3><p>${cert.desc}</p><span class="date">${cert.date}</span></div>`;
    });

    const projectsContainer = document.getElementById("projects-container");
    portfolioData.projects.forEach(proj => {
        projectsContainer.innerHTML += `<div class="project-card"><h3>[ ${proj.title} ]</h3><p>${proj.desc}</p><div class="tech-stack">${proj.stack.map(t => `<span>${t}</span>`).join('')}</div><a href="${proj.link}" class="project-link">View Repo &rarr;</a></div>`;
    });

    const langContainer = document.getElementById("languages-container");
    portfolioData.languages.forEach(lang => langContainer.innerHTML += `<li><span class="list-icon">❯</span> ${lang}</li>`);
    
    const hobContainer = document.getElementById("hobbies-container");
    portfolioData.hobbies.forEach(hob => hobContainer.innerHTML += `<li><span class="list-icon">❯</span> ${hob}</li>`);
}

// =========================================================
// 3. TERMINAL ENGINE
// =========================================================

// Build virtual file system
const experienceMD = portfolioData.experience.map(job => `## ${job.role} @ ${job.company}\nDate: ${job.date}\n- ${job.desc}\n`).join("\n");
const fileSystem = {
    "portfolio": {
        type: "dir",
        content: {
            "role.config": { type: "file", text: portfolioData.role },
            "skills.json": { type: "file", text: JSON.stringify(portfolioData.skills, null, 2) },
            "experience.md": { type: "file", text: experienceMD },
            "education.json": { type: "file", text: JSON.stringify(portfolioData.education, null, 2) },
            "certifications.json": { type: "file", text: JSON.stringify(portfolioData.certifications, null, 2) },
            "hobbies.txt": { type: "file", text: portfolioData.hobbies.map(h => `- ${h}`).join("\n") },
            "languages.json": { type: "file", text: JSON.stringify(portfolioData.languages, null, 2) },
            "projects": {
                type: "dir",
                content: portfolioData.projects.reduce((acc, proj) => {
                    acc[`${proj.title}.json`] = { type: "file", text: JSON.stringify(proj, null, 2) };
                    return acc;
                }, {})
            }
        }
    }
};

const VALID_COMMANDS = ["help", "whoami", "pwd", "clear", "ls", "cd", "cat"];

let currentPath = []; 
let commandHistory = [];
let historyIndex = -1;

const inputField = document.getElementById("cmd-input");
const outputContainer = document.getElementById("output-container");
const currentPrompt = document.getElementById("current-prompt");
const terminalBody = document.getElementById("terminal-body");

function initTerminal() {
    outputContainer.innerHTML = `
        <p><span class="prompt">dfotiou@node-01:~$</span> whoami</p>
        <p class="output text-highlight">Dimitris Fotiou - Senior Software Engineer</p>
        <p><span class="prompt">dfotiou@node-01:~$</span> cat portfolio/role.config</p>
        <p class="output text-highlight">${portfolioData.role}</p>
        <p class="output text-muted" style="margin-top: 20px;">Type <span class="sys-green">'help'</span> to see available commands.</p>
    `;
}

// --- UPGRADED PATH RESOLVER ---
// Explicit string parsing guarantees ~/, /, ., and .. all resolve flawlessly
function resolvePathArray(targetPath) {
    let pathArray = [...currentPath];
    
    // Handle Absolute Paths
    if (targetPath.startsWith('~/')) {
        pathArray = [];
        targetPath = targetPath.substring(2);
    } else if (targetPath.startsWith('/')) {
        pathArray = [];
        targetPath = targetPath.substring(1);
    } else if (targetPath === '~') {
        return [];
    }

    const parts = targetPath.split('/');
    for (let part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..') { 
            if (pathArray.length > 0) pathArray.pop(); 
        } else { 
            pathArray.push(part); 
        }
    }
    return pathArray;
}

function getNodeByPathArray(pathArray) {
    let currNode = { type: 'dir', content: fileSystem };
    for (let part of pathArray) {
        if (currNode.type !== 'dir' || !currNode.content[part]) return null;
        currNode = currNode.content[part];
    }
    return currNode;
}

function updatePrompt() {
    const pathStr = currentPath.length === 0 ? "~" : "~/" + currentPath.join("/");
    const promptStr = `dfotiou@node-01:${pathStr}$`;
    currentPrompt.innerText = promptStr;
    return promptStr;
}

function printOutput(htmlContent) {
    const p = document.createElement("p");
    p.className = "output";
    p.innerHTML = htmlContent;
    outputContainer.appendChild(p);
}

function processCommand(cmdLine) {
    const args = cmdLine.trim().split(/\s+/);
    const cmd = args[0].toLowerCase();
    if (!cmd) return;

    switch (cmd) {
        case "help":
            printOutput("Available commands: <br><span class='sys-blue'>ls</span> [dir], <span class='sys-blue'>cd</span> &lt;dir&gt;, <span class='sys-blue'>cat</span> &lt;file&gt;, <span class='sys-blue'>pwd</span>, <span class='sys-blue'>whoami</span>, <span class='sys-blue'>clear</span>");
            break;
        case "whoami": printOutput("Dimitris Fotiou - Senior Software Engineer"); break;
        case "pwd": printOutput(currentPath.length === 0 ? "/home/dfotiou" : "/home/dfotiou/" + currentPath.join("/")); break;
        case "clear": outputContainer.innerHTML = ""; break;
        case "ls":
            const lsTarget = args[1] || ".";
            const lsNode = getNodeByPathArray(resolvePathArray(lsTarget));
            if (!lsNode) printOutput(`ls: cannot access '${lsTarget}': No such file or directory`);
            else if (lsNode.type === 'file') printOutput(lsTarget);
            else {
                let lsOutput = "";
                for (const key in lsNode.content) {
                    lsOutput += lsNode.content[key].type === "dir" ? `<span class="sys-blue">${key}</span>&nbsp;&nbsp;&nbsp;` : `${key}&nbsp;&nbsp;&nbsp;`;
                }
                printOutput(lsOutput || "Directory is empty.");
            }
            break;
        case "cd":
            const cdTarget = args[1] || "~";
            const cdPathArray = resolvePathArray(cdTarget);
            const cdNode = getNodeByPathArray(cdPathArray);
            if (!cdNode) printOutput(`bash: cd: ${cdTarget}: No such file or directory`);
            else if (cdNode.type !== 'dir') printOutput(`bash: cd: ${cdTarget}: Not a directory`);
            else { currentPath = cdPathArray; updatePrompt(); }
            break;
        case "cat":
            const catTarget = args[1];
            if (!catTarget) return printOutput("cat: missing file operand");
            const catNode = getNodeByPathArray(resolvePathArray(catTarget));
            if (!catNode) printOutput(`cat: ${catTarget}: No such file or directory`);
            else if (catNode.type === 'dir') printOutput(`cat: ${catTarget}: Is a directory`);
            else {
                const formattedText = catNode.text.replace(/ /g, "&nbsp;").replace(/\n/g, "<br>");
                printOutput(`<span class="text-muted">${formattedText}</span>`);
            }
            break;
        default: printOutput(`bash: ${cmd}: command not found`);
    }
}

// Event Listeners for Terminal Interactions
inputField.addEventListener("keydown", function(e) {
    // 1. Enter Key (Execute)
    if (e.key === "Enter") {
        const cmdLine = inputField.value;
        if (cmdLine.trim() !== "") {
            commandHistory.push(cmdLine);
            historyIndex = commandHistory.length; 
        }
        
        const echo = document.createElement("p");
        echo.innerHTML = `<span class="prompt">${updatePrompt()}</span> ${cmdLine}`;
        outputContainer.appendChild(echo);

        processCommand(cmdLine);
        inputField.value = "";
        terminalBody.scrollTop = terminalBody.scrollHeight;
    } 
    
    // 2. Up Arrow (History Back)
    else if (e.key === "ArrowUp") {
        e.preventDefault(); 
        if (historyIndex > 0) {
            historyIndex--;
            inputField.value = commandHistory[historyIndex];
        }
    } 
    
    // 3. Down Arrow (History Forward)
    else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputField.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            inputField.value = ""; 
        }
    }

    // 4. Tab Key (Autocompletion)
    else if (e.key === "Tab") {
        e.preventDefault(); 
        const input = inputField.value;
        const args = input.split(" ");
        
        if (args.length === 1) {
            const partialCmd = args[0];
            const matches = VALID_COMMANDS.filter(cmd => cmd.startsWith(partialCmd));
            if (matches.length === 1) {
                inputField.value = matches[0] + " ";
            }
        } 
        else if (args.length === 2) {
            const cmd = args[0];
            const partialPath = args[1];
            
            const lastSlashIndex = partialPath.lastIndexOf("/");
            let dirPath = "";
            let partialName = partialPath;
            
            if (lastSlashIndex !== -1) {
                dirPath = partialPath.substring(0, lastSlashIndex);
                partialName = partialPath.substring(lastSlashIndex + 1);
            }
            
            // Evaluate target directory properly based on absolute vs relative paths
            let evalDirPath = dirPath;
            if (dirPath === "" && partialPath.startsWith("/")) evalDirPath = "/";
            else if (dirPath === "") evalDirPath = ".";
            
            const targetNode = getNodeByPathArray(resolvePathArray(evalDirPath));
            
            if (targetNode && targetNode.type === 'dir') {
                const matches = Object.keys(targetNode.content).filter(k => k.startsWith(partialName));
                
                if (matches.length === 1) {
                    const match = matches[0];
                    const isDir = targetNode.content[match].type === 'dir';
                    
                    // Maintain the user's trailing slash preference on autocomplete
                    const prefix = dirPath ? dirPath + "/" : (partialPath.startsWith("/") ? "/" : "");
                    
                    inputField.value = cmd + " " + prefix + match + (isDir ? "/" : " ");
                }
            }
        }
    }
});

// =========================================================
// 4. BACK TO TOP & INIT
// =========================================================
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = () => backToTopBtn.classList.toggle("show", document.documentElement.scrollTop > 400);

renderUI();

initTerminal();

// =========================================================
// 5. MOBILE HAMBURGER MENU
// =========================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    // Toggle the menu visibility
    navLinks.classList.toggle('nav-active');
    
    // Swap the icon between 'bars' and 'xmark'
    const icon = hamburger.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Close the menu automatically when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
});
