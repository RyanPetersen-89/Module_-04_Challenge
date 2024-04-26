const blogs = JSON.parse(localStorage.getItem("blogs"));

for(let i = 0; i < blogs.length; i++){
  const blog = blogs[i];
  const sectionEl = document.createElement("section");
  const divEl = document.createElement("div");
  const pEl = document.createElement("p");
  const h2El = document.createElement("h2");
  pEl.textcontent = blogContent;
};

divEl.append(h2El,pEl)
sectionEl.append(h2El,pEl);


const backbutton = document.getElementById("back-button");
backbutton = addEventListener('click', function(){
this.location.href = ''
});