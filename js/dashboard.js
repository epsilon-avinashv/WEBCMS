// JavaScript source code


function setVisibility(id, visibility) {
    document.getElementById(id).style.display = visibility;
}   

var x = document.cookie;
$(document).ready(function () {
    document.getElementById("uname").innerHTML = x;
    $.getJSON('http://demo7248437.mockable.io/users', function (data) {
        var banner_data = '';
        $.each(data, function (key, value) {
            if (value.name == x) {
                for (var i = 0; i < value.userbanners.length; i++) {
                    banner_data += '<tr>';
                    banner_data += '<td><input id="box1" type="checkbox" /></td>';
                    banner_data += '<td>' + value.userbanners[i].bannerName + '</td>';
                    banner_data += '<td>' + value.userbanners[i].bannerId + '</td>';
                    banner_data += '<td>' + 'Active' + '</td>';
                    banner_data += '<td><a href="#"><i class="fas fa fa-external-link-alt"></i></a></td>';
                    banner_data += '</tr>';
                }
            }
        });
        $("#banner_table").append(banner_data);
    });
});
