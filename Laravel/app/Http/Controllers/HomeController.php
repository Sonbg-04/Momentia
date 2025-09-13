<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function test()
    {
        $data = 16;
        return view('test', ['data' => $data]);
    }
    
}
