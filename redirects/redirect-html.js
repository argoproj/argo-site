function redirectHtml({ title, url }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${url}">
  <link rel="canonical" href="${url}">
  <title>${title} - Argo Documentation</title>
</head>
<body>
  <p>Redirecting to <a href="${url}">${title} documentation</a>…</p>
</body>
</html>
`
}

module.exports = { redirectHtml }
