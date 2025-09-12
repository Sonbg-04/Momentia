<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="{{ asset('logo/logo_momentia.png') }}">
    <title>Momentia</title>
    @viteReactRefresh
    @vite('resources/src/components/main/main.tsx')
</head>

<body>
    <div id="root"></div>
</body>

</html>