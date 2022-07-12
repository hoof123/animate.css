<?php
/**
* Plugin Name: animate.css
* Plugin URI: https://animate.style/
* Description: a wordpress plugin to install the animate.css library, with custom scrolling integration.
* Version: 1.1
* Author: Jake Price | JP Creative Media
* Author URI: https://jpcreativemedia.ca/
**/

// hooks
add_action( 'wp_enqueue_scripts' , 'animate_enqueue_scripts' );

// register styles & scripts
function animate_enqueue_scripts() {

    // library
    wp_register_style('animate-css', plugin_dir_url( __FILE__ ) . 'css/animate.css', 1.0, false);
    wp_enqueue_style('animate-css');

    // custom
    wp_register_style('animate-custom-css', plugin_dir_url( __FILE__ ) . 'css/animate-custom.css', 1.0, false);
    wp_enqueue_style('animate-custom-css');

    // intersection api
    wp_register_script('scrollObserver', plugin_dir_url( __FILE__ ) . 'js/scrollObserver.min.js', 1.0, false);
    wp_enqueue_script('scrollObserver');

    // intersection api custom
    wp_register_script('scrollObserver-custom', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-custom.js', 1.0, false);
    wp_enqueue_script('scrollObserver-custom');
}