const galleryItems = [
    { title: "Techkirti", num: "01", img: "images/pic1.jpg" },
    { title: "Shastra", num: "02", img: "images/pic2.jpg" },
    { title: "Advaita", num: "03", img: "images/pic3.jpg" },
    { title: "Scintilla", num: "04", img: "images/pic4.jpg" },
    { title: "Mesaventures", num: "05", img: "images/pic5.jpg" },
    { title: "Webinar", num: "06", img: "images/pic1.jpg" },
    { title: "Seminar", num: "07", img: "images/pic2.jpg" },
    { title: "Poster Making", num: "08", img: "images/pic3.jpg" },
    { title: "Quiz Competition", num: "09", img: "images/pic4.jpg" }
  ];
  
  const container = document.getElementById("gallery-container");
  
  galleryItems.forEach(({ title, num, img }) => {
    container.innerHTML += `
      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">${title}</div>
          <div class="num">${num}</div>
          <img src="${img}" alt="Gallery">
        </div>
      </div>
    `;
  });
  