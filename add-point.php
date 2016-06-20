<?php
  if ($_POST['nome'] != '' || $_POST['nome'] != null) {
    $path = 'json/pontos.json';
    $jsonString = file_get_contents($path);
    $data = json_decode($jsonString, true);

    $idPoint = count($data['points'])+1;

    array_push($data['points'], array("id" => $idPoint, "nome" => $_POST['nome-local'], "x" => $_POST['x-local'], "y" => $_POST['y-local']));

    $newJsonString = json_encode($data);
    file_put_contents('json/pontos.json', $newJsonString);
  }
?>