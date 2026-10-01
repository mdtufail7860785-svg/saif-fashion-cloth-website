/**
 * Main App Module - Initializes the application
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Saif Fashion Store Initialized');
    
    // Load products from data
    if (typeof products !== 'undefined') {
        uiManager.renderProducts(products);
        uiManager.updateCartUI();
    } else {
        console.error('Products data not loaded');
    }
    
    // Smooth scroll for navigation links
    setupSmoothScroll();
});

/**
 * Setup smooth scrolling for navigation links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                // Close cart if it's open
                if (uiManager.cartSidebar.classList.contains('open')) {
                    uiManager.closeCart();
                }
            }
        });
    });
}

/**
 * Format price to USD
 */
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

/**
 * Log cart contents (for debugging)
 */
function logCart() {
    console.log('Current Cart:', cart.getItems());
    console.log('Total Items:', cart.getItemCount());
    console.log('Subtotal:', cart.getSubtotal());
    console.log('Total:', cart.getTotal());
}

// Make logCart available globally for debugging
window.logCart = logCart;
