        function showMessage() {
            alert('Мамо, ми тебе дуже любимо ❤️');
        }

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💖';

            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDuration = 3 + Math.random() * 4 + 's';
            heart.style.fontSize = 15 + Math.random() * 30 + 'px';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        setInterval(createHeart, 300);