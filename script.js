// 卡片数据
const cardData = {
    "书法艺术": {
        "title": "书法艺术",
        "mainImage": "images/670b901fc6244385e6fa25650b591e93.jpeg",
        "intro": '书法，被誉为"无声的诗，无形的舞"，是中国特有的一种视觉艺术，也是世界公认的东方艺术瑰宝。',
        "history": "书法艺术的历史可以追溯到甲骨文时期。经历了秦汉隶书、魏晋草书、唐楷书等多个发展阶段，各个时期都产生了享誉后世的书法大家，如王羲之、颜真卿、苏轼等。",
        "characteristics": [
            "讲究笔法与结构",
            "重视气韵与神韵",
            "强调书写过程中的意境表达",
            "注重作品的整体布局与章法"
        ],
        "significance": "书法不仅是一种艺术表现形式，更是中国传统文化的重要载体，体现了中国人的审美观念和哲学思想。",
        "relatedHistory": "书法艺术在中国历史上有着重要地位。秦始皇统一文字后，隶书逐渐成熟；东汉时期，蔡邕、张芝等书法家推动了书法艺术的发展；魏晋时期，王羲之创造了永和九年兰亭集序，被誉为'天下第一行书'；唐朝时期，颜真卿、柳公权等书法家的作品对后世产生了深远影响；宋元时期，苏轼、黄庭坚等文人将书法艺术推向新的高峰。"
    },
    "国画艺术": {
        "title": "国画艺术",
        "mainImage": "images/2d118245_E656370_68d19480.jpg",
        "intro": "国画是中国传统绘画艺术，以水墨为主要表现形式，讲究意境的营造和笔墨的表现。",
        "history": "中国绘画源远流长，从新石器时代的岩画，到秦汉壁画，再到隋唐的兴盛，宋元的成熟，形成了独特的艺术体系。",
        "characteristics": [
            "以水墨为主要表现手法",
            "重视留白与意境",
            "强调写意与抒情",
            "讲究笔墨韵味"
        ],
        "significance": "国画艺术体现了中国传统文化中'天人合一'的哲学思想，是东方美学的典范代表。",
        "relatedHistory": "中国绘画发展历程悠久。先秦时期就有了彩陶、岩画等绘画形式；汉代发展出了具有特色的画像石、画像砖；魏晋南北朝时期，顾恺之开创了人物画的新纪元；唐代张择端的《清明上河图》展现了时社会的繁荣景象；宋代的山水画达到了巅峰，出现了李唐、范宽等大师；元代水墨画兴起，形成了'元四家'等画派。"
    },
    "传统节日": {
        "title": "传统节日",
        "mainImage": "images/0cfcaa5ded6a39b92cbfb09b035cf7be.jpeg",
        "intro": "中国传统节日是中华民族智慧的结晶，承载着深厚的文化内涵和民族情感。",
        "history": "中国传统节日的形成可以追溯到远古时期，是农耕文明与天人合一思想的完美结合。",
        "characteristics": [
            "与农耕文明密切相关",
            "蕴含丰富的文化内涵",
            "具有独特的民俗活动",
            "承载着深厚的家国情怀"
        ],
        "significance": "传统节日是中华文化的重要组成部分，不仅维系着中华民族的情感纽带，也是文化传承的重要载体。",
        "relatedHistory": "中国传统节日的形成与发展历史悠久。春秋战国时期就有了重要节日的雏形；秦汉时期，年节、上巳节等节日逐渐固定；魏晋南北朝时期，端午节、七夕节等民间节日广受欢迎；唐宋时期，元宵节、中秋节等节日活动更加丰富多彩；明清时期，传统节日的庆祝方式和文化内涵进一步富和发展。"
    },
    "儒家思想": {
        "title": "儒家思想",
        "mainImage": "images/174e0ca9afca992f0c06b649b3fd5921.jpg",
        "intro": "儒家思想是中国传统文化的主干，对中华文明的发展产生了深远的影响。",
        "history": "儒家思想始于春秋战国时期的孔子，经过孟子、荀子的发展，到汉代成为官方哲学。",
        "characteristics": [
            "以仁为核心的道德体系",
            "重视教育与修身",
            "强调礼制和秩序",
            "推崇中庸之道"
        ],
        "significance": "儒家思想塑造了中国人的价值观念和行为方式，是理解中国文化的重要钥匙。",
        "relatedHistory": "儒家思想的发展经历了漫长的历程。春秋时期，孔子创立儒家学说；战国时期，孟子发展了性善论，荀子提出了性恶论；汉代董仲舒将儒家思想系统化；魏晋南北朝时期，儒学与玄学交融；宋明时期，朱熹、王阳明等人发展出理学和心学，使儒家思想更加丰富和深刻。"
    },
    "茶艺文化": {
        "title": "茶艺文化",
        "mainImage": "images/b37e99dc6df90511cd1fec360d13e260.png",
        "intro": "茶艺是中国传统文化的精髓，体现中国人对生活的审美和智慧。",
        "history": "中国茶文化已有数千年历史，从神农尝百草到唐代陆羽《茶经》，再到宋代点茶法的兴起。",
        "characteristics": [
            "讲究茶具的选用与搭配",
            "重视泡茶技艺与程序",
            "强调品茶环境与氛围",
            "注重茶道精神的传承"
        ],
        "significance": "茶艺文化不仅是一种饮品文化，更是中国人生活美学和精神追求的体现。",
        "relatedHistory": "中国茶文化源远流长。神农时期就有了饮茶的记载；西周时期，茶被作为祭品；春秋战国时期，茶开始在江南地区流行；唐代陆羽撰写《茶经》，系统总结了茶道文化；宋代形成了独特的点茶法，并出现了斗茶之风；明清时期，工夫茶、功夫茶等茶艺形式得到发展，茶馆文化兴盛。"
    },
    "道家思想": {
        "title": "道家思想",
        "mainImage": "images/1c54357a19dbd622a4d161ffbd019b27.jpg",
        "intro": "道家思想是中国传统文化的重要组成部分，强调自然无为和天人合一。",
        "history": "道家思想源于老子、庄子，强调'道法自然'，对中国传统文化产生了深远影响。",
        "characteristics": [
            "崇尚自然无为",
            "追求天人合一",
            "重视清静无欲",
            "强调顺应自然"
        ],
        "significance": "道家思想为中国传统文化提供了独特的智慧，影响了中国人的生活方式和价值观。",
        "relatedHistory": "道家思想的发展历程丰富多彩。春秋战国时期，老子著《道德经》，庄子著《庄子》，奠定了道家思想的基础；秦汉时期，黄老之学兴起；魏晋时期，道教正式形成，玄学盛行；唐宋时期，道教与佛教、儒家思想相互融合；明清时期，道家思想在民间广泛传播，对中国传统文化产生深远影响。"
    }
};

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('detailModal');
    const closeModal = document.querySelector('.close-modal');
    const cards = document.querySelectorAll('.card');

    // 为每个卡片添加点击事件
    cards.forEach(card => {
        const readMoreBtn = card.querySelector('.read-more');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const title = card.querySelector('h2').textContent;
                const data = cardData[title];
                
                // 添加调试信息
                console.log('点击的标题:', title);
                console.log('找的数据:', data);
                
                if (data) {
                    // 填充模态框内容
                    modal.querySelector('.modal-image').src = data.mainImage;
                    modal.querySelector('.modal-title').textContent = data.title;
                    modal.querySelector('.intro-text').textContent = data.intro;
                    
                    // 填充历史部分
                    modal.querySelector('.history .section-content').textContent = data.history;
                    
                    // 填充特点部分
                    const characteristicsHtml = data.characteristics
                        .map(char => `<li>${char}</li>`)
                        .join('');
                    modal.querySelector('.characteristics .section-content').innerHTML = `<ul>${characteristicsHtml}</ul>`;
                    
                    // 填充文化意义
                    modal.querySelector('.significance .section-content').textContent = data.significance;
                    
                    // 替换原来的图片库代码，为显示相关历史
                    const relatedHistoryContent = modal.querySelector('.related-history .section-content');
                    if (relatedHistoryContent) {
                        relatedHistoryContent.textContent = data.relatedHistory;
                    }
                    
                    modal.style.display = 'block';
                } else {
                    console.error('未找到对应的数据:', title);
                }
            });
        }
    });

    // 关闭模态框的点击事件
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 添加分类筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 移除所有按钮的 active 类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的 active 类
            this.classList.add('active');
            
            // 筛选卡片
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 二维码悬浮球功能
    const qrFloatBall = document.querySelector('.qr-float-ball');
    const qrContainer = document.querySelector('.qr-container');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    // 点击悬浮球显示/隐藏二维码
    qrFloatBall.addEventListener('click', function(e) {
        if (isDragging) {
            e.stopPropagation();
            return;
        }
        qrContainer.classList.toggle('show');
    });

    // 点击其他地方隐藏二维码
    document.addEventListener('click', function(e) {
        if (!qrContainer.contains(e.target) && !qrFloatBall.contains(e.target)) {
            qrContainer.classList.remove('show');
        }
    });

    // 拖动功能
    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === qrFloatBall) {
            isDragging = true;
            qrFloatBall.classList.add('dragging');
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        qrFloatBall.classList.remove('dragging');
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, qrFloatBall);
        }
    }

    function setTranslate(xPos, yPos, el) {
        // 获取视窗尺寸
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        // 获取元素尺寸
        const ballRect = el.getBoundingClientRect();
        const ballWidth = ballRect.width;
        const ballHeight = ballRect.height;

        // 限制x轴范围
        xPos = Math.min(Math.max(xPos, 0), windowWidth - ballWidth);
        // 限制y轴范围
        yPos = Math.min(Math.max(yPos, 0), windowHeight - ballHeight);

        // 更新悬浮球位置
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

        // 始终将二维码容器显示在悬浮球左侧
        qrContainer.style.right = '100%';
        qrContainer.style.left = 'auto';
        qrContainer.style.marginRight = '20px';
        
        // 确保箭头指向正确
        qrContainer.style.setProperty('--arrow-direction', 'right');
    }

    // 添加事件监听器
    qrFloatBall.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    qrFloatBall.addEventListener('touchstart', dragStart);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', dragEnd);

    // 添加 CSS 变量来控制箭头方向
    document.documentElement.style.setProperty('--arrow-direction', 'right');

    // 修改箭头样式
    const style = document.createElement('style');
    style.textContent = `
        .qr-container::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
        }
        
        .qr-container[style*="--arrow-direction: right"]::after {
            right: -10px;
            border-left: 10px solid white;
            border-right: none;
        }
        
        .qr-container[style*="--arrow-direction: left"]::after {
            left: -10px;
            border-right: 10px solid white;
            border-left: none;
        }
    `;
    document.head.appendChild(style);
}); 