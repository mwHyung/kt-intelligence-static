// Modal functionality
function openModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize modal functionality
function initializeModal() {
    // Close modal when clicking outside
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Add click event listeners to close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    // Add click event listeners to feature buttons
    const featureButtons = document.querySelectorAll('.feature-button');
    featureButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    // Add click event listeners to primary buttons
    const primaryButtons = document.querySelectorAll('.primary-button');
    primaryButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    // Automatically open modal after initialization
    setTimeout(() => {
        openModal();
    }, 100);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModal);
} else {
    // DOM is already loaded
    initializeModal();
}

// Make functions globally available
window.openModal = openModal;
window.closeModal = closeModal;
