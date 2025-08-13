function openQuiz(url, title) {
    const modal = document.getElementById('quizModal');
    const iframe = document.getElementById('quizFrame');
    const modalTitle = document.getElementById('modalTitle');

    modalTitle.textContent = title;
    iframe.src = url;
    modal.style.display = 'block';

    // Add opening animation
    modal.style.animation = 'fadeIn 0.3s ease-out';

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeQuiz() {
    const modal = document.getElementById('quizModal');
    const iframe = document.getElementById('quizFrame');

    // Add closing animation
    modal.style.animation = 'fadeOut 0.3s ease-out';

    setTimeout(() => {
        modal.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside
document.getElementById('quizModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeQuiz();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeQuiz();
    }
});

// Add CSS animations for modal
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
document.head.appendChild(style);