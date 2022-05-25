<?php

namespace App\Models\API;

use CodeIgniter\Model;

class MemberModel extends Model
{
    protected $table = 'tb_member';
    protected $primaryKey = 'id';
    protected $allowedFields = ['nama', 'alamat', 'no_hp',];

    public function getMember()
    {
        return $this->findAll();
    }
    public function getMemberBy($id)
    {
        return $this->where('id', $id)->findAll();
    }
}
