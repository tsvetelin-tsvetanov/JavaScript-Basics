function countOfDivs(html){
    var regex = /<div[^<]*>/g;
    console.log(  html.match(regex).length);
}

countOfDivs(
        '    <!DOCTYPE html>                              ' +
        '<html>                                           ' +
        '<head lang="en">                                 ' +
        '    <meta charset="UTF-8">                       ' +
        '    <title>index</title>                         ' +
        '    <script src="/yourScript.js" defer></script> ' +
        '</head>                                          ' +
        '<body>                                           ' +
        '    <div id="outerDiv">                          ' +
        '        <div                                     ' +
        '    class="first">                               ' +
        '            <div><div>hello</div></div>          ' +
        '        </div>                                   ' +
        '        <div>hi<div></div></div>                 ' +
        '        <div>I am a div</div>                    ' +
        '    </div>                                       ' +
        '</body>                                          ' +
        '</html>'
);