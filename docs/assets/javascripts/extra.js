// Recent posts on the home page. The home page template can't see the blog's
// posts, so this reads the JSON feed the rss plugin builds and fills in the
// list. Without JavaScript the container keeps its "Read the blog" link.
(function () {
  var list = document.querySelector("[data-recent-posts]");
  if (!list) return;
  var count = parseInt(list.getAttribute("data-recent-posts"), 10) || 5;
  var feed = list.getAttribute("data-feed");

  fetch(feed)
    .then(function (response) {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(function (data) {
      var items = (data.items || [])
        .slice()
        .sort(function (a, b) {
          return new Date(b.date_published) - new Date(a.date_published);
        })
        .slice(0, count);
      if (!items.length) return;

      var rows = document.createDocumentFragment();
      items.forEach(function (item) {
        var row = document.createElement("article");
        row.className = "post-row";

        var time = document.createElement("time");
        var date = new Date(item.date_published);
        time.dateTime = date.toISOString().slice(0, 10);
        time.textContent = date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        });

        // Feed URLs are absolute to the live site; keep only the path so
        // links work on a local preview too.
        var link = document.createElement("a");
        link.href = new URL(item.url).pathname;
        link.textContent = item.title;

        row.appendChild(time);
        row.appendChild(link);
        rows.appendChild(row);
      });
      list.replaceChildren(rows);
    })
    .catch(function () {
      // Leave the fallback link in place
    });
})();
