window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //import './parts/calc';
    let calc = require('./parts/calc'),
        form = require('./parts/sendForm'),
        modal = require('./parts/modal'),
        scroll = require('./parts/smothingScroll'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');

    calc();
    form();
    modal();
    scroll();
    slider();
    tabs();
    timer();   
       
});
