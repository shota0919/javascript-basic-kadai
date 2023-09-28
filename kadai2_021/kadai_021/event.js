const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById("text").innerText = "ボタンをクリックしました";
      }, 2000);
});