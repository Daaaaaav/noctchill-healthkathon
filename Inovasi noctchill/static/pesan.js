$(document).ready(function() {
    $("#messageForm").on("submit", function(event) {
        event.preventDefault(); 

        const teksAwal = $("#text").val();
        const tanggal = new Date();
        const jam = tanggal.getHours();
        const menit = tanggal.getMinutes();
        const str_time = jam + ":" + (menit < 10 ? "0" + menit : menit);
        var htmlPengguna = '<div class="d-flex justify-content-end mb-4"><div class="msg_container_send">' + teksAwal + '<span class="msg_time_send">' + str_time + '</span></div></div>';
      
        $("#messageFormeight").append(htmlPengguna);
        $.ajax({
            data: { msg: teksAwal },
            type: "POST",
            url: "/get", 
        }).done(function(data) {
            const tanggal = new Date();
            const jam = tanggal.getHours();
            const menit = tanggal.getMinutes();
            const str_time = jam + ":" + (menit < 10 ? "0" + menit : menit);
            var htmlBot = '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">' + data + '<span class="msg_time">' + str_time + '</span></div></div>';
            $("#messageFormeight").append(htmlBot);
            $("#text").val("");
        });
    });
});
