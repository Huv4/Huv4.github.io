<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8" name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="stylesheet" href="css/styles.css">
  <script src="https://kit.fontawesome.com/26297b1dd1.js" crossorigin="anonymous"></script>
  <title>Moody - Felix Dressler</title>
</head>

<body>
  <h1>
    FELIX DRESSLER.
  </h1>
  <div>
    <div>
      <?php
      $handle = opendir(dirname(realpath(__FILE__)) . '/images/');
      while ($file = readdir($handle)) {
        if ($file !== '.' && $file !== '..') {
          echo '<img src="images/' . $file . '" border="0" />';
        }
      }
      ?>
    </div>
  </div>
  <script src="js/main.js"></script>

</body>

</html>