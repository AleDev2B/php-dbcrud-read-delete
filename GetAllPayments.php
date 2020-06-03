<?php

  header('Content-Type: application/json');

  $server = 'localhost';
  $username = 'root';
  $password = 'root';
  $dbName = 'HotelDB';

  $conn = new mysqli($server, $username, $password, $dbName);
  if ($conn -> connect_errno) {
  echo $conn -> connect_errno;
  return;
  }
  $sql = "
  SELECT status, price, id
  FROM pagamenti
  ";

  $results = $conn -> query($sql);
  if ($results -> num_rows < 1) {
  echo "no result";
  return;
  }

  while ($row = $results -> fetch_assoc()) {
  $res[] = $row;
  }
  echo json_encode($res);
  $conn -> close();

 ?>
