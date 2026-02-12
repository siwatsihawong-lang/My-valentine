let player;
const textToType = "ขอบคุณที่ยังอยู่กับเราน้าาาา ช่วงที่คบกันมาเราอาจจะทำเบบี้ทั้งร้องไห้ทั้งเสียใจมาเยอะเลย ขอโทษที่เรามันไม่ค่อยเอาไหนชอบทำเบบี้น้อยใจอยู่เรื่อยเยย แต่เบบี้ก็ยังไม่ทิ้งเราไปไหน ขอโทษล่วงหน้าไว้ก่อนเลยเผื่อเราทำเบบี้เสียใจอีกอย่าพึ่งทิ้งเราไปไหนน้าาาไอ้เดกขี้แยยยยย!! เรารักเบบี้ที่สุดเลยและจะรักมากๆกว่าเดิมเรื่อยๆเยย อยู่ด้วยกันแบบนี้ไปอีกนานๆ100ปีไปเยยน้าา 💖";

const galaxyItemsData = [
    { type: 'text', content: 'รักเบบี้ที่สุด' },
	{ type: 'img', content: 'https://i.postimg.cc/Dy9DC5NR/IMG-4116.jpg' },
    { type: 'text', content: 'My Love' },
	{ type: 'img', content: 'https://i.postimg.cc/SN237Hg6/A44E2972_9E9C_4A60_A7D2_B324BFE1949A.jpg' },
    { type: 'text', content: 'คนเก่งของเรา' },
	{ type: 'img', content: 'https://i.postimg.cc/vHJjPXKz/fxn_2568_05_10_140520_203.jpg' },
	{ type: 'text', content: 'ขอบคุณที่เข้ามาเป็นส่วนหนึ่งในจักรวาลของเรา' },
	{ type: 'img', content: 'https://i.postimg.cc/WbBK9SyX/fxn_2568_05_10_151946_315.jpg' },
	{ type: 'text', content: 'เบบี้สวยที่สุด' },
	{ type: 'img', content: 'https://i.postimg.cc/V6ZZXFMh/IMG_0550.avif' },
	{ type: 'text', content: 'อยู่ด้วยกันอีก100ปีเลยนะ' },
	{ type: 'img', content: 'https://i.postimg.cc/D0Wj6bd6/IMG_0553.avif' },
	{ type: 'text', content: 'นอนหลับไม่ฝันทุกวันเยย' },
	{ type: 'img', content: 'https://i.postimg.cc/mDpp7SM1/IMG_4908.avif' },
	{ type: 'text', content: 'กินข้าวเยอะน้าาาาาา' },
	{ type: 'img', content: 'https://i.postimg.cc/50KK8mv8/IMG_5011.avif' },
	{ type: 'text', content: 'รักนะคนเก่ง' },
	{ type: 'img', content: 'https://i.postimg.cc/2SNcdybN/IMG_5341.avif' },
	{ type: 'text', content: 'รักมากกกกกกกกกก' },
	{ type: 'img', content: 'https://i.postimg.cc/PxVV1MZ6/IMG_6050.jpg' },
	{ type: 'text', content: 'For ever' },
	{ type: 'img', content: 'https://i.postimg.cc/qqtbwCXG/IMG_6051.jpg' },
	{ type: 'text', content: 'Only you' },
	{ type: 'img', content: 'https://i.postimg.cc/7hCs9TMt/IMG_6061.jpg' },
	{ type: 'text', content: 'เป็นฝันที่ดีที่สุด' },
	{ type: 'img', content: 'https://i.postimg.cc/j2WgcJ4V/IMG_6066.jpg' },
	{ type: 'text', content: 'รักนะไอ้เด็กขี้แย' },
	{ type: 'img', content: 'https://i.postimg.cc/3NyS1DFT/IMG_6073.jpg' },
	{ type: 'text', content: 'รักนะไอ้เด็กซุ่มซ่าม' },
    { type: 'img', content: 'https://i.postimg.cc/yNVL5Gyn/IMG_8308.avif' }, // เปลี่ยนเป็นลิงก์รูปคู่
    { type: 'text', content: 'ขอบคุณที่รักกัน' },
    { type: 'text', content: 'อยู่ด้วยกันตลอดไปนะ' }
];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0', width: '0', videoId: 'ZCdYi5KP8v0',
        playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1 }
    });
}

const playBtn = document.getElementById('playBtn');
const yesBtn = document.getElementById('yesBtn');
const finalYesBtn = document.getElementById('finalYesBtn');

// เริ่มเพลงที่นี่ที่เดียว เพื่อให้เล่นต่อเนื่อง
playBtn.addEventListener('click', () => {
    if (player && player.playVideo) player.playVideo();
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    setInterval(createHeart, 400);
});

// ย้ายปุ่ม No
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('message-screen').classList.remove('hidden');
    startTypewriter();
});

function startTypewriter() {
    let i = 0;
    const element = document.getElementById('typewriter');
    function typing() {
        if (i < textToType.length) {
            element.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typing, 80);
        } else {
            finalYesBtn.classList.remove('hidden');
        }
    }
    typing();
}

finalYesBtn.addEventListener('click', () => {
    document.getElementById('message-screen').classList.add('hidden');
    document.getElementById('galaxy-screen').classList.remove('hidden');
    createGalaxy();
    initFireworks();
});

function createGalaxy() {
    const container = document.getElementById('floating-items-container');
    const starsContainer = document.querySelector('.stars-container');

    // สร้างดาวพื้นหลัง
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3;
        star.style.width = `${size}px`; star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`; star.style.top = `${Math.random() * 100}vh`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        starsContainer.appendChild(star);
    }

    // สร้างของลอย (เน้นความเร็ว)
    galaxyItemsData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'floating-item';
        div.innerHTML = item.type === 'text' ? `<span class="float-text-style">${item.content}</span>` : `<img src="${item.content}" class="float-img-style">`;
        div.style.left = `${Math.random() * 80 + 10}vw`; 
        div.style.top = `${Math.random() * 80 + 10}vh`;

        // สุ่มความเร็ว (5-8 วินาที = เร็ว)
        const duration = Math.random() * 3 + 5; 
        div.style.animation = `floatMovement ${duration}s infinite alternate ease-in-out`;
        div.style.setProperty('--x', `${(Math.random() - 0.5) * 500}px`);
        div.style.setProperty('--y', `${(Math.random() - 0.5) * 500}px`);
        container.appendChild(div);
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-fall'; heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `falling ${Math.random() * 2 + 3}s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// ระบบพลุ
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function initFireworks() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    animate();
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        for (let i = 0; i < 35; i++) particles.push(new Particle(x, y));
    }, 600);
}
class Particle {
    constructor(x, y) {
        this.x = x; this.y = y;
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        this.velocity = { x: (Math.random() - 0.5) * 8, y: (Math.random() - 0.5) * 8 };
        this.alpha = 1;
    }
    draw() { ctx.globalAlpha = this.alpha; ctx.beginPath(); ctx.arc(this.x, this.y, 2, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
    update() { this.x += this.velocity.x; this.y += this.velocity.y; this.alpha -= 0.01; }
}
function animate() {
    requestAnimationFrame(animate); ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => { if (p.alpha > 0) { p.update(); p.draw(); } else { particles.splice(i, 1); } });
}