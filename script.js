const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'Wahab khan Wahab khan';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);

const outputElement = document.getElementById('output');
const commandInput = document.getElementById('command');
const prompt = '> ';

const commands = {
    help: 'Available commands: <span class="command-output">Help, About, Projects, Skills, Contact, Clear</span>',
    About: '<span class="command-output">I am Wahab Khan, a hacker and developer with expertise in various technologies.</span>',
    Projects: `<ul class="projects command-output">
        <li class="project-item">Password Generator - <button onclick="window.open('https://wahabkhaan.github.io/PasswordGenerator/', '_blank')">Click Me</button></li>
        <li class="project-item">Code Snippets - <button onclick="window.open('https://wahabkhaan.github.io/JavaCodeSnippets/', '_blank')">Click Me</button></li>
        <li class="project-item">Number Convertor - <button onclick="window.open('https://wahabkhaan.github.io/NumberConvertor/', '_blank')">Click Me</button></li>,
    
<li class="project-item">Random QuotesGen- <button onclick="window.open('https://wahabkhaan.github.io/QuotesGen/', '_blank')">Click Me</button></li>
</ul>`,
    Skills: '<span class="command-output">Skills: JavaScript, Java, Python, C++, HTML, CSS, SQL, Machine Learning, Cybersecurity</span>',
    Contact: '<span class="command-output">Contact me at: programming.spott@gmail.com</span>',
    Clear: '',
};

function executeCommand(command) {
    const output = document.createElement('div');
    output.textContent = prompt + command;
    outputElement.appendChild(output);

    if (command === 'Clear') {
        outputElement.innerHTML = '';
    } else {
        const response = document.createElement('div');
        if (commands[command]) {
            response.innerHTML = commands[command];
            response.className = 'command-output';
        } else {
            response.innerHTML = 'Command not found. Type "help" for available commands.';
            response.className = 'command-error';
        }
        outputElement.appendChild(response);
    }

    commandInput.value = '';
    outputElement.scrollTop = outputElement.scrollHeight;
}

function initializeTerminal() {
    const welcomeMessage = "Welcome to Wahab Khan's Site. Type 'help' to see available commands.";
    const output = document.createElement('div');
    output.textContent = welcomeMessage;
    output.className = 'welcome';
    outputElement.appendChild(output);

    executeCommand('help');
}

commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        executeCommand(commandInput.value.trim());
    }
});

window.onload = initializeTerminal;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
