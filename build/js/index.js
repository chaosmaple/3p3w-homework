$(function () {
    $('.people').find('li').on('click',function (){
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).attr('href')).addClass('current animated fadeInDown').siblings('article').removeClass('current')
    })
})