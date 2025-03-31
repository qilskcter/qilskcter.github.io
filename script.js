document.addEventListener("DOMContentLoaded", function () {
    const binaryContainer = document.createElement("div");
    binaryContainer.classList.add("binary-container");
    document.body.appendChild(binaryContainer);

    function createBinaryDigit() {
        const digit = document.createElement("div");
        digit.classList.add("binary-digit");

        digit.style.left = Math.random() * window.innerWidth + "px";
        digit.textContent = Math.random() < 0.5 ? "0" : "1";
        digit.style.animationDuration = (Math.random() * 5 + 3) + "s";

        binaryContainer.appendChild(digit);

        setTimeout(() => {
            digit.remove();
        }, 8000);
    }

    setInterval(createBinaryDigit, 100);
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

function detectOS() {
    let userAgent = navigator.userAgent;
    let osName = "Unknown OS";
    let osVersion = "Unknown Version";

    if (/Windows NT 10.0/.test(userAgent)) {
        if (navigator.userAgentData && navigator.userAgentData.platform === "Windows") {
            osName = "Windows";
            osVersion = "11";
        } else {
            osName = "Windows";
            osVersion = "10";
        }
    } else if (/Windows NT 6.3/.test(userAgent)) {
        osName = "Windows";
        osVersion = "8.1";
    } else if (/Windows NT 6.2/.test(userAgent)) {
        osName = "Windows";
        osVersion = "8";
    } else if (/Windows NT 6.1/.test(userAgent)) {
        osName = "Windows";
        osVersion = "7";
    } else if (/Mac OS X 15/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Sequoia (15)";
    } else if (/Mac OS X 14/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Sonoma (14)";
    } else if (/Mac OS X 13/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Ventura (13)";
    } else if (/Mac OS X 12/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Monterey (12)";
    } else if (/Mac OS X 11/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Big Sur (11)";
    } else if (/Mac OS X 10_15/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Catalina (10.15)";
    } else if (/Mac OS X 10_14/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Mojave (10.14)";
    } else if (/Mac OS X 10_13/.test(userAgent)) {
        osName = "macOS";
        osVersion = "High Sierra (10.13)";
    } else if (/Mac OS X 10_12/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Sierra (10.12)";
    } else if (/Mac OS X 10_11/.test(userAgent)) {
        osName = "macOS";
        osVersion = "El Capitan (10.11)";
    } else if (/Mac OS X 10_10/.test(userAgent)) {
        osName = "macOS";
        osVersion = "Yosemite (10.10)";
    } else if (/Android/.test(userAgent)) {
        osName = "Android";
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        osName = "iOS";
    } else if (/Linux/.test(userAgent)) {
        osName = "Linux";
    }

    return `${osName} ${osVersion}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("browser-info").textContent = "Browser: " + detectBrowser();
    document.getElementById("os-info").textContent = "Operating System: " + detectOS();
});

window.addEventListener("load", () => {
    document.body.classList.remove("loading");
    document.body.style.opacity = "1";
});


window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hidden');
    document.body.classList.add('loaded');
});

window.addEventListener("load", function () {
    document.body.classList.remove("preload");

    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

document.addEventListener('keydown', function(e) {
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

document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("particle-container");
    document.body.appendChild(particleContainer);

    document.addEventListener("mousemove", (e) => {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        
        let size = Math.random() * 6 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 500);
    });
});

async function refreshAccessToken(refreshToken) {
    const clientId = "c521750ae18c4c998aeb7c244a79efd4";
    const clientSecret = "7a57402665e2473da5f4e848c00752c3";
    const url = "https://accounts.spotify.com/api/token";

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params,
        });

        if (!response.ok) {
            throw new Error("Lỗi khi refresh token");
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Lỗi refresh token:", error);
        return null;
    }
}

const refreshToken = "AQCz1v_M0KPJjb5LgpIx5XoD7yRbhpaSYhbUhFawA9HaaCxx7v5sPchQHHJfGCFg70UHGlGHT17BZMZYw3ij4SaC9oSI8k13ZMh4gl3cVZC-fmRiRf796IEnfhGbJuSUdRU";  // Lưu Refresh Token của bạn
let accessToken = "BQBO7gN_B7soHqiVahvZSTWnGn_KFvAo5PLN17aIPjnh7o9qUfc8vTMAPosd2LFEh3sXeeKQPO_HIoAYBwz-uPOg8AyrWhmku4LvW01jk-oyaA7E3euYno0UN1Lu191gnDLlyTZQi9rIWANeINex3MACD_FZrVResdPZFU3zWEhW38rj8-DRSN235xfqmjgdLExBGjvswN8zFKK7fKCJvBlCc13Sy-mb6lsxiHtZ";  // Token hiện tại

async function getCurrentlyPlaying() {
    try {
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        const albumCover = document.getElementById("album-cover");
        const songTitle = document.getElementById("song-title");
        const artistName = document.getElementById("artist-name");
        const spotifyPlayer = document.querySelector(".spotify-player");

        if (response.status === 401) {
            console.log("Token hết hạn, đang làm mới...");
            accessToken = await refreshAccessToken(refreshToken);
            return getCurrentlyPlaying();
        }

        if (response.status === 200) {
            const data = await response.json();
            if (data && data.item) {
                songTitle.textContent = data.item.name;
                artistName.textContent = data.item.artists[0].name;
                albumCover.src = data.item.album.images[0].url;
                songTitle.href = data.item.external_urls.spotify;

                spotifyPlayer.style.display = "flex";
                albumCover.style.display = "block";
            }
        } else {
            throw new Error("Không có bài hát nào đang phát");
        }
    } catch (error) {
        console.log("Lỗi khi lấy bài hát:", error);

        const albumCover = document.getElementById("album-cover");
        const songTitle = document.getElementById("song-title");
        const artistName = document.getElementById("artist-name");
        const spotifyPlayer = document.querySelector(".spotify-player");

        songTitle.textContent = "Not Playing";
        artistName.textContent = "";
        albumCover.src = "";
        albumCover.style.display = "none";
        spotifyPlayer.style.display = "none";
    }
}

setInterval(getCurrentlyPlaying, 10000);

getCurrentlyPlaying();

document.getElementById("spotify-player").addEventListener("click", function () {
    const songUrl = this.getAttribute("data-url");
    if (songUrl) {
        window.open(songUrl, "_blank");
    }
});
