<?php if(!class_exists('Rain\Tpl')){exit;}?><!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="<?php echo htmlspecialchars( $author, ENT_COMPAT, 'UTF-8', FALSE ); ?>">
    <meta name="description" content="<?php echo htmlspecialchars( $description, ENT_COMPAT, 'UTF-8', FALSE ); ?>">
    <title><?php echo htmlspecialchars( $pagetitle, ENT_COMPAT, 'UTF-8', FALSE ); ?></title>
    <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/vendor/slick/slick.css">
    <link rel="stylesheet" href="/vendor/aos/aos.css">
    <link rel="stylesheet" href="/@raven/animations/css/index.css">
    <link rel="stylesheet" href="/css/main.css?v=<?php echo htmlspecialchars( $cache, ENT_COMPAT, 'UTF-8', FALSE ); ?>">
    <link rel="shortcut icon" href="/@vime/images/raven.png" type="image/x-icon">
</head>

<body>