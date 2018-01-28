// Instructions: Open Newsfeed preferences, run script below in console.

removeElement = element => element.parentNode.removeChild(element);

root = document.querySelector("._2u8i");
sections = root.querySelectorAll("._2rr4");

unfollow = sections[1];
follow = sections[2];

timeout = 1000; // required to avoid fb spam detector;

triggerAll = (section) => {
    if (warningClose = document.querySelector("._42ft, ._4jy0, .layerConfirm, .uiOverlayButton, ._4jy3, ._4jy1, .selected, ._51sy")) {
        console.log("warning");
        warningClose.click();
        setTimeout(triggerAll.bind(null, section), timeout);
    } else {
        scrollable = section.querySelector(".scrollable");
        if (!scrollable) {
            throw 'no scrollable';
        }
        clickable = scrollable.querySelector("._5u3n");
        if (clickable) {
            console.log(
                clickable.getAttribute("aria-label")
            );

            clickable.click();
            scrollable.scrollTop += 1000000; // random large number
            removeElement(clickable);
            setTimeout(triggerAll.bind(null, section), timeout);
        }
    }
}

triggerAll(unfollow);
