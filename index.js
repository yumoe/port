let URLS = {
    official: [
        {'U2hhZG93U29ja3M=': 'b2ZmaWNpYWw='}
    ],
    windows: [
        {'U2hhZG93U29ja3M=': 'aHR0cHM6Ly9naXRodWIuY29tL3NoYWRvd3NvY2tzL3NoYWRvd3NvY2tzLXdpbmRvd3MvcmVsZWFzZXM='}
    ],
    android: [
        {'U2hhZG93U29ja3M=': 'aHR0cHM6Ly9naXRodWIuY29tL3NoYWRvd3NvY2tzL3NoYWRvd3NvY2tzLWFuZHJvaWQvcmVsZWFzZXMvdGFnL3Y0LjIuNQ=='}
    ],
    ios: [
        {
            'R29vZFNoYWRvdw==': 'aHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2NuL2FwcC9nb29kc2hhZG93L2lkMTMzMzU0NDcxND9tdD04'}, {
            'U2hhZG93UHJveHktU1MtUHJveHk=': 'aHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL2NuL2FwcC9zaGFkb3dwcm94eS1zcy1wcm94eS9pZDEzNzc3NTI4NzE/bXQ9OA=='
        }
    ],
    free: [
        { 'TWlhbw==': 'ZnJlZS9taWFvLmh0bWw='}
    ]
}
for(let type in URLS) {
    addType(type)
    for(let url of URLS[type])
        add(url)
}

function addType(name) {
    let p = document.createElement('p')
    p.innerHTML = name
    document.body.appendChild(p)
}
function add(url) {
    let a = document.createElement('a')
    a.href = 'javascript:;'
    for(let name in url) {
        a.onclick = () => {window.open(window.atob(url[name]))}
        a.innerHTML = window.atob(name) + '<br />'
    }
    document.body.appendChild(a)
}