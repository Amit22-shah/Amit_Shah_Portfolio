/**
 * components.js — Shared Nav + Footer Injector
 * Reads `data-root` and `data-page` from <body> to build correct links and active states.
 * Uses DOMContentLoaded so the body and placeholders exist when this runs.
 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const body = document.body;
    const root = body.dataset.root || '';   // '' for index.html, '../' for pages/
    const page = body.dataset.page || '';   // 'projects', 'achievements', etc.

    const pageTitles = {
        '':                 'Portfolio',
        'projects':         'Projects',
        'achievements':     'Achievements',
        'certificates':     'Certificates',
        'college-results':  'GTU Results',
        'school-results':   'School Results',
        'feedback':         'Contact',
        'extra-curricular': 'Extra Curricular'
    };

    // Returns class="nav-active" when the current page matches
    function act(p) {
        return page === p ? ' class="nav-active"' : '';
    }

    // Home link — scrolls on index, navigates on sub-pages
    const homeHref = (page === '') ? '#parallax-container' : root + 'index.html';
    const title = pageTitles[page] || 'Portfolio';

    // ── Build Nav HTML ────────────────────────────────────────────────────────
    const navHTML = `
<nav class="portfolio-nav visible" id="main-nav">
    <div class="nav-container">
        <a href="${root}index.html" class="nav-brand">AMIT SHAH &nbsp;<em>/</em>&nbsp; ${title}</a>
        <ul class="nav-menu">
            <li><a href="${homeHref}"><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> <span class="nav-text">Home</span></a></li>

            <li class="has-dropdown">
                <a href="${root}index.html#backstory-section"><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> <span class="nav-text">Background</span> <span class="nav-arrow">&#9660;</span></a>
                <ul class="nav-dropdown-menu">
                    <li><a href="${root}pages/college-results.html"${act('college-results')}>College Results</a></li>
                    <li><a href="${root}pages/school-results.html"${act('school-results')}>School Results</a></li>
                </ul>
            </li>

            <li class="has-dropdown">
                <a href="${root}pages/certificates.html"${act('certificates')}><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> <span class="nav-text">Certificates</span> <span class="nav-arrow">&#9660;</span></a>
                <ul class="nav-dropdown-menu">
                    <li><a href="${root}pages/certificates.html#cert1">SAP Advanced Program</a></li>
                    <li><a href="${root}pages/certificates.html#cert2">Innovation Marathon</a></li>
                    <li><a href="${root}pages/certificates.html#cert3">Game Jam 2nd Prize</a></li>
                    <li><a href="${root}pages/certificates.html#cert4">AI Tools Workshop</a></li>
                    <li><a href="${root}pages/certificates.html#cert5">ML Internship</a></li>
                    <li><a href="${root}pages/certificates.html#cert6">SAP Analytics</a></li>
                    <li><a href="${root}pages/certificates.html#cert7">Carrom Champion</a></li>
                    <li><a href="${root}pages/certificates.html#cert8">Gen AI Workshop</a></li>
                </ul>
            </li>

            <li class="has-dropdown">
                <a href="${root}pages/achievements.html"${act('achievements')}><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg> <span class="nav-text">Achievements</span> <span class="nav-arrow">&#9660;</span></a>
                <ul class="nav-dropdown-menu">
                    <li><a href="${root}pages/achievements.html#ach-gamejam">Game Jam 2nd Prize</a></li>
                    <li><a href="${root}pages/achievements.html#ach-carrom">Carrom Champion</a></li>
                    <li><a href="${root}pages/achievements.html#ach-nxtwave">NxtWave AI Workshop</a></li>
                    <li><a href="${root}pages/achievements.html#ach-internship">ML Internship</a></li>
                </ul>
            </li>

            <li class="has-dropdown">
                <a href="${root}pages/projects.html"${act('projects')}><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> <span class="nav-text">Projects</span> <span class="nav-arrow">&#9660;</span></a>
                <ul class="nav-dropdown-menu">
                    <li><a href="${root}pages/projects.html#proj-customer-behavior">Customer Behavior Analysis</a></li>
                    <li><a href="${root}pages/projects.html#proj-kolam">Kolam Design Analyzer</a></li>
                    <li><a href="${root}pages/projects.html#proj-secretbook">The Secret Book</a></li>
                </ul>
            </li>

            <li><a href="${root}pages/feedback.html"${act('feedback')}><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> <span class="nav-text">Contact</span></a></li>
            <li><a href="${root}assets/Resume/Amit-Shah-Resume.pdf" target="_blank"><svg class="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> <span class="nav-text">Resume</span></a></li>
        </ul>
    </div>
</nav>`;

    // ── Build Simple Footer HTML ──────────────────────────────────────────────
    const footerHTML = `
<footer class="portfolio-footer">
    <div class="footer-content">
        <span>&copy; 2026 Amit Shah</span>
    </div>
</footer>`;

    // ── Inject Nav ────────────────────────────────────────────────────────────
    const navSlot = document.getElementById('site-nav');
    if (navSlot) {
        navSlot.outerHTML = navHTML;
    }

    // ── Inject Footer ─────────────────────────────────────────────────────────
    const footerSlot = document.getElementById('site-footer');
    if (footerSlot) {
        footerSlot.outerHTML = footerHTML;
    }
});
