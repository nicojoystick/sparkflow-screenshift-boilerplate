#Sparkflow ScreenShift for Dummies

So you just received your first **Sparkflow ScreenShift** unit and you're currently clueless on what to do first. This guide will walk you through the basics of building a **ScreenShift** format from scratch.

But before anything else. Let's try to quickly familiarize ourselves with the **Sparkflow Studio UI** first.

>This guide assumes that you already have a **Sparkflow** account setup by your producer and that you also already have a project setup inside the platform.

##Sparkflow Quick UI Primer
Let's take a look at the **10 most used features** of Sparkflow's studio.

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

**10. Inspector Panel**
Where's #10 you ask? I purposely left that out in the screenshot because that panel contains features that can only be used once you're actually building your creative. I just don't want to overwhelm you with too much information :D

>TIP: I suggest creating a "test unit" and playing around with these tools first. Most of them are pretty straightforward and I'm sure you will get the hang of it in no time :laughing:


#Let's Build! Part 1 - Setting Everything Up
Now that we have the UI out of the way. Let's try to build something!

**Sparkflow's ScreenShift** format is basically a **responsive** take on expandable units. Like what I've mentioned earlier, the build process is a bit different compared to what we're used in doing (specially if you're a custom coder). What's the difference you ask?

###You layout everything in the platform.

Yep, every single design assets needs to be assembled using their platform. We don't get to control the HTML markup when using this format. At first, it's a bit "weird" but once you get the hang of it, it's pretty ok :smile:

##Step 1: Upload Design Assets
What I mostly do is I first extract all of the design elements in the creative's PSD mockup. Once that's done, I just quickly grab all of the extracted files and drag it inside SF's studio window.

![Upload Assets]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/duaVcuKNeY75obLqBsa0Ln7tstrVZL/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B20-48-52.jpg?Expires=1488631774&Signature=MvBWRWwxk1yAtZiOcais47RnT5XpAXLDwtBKpbXy3WxlsVCxcV8FgpowdFAVoy~Pw7dlfQ6CtoP6f0j2SCXl3dK7YkXPSlVame1Dnf8-9q7rVtEJ9BOQwls4zC1TAgkPrNp3bu7~dlPIVT589DHSH4FO2EFGf8uN9JpLBxgoe4OCBxPT-GcrAbxek7kzFW0ARfiYI3BWwIFmKVDVOMYN1nerkrYygBBIeLNwmZgCy-7UCw~HIS3RMeinKTvFOBeaC9YSnf8g420hkC4kHIpK-kAU33lN3w95ty7LJXRgPd566ZbMkg4yYrEta~BqdjK3jhCU3~WetLplUwX-Z1QzYw__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

##Step 2: Assemble The Views
Once all images are uploaded. You can now start assembling your creative's layout.

>TIP: Remember the **2 views** and **3 modes** I've mentioned earlier on our UI primer? You need to make sure all **3 modes** of the **banner**(collapsed) and **resized**(resized) views of your creative are properly laid out. Use the PDF guide provided by your producer to layout all **3 modes** of your creative.

Below is an example of the **banner**(collapsed) view and how it looks like once everything is laid out. Pay attention on the **modes** indicator in the UI.

![Mobile Collapsed]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/Os2RLxYyHflNZ4Kd6jTXuG7zcIVzg1/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-00-52.jpg?Expires=1488632473&Signature=B~X5yeGHPgoiA0FyAIFncJclJio9xbdRrqU~UHXAEQrgVEJBBTj7l60iG8KUDNo1aIcZlpdbdZNTE6DKG69ZP~20SngkTxc0CRbUs3VF3d9bbhn4E-sfx~TCUrPQwaIdQ~1nk0sl9Iowyoyd7BMqw5FP-p7rSQ8PGJZUNSq-OT7yD82AkNtTKRvraB0BKH6DatLDdHmXktqPNGewPoJwqtVLXUUHyovRSpXY9PGWeTYW00zifuSmKYyTw1At4wkipfgw7SraVQM7eJlpbvwwDPw4ZgpigbEvoBykT35qSrU308MvGEXEYIu8SwFrpnmsji0kka6EZAuxqX0DIgM21A__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

![Tablet Collapsed]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/CSbwWsZ9howqGSiOugml8X3HUmTTVO/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-03-44.jpg?Expires=1488632642&Signature=cxI46AmVNhS2XQC5HrTKp32dF9W1EEHwtQC9e86p3TPBX0Hel31DiwtPgeIBkW2pDtxh-FZZ-OUotLNBUMoLI3VCH-9eRqF3osKFKI3YSc8sj2xhBjrTwLT4fYqcN8iWHnJyajdpQA83h7r3xTNv-FiX53FF1B~BtgtKD84w8HmN5acR1PZE4oPosOo6up0fqB4ZdsizRQV3yRwTZbU8FZ85ZvjVuqhoF22eZOCG48uoEsxq7UQtiWN1xvPwyw~fFh4RTBxLaVBvzcSQlIn2kr12GoFgoiUaYIlVSDl11FFy5EBG83pdLOl2L-TdXiqsxkb3euuakQly3BmBm1rqrg__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

![Desktop Collapsed]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/4sc9uSrtV5WeXKWugD18v68KpChPCh/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-04-27.jpg?Expires=1488632680&Signature=XCQaj28oHs2pM1yj7~kjtoPjwFrYyYd5lma9cR3OVTLufJvIC9IDyM13~LnpfdO-lb~UfLza6s1GyfEg9j8LvezRLG3W3Qk~Uo9MznwD--LME-4DgdSoesJOHe9caJh9gfw7feceBHyUcHWCh28LNHse~eNsshZI2iATZ-3CM4pibVSDNTice1i7s919HQNoQjw9yna929wZH3OKE9EwHCxiGPM6yvQhVg0KTt21ED-Tf2Y5jYJxNO6QG26I9nuVtFmm9K~kjlKHs9g0k4uO~e2qZ9bWZj6cv8oE4SaHxHKPjCIIZ6wqTuG1~XDSx4evj32l4UJVrTmsQhasm552qg__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

We need to do the same thing for the **resize**(expanded) views of the creative. So that's also **3 modes** (mobile, tablet, desktop). It's pretty straighforward, just make sure to populate the whole canvas to prevent any "blank" space once you preview the creative. Again, pay attention to the **modes** indicator in the UI.

![Mobile Expanded]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/rT31rnezD8x06aU6ALVYJlDvExUoeZ/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-11-44.jpg?Expires=1488633121&Signature=DDwVFa7wcrma5i5Eyxy8Ql4ZgV4ECcCBPKJEmtzb2zFmcrzCGRNX~XZVYPV5U0khtoE68WdtHXiyY9q9r3RqVVT1U7yQPHKnyJ9SZIlzL~3YDBZPqHyQsTONg9Cq--AZyogkJ9~ok7elWHrO1SHh~tYPOcoT2aVqXgfcMAaVRxly7OUuwc5rR~EYvse22lIr3I5HCT3QqTQ0M6YRPGd2dxppWn7E~uw1Zd98TyP2ER2G0PkvvcFf6NcW1rVTF7Q38OtEpQO4zz-i57ynoKBoSpd~nYwCfO2Mm084lu5rbjnylOfr2nZUmgdtsLSDqtH2t~frk085d0r4mssPArIm8g__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

![Tablet Expanded]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/DaaBzJBexTDpj6T2ihRAgwh3pF2uBt/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-12-49.jpg?Expires=1488633194&Signature=NL0tDBXgc~XxT-ecOrv9rCK1Y2grxb~enf52ZPlybHho927avRg3QC91XrHlx99ycAvBjBr0qpgBMmA92VbFZUbj8ILnB4nWn~PW065A0wXpkLBOosW6UMlvdxj4HRzJwXNywEyqTcjDZ~gyAy~dMjQXzwNDY~i46Y-9ZWBBPXHeEyfc26lmAE2iTmynMCF15HopAb2Euafu1S0lo0yc7-a7Lqkn5jhH245pKysKCZBpQiBGyyIg2gelxgSUB32zukY4NR9WaSb-en~5mL6-rmoYh0CeeDI13Y3aezsz~V3uwOBtSMrH8wT2B4ccoyTLgxuEIe9~J0lClL~rrS7M6Q__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

![Desktop Expanded]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/ad5GPODMoX8ta4hwX5d7TK5jWlOpuQ/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-13-44.jpg?Expires=1488633239&Signature=NpOU37wL0RaGXZ~R7JFIZe0TEuNKvkxpSqaekHI2Ph8tXD93KtnjxxSZArLThLDWCFd0tnyuagxN0XhwZNMsiS7J~ov1oNBHNXWpegGf3OXeKaB37pIm0PaQjb8I7xevrwHlrTdJl0TwG72jbmp8xAIwaETgKiuGgLOABS3UNz1jkCnJSczLcNdS8JbIICZ-DekSH8hxd-eniC7wRXWyiwRassNDdz-wRJ0cHIprlVyyH80QKz0N4BELUUvN~D4jBL3EpRMSjb8rDxWuNCe1H8akypUGmfjDVeNcTCArBw31yBQNZ31d0QSbFPVt6~bhGsFsXFpb6TRZ7NIN52a7UA__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

>TIP: Remember to save manually and don't rely to SF's autosave feature. You don't want your lose your work in case you encounter connections problems or even worse, power interruptions.

Once you think everything is in the right place. Let's make the elements responsive! Oh! and did I mention we will not be using any media queries :smile:

##Step 3: Making It Responsive
You now have everything setup in terms of layout, how can we make our creative responsive? 
The usual industry approach to any responsive project is by using media queries and a couple of javascript responsive techniques. But in Sparkflow, it's a bit different (and somewhat familiar) at the same time.

###Introducing Inspector Panel

I'm sure by now, you are already familiar with the **window** that pops up when you were assembling your creative's layout earlier. Just in case you forgot, here's how it looks like.

![Inspector Panel]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/8WdpvPF2R1gUugrPjBO5ByeVqAtddb/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-37-34.jpg?Expires=1488634674&Signature=a7RRxq2hQAEBg-bi~~z7PrTAuD-Xul2DT8hRfCrogaVZw3urOBlZuu5Ve3mZxtN--9zsyr2bNFh7rigSbQRAk7MHVnK58gyVPTLRR0s3e4e2QaUkf-BAANGJ-kpgQ5HmsLQJRjTj2FpFE2N~cLlCks80LvkLZpRQB6ycgQ4bW6NSfFW4p8CANdtvGSz9Qi91OGl2V~9MjRo1bwVwd773GVZt4JITiIQZ2YgJzxgEB2yk1b79YtflnMh~-hJxzG3XYOnJUnmp1U1fUm-0DGmvqZ~VDunoE0-SQD3CFsuoZY1x5eKYJvpGyDumqwTV4hexaqkjXvdxW-FMV-QLsZoI-Q__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

This is the **Inspector Panel** and this panel is one of the most important parts of the SF UI. It is the place where you name your elements so that you can target it via code later in this guide. This is also the window where you will make your creative's elements react to screen size thus making it responsive. **But how do we make it responsive?**

![Anchor Tool]
(https://d1ro8r1rbfn3jf.cloudfront.net/ms_16555/7hfsfS6nefcMfa6eaAgwLkDcod1uER/Dashboard%2B%25C2%25B7%2BSparkflow%2B2017-03-03%2B21-53-32.jpg?Expires=1488635654&Signature=OO-EaGtvL9JP8ftYJEdVU2jkpi5PkD9FB-o0l0RNk7dgJ8CgM3tx1BL0fpdgFrQaF1Xhhlq0S3ie7C65ylpQTJcgmj8nhVblWvyxeGiKKX465qshRA1iPhAV-hrPqThWN-wYMdmlIqDSpXnzhH8b5tK3j4GMAHKPSFNWuGK0ZZPoqGXQ9-KwVp-OFcKiDYrMKm4AHqFgP5JhAxA1O9jQl8oO0E0f5wGsn0-5OCaqg6Vbcmv10WPznjPrS9kXHfCn4RcGu4Q1EBs6u9FZ1ohT51vcucL7mP5WC5ls9Nt-kAWVbaPBf0gKukULrfBZeHi7eytW6yzPbQfU5-Z70rY2gA__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

That tool highlighted above is called the **Absolute Anchoring** tool. Remember i mentioned the process is "somewhat familiar"? Well, that's because we already seen this tool on graphics/imaging softwares before.

###How Does It Work?
The logic is pretty simple.

- Say you want your element to always **stick** to the **left** of the user's screen/device, pin it to the left by setting its anchor to the left.
- What if you want the client's logo to always be visible on the **bottom right** of the user's screen/device? Then set the logo's anchor point to the bottom right.
- You get the idea :sunglasses:

Now, do this to all the graphical elements in your creative. Make sure all the elements you want to **stick into view** have an anchor setup. Once that's done, we can start with the fun part. **Coding your creative** :smile:

#Let's Build! Part 2 - Coding Your Creative
>This part of the series is currently in progress.

