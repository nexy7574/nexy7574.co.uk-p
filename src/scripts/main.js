const COMMANDS = {
    'license': {
        'description': 'Displays license information (CC BY-NC-SA).',
        'exec': (input, output) => {
            return `This website is licensed under CC BY-NC-SA (Creative Commons
                Attribution-NonCommercial-ShareAlike 4.0 International). See 
                <a target="_blank" href="./LICENSE.txt">LICENSE.txt</a> for the full license.`
        }
    },
    'help': {
        'description': 'Shows this command.',
        'exec': () => {
            let result = [];
            for (let key of Object.keys(COMMANDS)) {
                let spaces = 13 - key.length;
                let space_chars = '&nbsp;'.repeat(spaces);
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
        'exec': () => {}
    },
    'experience': {
        'description': 'Effectictively displays a portfolio.',
        'exec': () => {}
    }
};
let MOBILE_ENABLED = false;

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
    if(consoleRoot.classList.contains("minimised")) {
        consoleRoot.classList.remove("minimised");
    } else {
        consoleRoot.classList.add("minimised");
    };
};

function maximiseWindow(e) {
    console.debug("Maximising: %s", e);
    const consoleRoot = e.target.parentElement.parentElement.parentElement;
    if(consoleRoot.classList.contains("maximised")) {
        consoleRoot.classList.remove("maximised");
    } else {
        consoleRoot.classList.add("maximised");
    };
};

for(let element of document.querySelectorAll("img[title='Minimise']")) {
    element.addEventListener("click", minimiseWindow);
}
for(let element of document.querySelectorAll("img[alt='Maximise']")) {
    element.addEventListener("click", maximiseWindow);
}
for(let element of document.querySelectorAll("img[alt='Close']")) {
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
    for(let element of elements) {
        let supports = element.dataset.mobile == "1";
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

function commandWrapper(e) {
    console.debug(e);
    e.preventDefault();
    // remove the blinker from the current prompt and make it read-only
    const cmdElement = e.target.children[1];
    const inputResponseElement = document.createElement("div");
    inputResponseElement.textContent = `C:\\> ${cmdElement.value}`
    const responseElement = document.createElement("div");

    let flag = 0;
    for(let command_name of Object.keys(COMMANDS)) {
        if(command_name == cmdElement.value.toLocaleLowerCase()) {
            let content = COMMANDS[command_name].exec(cmdElement, responseElement);
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
    let body = document.querySelector("main > .body");
    body.appendChild(inputResponseElement);
    if(!responseElement.innerHTML) {
        // No response, blank line.
        responseElement.remove();
    }
    else {
        body.appendChild(responseElement);
    }
    cmdElement.value = null;
    body.appendChild(e.target)
    cmdElement.focus();
}
document.getElementById("commandline").onsubmit = commandWrapper;
