function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1])
    return null
}
var importA = document.getElementById("import")
importA.attributes.href.value += location.search
var typeSpan = document.getElementById("type")
switch (get("t")) {
    case "f":
        typeSpan.innerHTML = "Fever API"
        break
    case "g":
        typeSpan.innerHTML = "Reader API"
        break
    case "i":
        typeSpan.innerHTML = "Inoreader"
        break
    case "fb":
        typeSpan.innerHTML = "Feedbin"
        break
    default:
        window.location = "https://hyliu.me/fluent-reader-lite/"
}
