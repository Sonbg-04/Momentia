<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>

<body>
    <h1>Test</h1>
    <form action="/test-showall" method="post">
        @csrf
        <input type="text" name="fullname" placeholder="Họ và tên">
        <input type="email" name="email" placeholder="Email">
        <input type="number" name="phonenumber" placeholder="Số điện thoại">
        <button type="submit">Gửi</button>
    </form>
    <form action="/test-uploadfile" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="thumb">
        <button type="submit">Gửi file</button>
    </form>
</body>

</html> -->
<!-- <?php

        echo $data;

        ?> -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>

<body>
    <h1>Test {{ $data }}</h1> <!--In biến data chưa nhúng-->
    <p>Biến data được in ra sẽ là: {!! $data !!}</p>
    @if ($data < 18)
        <p>Bạn chưa đủ 18 tuổi!</p>
        @else
        <p>Bạn đã {{ $data }} tuổi!</p>
        @endif
</body>

</html>