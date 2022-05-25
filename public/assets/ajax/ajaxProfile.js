var table; 
var save_method;
var url;



function show() {
    save_method = 'save';

    $('#modalEditProfil form')[0].reset();
    $('#form-group').removeClass('has-error');
    $('.text-danger error').empty();
    $('#modalEditProfil').modal('show');
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
                $('#modalEditProfil').modal('hide');
                notifKategori( data.message);
                // reload_Produk();
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

function ajaxEditProfile(email) { 
     save_method = 'edit';
    $('#modalEditProfil form')[0].reset();
    $('#form-group').removeClass('has-error');
    $('.text-danger error').empty();

    $.ajax({
        url: urlEdit+email,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('[name="email"]').val(data.email);
            $('[name="nama_lengkap"]').val(data.nama_lengkap);
            if (data.img_profil == '' || data.img_profil == null) {
                $('.img-preview').html('<label class="col-form-label col-form-label-sm">tidak ada gambar</label>')
            } else {
                $('.img-preview').attr('src', urlImg + data.img_profil);
            }

            $('#modalEditProfil').modal('show');
            $('.modal-title').text('Ubah Profile');
            $('#btn-save').text('Update');
            
        }, 
        error: function (jqXHR, textStatus, errorThrown) {
            error(errorThrown);
          
        }
    });
}


function imgPreview() {
    const img_profil = document.querySelector('#img_profil');
    const imgPreview = document.querySelector('.img-preview');

    const fileimg = new FileReader();
    fileimg.readAsDataURL(img_profil.files[0]);
    fileimg.onload = function (e) {
        imgPreview.src = e.target.result;
    }
}