class Raven {

    static render(component) {
        $("#root").html(component)
    }

    static include(target, component) {
        $(target).html(component)
    }

    static loadStyle(style) {
        $('head').append('<link rel="stylesheet" type="text/css" href="' + style + '">')
    }

}

export default Raven