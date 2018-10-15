/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 10
      ,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#C0C0C0"
    },
    "shape": {
      "type": "square",
   
      "stroke": {
        "width": 100,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 24
        
      },
      "image": {
        "src": "img/github.svg",
        "width": 1000,
        "height": 100
      }
    },
    "opacity": {
      "value": 20,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 100,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 800,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 3,
        "size_min": 0.9,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#C0C0C0",
      "opacity": 0.9,
      "width": 12
    },
    "move": {
      "enable": true,
      "speed": 25,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 800,
        "rotateY": 1200
      }
    }
    
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 600,
        "size": 4000,
        "duration": 400,
        "opacity": 8,
        "speed": 10
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


