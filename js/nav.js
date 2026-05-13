/**
 * nav.js - Modular Navigation for WebNotes
 */

const topics = [
    { id: 'index', title: 'Home', path: 'index.html', icon: '🏠' },
    { id: 'topic1', title: 'Unix Basics', path: 'topic1_unix_commands.html', icon: '📂' },
    { id: 'topic2', title: 'Bash Programming', path: 'topic2_bash.html', icon: '🐚' },
    { id: 'topic3', title: 'I/O & Signals', path: 'topic3_io_signals.html', icon: '📡' },
    { id: 'topic4', title: 'Fork & Pipes', path: 'topic4_fork_pipes.html', icon: '🔀' },
    { id: 'topic5', title: 'Sockets & IPC', path: 'topic5_sockets.html', icon: '🌐' },
    { id: 'quiz', title: 'Interactive Quiz', path: 'interactive_quiz.html', icon: '📝' }
];

function initNav() {
    const navContainer = document.getElementById('site-nav');
    if (!navContainer) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'nav-logo';
    logo.innerHTML = `<span>⚡</span> System Programming`;
    
    const linksContainer = document.createElement('div');
    linksContainer.className = 'nav-links';
    
    topics.forEach(topic => {
        const link = document.createElement('a');
        link.href = topic.path;
        link.className = 'nav-link';
        if (currentPath === topic.path) {
            link.classList.add('active');
        }
        link.title = topic.title;
        link.innerHTML = `<span>${topic.icon}</span> ${topic.title}`;
        linksContainer.appendChild(link);
    });
    
    const navWrapper = document.createElement('div');
    navWrapper.className = 'nav-wrapper';
    navWrapper.appendChild(logo);
    navWrapper.appendChild(linksContainer);
    
    navContainer.appendChild(navWrapper);
}

// Simple search for the index page
function initSearch() {
    const searchInput = document.getElementById('topic-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.topic-card');
        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(term) ? '' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initSearch();
});
