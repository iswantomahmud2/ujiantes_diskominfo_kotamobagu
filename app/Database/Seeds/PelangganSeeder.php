<?php

namespace App\Database\Seeds;

class PelangganSeeder extends \CodeIgniter\Database\Seeder
{
    public function run()
    {
        $options = [
            'const' => 10,
        ];

        $data = [
            'nama_lengkap' => 'Iswanto Mahmud',
            'no_telp' => '082291116489',
            'email' => 'iswantomahmud2@gmail.com',
            'password' => password_hash('123456', PASSWORD_DEFAULT, $options),
            'status' => '1',
            'img_profil' => 'iswanto.jpg',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s"),
        ];

        $this->db->table('tbl_pelanggan')->insert($data);
    }
}
