<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    // echo(json_encode("Test PHP... IT WORKS !!!"));

    $data = "Test PHP ... IT WORKS !!! ".($_POST["json_data"] + 2);

    echo(json_encode($data));
    // echo ("Test PHP... IT WORKS !!!");
?>