<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class TblOrder extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'kd_pemesanan' => [
                'type' => 'VARCHAR',
                'constraint' => 11,
            ],
            'tgl_order' => [
                'type' => 'DATETIME',
            ],
            'total_bayar' => [
                'type' => 'INT',
                'constraint' => 20,
            ],
            'alamat_lengkap' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
            ],
            'latitude' => [
                'type' => 'DOUBLE',
            ],
            'longitude' => [
                'type' => 'DOUBLE',
            ],
            'id_pelanggan' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => TRUE,
            ],
            'status' => [
                'type' => 'ENUM',
                'constraint' => ['0', '1', '2', '3'],
            ],
            'alamat_kirim' => [
                'type' => 'TEXT',
            ],
            'noteCancel' => [
                'type' => 'TEXT',
            ],
            'note' => [
                'type' => 'TEXT',
            ],
            'payment' => [
                'type' => 'VARCHAR',
                'constraint' => 20,
            ],
            'ongkir' => [
                'type' => 'INT',
                'constraint' => 10,
            ],
        ]);
        $this->forge->addKey('kd_pemesanan', TRUE);
        $this->forge->addForeignKey('id_pelanggan', 'tbl_pelanggan', 'id');
        $this->forge->createTable('tbl_order');
    }

    public function down()
    {
        $this->forge->dropTable('tbl_order');
    }
}
