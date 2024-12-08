// 初始化 AOS 动画库
AOS.init({
    duration: 1000,
    once: true
});

// 暗色模式切换
const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeSwitch.querySelector('i').classList.toggle('fa-sun');
    themeSwitch.querySelector('i').classList.toggle('fa-moon');
});

// 移动端菜单
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});

// 项目筛选功能
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有按钮的active类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 添加当前按钮的active类
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// 打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 页面加载完成后执行打字机效果
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    typeWriter(typingText, typingText.textContent);
}); 