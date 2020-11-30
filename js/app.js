$(function() {

    let filter = $("[data-filter]"); // get element with filter

    filter.on("click", function(event) {
        event.preventDefault(); //cancel link option

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

});
