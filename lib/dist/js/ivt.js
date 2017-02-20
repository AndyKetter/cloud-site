
// Toastr
function Notify(message, position, timeout, theme, icon, closable) {
    toastr.options.positionClass = 'toast-' + position;
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = timeout;
    toastr.options.closeButton = closable;
    toastr.options.hideDuration = 200;
    toastr.options.iconClass = icon + ' toast-' + theme;
    toastr['custom'](message);
}

// Tooltip
$("[data-toggle=tooltip]").tooltip({
    html: true
});

// Popover
var popovers = $('[data-toggle=popover]');
$.each(popovers, function () {
    $(this).popover({
        html: true,
        template: '<div class="popover ' + $(this).data("class") + '"><div class="arrow"></div><h3 class="popover-title ' + $(this).data("titleclass") + '">Popover right</h3><div class="popover-content"></div></div>'
    });
});

var hoverpopovers = $('[data-toggle=popover-hover]');
$.each(hoverpopovers, function () {
    $(this).popover({
        html: true,
        template: '<div class="popover ' + $(this).data("class") + '"><div class="arrow"></div><h3 class="popover-title ' +
            $(this).data("titleclass") + '">Popover right</h3><div class="popover-content"></div></div>',
        trigger: "hover"
    });
});