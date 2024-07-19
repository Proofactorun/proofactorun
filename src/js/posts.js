const posts =
[
    {
        postContent: "Hello",
        publishTime: ""
    }
];

var content = "";

for(let i = posts.length - 1; i >= 0; i--)
{
    content += "<div class=\"post\">" + posts[i].postContent + "<br /><br /><br /><br /><div class=\"post_time\">Published on " + posts[i].publishTime + "</div></div>";
}

document.getElementById("content").innerHTML = content;