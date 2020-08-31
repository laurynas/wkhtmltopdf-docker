const http = require('http');
const url = require('url');
const { spawn } = require('child_process');

const quote = (val) => '"' + val.replace(/(["\\$`])/g, '\\$1') + '"';

http.createServer(function (req, res) {
  const query = url.parse(req.url, true).query;
  const filename = query.filename || 'result.pdf';

  if (!query.url) {
    res.statusCode = 400;
    res.end('Please provide url param');
    return;
  }

  const source = quote(query.url);
  const wk = spawn('/bin/sh', ['-c', `set -o pipefail ; /bin/wkhtmltopdf ${source} - | cat`]);

  console.log("Converting: " + query.url);

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${filename}"`,
  });

  wk.stdout.pipe(res);
}).listen(8080);