#Sparkflow ScreenShift Boilerplate
Javascript and CSS boilerplate codes when creating **Sparkflow ScreenShift** ads.

##How To Use

###Javascript
* Use file and start coding your creative using your favorite code editor.
> You can also just copy and paste this file directly using Sparkflow's JS/CSS code editor and work from there. I don't advice it though since sometimes sparkflow crashes :P

* Start adding your custom javascript codes at the very bottom of the unit.
```javascript
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
```
* Call your creative's initialization function inside the startAd() function.
```javascript
function startAd () {
  /**
   * -------------------------------
   * CALL YOUR CREATIVE INIT HERE
   * -------------------------------
   * Or whatever you call it :)
   */
   myCreativeInit();
}
```

###CSS
• Just use and start adding your custom styles at the very bottom of the file.
> The CSS boilerplate currently contains universal fixes and the **Please rotate...** message when your creative is viewed in mobile landscape.

##Sparkflow API Documentation
The API documentation is a bit difficult to find specially for first time Sparkflow users - so just adding it here in case you need it. **http://wiki.sparkflow.net/doc/** (You need a sparkflow account to view this).
