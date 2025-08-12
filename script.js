// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Generate random dots first
    generateRandomDots();
    generateRandomGlows();
    
    // Initial page load animations
    initPageAnimations();
    
    // Background animations
    initBackgroundAnimations();
    
    // Interactive animations
    initInteractiveAnimations();
    
    // Continuous animations
    initContinuousAnimations();
    
    // Regenerate dots every 8 seconds
    setInterval(generateRandomDots, 8000);
    // Regenerate glows every 10 seconds
    setInterval(generateRandomGlows, 10000);
    
    // Start description language switching
    initDescriptionSwitcher();
    
    // Initialize particles system
    initParticles();
});

// Generate random dots
function generateRandomDots() {
    const container = document.querySelector('.background-animation');
    if (!container) return;
    
    const existingDots = container.querySelectorAll('.dot');
    existingDots.forEach(dot => dot.remove());
    
    const dotCount = Math.floor(Math.random() * 4) + 3; // 3-6 random dots
    const colors = ['#00ff88', '#4ecdc4', '#ff6b6b', '#ffd93d', '#6c5ce7', '#a29bfe'];
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = `dot dot-${i + 1}`;
        
        // Random position
        const x = Math.random() * 90 + 5; // 5% to 95%
        const y = Math.random() * 90 + 5; // 5% to 95%
        
        // Random color from palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        dot.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 4}px;
            height: ${Math.random() * 6 + 4}px;
            background: ${color};
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            opacity: ${Math.random() * 0.6 + 0.4};
            box-shadow: 0 0 ${Math.random() * 10 + 5}px ${color};
        `;
        
        container.appendChild(dot);
    }
}

// Generate random glows
function generateRandomGlows() {
    const container = document.querySelector('.bg-elements');
    if (!container) return;
    
    const existingGlows = container.querySelectorAll('.glow');
    existingGlows.forEach(glow => glow.remove());
    
    const glowCount = Math.floor(Math.random() * 4) + 3; // 3-6 random glows
    const colors = [
        'rgba(0, 255, 136, 0.15)',
        'rgba(76, 205, 196, 0.12)', 
        'rgba(255, 107, 107, 0.1)',
        'rgba(255, 217, 61, 0.08)',
        'rgba(108, 92, 231, 0.1)',
        'rgba(162, 155, 254, 0.12)'
    ];
    
    for (let i = 0; i < glowCount; i++) {
        const glow = document.createElement('div');
        glow.className = `glow glow-${i + 1}`;
        
        // Random position
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10; // 10% to 90%
        
        // Random size and color
        const size = Math.random() * 200 + 100; // 100px to 300px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const blur = Math.random() * 40 + 60; // 60px to 100px blur
        
        glow.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color} 0%, transparent 70%);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            filter: blur(${blur}px);
            opacity: ${Math.random() * 0.3 + 0.1};
            pointer-events: none;
        `;
        
        container.appendChild(glow);
    }
}

function initPageAnimations() {
    // Header animation
    anime({
        targets: '.header',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 200
    });
    
    // Logo animation
    anime({
        targets: '.logo-text',
        translateX: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 400
    });
    
    anime({
        targets: '.logo-line',
        scaleX: [0, 1],
        duration: 600,
        easing: 'easeOutExpo',
        delay: 600
    });
    
    // Navigation items animation
    anime({
        targets: '.nav-item',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo',
        delay: anime.stagger(100, {start: 800})
    });
    
    // Hero title animation
    anime({
        targets: '.title-line',
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: anime.stagger(200, {start: 1000})
    });
    
    // Hero subtitle animation
    anime({
        targets: '.hero-subtitle',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1400
    });
    

    
    // Visual grid animation
    anime({
        targets: '.grid-item',
        scale: [0, 1],
        rotate: [45, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutCubic',
        delay: anime.stagger(80, {start: 1000})
    });
    

}

function initBackgroundAnimations() {
    // Continuous line animations with enhanced pulse effects
    anime({
        targets: '.line-1',
        scaleY: [0, 1],
        opacity: [0.0, 1.0],
        duration: 1800 + Math.random() * 800,
        easing: 'easeInOutCubic',
        delay: 400 + Math.random() * 300,
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.line-2',
        scaleX: [0, 1],
        opacity: [0.0, 0.95],
        duration: 2200 + Math.random() * 600,
        easing: 'easeInOutCubic',
        delay: 600 + Math.random() * 400,
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.line-3',
        scaleY: [0, 1],
        opacity: [0.0, 1.0],
        duration: 1600 + Math.random() * 900,
        easing: 'easeInOutCubic',
        delay: 300 + Math.random() * 500,
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.line-4',
        scaleX: [0, 1],
        opacity: [0.0, 0.9],
        duration: 2000 + Math.random() * 700,
        easing: 'easeInOutCubic',
        delay: 800 + Math.random() * 350,
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.line-5',
        scaleY: [0, 1],
        opacity: [0.0, 1.0],
        duration: 1900 + Math.random() * 500,
        easing: 'easeInOutCubic',
        delay: 200 + Math.random() * 600,
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.line-6',
        scaleX: [0, 1],
        opacity: [0.0, 0.98],
        duration: 2100 + Math.random() * 800,
        easing: 'easeInOutCubic',
        delay: 500 + Math.random() * 450,
        direction: 'alternate',
        loop: true
    });
    
    // Additional strong pulse animations for maximum visibility
    anime({
        targets: '.line-1, .line-3, .line-5',
        opacity: [0.0, 1.0],
        duration: function() { return 3000 + Math.random() * 2000; },
        easing: 'easeInOutSine',
        delay: function() { return Math.random() * 1000; },
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.line-2, .line-4, .line-6',
        opacity: [0.0, 1.0],
        duration: function() { return 2500 + Math.random() * 1500; },
        easing: 'easeInOutSine',
        delay: function() { return Math.random() * 800; },
        direction: 'alternate',
        loop: true
    });
    
    // Floating dots
    anime({
        targets: '.dot',
        scale: [0.5, 1.5],
        opacity: [0.3, 1],
        duration: 1600,
        easing: 'easeInOutCubic',
        delay: anime.stagger(400),
        direction: 'alternate',
        loop: true
    });
    
    // Dots movement
    anime({
        targets: '.dot-1',
        translateX: [0, 20],
        translateY: [0, -15],
        duration: 4000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.dot-2',
        translateX: [0, -25],
        translateY: [0, 20],
        duration: 3500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.dot-3',
        translateX: [0, 15],
        translateY: [0, -25],
        duration: 4500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.dot-4',
        translateX: [0, -20],
        translateY: [0, 15],
        duration: 3800,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.dot-5',
        translateX: [0, -15],
        translateY: [0, -20],
        duration: 4200,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    
    anime({
        targets: '.dot-6',
        translateX: [0, 25],
        translateY: [0, 15],
        duration: 3600,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    

    

    

}

function initInteractiveAnimations() {
    // Navigation hover effects
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
    

    
    // Grid items hover effects
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                rotate: '+=5deg',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotate: '-=5deg',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    

}

function initContinuousAnimations() {
    // Visual grid rotation
    anime({
        targets: '.visual-grid',
        rotate: '360deg',
        duration: 20000,
        easing: 'linear',
        loop: true
    });
    
    // Logo line pulse
    anime({
        targets: '.logo-line',
        scaleX: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true
    });
    

}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles system
function initParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 15; // 减少粒子数量
    
    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    container.appendChild(particle);
    
    // 为每个粒子添加无规则运动动画
    animateParticle(particle, index);
}

function animateParticle(particle, index) {
    // 位置重新随机化函数
    function randomizePosition() {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
    }
    
    // 脉动呼吸效果 - 透明度时隐时现，每次出现位置不同
    function breathingCycle() {
        const cycleDuration = 5000 + Math.random() * 4000; // 5-9秒一个呼吸周期
        
        anime({
            targets: particle,
            opacity: [
                { value: 0, duration: 1500 + Math.random() * 1000 },      // 完全隐藏
                { 
                    value: 0, 
                    duration: 100,
                    complete: function() {
                        randomizePosition(); // 在隐藏状态下改变位置
                    }
                },
                { value: 0.9 + Math.random() * 0.1, duration: 800 + Math.random() * 400 },  // 在新位置突然出现
                { value: 0.2 + Math.random() * 0.3, duration: 1200 + Math.random() * 800 }, // 渐暗
                { value: 0.8 + Math.random() * 0.2, duration: 600 + Math.random() * 400 },  // 再次亮起
                { value: 0, duration: 1000 + Math.random() * 600 }       // 渐隐消失
            ],
            duration: cycleDuration,
            delay: Math.random() * 3000,
            easing: 'easeInOutQuad',
            complete: function() {
                breathingCycle(); // 递归调用，开始下一个呼吸周期
            }
        });
    }
    
    // 轻微的漂移运动（减少运动幅度）
    anime({
        targets: particle,
        translateX: [
            { value: (Math.random() - 0.5) * 80, duration: 3000 + Math.random() * 2000 },
            { value: (Math.random() - 0.5) * 60, duration: 2500 + Math.random() * 1500 },
            { value: (Math.random() - 0.5) * 100, duration: 3500 + Math.random() * 2000 }
        ],
        translateY: [
            { value: (Math.random() - 0.5) * 80, duration: 3000 + Math.random() * 2000 },
            { value: (Math.random() - 0.5) * 60, duration: 2500 + Math.random() * 1500 },
            { value: (Math.random() - 0.5) * 100, duration: 3500 + Math.random() * 2000 }
        ],
        duration: 8000 + Math.random() * 6000,
        delay: Math.random() * 2000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });
    
    // 尺寸脉动效果
    anime({
        targets: particle,
        scale: [
            { value: 0.4 + Math.random() * 0.3, duration: 2000 + Math.random() * 1000 },
            { value: 1.0 + Math.random() * 0.5, duration: 1500 + Math.random() * 800 },
            { value: 0.6 + Math.random() * 0.4, duration: 1800 + Math.random() * 1200 }
        ],
        duration: 5000 + Math.random() * 3000,
        delay: Math.random() * 2000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });
    
    // 开始第一个呼吸周期
    breathingCycle();
}

// Description typewriter effect
function initDescriptionSwitcher() {
    const descriptionElement = document.getElementById('hero-description');
    if (!descriptionElement) return;
    
    const descriptions = {
        en: "AIsecStrike is an innovative community dedicated to the cross-integration of artificial intelligence (AI) and cybersecurity attack and defense technologies, exploring ways to leverage AI technology to enhance practical capabilities in areas such as penetration testing, vulnerability exploitation, and threat countermeasures.",
        zh: "AIsecStrike 是一个专注于人工智能（AI）与网络安全攻防技术交叉融合的创新社区，探索如何利用AI技术提升渗透测试、漏洞挖掘、威胁对抗等领域的实战能力。"
    };
    
    let currentLang = 'en';
    let isTyping = false;
    
    // Text span will be created dynamically in typeWriter function
    
    function typeWriter(text, callback) {
        if (isTyping) return;
        isTyping = true;
        
        // Clear current text and reset container
        descriptionElement.innerHTML = '';
        
        // Create text span with underline effect
        const textSpan = document.createElement('span');
        textSpan.className = 'typewriter-text';
        
        // Add to container
        descriptionElement.appendChild(textSpan);
        
        // Check if text is English or Chinese
        const isEnglish = /^[\x00-\x7F]*$/.test(text);
        
        if (isEnglish) {
            // English: animate words
            const words = text.split(' ');
            let wordIndex = 0;
            const wordSpeed = 100; // speed for each word
            
            function animateWord() {
                if (wordIndex < words.length) {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'typewriter-word';
                    wordSpan.textContent = words[wordIndex];
                    
                    if (wordIndex > 0) {
                        const spaceSpan = document.createElement('span');
                        spaceSpan.textContent = ' ';
                        textSpan.appendChild(spaceSpan);
                    }
                    
                    textSpan.appendChild(wordSpan);
                    
                    // Trigger animation
                    setTimeout(() => {
                        wordSpan.classList.add('word-visible');
                    }, 50);
                    
                    wordIndex++;
                    setTimeout(animateWord, wordSpeed);
                } else {
                    // 停留3秒后执行回调
                    setTimeout(() => {
                        isTyping = false;
                        if (callback) callback();
                    }, 3000);
                }
            }
            
            animateWord();
        } else {
            // Chinese: animate 4 characters at a time
            let i = 0;
            const charSpeed = 150; // speed for each group of characters
            
            function animateChars() {
                if (i < text.length) {
                    // Show 4 characters at a time
                    const charsToShow = Math.min(4, text.length - i);
                    
                    for (let j = 0; j < charsToShow; j++) {
                        const charSpan = document.createElement('span');
                        charSpan.className = 'typewriter-char';
                        charSpan.textContent = text.charAt(i + j);
                        
                        textSpan.appendChild(charSpan);
                        
                        // Trigger animation with slight delay between characters
                        setTimeout(() => {
                            charSpan.classList.add('char-visible');
                        }, j * 50);
                    }
                    
                    i += charsToShow;
                    setTimeout(animateChars, charSpeed);
                } else {
                    // 停留3秒后执行回调
                    setTimeout(() => {
                        isTyping = false;
                        if (callback) callback();
                    }, 3000);
                }
            }
            
            animateChars();
        }
    }
    
    function switchDescription() {
        // Switch language and start typing new text
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        typeWriter(descriptions[currentLang], switchDescription);
    }
    
    // Start with initial text
    typeWriter(descriptions[currentLang], switchDescription);
}

// Page transition animations
function initPageTransitions() {
    // Create overlay for page transitions
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);
    
    // Add transition styles
    const style = document.createElement('style');
    style.textContent = `
        .page-transition-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .page-transition-overlay.active {
            opacity: 1;
            visibility: visible;
        }
        
        .transition-loader {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(0, 255, 136, 0.3);
            border-top: 3px solid #00ff88;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .page-fade-out {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    // Add loader to overlay
    const loader = document.createElement('div');
    loader.className = 'transition-loader';
    overlay.appendChild(loader);
    
    // Handle navigation clicks
    const navItems = document.querySelectorAll('.nav-item:not(.github-link)');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const text = this.textContent;
            
            // Start transition animation
            startPageTransition(href, text);
        });
    });
}

function startPageTransition(href, pageName) {
    const overlay = document.querySelector('.page-transition-overlay');
    const mainContent = document.querySelector('.main-content');
    
    // Fade out current content
    if (mainContent) {
        mainContent.classList.add('page-fade-out');
    }
    
    // Show overlay with animation
    setTimeout(() => {
        overlay.classList.add('active');
    }, 200);
    
    // Simulate page loading time
    setTimeout(() => {
        // Here you would normally navigate to the new page
        // For demo purposes, we'll just show a message and fade back in
        console.log(`Navigating to ${pageName} page...`);
        
        // Hide overlay
        overlay.classList.remove('active');
        
        // Fade content back in
        if (mainContent) {
            mainContent.classList.remove('page-fade-out');
        }
        
        // You can add actual page navigation logic here
        // window.location.href = href;
    }, 1500);
}

// Initialize page transitions when DOM is loaded
 document.addEventListener('DOMContentLoaded', function() {
     // Add a small delay to ensure other animations are initialized first
     setTimeout(initPageTransitions, 100);
 });