/**
 * Main scripts
 * @author mleone
 * @version 1.3
 **/

$(document).ready(function(){

    var $sidebar   = $("#sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    function setPieChart(holder, x, y, radius, data)
    {
        x = x || 100;
        y = y || 100;
        radius = radius || 50;
        data = data || [];

        var r = Raphael(holder),
            pie = r.piechart(x, y, radius, data, {init: true, colors:['#000', '#fff'], stroke: 'none'});
        pie.rotate(200);
    }

    function addReadMore(el, h)
    {
        $(el).readmore({
            maxHeight: h,
            moreLink: '<button type="button" class="btn btn-link btn-xs round-none red">LEGGI TUTTO <i class="fa fa-chevron-down"></i></button>',
            lessLink: '<button type="button" class="btn btn-link btn-xs round-none red">CHIUDI <i class="fa fa-chevron-up"></i></button>'
        });
    }

    /*$window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });*/

    $window.load(function(){
        setPieChart("pie", 30, 30, 30, [90, 10]);
    });

    $window.resize(function(){
        $('.read-more').readmore('destroy');
        addReadMore('.read-more', 175);
    });

    addReadMore('.read-more', 175);


});
