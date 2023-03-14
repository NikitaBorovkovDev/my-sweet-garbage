const spoilerArray = document.querySelectorAll('[data-spoilers]');
if (spoilerArray.length>0) {
    const spoilerRegular = Array.from(spoilerArray).filter(function (item, index, self){
        return !item.dataset.spoilers.split(",")[0];
    });
    if (spoilerRegular.length > 0) {
        initSpoilers(spoilerRegular);
    };
    const spoilerMedia = Array.from(spoilerArray).filter(function (item, index, self){
        return item.dataset.spoilers.split(",")[0];
    });
    if (spoilerRegular.length > 0) {
        const breakPointsArray = [];
        spoilerMedia.forEach(item => {
            const params = item.dataset.spoilers;
            const breakPoint = {};
            const paramsArray = params.split(",");
            breakPoint.value = paramsArray[0];
            breakPoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakPoint.item = item;
            breakPointsArray.push(breakPoint);
        }
        )
    };

    let mediaQueries = breakPointsArray.map(function (item) {
        return '(' + item.type + "-width:" + item.value + "px)," + item.value + ',' + item.type;
    });
    mediaQueries = mediaQueries.filter(function(item, index, self) {
        return self.indexOf(item) === index;
    });

    mediaQueries.forEach(breakPoint => {
        const paramsArray = breakPoint.split(",");
        const mediaBreakPoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);

        const spoilerArray = breakPointsArray.filter(function(item){
            if (item.value === mediaBreakPoint && item.type === mediaType) {
                return true
            }
        });
        matchMedia.addListener(function() {
            initSpoilers(spoilerArray, matchMedia)
        });
        initSpoilers(spoilerArray, matchMedia);
    });
    
    function initSpoilers(spoilerArray, matchMedia = false) {
        spoilerArray.forEach(spoilerBlock => {
            spoilerBlock = matchMedia ? spoilerBlock.item : spoilerBlock;
            if (matchMedia.matches || !matchMedia) {
                spoilerBlock.classList.add('_spoiler');
                initSpoilersBody(spoilerBlock);
                spoilerBlock.addEventListener("click", setSpoilerAction);
            } else {
                spoilerBlock.classList.remove('_spoiler');
                initSpoilersBody(spoilerBlock, false);
                spoilerBlock.removeEventListener("click", setSpoilerAction);
            }
        })
    }
    function
};
