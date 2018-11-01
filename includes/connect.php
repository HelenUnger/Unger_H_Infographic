<?php
$user = "root";
$password = "";
$host = "localhost";
$db = "db_infographic";
$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');
if (!$conn) {
    echo "connection didn't work...";
    exit;
}
//echo "connected!";
// get all the car data
// $myQuery = "SELECT * FROM mainmodel";
// // make the query, get the result
// $result = mysqli_query($conn, $myQuery);
// $rows = array();
// while($row = mysqli_fetch_assoc($result)) {
//     $rows[] = $row;
// }
if (isset($_GET["planet"])) {// check for a parameter ?planet=1
    $planet = $_GET["planet"];
    $myQuery = "SELECT * FROM tbl_planet WHERE planet_id = '$planet'";
    $result = mysqli_query($conn, $myQuery);
    $rows = array();
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}
// send the entire result set as a json encoded array
// echo json_encode($rows);
?>