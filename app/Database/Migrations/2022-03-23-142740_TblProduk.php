<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class TblProduk extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => TRUE,
                'auto_increment' => TRUE,
            ],
            'nama_produk' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],
            'deskripsi' => [
                'type' => 'TEXT',
            ],
            'harga' => [
                'type' => 'INT',
                'constraint' => 20,
            ],
            'ukuran' => [
                'type' => 'TEXT',
            ],
            'warna' => [
                'type' => 'TEXT',
            ],

            'gambar' => [
                'type' => 'TEXT',
            ],
            'status' => [
                'type' => 'ENUM',
                'constraint' => ['0', '1'],
            ],
            'kategori' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],

            'created_at' => [
                'type' => 'DATETIME',

            ],
            'updated_at' => [
                'type' => 'DATETIME',
            ]
        ]);
        $this->forge->addKey('id', TRUE);
        $this->forge->createTable('tbl_produk');
    }


    public function down()
    {
        $this->forge->dropTable('tbl_produk');
    }
}
