<?php

namespace App\Controllers\API;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\API\MemberModel;

class Member extends ResourceController
{
    use ResponseTrait;
    protected $member;

    public function __construct()
    {
        $this->member = new MemberModel();
    }

    public function index()
    {

        $result = $this->member->getMember();

        return $this->respond([
            'status' => 0,
            'message' => 'Data Member ditemukan',
            'payload' => $result,
        ], 200);
    }
    public function show($id = null)
    {
        $id = $this->request->getVar('id');
        $result = $this->member->getMemberBy($id);
        if ($result) {
            return $this->respond([
                'status' => 0,
                'message' => 'Data Member ditemukan',
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
