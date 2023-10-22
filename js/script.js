const cultureBtn = document.querySelector(".next"),
  cultureText = document.querySelector(".culture-content .text-content h1"),
  articleText = document.querySelector(
    ".culture-content .text-content .content p"
  ),
  cultureImg = document.querySelector(".culture-content aside img"),
  cultureListNumber = document.querySelector(".culture p");
(aboutBtn = document.querySelector(".about-content .text-content button")),
  (aboutText = document.querySelector(
    ".about-content .text-content .content p"
  )),
  (aboutTitle = document.querySelector(".about-content .text-content h1")),
  (aboutListNumber = document.querySelector(
    ".about-content .text-content .footer-text p"
  )),
  ((closeMenuBtn = document.querySelector(".fa-xmark")),
  (navigation = document.querySelector("nav"))),
  (menuListBtn = document.querySelectorAll("nav ul li"));

let cultureListIndex = 0,
  aboutListIndex = 0;

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    navigation.classList.add("show-nav");
    document.body.style.overflow = "hidden";
  } else if (!e.target.classList.contains("nav-list")) {
    navigation.classList.remove("show-nav");
    document.body.style.overflow = "visible";
  }
});

menuListBtn.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    navigation.classList.remove("show-nav");
    document.body.style.overflow = "visible";
  });
});

closeMenuBtn.addEventListener("click", () => {
  navigation.classList.remove("show-nav");
  document.body.style.overflow = "visible";
});

aboutBtn.addEventListener("click", () => {
  if (aboutListIndex === aboutData.description.length - 1) {
    aboutListIndex = 0;
  } else {
    aboutListIndex++;
  }
  aboutListNumber.innerText = `${aboutListIndex + 1}/${
    aboutData.description.length
  }`;
  aboutTitle.innerText = aboutData.about[aboutListIndex];
  aboutText.innerText = aboutData.description[aboutListIndex];
});

cultureBtn.addEventListener("click", () => {
  if (cultureListIndex === cultureData.culture.length - 1) {
    cultureListIndex = 0;
  } else {
    cultureListIndex++;
  }

  cultureListNumber.innerText = `${cultureListIndex + 1}/${
    cultureData.culture.length
  }`;
  cultureText.innerText = cultureData.culture[cultureListIndex];
  articleText.innerText = cultureData.description[cultureListIndex];
  cultureImg.src = `asset/image/budaya${cultureListIndex + 1}.jpg`;
});

const cultureData = {
  culture: [
    "Angklung",
    "Wayang Golek",
    "Bahasa Sunda",
    "Tari Kuda Lumping",
    "Liwetan",
  ],
  description: [
    "Angklung adalah salah satu alat musik tradisional yang sangat terkenal di daerah Sunda, Jawa Barat, tetapi juga ditemui di daerah-daerah lain di Indonesia. Alat musik ini sering dimainkan dalam berbagai acara tradisional, upacara adat, perayaan, pertunjukan seni, dan konser.",
    'Wayang golek adalah bentuk seni tradisional Indonesia yang terutama populer di daerah Sunda, Jawa Barat. Seni wayang golek melibatkan penggunaan boneka kayu yang disebut "golek" atau "golekan" untuk menceritakan cerita-cerita tradisional dan epik seperti Ramayana dan Mahabharata.',
    "Bahasa Sunda, juga dikenal sebagai Basa Sunda, adalah bahasa yang digunakan di wilayah Sunda di Indonesia, terutama di Provinsi Jawa Barat dan Banten. Bahasa ini memiliki dialek-dialek yang berbeda di berbagai daerah di wilayah Sunda.",
    'Tari Kuda Kepang, juga dikenal dengan sebutan Tari Kuda Lumping atau Jaran Kepang, adalah bentuk seni tari tradisional yang berasal dari Jawa, Indonesia. Tarian ini melibatkan gerakan-gerakan dinamis dan penari yang mengendarai "kuda kepang" yang terbuat dari bambu atau rotan.',
    "Liwetan adalah sebuah tradisi makan bersama dalam budaya Sunda di Jawa Barat, Indonesia. Kegiatan makan dilakukan bersama di atas daun pisang sebagai pengganti piring yang di dalamnya disajikan nasi liwet dengan berbagai lauk pauk tradisional.",
  ],
};

const aboutData = {
  about: ["Jawa Barat", "Geografi", "Sejarah"],
  description: [
    "Jawa Barat adalah salah satu provinsi di Indonesia yang terletak di pulau Jawa. Ibukotanya adalah Bandung. Provinsi Jawa Barat memiliki sejarah dan budaya yang kaya, serta beragam lanskap geografis, termasuk pegunungan, pantai, danau, serta hutan hujan tropis.",
    'Jawa Barat terletak di bagian barat pulau Jawa, sehingga namanya "Jawa Barat." Provinsi ini berbatasan dengan Samudra Hindia di sebelah selatan, Provinsi DKI Jakarta dan Banten di sebelah barat, serta provinsi-provinsi seperti Jawa Tengah, Jawa Timur, dan Banten di sebelah timur dan utara.',
    "Jawa Barat, provinsi di pulau Jawa, Indonesia, memiliki sejarah panjang yang melibatkan kerajaan-kerajaan seperti Pajajaran dan Galuh. Selama masa penjajahan Belanda, wilayah ini menjadi pusat perjuangan kemerdekaan Indonesia.",
  ],
};
