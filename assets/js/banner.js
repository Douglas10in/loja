class banner {
  constructor(settings) {
    this.settings = Object.assign(
      {
        timeout: 7000,
      },
      settings
    );
    this.insterval = 0;

    this.index = 0;
    this.render();
  }

  goto(index) {
    const { data, target, timeout } = this.settings;
    if (index >= this.settings.data.lenght || index < 0) {
      index = 0;
    }

    const current = data[this.index];
    const next = data[index];

    this.index = index;

    const currentimage = target.queryselector(
      `img[src="${current.image_url}"]`
    );

    const nextime = target.queryselector(`img[src="${next.image_url}"]`);

    currentimage.classlist.remove("active");
    nextime.classlist.add("active");
    clearTimeout(this.insterval);
    this.insterval = setTimeout(() => {
      this.goto(this.index + 1);
    }, timeout);
  }

  render() {
    const { target, data } = this.settings;

    const images = createElement(
      "div",
      { className: "inset-0 absolute z-0" },
      ...data.map((item) =>
        createElement("img", {
          src: item.image_url,
          alt: item.name,
          className: "w-full h-full  left-0 top-0 z-0 absolute",
        })
      )
    );

    const comands = createElement(
      "div",
      {
        className:
          "z-10 bottom-2 left-1 absolute" + "flex justify-center items-center",
      },
      ...data.map((_, index) =>
        createElement("span", {
          className:
            "inline-block h-2 w-16 bg-slate-600 border rouded shadow mr-2",
          onClick: () => this.goto(index),
        })
      )
    );
    target.innertHTML = "";
    target.append(images, comands);

    this.goto(0);
  }
}
