import head from '../../shared/templates/head.html'

export default ({ css = [], js = [], store = '', reactHtml = '' }) => `
<!DOCTYPE html>
<html>
<head>
    ${ head }
    ${css.map(href => `<link rel="stylesheet" type="text/css" media="screen" href="${href}" />`).join('')}
    <script>
          window.__STORE__ = ${JSON.stringify(store)}
    </script>
    ${js.map(src => `<script src="${src}" defer></script>`).join('')}
</head>
<body>
    <div id="root">${ reactHtml }</div>
</body>
</html>
`