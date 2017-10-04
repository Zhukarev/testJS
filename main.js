/**
 * Created by Vladimir on 30.09.2017.
 */
$(document).ready(function () {
    $.ajax({
        url: 'https://dev.nexusmedia-ua.com/devtest/',
        dataType: 'json',
        success: function (data) {

            var htmlstr = '<div style="position: absolute;' +
                'right: 0; bottom: 0; ' +
                'width: 25%;height: 18%;">' +

                '<div  class="vis butvis" style="margin-left: 300px;"><span class="glyphicon glyphicon-envelope" style="cursor: pointer; margin-top: 50px; color: #3abde8; font-size: 300%; border: 2px;"></span></div>' +
                '<div class="vis hidden" style="background: #ffffff;position: absolute; height: 100px; width:300px ; border-radius: 5px;">';

            for (var i = 0; i < data.messages.length; i++) {
                htmlstr += '<div style="background: #e8e8e8; height:45px; width: 300px; border-radius: 5px 5px 0 0; padding: 5px">';
                htmlstr += '<div style="float:left">' + '<img style="width:30px; border-radius: 30px;" ' +
                    'src=' + data.messages[i].image + '>' + '</div>';

                htmlstr += '<div style="padding-left: 50px;">' + '<div style="font-size: 12px; position: relative;">' + '<b>' + data.messages[i].name + '</b>' + '</div>';
                htmlstr += '<div style="font-size: 10px;">' + data.messages[i].title + '</div>';
                htmlstr += '<div style = "width: 0; height: 0; border-top: 15px solid transparent; border-left: 20px solid #ffffff; border-bottom: 0 solid transparent; -webkit-transform: skew(30deg);margin-left: -25px;">' + '</div>'
                    + '</div>'
                    + '</div>';
                htmlstr += '<div style="padding-top: 10px; padding-left: 10px;padding-right: 10px; font-size: 10px; position: absolute">' + data.messages[i].message + '</div>';
            }
            htmlstr += '<div style="margin-left: 287px; margin-top: 47px;"><span class="glyphicon glyphicon-remove-sign butvis" style="cursor: pointer; color: #3abde8; font-size: 200%"></span></div>';
            htmlstr += '</div></div>';
            document.body.innerHTML = htmlstr;
            $('.butvis').click(function(){
                $('.vis').toggleClass('hidden');
            });
        },
        error: function () {
            alert('Похоже, снова, сервер не работает!');
        }
    });
});