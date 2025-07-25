// Create bubble background
function createBubbles() {
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    document.body.appendChild(bubblesContainer);
    
    // Create bubbles
    const bubbleCount = 30;
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size between 10 and 100 pixels
        const size = Math.random() * 90 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 5 and 15 seconds
        const duration = Math.random() * 10 + 5;
        bubble.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        bubblesContainer.appendChild(bubble);
    }
}

// Apply effects to elements
function applyEffects() {
    // Add bubble effect to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('btn-bubble');
        btn.classList.add('ripple');
    });
    
    // Add pulse effect to main CTA button
    const heroBtn = document.querySelector('.hero .btn');
    if (heroBtn) heroBtn.classList.add('pulse');
    
    // Add glow effect to room cards on hover
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('glowing');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('glowing');
        });
    });
    
    // Add glow effect to amenities on hover
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

// Create discount popup
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
    
    // Close popup functionality
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }, 10000);
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    applyEffects();
    createDiscountPopup();
    
    // 按钮涟漪效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 波浪加速效果
            document.body.style.animationDuration = '5s';
            setTimeout(() => {
                document.body.style.animationDuration = '15s';
            }, 500);
        });
    });
    
    // 图片放大功能
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
    
    // 获取所有画廊图片
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
    
    // 关闭模态框
    modalClose.addEventListener('click', function() {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // 点击背景关闭
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
