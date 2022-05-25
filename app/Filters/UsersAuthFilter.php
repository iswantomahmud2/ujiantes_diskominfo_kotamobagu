<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class UsersAuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // if (is_null(session()->get('logged_in'))) {
        //     return redirect()->to(base_url('auth/index'));
        // }
        // if (is_null(session()->get('logged_in'))) {
        //     return redirect()->to(base_url('/auth/index'));
        // }
    }

    //--------------------------------------------------------------------

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // // Do something here
        // if (session()->role == 2) {
        //     return redirect()->to('/dashboard/index');
        // }
    }
}
