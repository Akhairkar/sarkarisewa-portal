// Runs only when no file matches the path exactly. Copies GitHub Pages
// behaviour: "/dir/" -> dir/index.html, "/dir" -> 301 to "/dir/",
// "/page" -> page.html, otherwise 404.html with status 404.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const asset = (p) => env.ASSETS.fetch(new URL(p, url.origin), request);

    if (path.endsWith("/")) {
      const res = await asset(path + "index.html");
      if (res.ok) return res;
    } else if (!path.slice(path.lastIndexOf("/") + 1).includes(".")) {
      const html = await asset(path + ".html");
      if (html.ok) return html;
      const dir = await asset(path + "/index.html");
      if (dir.ok) {
        url.pathname = path + "/";
        return Response.redirect(url.toString(), 301);
      }
    }

    const nf = await asset("/404.html");
    return new Response(nf.body, {
      status: 404,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
