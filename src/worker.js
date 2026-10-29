const TARGET = "https://speedingscs.pages.dev/jgao-meta/";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(TARGET);
    if (url.search) target.search = url.search;
    return Response.redirect(target.toString(), 302);
  },
};
