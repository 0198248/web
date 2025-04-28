<?php
session_start();
if (!isset($_SESSION['profile'])) {
    header('Location: edit_profile.php');
    exit();
}
$profile = $_SESSION['profile'];
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Профіль</title>
</head>
<body>
    <h1>Ваш профіль</h1>
    <p><strong>Ім'я:</strong> <?= htmlspecialchars($profile['name']) ?></p>
    <p><strong>Вік:</strong> <?= htmlspecialchars($profile['age']) ?></p>
    <p><strong>Місто:</strong> <?= htmlspecialchars($profile['city']) ?></p>
    <a href="edit_profile.php"><button>Редагувати профіль</button></a>
    <a href="logout.php"><button>Вийти</button></a>
</body>
</html>