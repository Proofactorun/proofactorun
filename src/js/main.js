const post =
{
    postContent: "",
    publishTime: ""
};

var content = "<h1>Welcome to the Official Website of Proofactorun!</h1><h2>There is <a href=\"src/html/videogames.html\">Video Games</a>, <a href=\"src/html/posts.html\">Posts</a> and <a href=\"src/html/aboutme.html\">About Me</a>!</h2><br /><br /><br /><br /><h2>NEWS</h2><div class=\"post\">" + post.postContent + "<br /><br /><br /><br /><div class=\"post_time\">Published on " + post.publishTime + "</div></div>";

document.getElementById("content").innerHTML = content;