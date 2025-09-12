<?php

namespace App\Http\Controllers;

class HomeController
{
    public function index()
    {
        return 'Home Page';
    }

    public function momentia()
    {
        return view('main');
    }
}