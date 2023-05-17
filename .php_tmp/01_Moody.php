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
    <?php
    $dir = 'https://i.postimg.cc/gallery/wBRqBtr';
    $files = scandir($dir);

    foreach ($files as $file) {
      $ext = pathinfo($file, PATHINFO_EXTENSION);
      if ($ext === 'jpg' || $ext === 'jpeg' || $ext === 'png' || $ext === 'gif') {
        echo "<img src='$dir$file' alt='image' />";
      }
    }
    ?>
  </div>
  <script src="js/main.js"></script>
</body>

</html>