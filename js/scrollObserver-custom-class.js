window.addEventListener('load', function() {

// global options

let duration = 1500;
let prevratio = 0.0;

// observer options
let observeroptions = {
    
    root: document.querySelectorAll('.ani-container')[0],
    rootmargin: "-200px 0px -200px 0px",
    threshold: buildthresholdlist()
};

// threshold list
function buildthresholdlist() {

    let thresholds = [];
    let numsteps = 20;
  
    for (let i=1.0; i<=numsteps; i++) {

        let ratio = i/numsteps;
        thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
}

// custom animations

// observers
let observercustomanimation_01 = new IntersectionObserver(customanimation_01, observeroptions);
let observercustomanimation_02 = new IntersectionObserver(customanimation_02, observeroptions);
let observercustomanimation_03 = new IntersectionObserver(customanimation_03, observeroptions);
let observercustomanimation_04 = new IntersectionObserver(customanimation_04, observeroptions);

// targets
document.querySelectorAll('.customanimation_01').forEach(element => {

    observercustomanimation_01.observe(element);
});

document.querySelectorAll('.customanimation_02').forEach(element => {

    observercustomanimation_02.observe(element);
});

document.querySelectorAll('.customanimation_03.').forEach(element => {

    observercustomanimation_03.observe(element);
});

document.querySelectorAll('.customanimation_04').forEach(element => {

    observercustomanimation_04.observe(element);
});

// functions
function customanimation_01(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        let translateFactor = (1 - entry.intersectionRatio) * 100;

        entry.target.style.opacity = entry.intersectionRatio;
        entry.target.style.transform = 'translateY(' + translateFactor + 'px)';
    });
}

function customanimation_02(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__customanimation_02');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__customanimation_02');
        }
    });
}

function customanimation_03(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__customanimation_03');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__customanimation_03');
        }
    });
}

function customanimation_04(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__customanimation_04');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__customanimation_04');
        }
    });
}

// unobservers
// observer.disconnect();

// stop observing #button-01
// observer.unobserve(document.queryselector("#button-01"));

});