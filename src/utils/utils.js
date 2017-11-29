const calculateContentHeight = ( ta, scanAmount ) => {
    let origHeight = ta.style.height,
        height = ta.offsetHeight,
        scrollHeight = ta.scrollHeight,
        overflow = ta.style.overflow;

    if ( height >= scrollHeight ) {
        ta.style.height = (height + scanAmount) + 'px';
        ta.style.overflow = 'hidden';
        if ( scrollHeight < ta.scrollHeight ) {
            while (ta.offsetHeight >= ta.scrollHeight) {
                ta.style.height = (height -= scanAmount)+'px';
            }

            while (ta.offsetHeight < ta.scrollHeight) {
                ta.style.height = (height++)+'px';
            }

            ta.style.height = origHeight;
            ta.style.overflow = overflow;

            return height;
        }
    } else {
        return scrollHeight;
    }
};

const countLines = (ta) => {

    const style = (window.getComputedStyle) ?
        window.getComputedStyle(ta) : ta.currentStyle,
        taLineHeight = parseInt(style.lineHeight, 10),
        taHeight = calculateContentHeight(ta, taLineHeight),
        numberOfLines = Math.ceil(taHeight / taLineHeight);

    return numberOfLines;
};

export default {
    countLines
};
