document.addEventListener("DOMContentLoaded", function () {

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        snowflake.style.left = Math.random() * window.innerWidth + "px";

        const size = Math.random() * 4 + 2;
        snowflake.style.width = size + "px";
        snowflake.style.height = size + "px";

        const duration = Math.random() * 5 + 5;
        snowflake.style.animationDuration = duration + "s";

        snowflake.style.animationDelay = Math.random() * -5 + "s";

        snowflake.style.opacity = Math.random() * 0.5 + 0.3;

        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }

    setInterval(createSnowflake, 300);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    function checkScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.5s ease-in-out";
});

const text = "Hello, I'm qilskcter";
let index = 0;

function typeEffect() {
    document.querySelector(".typing").textContent = text.substring(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, 150);
    }
}

window.onload = typeEffect;

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

function detectBrowser() {
    let userAgent = navigator.userAgent;
    let browserName = "Unknown";

    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Safari";
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
    }

    return browserName;
}

async function detectOS() {
    let userAgent = navigator.userAgent;
    let platform = navigator.platform || "";
    let osName = "Unknown OS";
    let osVersion = "";

    if (platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
        return "iPadOS";
    }

    if (navigator.userAgentData) {
        try {
            const uaData = await navigator.userAgentData.getHighEntropyValues(["platformVersion", "platform"]);
            const majorVersion = parseInt(uaData.platformVersion.split('.')[0]);

            if (uaData.platform === "macOS") {
                osName = "macOS";
                if (majorVersion === 26) osVersion = "Tahoe";
                else if (majorVersion === 15) osVersion = "Sequoia";
                else if (majorVersion === 14) osVersion = "Sonoma";
                else if (majorVersion === 13) osVersion = "Ventura";
                else if (majorVersion === 12) osVersion = "Monterey";
                else if (majorVersion === 11) osVersion = "Big Sur";
                else osVersion = `Version ${majorVersion}`;
            } else if (uaData.platform === "Windows") {
                osName = "Windows";
                osVersion = (majorVersion >= 13) ? "11" : "10";
            } else if (uaData.platform === "Android") {
                osName = "Android";
                osVersion = uaData.platformVersion;
            }

            if (osName !== "Unknown OS") return `${osName} ${osVersion}`.trim();
        } catch (e) { }
    }

    if (/iPhone|iPad|iPod/.test(userAgent) && !window.MSStream) {
        osName = "iOS";
        const match = userAgent.match(/OS (\d+)_(\d+)/);
        if (match) osVersion = `${match[1]}.${match[2]}`;
    } else if (/Android/.test(userAgent)) {
        osName = "Android";
        const match = userAgent.match(/Android\s([0-9.]+)/);
        if (match) osVersion = match[1];
    } else if (/Mac OS X/.test(userAgent)) {
        osName = "macOS";
        const match = userAgent.match(/Mac OS X (\d+)[_.](\d+)/);
        if (match) osVersion = `${match[1]}.${match[2]}`;
    } else if (/Windows NT/.test(userAgent)) {
        osName = "Windows";
        if (/Windows NT 10.0/.test(userAgent)) osVersion = "10/11";
        else if (/Windows NT 6.2/.test(userAgent)) osVersion = "8";
        else if (/Windows NT 6.1/.test(userAgent)) osVersion = "7";
    }

    return `${osName} ${osVersion}`.trim();
}

async function displaySystemInfo() {
    const osElement = document.getElementById('os-info');
    const browserElement = document.getElementById('browser-info');

    let browserName = "Unknown Browser";
    const ua = navigator.userAgent;
    if (ua.indexOf("Edg") != -1) browserName = "Microsoft Edge";
    else if (ua.indexOf("Chrome") != -1) browserName = "Chrome";
    else if (ua.indexOf("Safari") != -1 && ua.indexOf("Chrome") == -1) browserName = "Safari";
    else if (ua.indexOf("Firefox") != -1) browserName = "Firefox";
    else if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1) browserName = "Internet Explorer";

    if (browserElement) browserElement.innerText = `Browser: ${browserName}`;

    if (osElement) {
        osElement.innerText = "Detecting OS...";
        const osString = await detectOS();
        osElement.innerText = `Operating System: ${osString}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displaySystemInfo();
});

window.addEventListener("load", () => {
    document.body.classList.remove("loading");
    document.body.style.opacity = "1";
});


window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');

    if (preloader) {
        preloader.classList.add('hidden');
    }

    document.body.classList.add('loaded');
});

window.addEventListener("load", function () {
    document.body.classList.remove("preload");

    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.altKey && e.metaKey && e.key.toLowerCase() === 'i') ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i')
    ) {
        e.preventDefault();
        alert('Bỏ đi mà làm người :))))');
        return false;
    }

    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        alert('Lói rồi, bỏ đi');
        return false;
    }
});

let accessToken = null;

async function getAccessTokenFromProxy() {
    const proxyUrl = "/api/spotify";

    if (proxyUrl.includes("tên-worker")) {
        console.warn("Cloudflare Worker link wasn't configurated!");
        return null;
    }

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error("Proxy Server Error");
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Can't not get token:", error);
        return null;
    }
}

async function getCurrentlyPlaying() {
    if (!accessToken) {
        accessToken = await getAccessTokenFromProxy();
    }

    if (!accessToken) return;

    try {
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: { "Authorization": `Bearer ${accessToken}` }
        });

        const spotifyPlayer = document.querySelector(".spotify-player");
        const albumCover = document.getElementById("album-cover");
        const songTitle = document.getElementById("song-title");
        const artistName = document.getElementById("artist-name");

        if (!spotifyPlayer || !albumCover || !songTitle || !artistName) return;

        if (response.status === 401) {
            accessToken = null;
            return;
        }

        if (response.status === 204) {
            spotifyPlayer.style.display = "none";
            return;
        }

        const data = await response.json();
        if (data && data.item) {
            songTitle.textContent = data.item.name;
            artistName.textContent = data.item.artists.map(artist => artist.name).join(", ");
            albumCover.src = data.item.album.images[0].url;
            songTitle.href = data.item.external_urls.spotify;

            spotifyPlayer.setAttribute("data-url", data.item.external_urls.spotify);

            spotifyPlayer.style.display = "flex";
            albumCover.style.display = "block";
        }
    } catch (error) {
        console.log("Lỗi Spotify:", error);
        const spotifyPlayer = document.querySelector(".spotify-player");
        if (spotifyPlayer) spotifyPlayer.style.display = "none";
    }
}

setInterval(getCurrentlyPlaying, 5000);
getCurrentlyPlaying();

const playerElement = document.querySelector(".spotify-player");

if (playerElement) {
    playerElement.addEventListener("click", function () {
        const songUrl = this.getAttribute("data-url");
        if (songUrl) window.open(songUrl, "_blank");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animate-on-load');

    animatedElements.forEach(el => {
        el.addEventListener('animationend', () => {
            el.classList.remove('animate-on-load');

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactEmail = document.getElementById('contact-email');

    if (contactEmail) {
        contactEmail.addEventListener('click', function (e) {
            e.preventDefault();
            const user = "gospel_texts_4a";
            const domain = "icloud.com";
            window.location.href = `mailto:${user}@${domain}`;
        });
    }
});