function createBubbles() {
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    document.body.appendChild(bubblesContainer);
    
    const bubbleCount = 30;
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 90 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 10 + 5;
        bubble.style.animationDuration = `${duration}s`;
        
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        bubblesContainer.appendChild(bubble);
    }
}

function applyEffects() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('btn-bubble');
        btn.classList.add('ripple');
    });
    
    const heroBtn = document.querySelector('.hero .btn');
    if (heroBtn) heroBtn.classList.add('pulse');
    
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('glowing');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('glowing');
        });
    });
    
    const amenities = document.querySelectorAll('.amenity-item');
    amenities.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('glowing');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('glowing');
        });
    });
}

function createDiscountPopup() {
    const popup = document.createElement('div');
    popup.className = 'discount-popup';
    popup.innerHTML = `
        <button class="close-popup">&times;</button>
        <h4>Special event!</h4>
        <p>Use this promo code:</p>
        <div class="discount-code">Yionpromote</div>
    `;
    
    document.body.appendChild(popup);
    
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    applyEffects();
    createDiscountPopup();
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            document.body.style.animationDuration = '5s';
            setTimeout(() => {
                document.body.style.animationDuration = '15s';
            }, 500);
        });
    });
    
    const imageModal = document.createElement('div');
    imageModal.id = 'imageModal';
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
        <span class="close-image-modal">&times;</span>
        <img class="image-modal-content" id="expandedImg">
        <div class="caption-text" id="imgCaption"></div>
    `;
    document.body.appendChild(imageModal);

    const expandedImg = document.getElementById('expandedImg');
    const imgCaption = document.getElementById('imgCaption');
    const modalClose = document.querySelector('.close-image-modal');
    
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            imageModal.style.display = 'block';
            expandedImg.src = this.src;
            imgCaption.innerHTML = this.alt || this.nextElementSibling.querySelector('h4').textContent;
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalClose.addEventListener('click', function() {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

