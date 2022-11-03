AFRAME.registerComponent("comics", {
    init: function() {
      this.postersContainer = this.el;
      this.createPosters();
    },
  
    createPosters: function() {
      const postersRef = [
        {
          id: "superman",
          title: "Superman",
          url: "./assets/sm.jpeg"
        },
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/spm2.jpeg"
        },  
        {
          id: "captain-america",
          title: "Captain America",
          url: "./assets/ca.jpeg"
        },
        {
          id: "batman",
          title: "Batman",
          url: "./assets/bm.jpeg"
        }
      ];
      let prevoiusXPosition = -60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Poster Element
        const poster = this.createPic(item);
        borderEl.appendChild(poster);
  
        this.postersContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position, id) {
      const e= document.createElement("a-entity");
      e.setAttribute("id", id);
      e.setAttribute("visible", true);
      e.setAttribute("geometry", {primitive: "plane", width: 22, height:30});
      e.setAttribute("position", position);
      e.setAttribute("material", { color: "#fff" });
  
      return e;
    },
    createPic: function(item) {
      const e = document.createElement("a-entity");
      e.setAttribute("visible", true);
      e.setAttribute("geometry", {primitive: "plane", width: 20, height: 28});
      e.setAttribute("position", { x: 0, y: 0, z: 0.1 });
      e.setAttribute("material", { src: item.url });
  
      return e;
    }
  });