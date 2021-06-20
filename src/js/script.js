$(document).ready(function () {

    $('#tabs > a').click(function () {
        var tab = $('.tab_' + $(this).attr('data-tab'));
        if (tab.length) {
            // Hide active tab & selected style:
            $('.tab_active').removeClass('tab_active');
            $('#tabs .active').removeClass('active');

            // Show clicked tab content
            tab.addClass('tab_active');
            $(this).addClass('active');

            tab.show("slide", {
                direction: "down"
            }, 1000);
            $(this).show("puff", {}, 10);
        }
    });

    // starting index
    var currTab = 0;

    // count of all tabs
    var totalTabs = $("#tabs > a").length;

    // function to pass to setInterval


    function cycle() {

        // simulate click on current tab
        $("#tabs > a").eq(currTab).click();

        // increment counter   
        currTab++;

        // reset if we're at the last one
        if (currTab == totalTabs) {
            currTab = 0;
        }
    }

    // go!
    var i = setInterval(cycle, 4000);

    //dropmenu
    const drop1 = document.querySelector('.arrow_1'),
        subMenu1 = document.querySelector('.submenu_1');

    drop1.addEventListener('click', () => {
        drop1.classList.toggle('arrow_active');
        subMenu1.classList.toggle('submenu_1_active');
    });

    const drop2 = document.querySelector('.arrow_2'),
        subMenu2 = document.querySelector('.submenu_2');

    drop2.addEventListener('click', () => {
        drop2.classList.toggle('arrow_active');
        subMenu2.classList.toggle('submenu_2_active');
    });

});