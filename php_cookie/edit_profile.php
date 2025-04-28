<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['profile'] = [
        'name' => htmlspecialchars($_POST['name']),
        'age' => (int)$_POST['age'],
        'city' => htmlspecialchars($_POST['city'])
    ];
    setcookie('name', $_SESSION['profile']['name'], time() + (30 * 24 * 60 * 60));
    header('Location: profile.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Редагування профілю</title>
</head>
<body>
    <h1>Редагувати профіль</h1>
    <form method="POST" action="edit_profile.php">
        <label for="name">Ім'я:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="age">Вік:</label>
        <input type="number" id="age" name="age" required><br><br>
        <label for="city">Місто:</label>
        <input type="text" id="city" name="city" required><br><br>
        <button type="submit">Зберегти</button>
    </form>
</body>
</html>