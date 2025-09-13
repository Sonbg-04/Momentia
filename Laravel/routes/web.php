<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/momentia', function () {
    return view('main');
});

Route::get('/test-response', function (){
    return response()->json([
        'fullname' => 'Sơn',
        'email' => 'son@gmail.com'
    ], 403);
    // return response('Nội dung', 200)->header('Content-Type', 'text/plain');
    // return response()->download(storage_path('link..'));

});

// Route::get('/test', function () {
//     return view('test');
// });

Route::get('/test-bladephp', [HomeController::class, 'test']);

Route::controller(TestController::class)->group(function () {
    Route::get('/test', 'index');
    Route::post('/test-showall', 'show');
    Route::post('/test-showname', 'showname');
    Route::post('/test-query', 'query');
    Route::post('/test-checkname', 'checkName');
    Route::post('/test-checkmethod', 'checkMethod');
    Route::post('/test-uploadfile', 'uploadFile');
    Route::post('/test-validate', 'validateInput');
});

// Route::prefix('admin')->group(function () {
//     Route::get('/users', function () {
//         return 'Admin Users Page';
//     });
// });
