function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1])
    return null
}
function importConfigs() {
    var importA = document.getElementById("import")
    importA.attributes.href.value += location.search
    importA.classList.remove("disabled")
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
    document.getElementById("import-note").innerHTML = "Tap on button to open app."
}
var ua = window.navigator.userAgent.toLowerCase();
if (ua.includes("micromessenger")) {
    document.getElementById("import-note").innerHTML = "此页面不支持微信，请在浏览器中打开"
} else {
    importConfigs()
}
