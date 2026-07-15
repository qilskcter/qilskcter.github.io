import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { aboutProfile, awards, projects, contactLinks, devices, navigationLinks, repositoryActions, skills } from './data';
import { useLanyard } from 'react-use-lanyard';

const HOME_TEXT = "Hello, I'm qilskcter";

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
      <path d="M8 3.293 14 9.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      {}
      <path d="M4 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      
      {}
      <path d="M6 2h4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2z" />
      
      {}
      <rect x="6.5" y="13.5" width="3" height="0.5" rx="0.25" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
    </svg>
  );
}

function ContactIcon({ type }) {
  if (type === 'github') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
    );
  }

  if (type === 'facebook') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
      </svg>
    );
  }

  if (type === 'discord') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>
  );
}

function TabletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      {}
      <path d="M4 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />     
      {}
      <rect x="6.5" y="13.5" width="3" height="0.5" rx="0.25" />
    </svg>
  );
}

function getPageFromPath(pathname) {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  switch (normalized) {
    case '/':
    case '/index.html':
      return 'home';
    case '/about':
    case '/about.html':
      return 'about';
    case '/awards':
    case '/awards.html':
      return 'awards';
    case '/projects':
    case '/projects.html':
      return 'projects';
    case '/contact':
    case '/contact.html':
      return 'contact';
    case '/device':
    case '/device.html':
      return 'device';
    case '/skills':
    case '/skills.html':
      return 'skills';
    case '/jailbreak':
    case '/jailbreak/index.html':
      return 'repository';
    case '/404.html':
      return 'notfound';
    default:
      return 'notfound';
  }
}

function detectBrowser() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Edg')) return 'Microsoft Edge';
  if (userAgent.includes('Chrome')) return 'Google Chrome';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Firefox')) return 'Mozilla Firefox';
  if (userAgent.includes('MSIE') || userAgent.includes('Trident')) return 'Internet Explorer';

  return 'Unknown Browser';
}

async function detectOS() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform || '';
  let osName = 'Unknown OS';
  let osVersion = '';

  if (platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    return 'iPadOS';
  }

  if (navigator.userAgentData) {
    try {
      const uaData = await navigator.userAgentData.getHighEntropyValues(['platformVersion', 'platform']);
      const majorVersion = Number.parseInt(uaData.platformVersion.split('.')[0], 10);

      if (uaData.platform === 'macOS') {
        osName = 'macOS';
        if (majorVersion === 26) osVersion = 'Tahoe';
        else if (majorVersion === 15) osVersion = 'Sequoia';
        else if (majorVersion === 14) osVersion = 'Sonoma';
        else if (majorVersion === 13) osVersion = 'Ventura';
        else if (majorVersion === 12) osVersion = 'Monterey';
        else if (majorVersion === 11) osVersion = 'Big Sur';
        else osVersion = `Version ${majorVersion}`;
      } else if (uaData.platform === 'Windows') {
        osName = 'Windows';
        osVersion = majorVersion >= 13 ? '11' : '10';
      } else if (uaData.platform === 'Android') {
        osName = 'Android';
        osVersion = uaData.platformVersion;
      }

      if (osName !== 'Unknown OS') return `${osName} ${osVersion}`.trim();
    } catch {
    }
  }

  if (/iPhone|iPad|iPod/.test(userAgent) && !window.MSStream) {
    osName = 'iOS';
    const match = userAgent.match(/OS (\d+)_(\d+)/);
    if (match) osVersion = `${match[1]}.${match[2]}`;
  } else if (/Android/.test(userAgent)) {
    osName = 'Android';
    const match = userAgent.match(/Android\s([0-9.]+)/);
    if (match) osVersion = match[1];
  } else if (/Mac OS X/.test(userAgent)) {
    osName = 'macOS';
    const match = userAgent.match(/Mac OS X (\d+)[_.](\d+)/);
    if (match) osVersion = `${match[1]}.${match[2]}`;
  } else if (/Windows NT/.test(userAgent)) {
    osName = 'Windows';
    if (/Windows NT 10.0/.test(userAgent)) osVersion = '10/11';
    else if (/Windows NT 6.2/.test(userAgent)) osVersion = '8';
    else if (/Windows NT 6.1/.test(userAgent)) osVersion = '7';
  }

  return `${osName} ${osVersion}`.trim();
}

function useBodyLifecycle() {
  useEffect(() => {
    const applyReadyState = () => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.5s ease-in-out';
      document.body.classList.remove('preload');
    };

    if (document.readyState === 'complete') {
      applyReadyState();
      return undefined;
    }

    window.addEventListener('load', applyReadyState);

    return () => window.removeEventListener('load', applyReadyState);
  }, []);
}

function useWindowGuards() {
  useEffect(() => {
    const preventContextMenu = (event) => event.preventDefault();
    const preventDevtools = (event) => {
      if (
        event.key === 'F12' ||
        (event.altKey && event.metaKey && event.key.toLowerCase() === 'i') ||
        (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i')
      ) {
        event.preventDefault();
        window.alert('Bỏ đi mà làm người :))))');
        return;
      }

      if (event.ctrlKey && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        window.alert('Lói rồi, bỏ đi');
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventDevtools);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventDevtools);
    };
  }, []);
}

function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 10);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState);

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return isScrolled;
}

function useSystemInfo() {
  const [browser, setBrowser] = useState('Detecting Browser...');
  const [os, setOs] = useState('Detecting OS...');

  useEffect(() => {
    setBrowser(`Browser: ${detectBrowser()}`);

    let isMounted = true;

    detectOS().then((osString) => {
      if (isMounted) setOs(`Operating System: ${osString}`);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { browser, os };
}

function useTypingText(text) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;

      setTyped(text.slice(0, index));
      index += 1;

      if (index <= text.length) {
        window.setTimeout(typeNext, 150);
      }
    };

    typeNext();

    return () => {
      cancelled = true;
    };
  }, [text]);

  return typed;
}

function useSpotifyPlayer() {
  const [player, setPlayer] = useState({ visible: false, title: '', artist: '', cover: '', url: '' });

  useEffect(() => {
    let cancelled = false;

    const getCurrentlyPlaying = async () => {
      try {
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const response = await fetch('/api/spotify', {
          method: 'GET',
          headers: {
            'x-timestamp': timestamp,
          },
        });

        if (cancelled) return;

        if (response.status === 204 || !response.ok) {
          setPlayer((current) => ({ ...current, visible: false }));
          return;
        }

        const data = await response.json();

        if (cancelled) return;

        if (data?.item) {
          setPlayer({
            visible: true,
            title: data.item.name,
            artist: data.item.artists.map((artist) => artist.name).join(', '),
            cover: data.item.album.images[0]?.url || '',
            url: data.item.external_urls.spotify,
          });
        } else {
          setPlayer((current) => ({ ...current, visible: false }));
        }
      } catch {
        if (!cancelled) {
          setPlayer((current) => ({ ...current, visible: false }));
        }
      }
    };

    getCurrentlyPlaying();
    const intervalId = window.setInterval(getCurrentlyPlaying, 5000);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  return player;
}

function Navbar({ isScrolled, menuOpen, setMenuOpen }) {
  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="menu-toggle" onClick={() => setMenuOpen((current) => !current)} role="button" tabIndex={0} aria-label="Toggle navigation menu">
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {navigationLinks.map((link) => {
          const cleanHref = link.href.replace('.html', '').replace(/\/$/, '');
          const finalPath = cleanHref === '' ? '/' : cleanHref;

          return (
            <li key={link.href}>
              <Link to={finalPath} onClick={() => setMenuOpen(false)}>
                {link.icon === 'home' ? <HomeIcon /> : link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2024 qilskcter | Built with ❤️</p>
    </footer>
  );
}

function PageFrame({ eyebrow, title, description, children, className = '' }) {
  return (
    <main className={`page-frame ${className}`.trim()}>
      <section className="page-panel">
        <div className="page-heading animate-on-load">
          {eyebrow ? <div className="page-eyebrow">{eyebrow}</div> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </section>
    </main>
  );
}

function HomePage() {
  const typedText = useTypingText(HOME_TEXT);
  const player = useSpotifyPlayer();
  const systemInfo = useSystemInfo();

  const { loading, status } = useLanyard({
    userId: '599447694364114944', 
    socket: true,
  });

  const statusColors = {
    online: '#43b581',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d',
  };
  const currentStatus = status?.discord_status || 'offline';
  const dotColor = statusColors[currentStatus];
  const activeActivity = status?.activities?.find(act => act.type !== 2);

  const avatarUrl = status?.discord_user?.avatar 
    ? `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`
    : 'https://cdn.discordapp.com/embed/avatars/0.png';

  return (
    <main className="page-frame home-frame">
      <section className="home-stage">
        
        {}
        <div className="home-main-content">
          <header className="hero home-hero">
            <h2><span className="typing">{typedText}</span></h2>
            <p className="animate-on-load">Studying <b>Information Technology (IT)</b> at HCM-UTE</p>
          </header>

          {}
          {!loading && status && (
            <div className="discord-status-home animate-on-load">
              {}
              <div className="discord-avatar-wrapper">
                <img src={avatarUrl} alt="Discord Avatar" className="discord-avatar" />
                <span className="status-dot" style={{ backgroundColor: dotColor, boxShadow: `0 0 6px ${dotColor}` }} />
              </div>
              
              {}
              <div className="status-text-wrapper">
                <span className="discord-username">@{status.discord_user.username}</span>
                <span className="status-details">
                  {activeActivity ? `Playing ${activeActivity.name}` : currentStatus}
                </span>
              </div>
            </div>
          )}

          {player.visible ? (
            <div className="spotify-player animate-on-load" onClick={() => window.open(player.url, '_blank', 'noreferrer')} role="button" tabIndex={0} aria-label="Open currently playing song on Spotify">
              <img id="album-cover" src={player.cover} alt="Album Cover" />
              <div className="track-info">
                <a id="song-title" href={player.url} target="_blank" rel="noreferrer">{player.title}</a>
                <p id="artist-name">{player.artist}</p>
              </div>
            </div>
          ) : null}
        </div>

        {}
        <div className="home-system-info animate-on-load">
          <p id="browser-info">{systemInfo.browser}</p>
          <p id="os-info">{systemInfo.os}</p>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <PageFrame
      eyebrow={<PersonIcon />}
      title="About me"
      description="My personal profile, academic background, technical focus, and creative interests."
    >
      <div className="text-card animate-on-load" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {}
        <p className="profile-summary" style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: 0, borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '15px' }}>
          {aboutProfile.summary}
        </p>
        
        {}
        <div className="profile-points" style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left' }}>
          {aboutProfile.details.map((point) => {
            const parts = point.split(':');
            const title = parts[0];
            const content = parts.slice(1).join(':');

            return (
              <div className="profile-point" key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span className="profile-point-bullet" style={{ color: '#00eaff', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <strong style={{ color: '#ffffff' }}>{title}:</strong>{content}
                </p>
              </div>
            );
          })}
        </div>

        {}
        <div className="tech-tag-list" style={{ justifyContent: 'flex-start', marginTop: '10px' }}>
          <span className="tech-tag">Artificial Intelligence</span>
          <span className="tech-tag">HCM-UTE</span>
          <span className="tech-tag">Hackintosh</span>
          <span className="tech-tag">IoT & Android</span>
          <span className="tech-tag">Chess</span>
          <span className="tech-tag">Music Production</span>
          <span className="tech-tag">Acoustic Guitar</span>
        </div>
      </div>
    </PageFrame>
  );
}

function AwardsPage() {
  return (
    <PageFrame
      eyebrow={<TrophyIcon />}
      title="Awards"
      description="Competition results and project recognition, presented consistently across the site."
    >
      <div className="cards-stack">
        {awards.map((award) => (
          <article className="award-item animate-on-load award-card" key={award.title}>
            <div className="award-list">
              <div className="award-meta">Award</div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              {award.note ? <div className="award-note">{award.note}</div> : null}
              <div className="tech-tag-list">
                {award.tags.map((tag) => (
                  <div className="tech-tag" key={tag}>{tag}</div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function ProjectsPage() {
  return (
    <PageFrame
      eyebrow={
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
        </svg>
      }
      title="My Projects"
      description="A curated selection of engineering projects, open-source codebases, and academic systems I have developed."
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card animate-on-load" key={project.title}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="github-link-icon"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-tag-list" style={{ justifyContent: 'flex-start', marginTop: 'auto' }}>
              {project.tags.map((tag) => (
                <span className="tech-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageFrame>
  );
}

function ContactPage() {
  const handleEmailClick = (event) => {
    event.preventDefault();
    const user = 'gospel_texts_4a';
    const domain = 'icloud.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <PageFrame
      eyebrow={<PhoneIcon />}
      title="Contact me"
      description="Direct links and social profiles."
    >
      <div className="contact-grid">
        <a className="contact-card contact-card-primary animate-on-load" id="contact-email" href="#" onClick={handleEmailClick}>
          <ContactIcon type="mail" />
          <div>
            <strong>Email Me!</strong>
            <span>gospel_texts_4a@icloud.com</span>
          </div>
        </a>
        {contactLinks.slice(1).map((link) => (
          <a className="contact-card animate-on-load" key={link.href} href={link.href} target="_blank" rel="noreferrer">
            <ContactIcon type={link.icon} />
            <div>
              <strong>{link.label}</strong>
              <span>{link.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}</span>
            </div>
          </a>
        ))}
      </div>
    </PageFrame>
  );
}

function DeviceCard({ device }) {
  return (
    <div className="device-card animate-on-load">
      {}
      <div className="device-image-container">
        <img 
          src={device.image} 
          alt={device.title} 
          className="device-visual-img"
          loading="lazy" 
        />
      </div>
      
      {}
      <div className="device-info-content" style={{ marginTop: '15px' }}>
        <h3>{device.title}</h3>
        <h4>{device.subtitle}</h4>
      </div>

      {}
        <div className="device-specs-list" style={{ marginTop: '12px', width: '100%' }}>
        {device.specs.map((spec, index) => (
            <p 
            key={`${device.title}-${index}`}
            style={{
                fontSize: '0.85rem',
                color: '#ddd',
                margin: '6px 0',
                lineHeight: '1.4'
            }}
            dangerouslySetInnerHTML={typeof spec === 'string' ? { __html: spec } : { __html: spec.html }}
            />
        ))}
        </div>
    </div>
  );
}

function DevicePage() {
  return (
    <PageFrame
      eyebrow={<LaptopIcon />}
      title="My Devices"
      description="Devices I use for development, testing, and daily work."
    >
      <section className="devices">
        {devices.map((device) => (
          <DeviceCard key={device.title} device={device} />
        ))}
      </section>
    </PageFrame>
  );
}

function SkillPage() {
  return (
    <PageFrame
      eyebrow={<CodeIcon />}
      title="Skills"
      description="Languages and tools I actually use."
    >
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-chip animate-on-load" key={skill.name}>
            <img src={skill.icon} className={skill.invert ? 'invert-icon' : ''} width={skill.name === 'Python' ? 30 : 32} height={skill.name === 'Python' ? 30 : 32} alt={`${skill.name} icon`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </PageFrame>
  );
}

function RepositoryPage() {
  return (
    <PageFrame
      eyebrow={<AppleIcon />}
      title="iOS Jailbreak Repository"
      description="Quick actions for package managers and repository downloads."
    >
      <div className="button-grid">
        {repositoryActions.map((action, index) => (
          <a 
            key={action.label} 
            href={action.href} 
            className="custom-button animate-on-load repo-btn"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {}
            {action.image && (
              <img 
                src={action.image} 
                alt={`${action.label} icon`} 
                className="repo-btn-icon" 
                loading="lazy"
              />
            )}
            <span>{action.label}</span>
          </a>
        ))}
      </div>
      <svg width="0" height="0" style={{ position: 'absolute', left: '-1000px', top: '-1000px' }} aria-hidden="true">
        <filter id="distorsion">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2" seed="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </PageFrame>
  );
}

function NotFoundPage() {
  return (
    <PageFrame
      eyebrow="404"
      title="NOT FOUND"
      description="The page you are looking for does not exist."
      className="notfound-frame"
    >
      <div className="error-mark animate-on-load">404</div>
    </PageFrame>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();
  
  const location = useLocation();
  const currentPage = useMemo(() => {
    const path = location.pathname.replace(/^\/|\/$/g, '');
    return path === '' ? 'home' : path;
  }, [location.pathname]);

  useBodyLifecycle();
  useWindowGuards();

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const nonScrollPages = ['home', 'contact', 'jailbreak', 'skills'];

    if (nonScrollPages.includes(currentPage)) {
      document.body.classList.add('no-scroll-page');
    } else {
      document.body.classList.remove('no-scroll-page');
    }

    return () => {
      document.body.classList.remove('no-scroll-page');
    };
  }, [currentPage]);

  return (
    <div className="app-shell">
      <Navbar isScrolled={isScrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {}
      <div className={`content-wrap ${currentPage === 'home' ? 'home-content' : ''}`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/device" element={<DevicePage />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/jailbreak" element={<RepositoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}