var table; 
var save_method;
var url;

$(document).ready(function () {
    $('#keterangan').hide();
    table = $('#tableKategori').DataTable({
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

    $('#status').on('change', function () {
        const stt = $(this).val();
        if (stt == 0) {
            $('#keterangan').show();
        } else {
            $('#keterangan').hide();
        }
    });
});

function reload_Kategori() {
    table.ajax.reload(null,false);
}


function ajaxSave() {
    $('#btn-save').text('proses...');
    $('#btn-save').attr('disabled', true);


    $.ajax({
        url: urlSave,
        type: "POST",
        data: new FormData($('#form')[0]),
        contentType: false,
        processData: false,
        dataType: "JSON",
        success: function (data) {
            if (data.status) {
                $('#modalAddKategori').modal('hide');
                notifKategori( data.message);
                reload_Kategori();
            } 

            $('#btn-save').text('Simpan');
            $('#btn-save').attr('disabled', false);
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            error(errorThrown);
            $('#btn-save').text('Simpan');
            $('#btn-save').attr('disabled', false);
        }
    });
}

function ajaxEdit(kd_pemesanan) {
   
    $.ajax({
        url: urlEdit+kd_pemesanan,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('[name="kd_pemesanan"]').val(data.kd_pemesanan);
            $('[name="status"]').val(data.status);
            $('#modalAddKategori').modal('show');
            $('.modal-title').text('Ubah Status Pesanan');
             $('#btn-save').text('Update');
            
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            error(errorThrown);
          
        }
    });

}


