<?php

namespace App\Controllers\API;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\API\BukuModel;

class Buku extends ResourceController
{
    use ResponseTrait;
    protected $buku;

    public function __construct()
    {
        $this->buku = new BukuModel();
    }

    public function index()
    {

        $result = $this->buku->getBuku();

        return $this->respond([
            'status' => 0,
            'message' => 'Data Buku ditemukan',
            'payload' => $result,
        ], 200);
    }
    public function show($id = null)
    {
        $id = $this->request->getVar('id');
        $result = $this->buku->getWhere($id);
        if ($result) {
            return $this->respond([
                'status' => 0,
                'message' => 'Data Buku ditemukan',
                'payload' => $result,
            ], 200);
        } else {
            return $this->respond([
                'status' => 1,
                'message' => 'Data tidak ditemukan',
            ], 404);
        }
    }
}
