function display(name) {
    list = series[name];
    // $(document).ready(function () {
    links = list.links;
    // for (season in links) {
    //     for (ep in links[season]) {
    //         $('#table').append('<tr style="border:0" id="' + season + ep + '">');
    //         $('#' + season + ep).append('<td style="border:0">' + season + ep + '</td>');
    //         if (links[season][ep].magnet) {
    //             $('#' + season + ep).append('<td style="border:0"><a href="' + links[season][ep].magnet + '">磁力</a></td>');
    //         }
    //         if (links[season][ep].ed2k) {
    //             $('#' + season + ep).append('<td style="border:0"><a href="' + links[season][ep].ed2k + '">电驴</a></td>');
    //         }
    //         if (links[season][ep].weiyun) {
    //             $('#' + season + ep).append('<td style="border:0"><a href="' + links[season][ep].weiyun + '" target="_blank">微云</a></td>');
    //         }
    //         if (links[season][ep].diyidan) {
    //             $('#' + season + ep).append('<td style="border:0"><a href="' + links[season][ep].diyidan + '" target="_blank">第一弹</a></td>');
    //         }
    //         if (links[season][ep].bd) {
    //             $('#' + season + ep).append('<td style="border:0"><a href="' + links[season][ep].bd + '" target="_blank">百度云 </a><span class="bdcode" data-clipboard-target="#bdcode' + season + ep + '">' + (links[season][ep].bdcode?('点此复制：</span><span id="bdcode' + season + ep + '">' + links[season][ep].bdcode + "</span>"):"") + '</td>');
    //         }
    //     }
    //     $('#table').append('</tr><tr height="20px"></tr>');
    // }
    var tableNode = document.getElementById('table');
    for (season in links) {
        for (ep in links[season]) {
            var trNode = tableNode.insertRow();
            var tdNode = trNode.insertCell();
            tdNode.setAttribute("style", "border: 0;");
            tdNode.innerHTML = season + ep;
            if (links[season][ep].magnet) {
                var tdNode = trNode.insertCell();
                tdNode.setAttribute("style", "border: 0;");
                tdNode.innerHTML = '<a href="' + links[season][ep].magnet + '">磁力</a>';
            }
            if (links[season][ep].ed2k) {
                var tdNode = trNode.insertCell();
                tdNode.setAttribute("style", "border: 0;");
                tdNode.innerHTML = '<a href="' + links[season][ep].ed2k + '">电驴</a>';
            }
            if (links[season][ep].weiyun) {
                var tdNode = trNode.insertCell();
                tdNode.setAttribute("style", "border: 0;");
                tdNode.innerHTML = '<a href="' + links[season][ep].weiyun + '" target="_blank">微云</a>';
            }
            if (links[season][ep].diyidan) {
                var tdNode = trNode.insertCell();
                tdNode.setAttribute("style", "border: 0;");
                tdNode.innerHTML = '<a href="' + links[season][ep].diyidan + '" target="_blank">第一弹</a>';
            }
            if (links[season][ep].bd) {
                var tdNode = trNode.insertCell();
                tdNode.setAttribute("style", "border: 0;");
                tdNode.innerHTML = '<a href="' + links[season][ep].bd + '" target="_blank">百度云 </a><span class="bdcode" data-clipboard-target="#bdcode' + season + ep + '">' + (links[season][ep].bdcode ? ('点此复制：</span><span id="bdcode' + season + ep + '">' + links[season][ep].bdcode + "</span>") : "");
            }
            if (links[season][ep].sub) {
                var tdNode = trNode.insertCell();
                tdNode.setAttribute("style", "border: 0;");
                tdNode.innerHTML = '<a href="' + links[season][ep].sub + '" target="_blank">字幕</a>';
            }
        }
        tableNode.insertRow().insertCell().setAttribute("style", "border: 0;");
    }

    // info = list.info;
    // $.get("https://www.omdbapi.com/?i=" + info.imdb + "&apikey=b4796ad7", function (data, status) {

    //     $("#score").append(data.imdbRating);
    //     if (data.imdbRating >= 8) {
    //         $("#score").css("color", "green");
    //     }

    // })

}
var clipboard = new ClipboardJS('span');
clipboard.on('success', function (e) {
    // $("body").append('<div class="bdAlert">已复制：' + e.text + '</div>');
    // setTimeout(function () {$('.bdAlert').remove()}, 1500);
    mdui.snackbar({
        message: '已复制：' + e.text
    });
})
// clipboard.on('error', function (e) {
//     $("body").append('<div class="bdAlert">复制失败，请手动复制</div>');
//     setTimeout(function () {$('.bdAlert').remove()}, 1500);
// })