import head from '../../shared/templates/head.html'

export default ({ css = '', js = '', store = '', reactHtml = '' }) => `
<!DOCTYPE html>
<html>
<head>
    ${ head }
    <link rel="stylesheet" type="text/css" media="screen" href="${css}" />
    <script>
          window.__STORE__ = ${JSON.stringify(store)}
    </script>
    <script src="${js}" defer></script>
</head>
<body>
    <div id="root">
        ${ reactHtml }
    </div>
</body>
</html>
`