<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    // Hiển thị view
    public function index()
    {
        return view('test');
    }

    // Hiển thị tất cả thông tin đã nhập được gửi từ view test
    public function show(Request $request)
    {
        $all = $request->all();
        // return response()->json($all);
        return view('test-show-all', ['allRequest' => $all]);
    }

    // Hiển thị 1 thành phần bất kì (ví dụ tên) được gửi từ view test
    public function showname(Request $request)
    {
        $name = $request->input('fullname');
        return response()->json(['fullname' => $name]);
        // return view('test-show-all', ['allRequest' => $all]);
    }

    // Tìm kiếm với query parameter
    public function query(Request $request)
    {
        $phone = $request->query('phonenumber');
        return 'Tìm kiếm với số điện thoại: ' . $phone;
    }

    // Kiểm tra thành phần tồn tại hay không
    public function checkName(Request $request)
    {
        $check = $request->has('fullname');
        if ($check) {
            return 'Có tên trong request';
        } else {
            return 'Không có tên trong request';
        }
    }

    // Kiểm tra method được sử dụng trong form, ...
    public function checkMethod(Request $request)
    {
        $method = $request->method();
        return 'Phương thức gửi lên là: ' . $method;
    }

    // Upload file
    public function uploadFile(Request $request)
    {
        if ($request->has('thumb')) {
            $file = $request->file('thumb')->store('images');
            return 'File đã được tải lên: ' . $file;
        } else {
            return 'Không có file được tải lên';
        }
    }

    // Validate input
    public function validateInput(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|min:5|max:50',
            'email' => 'required|email'
        ]);
        return 'Dữ liệu hợp lệ ' . $validated['fullname'] . ' ' . $validated['email'];
    }
}
