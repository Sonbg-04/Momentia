<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/home', [HomeController::class, 'index']);

Route:: get('/{momentia}', function () {
    return view('main');
})->middleware('check.route');

// Route:: get('/momentia', [HomeController::class, 'momentia']);

// Route::controller(HomeController::class)->group(function () {
//     Route:: get('/home', 'index');
//     Route:: get('/momentia', 'momentia');
// });

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/test', function () {
        return 'Admin Test Page';
    });
    Route::get('/dashboard', function () {
        return 'Admin Dashboard Page';
    });
});


