var i = setInterval(function() {
    // Seleciona o botão de menu (três pontos) do primeiro vídeo
    var menu = document.querySelector("ytd-playlist-video-renderer #button");
    if (menu) {
        menu.click();
        setTimeout(function() {
            // Seleciona todos os itens do menu que aparece
            var items = document.querySelectorAll("ytd-menu-service-item-renderer");
            for (var j = 0; j < items.length; j++) {
                if (items[j].innerText.includes("Remover")) {
                    items[j].click();
                    break;
                }
            }
        }, 500);
    } else {
        clearInterval(i);
    }
}, 1000);
