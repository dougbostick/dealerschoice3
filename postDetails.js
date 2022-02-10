module.exports = (titleHead, posts) => `
<html>
<head>
<title>The Oscar Update</title>
<link rel="stylesheet" href="/style.css" />
</head>
<body>${titleHead.map(
  (title) => `
<h1 id = "header"><a href="/"><img src='oscar.jpg'/></a>${title.name}</h1>
`
)}
<div id="list-div">

${posts
  .map(
    (post) => `
<div id="nominee-div">
<h3 id="nominee-name">${post.name}${post.result ? ", " + post.result : ""}</h3>
<p>${post.movie}</p>
</div>
`
  )
  .join("")}

</div>
</body>
</html>
`;
