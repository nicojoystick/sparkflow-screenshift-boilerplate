#Sparkflow ScreenShift for Dummies

So you just received your first **Sparkflow ScreenShift** unit and you're currently clueless on what to do first. This guide will walk you through the basics of building a **ScreenShift** format from scratch.

But before anything else. Let's try to quickly familiarize ourselves with the **Sparkflow Studio UI** first.

>This guide assumes that you already have a **Sparkflow** account setup by your producer and that you also already have a project setup inside the platform.

##Sparkflow Quick UI Primer
Let's take a look at the **9 most used features** of Sparkflow's studio.

![Sparkflow UI Primer]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/FOeLkINAnA444WdHROaWZNiwU0ffb3/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B19-39-54.jpg?Expires=1488628251&Signature=n6OA8mHsLOD1glc1dPpOHSSZxrFo9M4CL5fWpJpoh3LqGh1gAs-Qse0jzfqzJjVMW2SsmK87eHJAK2NiicndlUGdnWkWtFTQB1NjgYSfiEFyPAbaIoxNdOJbF1kuKFEQJSyMQKonQ6jSF58RLoLICo6yxyYOWe7x2nYshQk0VAQGmA0IQqh7MdudysH-cnbcY4vhZHorDVK8m1lAwjmLp9x4PNGI964dmRdlDFFB0koH3nA3jxRLqIbpZNiQbQsm4niRpOLAQ2PHZhAQYTEyUHL9jz7BwNTwA4vBZU6PN2SESrZrNhWpaw-pFFvjv~kis~Ge5dG4pJZ1eZfncyKm6A__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

**1. Layers Panel**
All elements/components dragged to your stage will be shown and can also be re-arranged using this panel.

**2. Views Panel**
ScreenShift format has two views. 1 for collapsed and 1 for expanded. You have to provide separate layouts for the 2 views and this is the button to toggle between those view.

**3. Modes Panel**
The 2 views mentioned above are categorized into **3 modes** (desktop, tablet, and mobile). SS units are considered responsive so you have to setup **3 different layouts** to cater to different types of devices.

**4. Javascript Editor**
This button opens Sparkflow's own JS editor. Although technically you can code here, I highly suggest coding using your own code editor for safety purposes and to avoid losing your work.

**5. CSS Editor**
Like the JS editor above, I suggest sticking with your own code editor in coding your stylesheets.

**6. Scene Button**
This let's you create additional scenes/frames in your creative that you can control using SF's API. Think of it as like the gotoAndStop('frame') back in our Flash days :P

**7. Save & Preview Button**
The button you need to click when saving and previewing your creative. (SF also has an autosave feature).

**8. Components / Widgets**
Usable widgets like video players, image sliders, etc can be found here.

**9. Text Tool**
Standard text tool. I only use this for one thing only. It has the ability to upload webfonts in your creative.

>Quick Tip: I suggest creating a "test unit" and playing around with these tools first. Most of them are pretty straightforward and I'm sure you will get the hang of it in no time ;)

#Let's Build!
Now that we have the UI out of the way. Let's try to build something!

