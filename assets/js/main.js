const banner = new Banner({
  data: [
    { image_url: "/assets/images/imagem1.jpg", name: "images1" },
    { image_url: "/assets/images/imagem2.jpg", name: "images2" },
    { image_url: "/assets/images/imagem3.jpg", name: "images3" }
  ],
  target: document.getElementById("banner"),
  timeout: 7000,
});
