<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class TblPelanggan extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],
            'nama_lengkap' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],
            'no_telp' => [
                'type' => 'VARCHAR',
                'constraint' => 15,
            ],
            'email' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],
            'password' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'status' => [
                'type' => 'ENUM',

                'constraint' => ['0', '1'],
            ],
            'img_profil' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'created_at' => [
                'type' => 'DATETIME',
            ],
            'updated_at' => [
                'type' => 'DATETIME',
            ],
        ]);

        $this->forge->addKey('id', TRUE);
        $this->forge->createTable('tbl_pelanggan');
    }

    public function down()
    {
        $this->forge->dropTable('tbl_pelanggan');
    }
}
