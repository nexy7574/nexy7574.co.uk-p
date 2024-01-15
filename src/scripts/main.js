const ROOT = document.querySelector(".body");
const FORM = document.querySelector("form");

if(navigator.userAgent.includes("firefox")===true) {
    const warningElement = document.createElement("div");
    warningElement.innerHTML = `Warning: Firefox, as of version 120.0.1, does not support the CSS <code>:has</code>
    pseudo-selector, so some features may not work as intended. You can go to <code>about:config</code> and 
    toggle <code>layout.css.has-selector.enabled</code> to <code>true</code>, or use another browser.`;
    warningElement.classList.add("wred");
    ROOT.appendChild(warningElement);
    ROOT.appendChild(FORM);
}

const _BD = new Date("2006-06-01T00:00:00");
const _YO = () => {
    const now = new Date();
    const seconds_delta = (now - _BD) / 1000;
    const years = Math.floor(seconds_delta / 31536000);
    return years;
}
const __ABOUT = `Hello! I am Nexus. I am a ${_YO()} year old programming from England. I enjoy programming and gaming, 
because I've had an interest in tech ever since I was a tiny little child, tearing apart any sort of tech I could to see what
was inside it. As I was never a sports kind of person, I ended up liking gaming.\n\n
Nowadays I write little tools on <a href="https://github.com/nexy7574" target="_blank" rel="noopener">my github</a> 
for all to see, manage a homelab server, and study networking and cybersecurity. I am a big advocate for privacy, despite 
still being deep in proprietaryville.`
const __CONTACT = {
    "Matrix": "https://go.nexy7574.co.uk/#/@nex:nexy7574.co.uk",
    "Session": "05f549013eb0df03250274a7d678489a1d94bf7adad2f36cdea259dd93f4486470",
    "Discord (server)": "https://discord.gg/TveBeG7",
    // take this, low-effort email scraper bots
    // Behold, my overly-complicated and inefficient and also probably ineffective
    // email obfusctation
    "Email (slow)": `mail${'to'}${':'}${atob('d2Vic2l0ZSsxODEyMjNA')}nexy7574.co.uk`,
    "Signal": "Ask via one of the other methods first."
}
const __BATFB = async () => {return {level: 999}}
const EPOCH = new Date("2023-12-19T10:21:00");
const __NEOFETCH = `
        #####           ${window.location.port || 'user'}@${window.location.hostname}
       #######          -----------------------
       ##O#O##          OS: ${navigator.platform || navigator.oscpu || 'Operating System'}
       #######          Kernel: 6.6.7-arch1-1 
     ###########        Uptime: ${Math.floor((Date.now() - EPOCH) / 1000)} seconds
    #############       Packages: 2048 (pacman, flatpak) 
   ###############      Shell: ${navigator.product} ${navigator.productSub}
   ################     DE: ${navigator.appName || 'Browser'} ${navigator.appVersion || new Date().toUTCString()}
  #################     WM: Web
#####################   Theme: [Dark]
#####################   Icons: [Dark]
  #################     Terminal: ${navigator.appCodeName || 'Webpage'} 
                        CPU: 23rd Gen CPU (${navigator.hardwareConcurrency}) @ 6.9GHz [420.0°C] 
                        GPU: AMDDIA GeDon RXX 7050ti Mobile XTX3D 
                        Memory: 6.9GiB / 420.0GiB 
                        GPU Driver: null
                        CPU Usage: -100%
                        Disk (/dev/mapper/cryptroot): 1b / 100P (0%) 
                        Local IP: 10.0.0.110 
                        Locale: ${navigator.language}.UTF-8
`

// Nicked from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
window.mobileCheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
if(window.mobileCheck()) {
    document.querySelector("#mobile-warning").hidden = false;
}

async function loadNicerBackground() {
    for (var i=0; i<10; i++) {
        try {
            var response = await fetch("./images/background.jpeg");
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            document.style.backgroundImage = `url(${url})`;
            return;
        }
        catch (e) {
            console.error(e);
        }
    }
};

loadNicerBackground().catch(console.error)

const COMMANDS = {
    'license': {
        'description': 'Displays license information (CC BY-NC-SA).',
        'exec': () => {
            return `This website is licensed under CC BY-NC-SA (Creative Commons
                Attribution-NonCommercial-ShareAlike 4.0 International). See 
                <a target="_blank" href="./LICENSE.txt">LICENSE.txt</a> for the full license.`
        }
    },
    'help': {
        'description': 'Shows this command.',
        'exec': () => {
            var result = [];
            for (var key of Object.keys(COMMANDS)) {
                var spaces = 13 - key.length;
                var space_chars = '&nbsp;'.repeat(spaces);
                result.push(`${key}${space_chars}${COMMANDS[key].description}`)
            }
            return result.join('<br>');
        }
    },
    'source': {
        'description': 'Opens the source code for this website.',
        'exec': () => {
            const url = "https://github.com/nexy7574/nexy7574.co.uk-p";
            window.open(url, "_blank");
            return `Opening <a href="${url}" target="_blank" rel="noopener">${url}</a>`
        }
    },
    'about': {
        'description': 'Shows you some basic information about me.',
        'exec': () => {return __ABOUT}
    },
    'experience': {
        'description': 'Effectictively displays a portfolio.',
        'exec': () => {
            const url = "https://github.com/nexy7574";
            window.open(url, "_blank");
            return `You can see all of my works here: <a href="${url}" target="_blank" rel="noopener">${url}</a>`
        }
    },
    "cls": {
        'description': 'Clears the console.',
        'exec': () => {
            for(var element of ROOT.children) {
                element.hidden = true;
            };
            FORM.hidden = false;
        }
    },
    "contact": {
        "description": "Gives you links to contact me.",
        "exec": () => {
            var lines = [];
            for(var key of Object.keys(__CONTACT)) {
                const v = __CONTACT[key];
                var elem;
                if(!v.startsWith("http") && !v.startsWith("mail")) {
                    elem = `<p>${key}: ${v}</p>`
                } else {
                    elem = `<p>${key}: <a href="${v}" target="_blank" rel="noopener">${v}</a></p>`
                }
                lines.push(elem);
            };
            return lines.join("")
        }
    },
    "gpg": {
        "description": "Gives you my GPG key.",
        "exec": () => {
            const key = "178E7758DAEED8D64F6E17870FA334385D0B689F"
            // todo: shorten this
            return `${key} (available on keyserver.ubuntu.com)`
        }
    },
    "status": {
        "description": "Checks a few services for a cursory uptime check.",
        "exec": async (_, output) => {
            try {
                var response = await fetch("https://matrix.nexy7574.co.uk/api/status");
                const json = await response.json();
                document.getElementById("blinker").classList.add("hidden");
                if (json.online === true) {
                    output.innerHTML += "<span>NexBox/Matrix is <span class='wgreen'>ONLINE</span>.</span><br>"
                }
            } catch (e) {
                output.innerHTML += "<span>NexBox/Matrix is <span class='wred'>OFFLINE</span></span><br>"
            }

            try {
                var response = await fetch("https://droplet.nexy7574.co.uk/jimmy/ping");
                const json = await response.json();
                if (json.online === true) {
                    output.innerHTML += "<span>Droplet is <span class='wgreen'>ONLINE</span>.</span><br>"
                }
            } catch (e) {
                // window.open("https://status.nexy7574.co.uk", "_blank");
                output.innerHTML += "<span>Droplet is <span class='wred'>OFFLINE</span></span><br>"
            }

            output.innerHTML += "<p><a href='https://status.nexy7574.co.uk' target='_blank' rel='noopener'>See full status here.</a></p>"
        }
    },
    "neofetch": {
        "description": "neofetch",
        "exec": () => `<pre>${__NEOFETCH}</pre>`
    }
};
var MOBILE_ENABLED = false;

function closeWindow(e) {
    console.debug("Closing: %s", e);
    const consoleRoot = e.target.parentElement.parentElement.parentElement;
    if(consoleRoot.classList.contains("hidden")) {
        console.debug("%s is already hidden.", consoleRoot);
    } else {
        consoleRoot.classList.add("hidden");
    };
};

function minimiseWindow(e) {
    console.debug("Minimising: %s", e);
    const consoleRoot = e.target.parentElement.parentElement.parentElement;

    if (consoleRoot.classList.contains("maximised")) {
        console.warn("%r is maximised, removing maximised class before continuing.");
        consoleRoot.classList.remove("maximised");
    }

    if(consoleRoot.classList.contains("minimised")) {
        console.debug("Removing 'minimised' from %r", consoleRoot)
        consoleRoot.classList.remove("minimised");
    } else {
        console.debug("Adding 'minimised' to %r", consoleRoot)
        consoleRoot.classList.add("minimised");
    };
};

function maximiseWindow(e) {
    console.debug("Maximising: %s", e);
    const consoleRoot = e.target.parentElement.parentElement.parentElement;
    if (consoleRoot.classList.contains("minimised")) {
        console.warn("%r is minimised, removing minimised class before continuing.");
        consoleRoot.classList.remove("minimised");
    }

    if(consoleRoot.classList.contains("maximised")) {
        consoleRoot.classList.remove("maximised");
    } else {
        consoleRoot.classList.add("maximised");
    };
};

for(var element of document.querySelectorAll("img[title='Minimise']")) {
    element.addEventListener("click", minimiseWindow);
}
for(var element of document.querySelectorAll("img[title='Maximise']")) {
    element.addEventListener("click", maximiseWindow);
}
for(var element of document.querySelectorAll("img[title='Close']")) {
    element.addEventListener("click", closeWindow);
}

function createCommandLineElement() {
    // I swear, the one time I move away from next.js and it'd be the perfect use.
    const rootElement = document.createElement("div");
    const blinker = document.createElement("span");
    blinker.classList.add("blinker");
    blinker.innerHTML = '&lhblk;';
    const inputElement = document.createElement("span");
    inputElement.contentEditable = true;
    inputElement.textContent = " ";
    rootElement.appendChild(inputElement);
    rootElement.appendChild(blinker);
    return rootElement
}

function toggleMobileSupport(e) {
    MOBILE_ENABLED = !MOBILE_ENABLED
    const elements = document.querySelectorAll("*[data-mobile]");
    for(var element of elements) {
        var supports = element.dataset.mobile == "1";
        console.debug("%s == '1': %s", element.dataset.mobile, supports)
        if(supports == MOBILE_ENABLED) {
            element.classList.remove("hidden");
            console.debug("Unhid %s as supports was %s and mobile support mode is now %s.", element, supports, MOBILE_ENABLED)

        } else {
            element.classList.add("hidden");
            console.debug("Hid %s as supports was %s and mobile support mode is now %s.", element, supports, MOBILE_ENABLED)
        }
    }
}
document.querySelector("img[title='Enable mobile support']").addEventListener("click", toggleMobileSupport);
document.querySelector("img[title='Disable mobile support']").addEventListener("click", toggleMobileSupport);

async function commandWrapper(e) {
    e.preventDefault();
    e.stopPropagation();
    console.debug(e);
    var body = document.querySelector("main > .body");
    // remove the blinker from the current prompt and make it read-only
    const cmdElement = e.target.cmd;
    const inputResponseElement = document.createElement("div");
    inputResponseElement.textContent = `C:\\> ${cmdElement.value}`
    body.appendChild(inputResponseElement);
    e.target.hidden = true;
    const responseElement = document.createElement("div");
    const blinkerElement = document.createElement("span");
    blinkerElement.classList.add("blinker");
    blinkerElement.innerHTML = '&lhblk;';
    blinkerElement.id = "blinker";
    body.appendChild(blinkerElement);
    body.appendChild(responseElement);

    var flag = 0;
    for(var command_name of Object.keys(COMMANDS)) {
        if(command_name == cmdElement.value.toLocaleLowerCase()) {
            var content = await Promise.resolve(COMMANDS[command_name].exec(cmdElement, responseElement));
            if(content) {
                responseElement.innerHTML = responseElement.innerHTML || ""
                responseElement.innerHTML += content
            }
            flag++;
            break;
        }
    };
    if(flag==0) {
        responseElement.textContent = `'${cmdElement.value.toLocaleLowerCase()}' is not recognized as an internal or external command, operable program or batch file.`;
    }
    if(!responseElement.innerHTML) {
        // No response, blank line.
        responseElement.remove();
    }
    blinkerElement.remove();
    cmdElement.value = null;
    e.target.hidden = false;
    body.appendChild(document.createElement("br"))
    body.appendChild(e.target)
    cmdElement.focus();
    return false;  // stop a refresh on iOS devices
}
var KEY_SEQUENCE = [];

function toggleTransparentMode() {
    if(ROOT.classList.contains("transparent")) {
        // ROOT.classList.remove("transparent");
        ROOT.parentElement.classList.remove("transparent")
    }
    else {
        // ROOT.classList.add("transparent");
        ROOT.parentElement.classList.add("transparent");
    }
}

function toggleTransparent(e) {
    console.debug(e);
    KEY_SEQUENCE.push(e.key);
    if(KEY_SEQUENCE.length > 3) {
        KEY_SEQUENCE.shift();
    }
    if (KEY_SEQUENCE.join("") == "see") {
        toggleTransparentMode();
    }
}
document.addEventListener("keydown", (e) => {toggleTransparent(e)});

document.getElementById("commandline").addEventListener("submit", commandWrapper, {capture: true, passive: false});
