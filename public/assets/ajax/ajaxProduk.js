var table; 
var save_method;
var url;

$(document).ready(function () {
    table = $('#tableProduk').DataTable({
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

function reload_Produk() {
    table.ajax.reload(null,false);
}

function show() {
    save_method = 'save';

    $('#modalAddProduk form')[0].reset();
    $('#form-group').removeClass('has-error');
    $('.text-danger error').empty();
    $('#modalAddProduk').modal('show');
    $('.modal-title').text('Tambah Produk');
    $('.img-preview').attr('src', urlImgDefault);
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
                $('#modalAddProduk').modal('hide');
                notifKategori( data.message);
                reload_Produk();
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
    $('#modalAddProduk form')[0].reset();
    $('#form-group').removeClass('has-error');
    $('.text-danger error').empty();

    $.ajax({
        url: urlEdit+id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('[name="id"]').val(data.id);
            $('[name="nama_produk"]').val(data.nama_produk);
            $('[name="deskripsi"]').val(data.deskripsi);
            $('[name="harga"]').val(data.harga);
            $('[name="ukuran"]').val(data.ukuran);
            $('[name="warna"]').val(data.warna);
            // $('[name="gambar"]').val(data.gambar);
            $('[name="kategori"]').val(data.kategori);
            if (data.gambar == '' || data.gambar == null) {
                $('.img-preview').html('<label class="col-form-label col-form-label-sm">tidak ada gambar</label>')
            } else {
                $('.img-preview').attr('src', urlImg + data.gambar);
            }

            $('#modalAddProduk').modal('show');
            $('.modal-title').text('Ubah Produk');
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
                    reload_Produk();
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
                    reload_Produk();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                error(errorThrown);
            }
        });
    }
}

function imgPreview() {
    const gambar = document.querySelector('#gambar');
    const imgPreview = document.querySelector('.img-preview');

    const fileimg = new FileReader();
    fileimg.readAsDataURL(gambar.files[0]);
    fileimg.onload = function (e) {
        imgPreview.src = e.target.result;
    }
}