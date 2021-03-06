/**
 * Theme Name: Basic
 * Version: 1.0.0
 * Theme URL: http://sequencejs.com/themes/basic/
 *
 * A simple, colorful side-to-side slider
 *
 * This theme is powered by Sequence.js - The
 * responsive CSS animation framework for creating unique sliders,
 * presentations, banners, and other step-based applications.
 *
 * Author: Ian Lunn
 * Author URL: http://ianlunn.co.uk/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited unless otherwise stated.
 */

// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  startingStepAnimatesIn: true,
  autoPlay: true,
  nextButton: true,
  prevButton: true,
  preloader: true,
  navigationSkip: false,
  autoPlayInterval: 10000,
  /* Make this the same as the animateCanvasDuration */
  phaseThreshold: 250,
  reverseWhenNavigatingBackwards: true,
  fadeStepWhenSkipped: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
