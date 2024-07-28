const post =
{
    postContent: "<center><h2>Battle For Space</h2><br />2D action about a space battle between spaceships<br /><br /><br /><br /><br /><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/pvsFvbu2Spw?si=66O4_D5D76Ozc5yn\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe><br /><br /><br /><br /><h2>Download <a href=\"videogames.html\">here</a></h2></center>",
    publishTime: "28.07.2024 15:35"
};

var content = "<h1>Welcome to the Official Website of Proofactorun!</h1><h2>There is <a href=\"src/html/videogames.html\">Video Games</a>, <a href=\"src/html/posts.html\">Posts</a> and <a href=\"src/html/aboutme.html\">About Me</a>!</h2><br /><br /><br /><br /><h2>NEWS</h2><div class=\"post\">" + post.postContent + "<br /><br /><br /><br /><div class=\"post_time\">Published on " + post.publishTime + "</div></div>";

document.getElementById("content").innerHTML = content;
