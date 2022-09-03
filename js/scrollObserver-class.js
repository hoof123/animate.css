window.addEventListener('load', function() {

// global options

let duration = 1500;
let prevratio = 0.0;

// observer options
let observeroptions = {
    
    root: null,
    rootmargin: "0px",
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

/*

utility classes 

// delay
.animate__delay-2s
.animate__delay-3s
.animate__delay-4s
.animate__delay-5s

// speed
.animate__slow
.animate__slower
.animate__fast
.animate__faster

// repeats
.animate__repeat-1
.animate__repeat-2
.animate__repeat-3
.animate__infinite

*/

// animations

// observers

// attention seekers
let observerbounce = new IntersectionObserver(bounce, observeroptions);
let observerflash = new IntersectionObserver(flash, observeroptions);
let observerpulse = new IntersectionObserver(pulse, observeroptions);
let observerrubberband = new IntersectionObserver(rubberband, observeroptions);
let observershakex = new IntersectionObserver(shakex, observeroptions);
let observershakey = new IntersectionObserver(shakey, observeroptions);
let observerheadshake = new IntersectionObserver(headshake, observeroptions);
let observerswing = new IntersectionObserver(swing, observeroptions);
let observertada = new IntersectionObserver(tada, observeroptions);
let observerwobble = new IntersectionObserver(wobble, observeroptions);
let observerjello = new IntersectionObserver(jello, observeroptions);
let observerheartbeat = new IntersectionObserver(heartbeat, observeroptions);

// back entrances
let observerbackindown = new IntersectionObserver(backindown, observeroptions);
let observerbackinleft = new IntersectionObserver(backinleft, observeroptions);
let observerbackinright = new IntersectionObserver(backinright, observeroptions);
let observerbackinup = new IntersectionObserver(backinup, observeroptions);

// back exits
let observerbackoutdown = new IntersectionObserver(backoutdown, observeroptions);
let observerbackoutleft = new IntersectionObserver(backoutleft, observeroptions);
let observerbackoutright = new IntersectionObserver(backoutright, observeroptions);
let observerbackoutup = new IntersectionObserver(backoutup, observeroptions);

// bouncing entrances
let observerbouncein = new IntersectionObserver(bouncein, observeroptions);
let observerbounceindown = new IntersectionObserver(bounceindown, observeroptions);
let observerbounceinleft = new IntersectionObserver(bounceinleft, observeroptions);
let observerbounceinright = new IntersectionObserver(bounceinright, observeroptions);
let observerbounceinup = new IntersectionObserver(bounceinup, observeroptions);

// bouncing exits
let observerbounceout = new IntersectionObserver(bounceout, observeroptions);
let observerbounceoutdown = new IntersectionObserver(bounceoutdown, observeroptions);
let observerbounceoutleft = new IntersectionObserver(bounceoutleft, observeroptions);
let observerbounceoutright = new IntersectionObserver(bounceoutright, observeroptions);
let observerbounceoutup = new IntersectionObserver(bounceoutup, observeroptions);

// fading entrances
let observerfadein = new IntersectionObserver(fadein, observeroptions);
let observerfadeindown = new IntersectionObserver(fadeindown, observeroptions);
let observerfadeindownbig = new IntersectionObserver(fadeindownbig, observeroptions);
let observerfadeinleft = new IntersectionObserver(fadeinleft, observeroptions);
let observerfadeinleftbig = new IntersectionObserver(fadeinleftbig, observeroptions);
let observerfadeinright = new IntersectionObserver(fadeinright, observeroptions);
let observerfadeinrightbig = new IntersectionObserver(fadeinrightbig, observeroptions);
let observerfadeinup = new IntersectionObserver(fadeinup, observeroptions);
let observerfadeinupbig = new IntersectionObserver(fadeinupbig, observeroptions);
let observerfadeintopleft = new IntersectionObserver(fadeintopleft, observeroptions);
let observerfadeintopright = new IntersectionObserver(fadeintopright, observeroptions);
let observerfadeinbottomleft = new IntersectionObserver(fadeinbottomleft, observeroptions);
let observerfadeinbottomright = new IntersectionObserver(fadeinbottomright, observeroptions);

// fading exits
let observerfadeout = new IntersectionObserver(fadeout, observeroptions);
let observerfadeoutdown = new IntersectionObserver(fadeoutdown, observeroptions);
let observerfadeoutdownbig = new IntersectionObserver(fadeoutdownbig, observeroptions);
let observerfadeoutleft = new IntersectionObserver(fadeoutleft, observeroptions);
let observerfadeoutleftbig = new IntersectionObserver(fadeoutleftbig, observeroptions);
let observerfadeoutright = new IntersectionObserver(fadeoutright, observeroptions);
let observerfadeoutrightbig = new IntersectionObserver(fadeoutrightbig, observeroptions);
let observerfadeoutup = new IntersectionObserver(fadeoutup, observeroptions);
let observerfadeoutupbig = new IntersectionObserver(fadeoutupbig, observeroptions);
let observerfadeouttopleft = new IntersectionObserver(fadeouttopleft, observeroptions);
let observerfadeouttopright = new IntersectionObserver(fadeouttopright, observeroptions);
let observerfadeoutbottomleft = new IntersectionObserver(fadeoutbottomleft, observeroptions);
let observerfadeoutbottomright = new IntersectionObserver(fadeoutbottomright, observeroptions);

// flippers
let observerflip = new IntersectionObserver(flip, observeroptions);
let observerflipinx = new IntersectionObserver(flipinx, observeroptions);
let observerflipiny = new IntersectionObserver(flipiny, observeroptions);
let observerflipoutx = new IntersectionObserver(flipoutx, observeroptions);
let observerflipouty = new IntersectionObserver(flipouty, observeroptions);

// lightspeed
let observerlightspeedinleft = new IntersectionObserver(lightspeedinleft, observeroptions);
let observerlightspeedinright = new IntersectionObserver(lightspeedinright, observeroptions);
let observerlightspeedoutleft = new IntersectionObserver(lightspeedoutleft, observeroptions);
let observerlightspeedoutright = new IntersectionObserver(lightspeedoutright, observeroptions);

// rotating entrances
let observerrotatein = new IntersectionObserver(rotatein, observeroptions);
let observerrotateindownleft = new IntersectionObserver(rotateindownleft, observeroptions);
let observerrotateindownright = new IntersectionObserver(rotateindownright, observeroptions);
let observerrotateinupleft = new IntersectionObserver(rotateinupleft, observeroptions);
let observerrotateinupright = new IntersectionObserver(rotateinupright, observeroptions);

// rotating exits
let observerrotateout = new IntersectionObserver(rotateout, observeroptions);
let observerrotateoutdownleft = new IntersectionObserver(rotateoutdownleft, observeroptions);
let observerrotateoutdownright = new IntersectionObserver(rotateoutdownright, observeroptions);
let observerrotateoutupleft = new IntersectionObserver(rotateoutupleft, observeroptions);
let observerrotateoutupright = new IntersectionObserver(rotateoutupright, observeroptions);

// specials
let observerhinge = new IntersectionObserver(hinge, observeroptions);
let observerjackinthebox = new IntersectionObserver(jackinthebox, observeroptions);
let observerrollin = new IntersectionObserver(rollin, observeroptions);
let observerrollout = new IntersectionObserver(rollout, observeroptions);

// zooming entrances
let observerzoomin = new IntersectionObserver(zoomin, observeroptions);
let observerzoomindown = new IntersectionObserver(zoomindown, observeroptions);
let observerzoominleft = new IntersectionObserver(zoominleft, observeroptions);
let observerzoominright = new IntersectionObserver(zoominright, observeroptions);
let observerzoominup = new IntersectionObserver(zoominup, observeroptions);

// zooming exits
let observerzoomout = new IntersectionObserver(zoomout, observeroptions);
let observerzoomoutdown = new IntersectionObserver(zoomoutdown, observeroptions);
let observerzoomoutleft = new IntersectionObserver(zoomoutleft, observeroptions);
let observerzoomoutright = new IntersectionObserver(zoomoutright, observeroptions);
let observerzoomoutup = new IntersectionObserver(zoomoutup, observeroptions);

// sliding entrances
let observerslideindown = new IntersectionObserver(slideindown, observeroptions);
let observerslideinleft = new IntersectionObserver(slideinleft, observeroptions);
let observerslideinright = new IntersectionObserver(slideinright, observeroptions);
let observerslideinup = new IntersectionObserver(slideinup, observeroptions);

// sliding exits
let observerslideoutdown = new IntersectionObserver(slideoutdown, observeroptions);
let observerslideoutleft = new IntersectionObserver(slideoutleft, observeroptions);
let observerslideoutright = new IntersectionObserver(slideoutright, observeroptions);
let observerslideoutup = new IntersectionObserver(slideoutup, observeroptions);

// targets

// attention seekers
document.querySelectorAll('.bounce').forEach(element => {

    observerbounce.observe(element);
});

document.querySelectorAll('.flash').forEach(element => {

    observerflash.observe(element);
});

document.querySelectorAll('.pulse').forEach(element => {

    observerpulse.observe(element);
});

document.querySelectorAll('.rubberband').forEach(element => {

    observerrubberband.observe(element);
});

document.querySelectorAll('.shakex').forEach(element => {

    observershakex.observe(element);
});

document.querySelectorAll('.shakey').forEach(element => {

    observershakey.observe(element);
});

document.querySelectorAll('.headshake').forEach(element => {

    observerheadshake.observe(element);
});

document.querySelectorAll('.swing').forEach(element => {

    observerswing.observe(element);
});

document.querySelectorAll('.tada').forEach(element => {

    observertada.observe(element);
});

document.querySelectorAll('.wobble').forEach(element => {

    observerwobble.observe(element);
});

document.querySelectorAll('.jello').forEach(element => {

    observerjello.observe(element);
});

document.querySelectorAll('.heartbeat').forEach(element => {

    observerheartbeat.observe(element);
});

// back entrances
document.querySelectorAll('.backindown').forEach(element => {

    observerbackindown.observe(element);
});

document.querySelectorAll('.backinleft').forEach(element => {

    observerbackinleft.observe(element);
});

document.querySelectorAll('.backinright').forEach(element => {

    observerbackinright.observe(element);
});

document.querySelectorAll('.backinup').forEach(element => {

    observerbackinup.observe(element);
});

// back exits
document.querySelectorAll('.backoutdown').forEach(element => {

    observerbackoutdown.observe(element);
});

document.querySelectorAll('.backoutleft').forEach(element => {

    observerbackoutleft.observe(element);
});

document.querySelectorAll('.backoutright').forEach(element => {

    observerbackoutright.observe(element);
});

document.querySelectorAll('.backoutup').forEach(element => {

    observerbackoutup.observe(element);
});

// bouncing entrances
document.querySelectorAll('.bouncein').forEach(element => {

    observerbouncein.observe(element);
});

document.querySelectorAll('.bounceindown').forEach(element => {

    observerbounceindown.observe(element);
});

document.querySelectorAll('.bounceinleft').forEach(element => {

    observerbounceinleft.observe(element);
});

document.querySelectorAll('.bounceinright').forEach(element => {

    observerbounceinright.observe(element);
});

document.querySelectorAll('.bounceinup').forEach(element => {

    observerbounceinup.observe(element);
});

// bouncing exits
document.querySelectorAll('.bounceout').forEach(element => {

    observerbounceout.observe(element);
});

document.querySelectorAll('.bounceoutdown').forEach(element => {

    observerbounceoutdown.observe(element);
});

document.querySelectorAll('.bounceoutleft').forEach(element => {

    observerbounceoutleft.observe(element);
});

document.querySelectorAll('.bounceoutright').forEach(element => {

    observerbounceoutright.observe(element);
});

document.querySelectorAll('.bounceoutup').forEach(element => {

    observerbounceoutup.observe(element);
});

// fading entrances
document.querySelectorAll('.fadein').forEach(element => {

    observerfadein.observe(element);
});

document.querySelectorAll('.fadeindown').forEach(element => {

    observerfadeindown.observe(element);
});

document.querySelectorAll('.fadeindownbig').forEach(element => {

    observerfadeindownbig.observe(element);
});

document.querySelectorAll('.fadeinleft').forEach(element => {

    observerfadeinleft.observe(element);
});

document.querySelectorAll('.fadeinleftbig').forEach(element => {

    observerfadeinleftbig.observe(element);
});

document.querySelectorAll('.fadeinright').forEach(element => {

    observerfadeinright.observe(element);
});

document.querySelectorAll('.fadeinrightbig').forEach(element => {

    observerfadeinrightbig.observe(element);
});

document.querySelectorAll('.fadeinup').forEach(element => {

    observerfadeinup.observe(element);
});

document.querySelectorAll('.fadeinupbig').forEach(element => {

    observerfadeinupbig.observe(element);
});

document.querySelectorAll('.fadeintopleft').forEach(element => {

    observerfadeintopleft.observe(element);
});

document.querySelectorAll('.fadeintopright').forEach(element => {

    observerfadeintopright.observe(element);
});

document.querySelectorAll('.fadeinbottomleft').forEach(element => {

    observerfadeinbottomleft.observe(element);
});

document.querySelectorAll('.fadeinbottomright').forEach(element => {

    observerfadeinbottomright.observe(element);
});

// fading exits
document.querySelectorAll('.fadeout').forEach(element => {

    observerfadeout.observe(element);
});

document.querySelectorAll('.fadeoutdown').forEach(element => {

    observerfadeoutdown.observe(element);
});

document.querySelectorAll('.fadeoutdownbig').forEach(element => {

    observerfadeoutdownbig.observe(element);
});

document.querySelectorAll('.fadeoutleft').forEach(element => {

    observerfadeoutleft.observe(element);
});

document.querySelectorAll('.fadeoutleftbig').forEach(element => {

    observerfadeoutleftbig.observe(element);
});

document.querySelectorAll('.fadeoutright').forEach(element => {

    observerfadeoutright.observe(element);
});

document.querySelectorAll('.fadeoutrightbig').forEach(element => {

    observerfadeoutrightbig.observe(element);
});

document.querySelectorAll('.fadeoutup').forEach(element => {

    observerfadeoutup.observe(element);
});

document.querySelectorAll('.fadeoutupbig').forEach(element => {

    observerfadeoutupbig.observe(element);
});

document.querySelectorAll('.fadeouttopleft').forEach(element => {

    observerfadeouttopleft.observe(element);
});

document.querySelectorAll('.fadeouttopright').forEach(element => {

    observerfadeouttopright.observe(element);
});

document.querySelectorAll('.fadeoutbottomleft').forEach(element => {

    observerfadeoutbottomleft.observe(element);
});

document.querySelectorAll('.fadeoutbottomright').forEach(element => {

    observerfadeoutbottomright.observe(element);
});

// flippers
document.querySelectorAll('.flip').forEach(element => {

    observerflip.observe(element);
});

document.querySelectorAll('.flipinx').forEach(element => {

    observerflipinx.observe(element);
});

document.querySelectorAll('.flipiny').forEach(element => {

    observerflipiny.observe(element);
});

document.querySelectorAll('.flipoutx').forEach(element => {

    observerflipoutx.observe(element);
});

document.querySelectorAll('.flipouty').forEach(element => {

    observerflipouty.observe(element);
});

// lightspeed
document.querySelectorAll('.lightspeedinleft').forEach(element => {

    observerlightspeedinleft.observe(element);
});

document.querySelectorAll('.lightspeedinright').forEach(element => {

    observerlightspeedinright.observe(element);
});

document.querySelectorAll('.lightspeedoutleft').forEach(element => {

    observerlightspeedoutleft.observe(element);
});

document.querySelectorAll('.lightspeedoutright').forEach(element => {

    observerlightspeedoutright.observe(element);
});

// rotating entrances
document.querySelectorAll('.rotatein').forEach(element => {

    observerrotatein.observe(element);
});

document.querySelectorAll('.rotateindownleft').forEach(element => {

    observerrotateindownleft.observe(element);
});

document.querySelectorAll('.rotateindownright').forEach(element => {

    observerrotateindownright.observe(element);
});

document.querySelectorAll('.rotateinupleft').forEach(element => {

    observerrotateinupleft.observe(element);
});

document.querySelectorAll('.rotateinupright').forEach(element => {

    observerrotateinupright.observe(element);
});

// rotating exits
document.querySelectorAll('.rotateout').forEach(element => {

    observerrotateout.observe(element);
});

document.querySelectorAll('.rotateoutdownleft').forEach(element => {

    observerrotateoutdownleft.observe(element);
});

document.querySelectorAll('.rotateoutdownright').forEach(element => {

    observerrotateoutdownright.observe(element);
});

document.querySelectorAll('.rotateoutupleft').forEach(element => {

    observerrotateoutupleft.observe(element);
});

document.querySelectorAll('.rotateoutupright').forEach(element => {

    observerrotateoutupright.observe(element);
});

// specials
document.querySelectorAll('.hinge').forEach(element => {

    observerhinge.observe(element);
});

document.querySelectorAll('.jackinthebox').forEach(element => {

    observerjackinthebox.observe(element);
});

document.querySelectorAll('.rollin').forEach(element => {

    observerrollin.observe(element);
});

document.querySelectorAll('.rollout').forEach(element => {

    observerrollout.observe(element);
});

// zooming entrances
document.querySelectorAll('.zoomin').forEach(element => {

    observerzoomin.observe(element);
});

document.querySelectorAll('.zoomindown').forEach(element => {

    observerzoomindown.observe(element);
});

document.querySelectorAll('.zoominleft').forEach(element => {

    observerzoominleft.observe(element);
});

document.querySelectorAll('.zoominright').forEach(element => {

    observerzoominright.observe(element);
});

document.querySelectorAll('.zoominup').forEach(element => {

    observerzoominup.observe(element);
});

// zooming exits
document.querySelectorAll('.zoomout').forEach(element => {

    observerzoomout.observe(element);
});

document.querySelectorAll('.zoomoutdown').forEach(element => {

    observerzoomoutdown.observe(element);
});

document.querySelectorAll('.zoomoutleft').forEach(element => {

    observerzoomoutleft.observe(element);
});

document.querySelectorAll('.zoomoutright').forEach(element => {

    observerzoomoutright.observe(element);
});

document.querySelectorAll('.zoomoutup').forEach(element => {

    observerzoomoutup.observe(element);
});

// sliding entrances
document.querySelectorAll('.slideindown').forEach(element => {

    observerslideindown.observe(element);
});

document.querySelectorAll('.slideinleft').forEach(element => {

    observerslideinleft.observe(element);
});

document.querySelectorAll('.slideinright').forEach(element => {

    observerslideinright.observe(element);
});

document.querySelectorAll('.slideinup').forEach(element => {

    observerslideinup.observe(element);
});

// sliding exits
document.querySelectorAll('.slideoutdown').forEach(element => {

    observerslideoutdown.observe(element);
});

document.querySelectorAll('.slideoutleft').forEach(element => {

    observerslideoutleft.observe(element);
});

document.querySelectorAll('.slideoutright').forEach(element => {

    observerslideoutright.observe(element);
});

document.querySelectorAll('.slideoutup').forEach(element => {

    observerslideoutup.observe(element);
});

// functions

// attention seekers
function bounce(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounce');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__bounce');
        }
    });
}

function flash(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__flash');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__flash');
        }
    });
}

function pulse(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__pulse');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__pulse');
        }
    });
}

function rubberband(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rubberband');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__rubberband');
        }
    });
}

function shakex(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__shakex');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__shakex');
        }
    });
}

function shakey(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__shakey');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__shakey');
        }
    });
}

function headshake(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__headshake');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__headshake');
        }
    });
}

function swing(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__swing');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__swing');
        }
    });
}

function tada(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__tada');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__tada');
        }
    });
}

function wobble(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__wobble');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__wobble');
        }
    });
}

function jello(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__jello');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__jello');
        }
    });
}

function heartbeat(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__heartbeat');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__heartbeat');
        }
    });
}

// back entrances
function backindown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";
        
        // prevratio = 0.0;

        /* fade
        if (entry.intersectionRatio > prevratio) {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;

        } else {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;
        }
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backindown');
            entry.target.style.visibility = "visible";
        }

        // prevratio = entry.intersectionRatio;
    });
}

function backinleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backinleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function backinright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backinright');
            entry.target.style.visibility = "visible";
        }
    });
}

function backinup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backinup');
            entry.target.style.visibility = "visible";      
        }
    });
}


// back exits
function backoutdown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        // prevratio = 0.0;

        /* fade
        if (entry.intersectionRatio > prevratio) {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;

        } else {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;
        }
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backoutdown');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);

        }

        // prevratio = entry.intersectionRatio;
    });
}

function backoutleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backoutleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);   
        }
    });
}

function backoutright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backoutright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);   
        }
    });
}

function backoutup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__backoutup');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);   
        }
    });
}

// bouncing entrances
function bouncein(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bouncein');
            entry.target.style.visibility = "visible";
        }
    });
}

function bounceindown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";
        // prevratio = 0.0;
        
        /* fade
        if (entry.intersectionRatio > prevratio) {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;

        } else {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;
        }
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceindown');
            entry.target.style.visibility = "visible";
        }
        
        // prevratio = entry.intersectionRatio;
    });
}

function bounceinleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {
            
            entry.target.classList.add('animate__bounceinleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function bounceinright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceinright');
            entry.target.style.visibility = "visible";
        }
    });
}

function bounceinup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceinup');
            entry.target.style.visibility = "visible";
        }
    });
}

// bouncing exits
function bounceout(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceout');
        }
    });
}

function bounceoutdown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        // prevratio = 0.0;
        
        /* fade
        if (entry.intersectionRatio > prevratio) {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;

        } else {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;
        }
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceoutdown');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
            
        }

        // prevratio = entry.intersectionRatio;
    });
}

function bounceoutleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceoutleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
            
        }
    });
}

function bounceoutright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceoutright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
            
        }
    });
}

function bounceoutup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__bounceoutup');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
            
        }
    });
}

// fading entrances
function fadein(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadein');
            entry.target.style.visibility = "visible";           
        }
    });
}

function fadeindown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        // prevratio = 0.0;

        /* fade
        if (entry.intersectionRatio > prevratio) {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;

        } else {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;
        }
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeindown');
            entry.target.style.visibility = "visible";
        }

        // prevratio = entry.intersectionRatio;
    });
}

function fadeindownbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.style.visibility = "visible";
            
            entry.target.classList.add('animate__fadeindownbig');
        }
    });
}

function fadeinleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeinleftbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinleftbig');
            entry.target.style.visibility = "visible";            
        }
    });
}

function fadeinright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinright');
            entry.target.style.visibility = "visible";

        }
    });
}

function fadeinrightbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinrightbig');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeinup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {        
            
            entry.target.classList.add('animate__fadeinup');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeinupbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinupbig');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeintopleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeintopleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeintopright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeintopright');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeinbottomleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinbottomleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function fadeinbottomright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeinbottomright');
            entry.target.style.visibility = "visible";
        }
    });
}

// fading exits
function fadeout(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeout');
        }
    });
}

function fadeoutdown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        // prevratio = 0.0;
        

        /* fade
        if (entry.intersectionRatio > prevratio) {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;

        } else {

            entry.target.parentNode.style.opacity = entry.intersectionRatio;
        }
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutdown');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
            
        }
        
        // prevratio = entry.intersectionRatio;
    });
}

function fadeoutdownbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutdownbig');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
            
        }
    });
}

function fadeoutleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutleftbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutleftbig');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutrightbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutrightbig');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutup');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutupbig(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutupbig');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeouttopleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeouttopleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeouttopright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeouttopright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutbottomleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutbottomleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function fadeoutbottomright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__fadeoutbottomright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

// flippers
function flip(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__flip');
            
        }
    });
}

function flipinx(entries) {

    entries.map((entry) => {
        
        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__flipinx');
            entry.target.style.visibility = "visible";   
        }
    });
}

function flipiny(entries) {

    entries.map((entry) => {
        
        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__flipiny');
            entry.target.style.visibility = "visible";
        }
    });
}

function flipoutx(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__flipoutx');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function flipouty(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__flipouty');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);   
        }
    });
}

// lightspeed
function lightspeedinleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__lightspeedinleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function lightspeedinright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__lightspeedinright');
            entry.target.style.visibility = "visible";

        }
    });
}

function lightspeedoutleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');  

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__lightspeedoutleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function lightspeedoutright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__lightspeedoutright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

// rotating entrances
function rotatein(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {
            
            entry.target.classList.add('animate__rotatein');
            entry.target.style.visibility = "visible";        
        }
    });
}

function rotateindownleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateindownleft');
            entry.target.style.visibility = "visible";            
        }
    });
}

function rotateindownright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateindownright');
            entry.target.style.visibility = "visible";           
        }
    });
}

function rotateinupleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateinupleft');
            entry.target.style.visibility = "visible";         
        }
    });
}

function rotateinupright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateinupright');
            entry.target.style.visibility = "visible";         
        }
    });
}

// rotating exits
function rotateout(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateout');
            
            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function rotateoutdownleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateoutdownleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function rotateoutdownright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateoutdownright');
            
            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);  
        }
    });
}

function rotateoutupleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateoutupleft');  
            
            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function rotateoutupright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rotateoutupright');  
            
            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);          
        }
    });
}

// specials
function hinge(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__hinge');

            setTimeout(function() {

                    entry.target.style.visibility = "hidden";
            }, 5000);
        }
    });
}

function jackinthebox(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__jackinthebox');
            
        } else if (!entry.isIntersecting) {

            entry.target.classList.remove('animate__jackinthebox');
        }
    });
}

function rollin(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rollin');
            entry.target.style.visibility = "visible";
        }
    });
}

function rollout(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__rollout');
            
            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);            
          } 
    });
}

// zooming entrances
function zoomin(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomin');
            entry.target.style.visibility = "visible";
        }
    });
}

function zoomindown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomindown');
            entry.target.style.visibility = "visible";
        }
    });
}

function zoominleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoominleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function zoominright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {
            
            entry.target.classList.add('animate__zoominright');
            entry.target.style.visibility = "visible";
        }
    });
}

function zoominup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoominup');
            entry.target.style.visibility = "visible";
        }
    });
}

// zooming exits
function zoomout(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomout');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function zoomoutdown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomoutdown');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function zoomoutleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomoutleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function zoomoutright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomoutright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function zoomoutup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__zoomoutup');
            
            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

// sliding entrances
function slideindown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideindown');
            entry.target.style.visibility = "visible";
        }
    });
}

function slideinleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');  
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideinleft');
            entry.target.style.visibility = "visible";
        }
    });
}

function slideinright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideinright');
            entry.target.style.visibility = "visible";
        }
    });
}

function slideinup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        entry.target.style.visibility = "hidden";

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideinup');
            entry.target.style.visibility = "visible";
        }
    });
}

// sliding exits
function slideoutdown(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideoutdown');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function slideoutleft(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');
        
        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideoutleft');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function slideoutright(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideoutright');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

function slideoutup(entries) {

    entries.map((entry) => {

        entry.target.classList.add('animate__animated');

        if (entry.isIntersecting) {

            entry.target.classList.add('animate__slideoutup');

            setTimeout(function() {

                entry.target.style.visibility = "hidden";
            }, duration);
        }
    });
}

// unobservers
// observer.disconnect();

// stop observing #button-01
// observer.unobserve(document.queryselector("#button-01"));

});