<?php

namespace App\Models\API;

use CodeIgniter\Model;

class TransaksiModel extends Model
{
    protected $table = 'tb_transaksi';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'id_member',
        'id_buku',
        'status',
        'tanggal_pinjam',
        'tanggal_kembali',
    ];

    public function inputData($data)
    {
        $result = $this->insert($data);
        return $result;
    }

    public function getTransaksi($nama, $judul)
    {

        $result = $this->select('tb_transaksi.*, tb_member.id, tb_member.nama, tb_buku.id, tb_buku.judul')->join('tb_member', 'tb_member.id=tb_transaksi.id_member')->join('tb_buku', 'tb_buku.id=tb_transaksi.id_buku')->where('tb_member.nama', $nama)->orderBy('tb_transaksi.id')->findAll();

        if ($result) {
            $data = [];
            foreach ($result as $row) {
                $data[] = [
                    'id' => $row['id'],
                    'nama' => $row['nama'],
                    'judul' => $row['judul'],
                    'status' => $row['status'],
                    'tanggal_pinjam' => formatTgl($row['tanggal_pinjam'], 1),
                    'tanggal_kembali' => formatTgl($row['tanggal_kembali'], 1),
                ];
            }
            return $data;
        }
        return FALSE;
    }
}
