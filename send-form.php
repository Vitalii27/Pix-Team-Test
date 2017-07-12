<?php
header('Content-Type: text/json; charset-utf-8');
if(isset($_POST['email'])&& isset($_POST['name'])){
  $aRes = array('mes' => 'Done auth', 'status' => 'OK');
  echo json_encode($aRes);
}
else{
  echo 'Данные не получены';
}