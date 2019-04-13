function display(name) {
    list = series[name];
    $(document).ready(function () {
        links = list.links;
        for (season in links) {
            for (ep in links[season]) {
                $('#table').append('<tr style="border:0">');
                $('#table').append('<td style="border:0">' + season + ep + '</td>');
                if (links[season][ep].magnet) {
                    $('#table').append('<td style="border:0"><a href="' + links[season][ep].magnet + '">磁力</a></td>');
                }
                if (links[season][ep].ed2k) {
                    $('#table').append('<td style="border:0"><a href="' + links[season][ep].ed2k + '">电驴</a></td>');
                }
                if (links[season][ep].weiyun) {
                    $('#table').append('<td style="border:0"><a href="' + links[season][ep].weiyun + '" target="_blank">微云</a></td>');
                }
                if (links[season][ep].diyidan) {
                    $('#table').append('<td style="border:0"><a href="' + links[season][ep].diyidan + '" target="_blank">第一弹</a></td>');
                }
                if (links[season][ep].bd) {
                    $('#table').append('<td style="border:0"><a href="' + links[season][ep].bd + '" target="_blank">百度云 </a><span class="bdcode" data-clipboard-target="#bdcode' + season + ep + '">' + (links[season][ep].bdcode?('点此复制：</span><span id="bdcode' + season + ep + '">' + links[season][ep].bdcode + "</span>"):"") + '</td>');
                }
                $('#table').append('</tr>');

            }
            $('#table').append('<tr height="20px"></tr>');
        }
        // info = list.info;
        // $.get("https://www.omdbapi.com/?i=" + info.imdb + "&apikey=b4796ad7", function (data, status) {

        //     $("#score").append(data.imdbRating);
        //     if (data.imdbRating >= 8) {
        //         $("#score").css("color", "green");
        //     }

        // })
    })
}
var clipboard = new ClipboardJS('span')

clipboard.on('success', function (e) {
    // alert('已复制' + e.text)
    $("body").append('<div class="bdAlert">已复制：' + e.text + '</div>');
    setTimeout(function () {$('.bdAlert').remove()}, 1500);
})

// clipboard.on('error', function (e) {
//     $("body").append('<div class="bdAlert">复制失败，请手动复制</div>');
//     setTimeout(function () {$('.bdAlert').remove()}, 1500);
// })