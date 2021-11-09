<!doctype html>
<html lang="en">
<head>
    <title>Color Crystal</title>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {

            text-align: left;
            padding: 8px;
        }

    </style>
</head>
<body>

<h1 style="text-align:center;">Some Praise</h1>
<table>
    <tr>
        <th>For:{{$data['to_name']}}</th>
        <th>{{$data['to_email']}}</th>
    </tr>
    <tr>
        <th>From:{{$data['from_name']}}</th>
        <td>{{$data['from_email']}}</td>
    </tr>
</table>

<br>

<h3 style="text-align:center;">To send Praise and Find out your true color visit</h3>
<a href="https://thecolourcrystal.com"><h1 style="text-align:center;">The Colour Crystal.com</h1></a>
</body>
</html>
