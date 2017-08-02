$.getJSON(
  "https://spreadsheet.glitch.me/?key=1IMMk-7b-L7joK9GnoR_dB3616X8sr8_Ckz9qvD5v9DI",
  data => {
    console.log(data)
    let containerhtml = "";
    data.forEach(item => {
      containerhtml += template(item);
    });
    $("#news").html(containerhtml)
  }
);

function template(item) {
  return `
    <div class="row top-story">
      <div class="col-sm-5">
          <img alt="Photo for story" class="img-responsive" src="${item[
            "Image URL"
          ]}">
      </div>
      <div class="col-sm-7">
          <span class="pubdate">${item["Publish Date"]}</span>
          <h1 class="featured-video">
            <a href="${item["Story URL"]}">${item.Title}</a>
          </h1>
          <span class="byline">By ${item["Author Name"]}</span>
          <p class="lead-video"> ${item.Descriptions}
              <a href="${item["Story URL"]}">Read more</a>.</p>
      </div>
  </div>
  `;
}
