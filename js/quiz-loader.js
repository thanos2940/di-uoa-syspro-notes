// quiz-loader.js — loads questions from data/questions.json and renders them per section
(async function() {
    console.log('Quiz loader starting...');
    const dbPath = 'data/questions.json';
    let db;
    try {
        const response = await fetch(dbPath);
        if (!response.ok) throw new Error('Failed to load questions.json');
        db = await response.json();
        console.log('Questions loaded:', db);
    } catch (e) {
        console.error('quiz-loader error:', e);
        return;
    }

    document.querySelectorAll('.section-quiz[data-topic][data-section]').forEach(el => {
        const topicId = el.dataset.topic;
        const sectionId = el.dataset.section;
        const sectionData = db[topicId]?.[sectionId];

        if (!sectionData || !sectionData.questions || sectionData.questions.length === 0) {
            console.warn(`No questions found for topic: ${topicId}, section: ${sectionId}`);
            return;
        }

        const title = sectionData.title || sectionId;
        const questions = sectionData.questions;

        let html = `
            <div class="quiz">
                <h3>🧠 Quick Check — ${title}</h3>
                <div class="qitems">
        `;

        questions.forEach((qObj, index) => {
            const qId = `q-${topicId}-${sectionId}-${index}`;
            html += `
                <div class="qitem">
                    <div class="qq">${qObj.q}</div>
                    <div class="qa" id="${qId}" style="display: none;">${qObj.a}</div>
                    <button class="qa-toggle" onclick="toggleAnswer('${qId}', this)">Δες απάντηση</button>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        el.innerHTML = html;
    });
})();

function toggleAnswer(id, btn) {
    const el = document.getElementById(id);
    if (el.style.display === 'none') {
        el.style.display = 'block';
        btn.textContent = 'Κρύψε απάντηση';
        btn.classList.add('active');
    } else {
        el.style.display = 'none';
        btn.textContent = 'Δες απάντηση';
        btn.classList.remove('active');
    }
}
