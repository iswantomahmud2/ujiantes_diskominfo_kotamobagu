var table; 
var save_method;
var url;

$(document).ready(function () {
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
});

function reload_Kategori() {
    table.ajax.reload(null,false);
}

function show() {
    save_method = 'save';

    $('#modalAddKategori form')[0].reset();
    $('#form-group').removeClass('has-error');
    $('.text-danger error').empty();
    $('#modalAddKategori').modal('show');
    $('.modal-title').text('Tambah Kategori');
}

function ajaxSave() {
    $('#btn-save').text('proses...');
    $('#btn-save').attr('disabled', true);

    if (save_method == 'save') {
        url = urlSave;
    } else {
        url = urlUpdate;
    }

    $.ajax({
        url: url,
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
            } else {
                for (let i = 0; i < data.inputerror.length; i++){
                    $('[name="' + data.inputerror[i] + '"]').parent().parent().addClass('has-error');
                    $('[name="' + data.inputerror[i] + '"]').next().text(data.error_string[i]);
                }
                
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

function ajaxEdit(id) {
    save_method = 'edit';
    $('#modalAddKategori form')[0].reset();
    $('#form-group').removeClass('has-error');
    $('.text-danger error').empty();

    $.ajax({
        url: urlEdit+id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('[name="id"]').val(data.id);
            $('[name="nama_kategori"]').val(data.nama_kategori);
            $('#modalAddKategori').modal('show');
            $('.modal-title').text('Ubah Kategori');
             $('#btn-save').text('Update');
            
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            error(errorThrown);
          
        }
    });
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
                    reload_Kategori();
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
                    reload_Kategori();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                error(errorThrown);
            }
        });
    }
}


