<?php

namespace App\Models\API;

use CodeIgniter\Model;

class BukuModel extends Model
{
    protected $table = 'tb_buku';
    protected $primaryKey = 'id';
    protected $allowedFields = ['judul', 'pengarang', 'penerbit', 'tahun', 'isbn'];

    public function getBuku()
    {
        return $this->findAll();
    }
    public function getWhere($id)
    {
        return $this->where('id', $id)->findAll();
    }
}
