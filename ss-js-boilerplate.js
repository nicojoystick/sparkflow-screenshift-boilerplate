/**
 * ///////////////////////////////////////////////////
 * ###################################################
 * Sparkflow Screenshift Boilerplate
 * ###################################################
 * ///////////////////////////////////////////////////
 */

/**
 * --------------------------
 * Preload your assets here.
 * --------------------------
 * Push your external js libraries and
 * other external resources here.
 */
var assetsArray = [];
assetsArray.push('https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js');
ad.preload(assetsArray);

/**
 * --------------------------
 * Setup Adchoices Icon
 * --------------------------
 * Adchoices icon location can be 
 * controlled by changing the "corner"
 * parameter.
 * 
 * (tl = top left, br = bottom right, so on...)
 */
$.ajax({

    url: "/sparkflow/adchoices.min.js",
    dataType: "script",
    cache: true,
    success: function () {

        AdChoices.init({

            corner: "tl",
            //icon: true,
            url: "http://www.undertone.com/opt-out-tool?utm_source=AdChoiceIcon&utm_medium=IAAdChoicesIcon&utm_campaign=Privacy"
        });
    }
});

/**
 * -----------------------------------
 * Sync portrait and landscape views
 * -----------------------------------
 */
var _lastSection;
var _condition = $('.landscape').length == $('.portrait').length && $('.landscape').length > 1;

$(document).on('adSceneChange adResize', function () {

    var _currentSection = $('section:visible');

    var _switchScene = function (view) {

        var _currentIndex = _currentSection.data('index');
        var _section      = $('section.' + view + '[data-index=' + _currentIndex + ']');

        ad.switchToScene(_section.attr('class'), _currentIndex, _section.data('canvas'));
    };

    if (_condition && _currentSection[0].id != _lastSection) {

        _lastSection = _currentSection[0].id;

        if      (_currentSection.hasClass('landscape')) _switchScene('portrait');
        else if (_currentSection.hasClass('portrait')) _switchScene('landscape');
    }
});

/**
 * --------------------------
 * Switch to scene
 * --------------------------
 * Use this to easily swith and 
 * change scenes in your creative.
 */
function switchToScene (sceneName) {

    var _viewClass = $('section:visible').attr('class');
    var _section   = $('section[data-name^="'+sceneName+' - "][class="'+_viewClass+'"]');

    ad.switchToScene(_section.attr('class'), _section.data('index'), _section.data('canvas'));
}

/**
 * --------------------------
 * SPARKFLOW EVENTS /////////
 * --------------------------
 */
var canResize = true;

/**
 * Call your creative's main init
 * function here. This is basically 
 * the event to use if you want to
 * start your ad.
 */
$(document).on('adReady', function () {

    ad.setLoading('SCENE');
    startAd();
});

/**
 * If an interaction is detected - clear
 * auto close.
 *
 * QUICK TIP: You should also call "mraid.cancelAutoClose"
 * in any clickable element in your creative to override
 * the "mraid.setAutoClose" being called on "adReady" and "adClick".
 */
$(document).on('adInteraction', function () {

    mraid.cancelAutoClose();
});

/**
 * When the ad is ready, set its auto close
 * to 15secs. This also "resets" the auto 
 * close when the user clicks any "exits"
 * in the creative.
 */
$(document).on('adReady adClick', function () {

    mraid.setAutoClose(15 * 1000);
});

/**
 * This controls the showing and hiding of 
 * the "please rotate message" when the creative
 * is viewed in mobile-landscape.
 */
$(document).on('adEvent', function (e, data) {

    switch (data.type) {

        case 'clo':
        canResize = false;
        $('#msg_landscape').css({display: 'none'});
        break;

        case 'rsz':
        canResize = true;
        break;
    }
});

/**
 * "A debounce function is essential to 
 * ensuring a given task doesn't fire so 
 * often that it bricks browser performance.""
 *
 * This is often used on events like "resize"
 * or any event that gets fire repeatedly.
 */
function debounce(func, wait, immediate) {

    var timeout;

    return function() {

        var context = this, args = arguments;

        var later = function() {

            timeout = null;
            if (!immediate) func.apply(context, args);
        }

        var callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/**
 * Remember the debounce function on top?
 * This is where we use it - on "ad resize".
 * Just think of debounce as a small utility
 * that optimizes function calls that gets
 * called repeatedly.
 *
 * This block of code basically shows and
 * hides the "please rotate message" depending
 * on device orientation.
 */
var resizedAd = debounce(function() {

if (canResize) {
        
    if (device.mobile() && device.landscape()) {
       
        $('#msg_landscape').css({display: 'block'});
    } 

    else {

      $('#msg_landscape').css({display: 'none'});
    }
}

}, 500);

function listenResize() {
    
    $(window).on('resize', resizedAd); 
}

/**
 * Main entry point of your creative.
 * This is where you call your creative's
 * initialization function.
 */
function startAd() {

    var rotateMessageDom = '<div id="msg_landscape" class="fpf white"> <div class="plzrotate"><img src="img-cicis-logo.png" width="220"> <div class="spinner"> <div class="box"></div><div class="dot"></div></div>Please rotate your device.</div><div id="custom-close-button"></div></div>';

    $(rotateMessageDom).prependTo('#widthFixer');

    /**
     * Adds a close button to the "please rotate message".
     * Make sure you have a "clickable area" component on
     * your sparkflow creative with element id named
     * "#close-button-m-landscape".
     */
    var customCloseButton = $('#custom-close-button');
    var spkElementId      = $('#close-button-m-landscape');
    customCloseButton.click(function () { spkElementId.trigger('click') });

    /**
     * Uncomment this if you need to add a border into
     * your creative.
     */
    // $('body').append('<div class="border"></div>');

    /**
     * This just fades in the container of 
     * your creative.
     */
    // setTimeout(function() { TweenMax.to($('#widthFixer'), .25, {opacity: 1, ease: Power0.easeNone}) }, 500);

    listenResize();

    /**
     * -------------------------------
     * CALL YOUR CREATIVE INIT HERE
     * -------------------------------
     * Or whatever you call it :)
     */
    myCreativeInit();
}

/**
 * ///////////////////////////////////////////////////
 * ###################################################
 * Utilities
 * ###################################################
 * ///////////////////////////////////////////////////
 */

/**
 * --------------------------
 * Minified device.js
 * --------------------------
 * Used to check device and its
 * orientation using javascript.
 * More info on: https://github.com/matthewhudson/device.js
 *
 * Commonly used methods:
 * device.desktop();
 * device.tablet();
 * device.mobile();
 * device.portrait();
 * device.landscape();
 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

/**
 * ///////////////////////////////////////////////////
 * ###################################################
 * Your Custom Code Here
 * ###################################################
 * ///////////////////////////////////////////////////
 */
function myCreativeInit () {

    // Code away!
}







