<?php

namespace App\Controllers\API;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\API\TransaksiModel;
use CodeIgniter\HTTP\RequestTrait;

class Transaksi extends ResourceController
{
    use ResponseTrait;
    protected $pemesanan;

    public function __construct()
    {
        helper('template');
        $this->pemesanan = new TransaksiModel();
    }

    public function pinjamBuku()
    {
        $tujuh_hari        = mktime(0, 0, 0, date("n"), date("j") + 7, date("Y"));
        $data = [

            'id_member' => $this->request->getVar('id_member'),
            'id_buku' => $this->request->getVar('id_buku'),
            'status' => $this->request->getVar('status'),
            'tanggal_pinjam' => date('Y-m-d'),
            'tanggal_kembali' => date('Y-m-d', $tujuh_hari),
        ];

        $result = $this->pemesanan->insert($data);
        if ($result) {
            return $this->respond([
                'status' => 0,
                'message' => 'Peminjaman buku berhasil',

            ], 200);
        } else {
            return $this->respond([
                'status' => 1,
                'message' => 'Peminjaman bukuk gagal!'
            ], 400);
        }
    }


    public function show($nama = null, $judul = null)
    {
        $nama = $this->request->getVar('nama');
        $judul = $this->request->getVar('judul');
        $result = $this->pemesanan->getTransaksi($nama, $judul);
        if ($result) {
            return $this->respond(
                [
                    'status' => 0,
                    'message' => 'Berhasil Mengambil Data',
                    'payload' => $result

                ],
                200
            );
        } else {
            return $this->respond([
                'status' => false,
                'message' => 'data tidak ditemukan!'
            ], 400);
        }
    }
}
