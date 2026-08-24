function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function redirectHtml({ title, url }) {
  const safeTitle = escapeHtml(title)
  const safeUrl = escapeHtml(url)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${safeUrl}">
  <link rel="canonical" href="${safeUrl}">
  <title>${safeTitle} - Argo Documentation</title>
  <script>window.location.replace(${JSON.stringify(url)})</script>
</head>
<body>
  <p>Redirecting to <a href="${safeUrl}">${safeTitle} documentation</a>…</p>
</body>
</html>
`
}

module.exports = { redirectHtml }
