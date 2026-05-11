// The secret password
const PASS = "gg55";

function verifyCode(val) {
    return val === PASS;
}

function openAboutBlank() {
    const url = window.location.href;
    const win = window.open('about:blank', '_blank');
    
    if (!win) {
        alert("Pop-up blocked! Please allow pop-ups for cloaking.");
        return;
    }

    // Set up the about:blank page
    win.document.title = "Google Docs";
    const link = win.document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
    win.document.head.appendChild(link);

    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    
    const iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = url + "#cloaked";

    win.document.body.appendChild(iframe);
    
    // Safety redirect the original tab
    window.location.replace("https://google.com");
}

// Block Inspect Element keys
document.addEventListener('keydown', (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J"))) {
        e.preventDefault();
    }
});
