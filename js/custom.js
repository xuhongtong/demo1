$(function () {
    $.get('json/movies.json',function (result) {
        if(result.returnCode==='0'){
            for(var movies of result.returnValue){
                $('.all_hot')
                    .append($('<div>').addClass('movie')
                        .append($('<img>').attr('src','https://img.alicdn.com/bao/uploaded/'+movies.poster+'_300x300.jpg'))
                        .append($('<p>')
                            .append($('<span>').text(movies.showName)
                            )
                            .append($('<span>').text('9.0')
                            )
                        )
                        .append($('<div>').addClass('buy')
                            .append($('<a>').attr('src','#').text('选座购票')
                            )
                        )
                        .append($('<div>').addClass('detail')
                            .append($('<p>').text('导演:' + movies.director)

                            )
                            .append($('<p>').text('主演：' + movies.showNameEn)
                            )
                            .append($('<p>').text('类型：' + movies.type)
                            )
                            .append($('<p>').text('地区：' + movies.country)
                            )
                            .append($('<p>').text('语言：' + movies.language)
                            )
                            .append($('<p>').text('时长：' + movies.duration + '分钟')
                            )
                        )
                    )
            }
            for(var moviess of result.returnValue){
                $('.all_will')
                    .append($('<div>').addClass('movie')
                        .append($('<img>').attr('src','https://img.alicdn.com/bao/uploaded/'+movies.poster+'_300x300.jpg'))
                        .append($('<p>')
                            .append($('<span>').text(movies.showName)
                            )
                            .append($('<span>').text('9.0')
                            )
                        )
                        .append($('<div>').addClass('buy')
                            .append($('<a>').attr('src','#').text('选座购票')
                            )
                        )
                        .append($('<div>').addClass('detail')
                            .append($('<p>').text('导演:' + movies.director )

                            )
                            .append($('<p>').text('主演：' + movies.showNameEn )
                            )
                            .append($('<p>').text('类型：' + movies.type )
                            )
                            .append($('<p>').text('地区：' + movies.country)
                            )
                            .append($('<p>').text('语言：' + movies.language)
                            )
                            .append($('<p>').text('时长：' + movies.duration + '分钟')
                            )
                        )
                    )
                $(function () {
                    $('.movie').mouseover(function () {
                        $(this).find('.detail').slideDown('fast')

                    });
                    $('.movie').mouseleave(function () {
                        $(this).find('.detail').slideUp('fast')
                    });
                });
            }
        }
    })
});



$(function () {
    $('.hot_btn').click(function () {
        $('.all_hot').show();
        $('.all_will').hide()
    })
});

$(function () {
    $('.will_btn').click(function () {
        $('.all_hot').hide();
        $('.all_will').show()
    })
});

