const post =
{
    postContent: "<center><h2>The Daring Escape</h2><br />2D platformer about the escape of the player from the underground dungeon<br /><br /><br /><br /><br /><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/PrfgzEYpEbQ?si=7xRh_udElMgxsX36\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe><br /><br /><br /><br /><h2>Download <a href=\"videogames.html\">here</a></h2></center>",
    publishTime: "20.07.2024 15:25"
};

var content = "<h1>Welcome to the Official Website of Proofactorun!</h1><h2>There is <a href=\"src/html/videogames.html\">Video Games</a>, <a href=\"src/html/posts.html\">Posts</a> and <a href=\"src/html/aboutme.html\">About Me</a>!</h2><br /><br /><br /><br /><h2>NEWS</h2><div class=\"post\">" + post.postContent + "<br /><br /><br /><br /><div class=\"post_time\">Published on " + post.publishTime + "</div></div>";

document.getElementById("content").innerHTML = content;
