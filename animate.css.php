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

        // data attribute based
        // wp_register_script('scrollObserver-data', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-data.js', 1.0, false); // regular
        // wp_register_script('scrollObserver-data', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-data.min.js', 1.0, false); // min
        // wp_enqueue_script('scrollObserver-data');
    
        // class based
        // wp_register_script('scrollObserver-class', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-class.js', 1.0, false); // regular
        wp_register_script('scrollObserver-class', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-class.min.js', 1.0, false); // min
        wp_enqueue_script('scrollObserver-class');

    // intersection api custom - data attribute based
    // wp_register_script('scrollObserver-custom-data', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-custom-data.js', 1.0, false);
    // wp_enqueue_script('scrollObserver-custom-data');

    // intersection api custom - class based
    wp_register_script('scrollObserver-custom-class', plugin_dir_url( __FILE__ ) . 'js/scrollObserver-custom-class.js', 1.0, false);
    wp_enqueue_script('scrollObserver-custom-class');
}