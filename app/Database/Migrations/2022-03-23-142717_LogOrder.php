<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class LogOrder extends Migration
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
            'harga' => [
                'type' => 'INT',
                'constraint' => 20,
            ],
            'qty' => [
                'type' => 'INT',
                'constraint' => '3',
            ],
            'total' => [
                'type' => 'INT',
                'constraint' => 20,
            ],
            'kd_pemesanan' => [
                'type' => 'VARCHAR',
                'constraint' => 11,
            ],
            'id_pelanggan' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => TRUE,
            ],
            'created_at' => [
                'type' => 'DATETIME',

            ],
            'updated_at' => [
                'type' => 'DATETIME',
            ]
        ]);
        $this->forge->addKey('id', TRUE);
        // $this->forge->addForeignKey('kd_pemesanan', 'tbl_order', 'kd_pemesanan');
        $this->forge->addForeignKey('id_pelanggan', 'tbl_pelanggan', 'id');
        $this->forge->createTable('log_order');
    }

    public function down()
    {
        $this->forge->dropTable('log_order');
    }
}
