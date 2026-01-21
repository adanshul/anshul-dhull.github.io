/* =====================================================
   PORTFOLIO WEBSITE - JavaScript
   ===================================================== */

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
rootElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==================== MOBILE NAVIGATION ====================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== INTERACTIVE TERMINAL ====================
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

// Terminal commands database
const commands = {
    help: {
        response: `Available commands:
  <span class="terminal__response--highlight">about</span>      - Learn more about me
  <span class="terminal__response--highlight">skills</span>     - View my technical skills
  <span class="terminal__response--highlight">experience</span> - See my work history
  <span class="terminal__response--highlight">projects</span>   - Explore my projects
  <span class="terminal__response--highlight">contact</span>    - Get my contact info
  <span class="terminal__response--highlight">certs</span>      - View certifications
  <span class="terminal__response--highlight">socials</span>    - Social media links
  <span class="terminal__response--highlight">clear</span>      - Clear the terminal
  <span class="terminal__response--highlight">sudo</span>       - Try it and see ;)`
    },
    about: {
        response: `<span class="terminal__response--highlight">Anshul Dhull</span>
Cybersecurity Engineer & SOC Analyst
Currently pursuing Master's in Cybersecurity at UMD.

I specialize in threat modeling, penetration testing,
and building security automation tools.

"Breaking things to make them stronger."`
    },
    skills: {
        response: `<span class="terminal__response--highlight">Languages:</span> Python, JavaScript, C/C++, SQL, Bash
<span class="terminal__response--highlight">Security:</span> Burp Suite, OWASP ZAP, Nmap, Metasploit, Wireshark
<span class="terminal__response--highlight">Cloud:</span> AWS, Azure, GCP, Terraform, Docker, Kubernetes
<span class="terminal__response--highlight">SIEM:</span> Azure Sentinel, Splunk, Elastic Stack
<span class="terminal__response--highlight">Frameworks:</span> STRIDE, DREAD, MITRE ATT&CK, NIST`
    },
    experience: {
        response: `<span class="terminal__response--highlight">[2023-Present]</span> SOC Analyst @ University of Maryland
<span class="terminal__response--highlight">[2023]</span> Cyber Security Intern @ SEIA
<span class="terminal__response--highlight">[2020-2022]</span> Security Engineer @ IBM

Type 'experience --full' for detailed info, or scroll to the Experience section.`
    },
    'experience --full': {
        response: `Navigating to Experience section...`,
        action: () => {
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
        }
    },
    projects: {
        response: `<span class="terminal__response--highlight">Featured Projects:</span>
1. AWS Cloud Migration - Security-focused cloud deployment
2. Secure Smart University System - Python-based secure SDLC

Navigating to Projects section...`,
        action: () => {
            setTimeout(() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    },
    contact: {
        response: `<span class="terminal__response--highlight">Email:</span> anshuldhull1997@gmail.com
<span class="terminal__response--highlight">LinkedIn:</span> linkedin.com/in/anshuldhull
<span class="terminal__response--highlight">GitHub:</span> github.com/anshuldhull

Or scroll down to the Contact section!`
    },
    certs: {
        response: `<span class="terminal__response--highlight">Certifications:</span>
✓ PNPT (Practical Network Penetration Tester)
✓ CompTIA Security+
✓ AWS Certified Security – Specialty
✓ AWS Certified Solutions Architect Associate`
    },
    socials: {
        response: `<span class="terminal__response--highlight">Find me online:</span>
📧 Email: anshuldhull1997@gmail.com
💼 LinkedIn: /in/anshuldhull
🐙 GitHub: /anshuldhull`
    },
    clear: {
        response: '',
        action: () => {
            terminalOutput.innerHTML = '';
        }
    },
    sudo: {
        response: `<span style="color: #ff5f56;">Access Denied!</span> Nice try though 😉
You don't have root privileges on this system.`
    },
    'sudo rm -rf /': {
        response: `<span style="color: #ff5f56;">NICE TRY!</span> 🔒
This terminal is sandboxed. Your hacker instincts are noted.`
    },
    whoami: {
        response: `visitor@anshul-portfolio
You are currently browsing as a guest.`
    },
    ls: {
        response: `about.txt  experience/  projects/  blog/  contact.txt  README.md`
    },
    pwd: {
        response: `/home/visitor/anshul-portfolio`
    },
    date: {
        response: new Date().toString()
    },
    echo: {
        response: `Usage: echo [message]`
    },
    neofetch: {
        response: `<span class="terminal__response--highlight">
       _____          </span>  <span class="terminal__response--highlight">anshul@security</span>
      /     \\         <span>──────────────────</span>
     /  ▪ ▪  \\        <span class="terminal__response--highlight">OS:</span> Portfolio v1.0
    |   ___   |       <span class="terminal__response--highlight">Host:</span> GitHub Pages
    |  |   |  |       <span class="terminal__response--highlight">Theme:</span> Neo-Brutalist Dark
     \\_|   |_/        <span class="terminal__response--highlight">Terminal:</span> anshul-sh
                      <span class="terminal__response--highlight">Uptime:</span> Always online`
    }
};

// Process terminal input
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim().toLowerCase();
        
        if (input) {
            // Display the command
            const commandLine = document.createElement('p');
            commandLine.className = 'terminal__line';
            commandLine.innerHTML = `<span class="terminal__prompt">$</span> ${escapeHtml(terminalInput.value)}`;
            terminalOutput.appendChild(commandLine);
            
            // Handle echo command specially
            if (input.startsWith('echo ')) {
                const message = terminalInput.value.substring(5);
                const responseLine = document.createElement('p');
                responseLine.className = 'terminal__response';
                responseLine.textContent = message;
                terminalOutput.appendChild(responseLine);
            }
            // Check if command exists
            else if (commands[input]) {
                const cmd = commands[input];
                
                if (cmd.response) {
                    const responseLine = document.createElement('p');
                    responseLine.className = 'terminal__response';
                    responseLine.innerHTML = cmd.response;
                    terminalOutput.appendChild(responseLine);
                }
                
                if (cmd.action) {
                    cmd.action();
                }
            } else {
                // Command not found
                const responseLine = document.createElement('p');
                responseLine.className = 'terminal__response';
                responseLine.innerHTML = `<span style="color: #ff5f56;">Command not found:</span> ${escapeHtml(input)}
Type <span class="terminal__response--highlight">'help'</span> to see available commands.`;
                terminalOutput.appendChild(responseLine);
            }
            
            // Clear input and scroll to bottom
            terminalInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    }
});

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // For now, show a success message (you can integrate with a service later)
    // Options: Formspree, EmailJS, Netlify Forms, or your own backend
    
    alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
    contactForm.reset();
    
    // Optional: Open mailto link
    // window.location.href = `mailto:anshuldhull1997@gmail.com?subject=Portfolio Contact from ${name}&body=${message}`;
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and timeline items
document.querySelectorAll('.card, .timeline__item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== EASTER EGGS ====================
// Konami code easter egg
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                alert('🎮 Konami Code Activated! You found the easter egg!');
                document.body.style.animation = '';
            }, 500);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Console message for curious developers
console.log('%cHey there, curious developer! 👋', 'color: #e94560; font-size: 20px; font-weight: bold;');
console.log('%cLooking for bugs or just curious about the code?', 'color: #00ff41; font-size: 14px;');
console.log('%cFeel free to connect: anshuldhull1997@gmail.com', 'color: #eaeaea; font-size: 12px;');
