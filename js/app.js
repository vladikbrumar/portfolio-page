$(function() {

    /* filter */
    let filter = $("[data-filter]"); // get element with filter

    filter.on("click", function(event) {
        event.preventDefault(); //cancel default link behavior

        let cat = $(this).data('filter'); // get value of filter

        // if value all should show all works
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        // else check category and compare with clicked filter value
        } else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });

        };

    });


    /* Modal */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault(); //cancel default link behavior

        let $this = $(this);
        let modalId = $this.data('modal');  // onClick save modal id

        $(modalId).addClass('show');
        $("body").addClass("no-scroll");
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass("no-scroll");

    });

    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass("no-scroll");
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation(); //cancel click on parent
    });
});
