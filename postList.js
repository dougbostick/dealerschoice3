module.exports = (posts) => `
<html>
<head>
<title>The Oscar Update</title>
<link rel="stylesheet" href="/style.css" />
</head>
<body>
<h1 id = "header"><img src='oscar.jpg'/>The Oscar Update</h1>
<div id="list-div">
<ul id=main-list>
${posts
  .map((post) => `<li><a href="/${post.id}">${post.name}</a></li>`)
  .join("")}
</ul>
</div>
</body>
</html>
`;
