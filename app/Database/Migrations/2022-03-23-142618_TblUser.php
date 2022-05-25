<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class TblUser extends Migration
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
            'email' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],
            'password' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'role' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => TRUE
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
        $this->forge->createTable('tbl_user');
    }

    public function down()
    {
        $this->forge->dropTable('tbl_user');
    }
}
