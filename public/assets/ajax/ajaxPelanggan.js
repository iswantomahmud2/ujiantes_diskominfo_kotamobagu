var table; 
var save_method;
var url;

$(document).ready(function () {
    table = $('#tablePelanggan').DataTable({
        "pageLength": 10,
        "autoWidth": true,
        "lengthChange": false,
        "ordering": false,
        "processing": true,
        "searching": true,
        "serverSide": true,
        "deferRender": true,
        "ajax": {
            "url": urlList,
            "type": "GET"
        }
    });
});

function reload_Pelanggan() {
    table.ajax.reload(null,false);
}
function ajaxDelete(id) {
    if (confirm('Apakah data ini akan dihapus?')) {
        $.ajax({
            url: urlDelete + id,
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                if (data.status) {
                    notifKategori(' Data Berhasil dihapus');
                    reload_Pelanggan();
               } 
            },
            error: function (jqXHR, textStatus, errorThrown) {
            error(errorThrown);
          }
        });
    }
}

function ajaxStatus(id) {
    if (confirm('Apakah status ini akan diubah?')) {
        $.ajax({
            url: urlStatus + id,
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                if (data.status) {
                    notifKategori(' Status Berhasil diubah.');
                    reload_Pelanggan();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                error(errorThrown);
            }
        });
    }
}


