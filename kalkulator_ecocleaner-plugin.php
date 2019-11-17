<?php
/*
Plugin Name: Kalkulator EcoCleaner.shop
Author: Karolina Pikus
Version: 1.0
Description: Kalkulator kosztów utrzymania domu w kontekście sprzątania przy użyciu metod tradycyjnych dla EcoCleaner.Shop
Author URI: https://karolina.pikus.it

*/

wp_enqueue_style('ecocleaner', '/wp-content/plugins/EcoCleaner_v1.0/assets/css/ecocleaner.css');
wp_enqueue_script('ecocleaner', '/wp-content/plugins/EcoCleaner_v1.0/assets/js/ecocleaner.js', array( 'jquery' ));

function ecocleaner_plugin($attrs)
{
    ob_start();
    $content = ob_get_contents();
    ob_end_flush();

    return file_get_contents('./wp-content/plugins/EcoCleaner_v1.0/assets/ecocleaner.html');
}

add_shortcode( 'kalkulator_ecocleaner-plugin', 'ecocleaner_plugin' );