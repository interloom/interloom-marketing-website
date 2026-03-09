module.exports = async function handler(req, res) {
  const pathParam = req.query.path;
  const upstreamPath = Array.isArray(pathParam) ? pathParam.join("/") : (pathParam || "");
  const upstreamHost = upstreamPath.startsWith("static/")
    ? "https://eu-assets.i.posthog.com"
    : "https://eu.i.posthog.com";
  const queryIndex = req.url.indexOf("?");
  const query = queryIndex === -1 ? "" : req.url.slice(queryIndex);
  const upstreamUrl = `${upstreamHost}/${upstreamPath}${query}`;

  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (!value) continue;
    const lower = key.toLowerCase();
    if (lower === "host" || lower === "content-length" || lower === "x-forwarded-host") {
      continue;
    }
    headers[key] = value;
  }

  let body;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    body = Buffer.concat(chunks);
  }

  const upstreamResponse = await fetch(upstreamUrl, {
    method: req.method,
    headers,
    body
  });

  res.statusCode = upstreamResponse.status;
  upstreamResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() === "transfer-encoding") return;
    res.setHeader(key, value);
  });

  const responseBuffer = Buffer.from(await upstreamResponse.arrayBuffer());
  res.end(responseBuffer);
};
