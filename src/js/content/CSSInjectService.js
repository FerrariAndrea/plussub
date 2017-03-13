/**
 * Created by sonste on 15.03.2016.
 */
srtPlayer.CSSInjectService = srtPlayer.CSSInjectService || (() => {
        "use strict";
        var SERVICE_CHANNEL = messageBus.channel(srtPlayer.Descriptor.CHANNEL.SERVICE);
        var CONTENT_SERVICE = messageBus.channel(srtPlayer.Descriptor.CHANNEL.CONTENT_SERVICE);
        var META_CHANNEL = messageBus.channel(srtPlayer.Descriptor.CHANNEL.META);
        var console = srtPlayer.LogService.getLoggerFor(srtPlayer.Descriptor.CONTENT_SERVICE.CSS_INJECT.NAME);


        var css,video;
        META_CHANNEL.subscribe({
            topic: "option.css",
            callback: (_css)=> {
                css = _css;
                addCustomCss();
            }
        });

        CONTENT_SERVICE.subscribe({
            topic: srtPlayer.Descriptor.CONTENT_SERVICE.FIND_VIDEO.PUB.FOUND,
            callback: (_video)=> {
                video = $(_video);
                addCustomCss();
            }
        });

        CONTENT_SERVICE.subscribe({
            topic: srtPlayer.Descriptor.CONTENT_SERVICE.FIND_VIDEO.PUB.RELEASE,
            callback: ()=> {
                video = null;
                removeCustomCss();
            }
        });


        SERVICE_CHANNEL.publish({
            topic: srtPlayer.Descriptor.SERVICE.META.SUB.PUBLISH,
            data: 'option.css'
        });

        function addCustomCss(){
            if(!video || !css){
                return;
            }
            console.log("add custom css");
            removeCustomCss();
            video.after('<style id="srtPlayerStyle"></style>');
            $('#srtPlayerStyle').html(css);
        }

        function removeCustomCss(){
            if(document.querySelector("#srtPlayerStyle")){
                console.log("remove old srtPlayerStyle");
                var oldStyle = document.querySelector("#srtPlayerStyle");
                oldStyle.parentNode.removeChild(oldStyle);
            }
        }

    })();