<?php
  $server = 'localhost';
  $username = 'root';
  $password = 'root';
  $dbName = 'HotelDB';

  $id = $_POST["id"];

  if ($id) {
    $conn = new mysqli($server, $username, $password, $dbName);
    if ($conn -> connect_errno) {
    echo $conn -> connect_errno;
    return;
    }
    $sql = "
    DELETE FROM pagamenti WHERE id = " . $id
    ;
    $conn -> query($sql);
    $conn -> close();
  }
 ?>
