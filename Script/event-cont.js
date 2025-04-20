const events = [
    {
      img: "images/chemitout poster.jpg",
      alt: "chem-it-out",
      code: "/Quimica",
      title: "Chem-It-Out",
      desc: `The Quimica society came up with its technical carnival, CHEM-IT-OUT at this year's TechMahotsav'23. We planned some exciting and nerve-wracking events for this tech-fest season under our department's banner. It was, for sure, a massive platform for various activities, organized in the form of competitive events, guest lectures, seminars, technical workshops, and exhibitions.`
    },
    {
      img: "./images/Seminar Mitacs.jpg",
      alt: "seminar",
      code: "/Quimica",
      title: "Seminar",
      desc: `MITACS-qualified seniors namely Miss Sakshi Gupta, Mr. Harsha Sinha, Miss Laxmi Sharma, Miss Mugdha Singh, and Miss Iysha Kumari answered queries regarding this Research Internship through the seminar. They answered all the questions about the Mitacs Globalink Research Internship.`
    },
    {
      img: "images/Mesaventures.jpg",
      alt: "Mesaventures",
      code: "/Quimica",
      title: "Mesaventure",
      desc: `The two-rounds event, named MESAVENTURE's goal was to raise awareness about mishaps in various industries, i.e reducing the likelihood of mishaps in industries. The first round was of abstract presentation. In the second round i.e. presentation round, participants used PowerPoint to showcase their various models on the mishaps with critical analysis and comprehension.`
    }
  ];
  
  const container = document.getElementById("events-container");
  
  events.forEach(event => {
    container.innerHTML += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
          <img src="${event.img}" alt="${event.alt}">
        </div>
        <div class="blog-slider__content">
          <span class="blog-slider__code">${event.code}</span>
          <div class="blog-slider__title">${event.title}</div>
          <div class="blog-slider__text">${event.desc}</div>
          <a href="./Components/events/event.html" class="blog-slider__button">Read More</a>
        </div>
      </div>
    `;
  });
  