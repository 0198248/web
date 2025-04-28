<?php
session_start();
if (!isset($_SESSION['profile'])) {
    header('Location: edit_profile.php');
    exit();
} else {
    header('Location: profile.php');
    exit();
}
?>