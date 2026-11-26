(() => {
  "use strict";

  const byId = id => document.getElementById(id);
  const frames = [
    ["red-corners", 1131, 1600], ["green-loops", 960, 1208], ["checker", 1200, 1621],
    ["candy-stripe", 768, 1024], ["red-stars", 454, 640], ["holly", 1200, 1914],
    ["wavy-candy", 768, 1024], ["fine-loops", 736, 1308], ["green-wave", 532, 666],
    ["blue-loops", 794, 1123], ["lights", 490, 612]
  ];
  const palette = [
    ["Holly berry", "#AD1010"], ["Pink", "#F4C5C5"], ["Gilded glow", "#D1A33C"],
    ["Pine grove", "#174D1A"], ["Light green", "#A0D6A3"]
  ];
  const templates = {
    Bauble: "M95 46V31H145V46C180 56 204 83 204 130A84 84 0 0 1 36 130C36 83 60 56 95 46Z",
    Star: "M120 25L147 87L215 93L164 138L180 207L120 171L60 207L76 138L25 93L93 87Z",
    House: "M24 106L120 29L216 106H194V209H46V106Z",
    Gingerbread: "M120 28C153 28 169 59 153 84L196 98Q220 112 207 133Q199 145 182 139L157 130L178 188Q183 210 165 218Q150 224 138 208L120 181L102 208Q90 224 75 218Q57 210 62 188L83 130L58 139Q41 145 33 133Q20 112 44 98L87 84C71 59 87 28 120 28Z",
    Garland: "M16 66Q120 151 224 66L224 105Q120 198 16 105Z"
  };
  const slots = [1, 2, 3, 4, 5, 5, 5, 6].flatMap((count, row) =>
    Array.from({ length: count }, (_, column) => ({
      x: 51 + (column - (count - 1) / 2) * 12,
      y: 20 + row * 10.3 + ((column % 2) * 2)
    }))
  );
  const scene = byId("treePage"), editor = byId("ornamentEditor");
  const canvas = byId("ornamentCanvas"), ctx = canvas.getContext("2d", { willReadFrequently: true });
  const tools = byId("treeTools"), template = byId("ornamentTemplate");
  const hang = byId("treeHang"), undo = byId("treeUndo");
  const eraser = byId("treeEraser"), editorStatus = byId("editorStatus");
  const treeStatus = byId("treeStatus"), guide = byId("ornamentGuide");
  const cacheKey = "adv26.ornament.";
  const history = [];
  const brushCache = new Map();
  let day, color = palette[0][1], erase = false, pointer, last, outline, dirty = false, busy = false;

  function read(dayNumber) {
    try { return JSON.parse(localStorage.getItem(cacheKey + dayNumber)); }
    catch { return null; }
  }

  function updateControls() {
    hang.disabled = busy || !!pointer;
    undo.disabled = busy || !history.length;
    template.disabled = busy || dirty;
  }

  function displayTree() {
    const branch = byId("treeBranches");
    branch.querySelectorAll(".tree-ornament").forEach(item => item.remove());
    for (let n = 1; n <= 31; n++) {
      const artwork = read(n);
      if (!artwork) continue;
      const image = new Image();
      image.src = artwork.png;
      image.alt = "Day " + n + " ornament";
      image.className = "tree-ornament";
      image.style.left = slots[n - 1].x + "%";
      image.style.top = slots[n - 1].y + "%";
      branch.append(image);
    }
  }

  function setTemplate() {
    const path = templates[template.value];
    outline = new Path2D(path);
    guide.setAttribute("d", path);
  }

  function openEditor() {
    if (!day || editor.open) return;
    const artwork = read(day);
    history.length = 0;
    dirty = false;
    busy = !!artwork;
    template.value = artwork?.template || "Bauble";
    setTemplate();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    editorStatus.textContent = "";
    updateControls();
    editor.showModal();
    if (!artwork) return;
    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      busy = false;
      dirty = true;
      updateControls();
    };
    image.onerror = () => {
      busy = false;
      editorStatus.textContent = "The saved ornament could not load.";
      updateControls();
    };
    image.src = artwork.png;
  }

  function brush(shade) {
    if (brushCache.has(shade)) return brushCache.get(shade);
    const stamp = document.createElement("canvas");
    stamp.width = stamp.height = 34;
    const ink = stamp.getContext("2d");
    ink.fillStyle = shade;
    for (let y = 0; y < 34; y++) {
      for (let x = 0; x < 34; x++) {
        const edge = Math.hypot(x - 16.5, y - 16.5) / 17;
        if (edge > 1 || Math.random() < .33) continue;
        ink.globalAlpha = (1 - edge) ** .65 * (.1 + Math.random() * .48);
        ink.fillRect(x, y, 1, 1);
      }
    }
    brushCache.set(shade, stamp);
    return stamp;
  }

  function point(event) {
    const bounds = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - bounds.left) * 240 / bounds.width,
      y: (event.clientY - bounds.top) * 240 / bounds.height,
      pressure: event.pointerType === "pen" ? event.pressure || .45 : .55
    };
  }

  function paint(from, to) {
    const steps = Math.max(1, Math.ceil(Math.hypot(to.x - from.x, to.y - from.y) / 2.5));
    ctx.save();
    ctx.clip(outline);
    for (let step = 1; step <= steps; step++) {
      const t = step / steps;
      const x = from.x + (to.x - from.x) * t;
      const y = from.y + (to.y - from.y) * t;
      const width = 5 + to.pressure * 12;
      if (erase) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.drawImage(brush(color), x - width / 2, y - width / 2, width, width);
      }
    }
    ctx.restore();
  }

  for (const name of Object.keys(templates)) template.add(new Option(name, name));
  for (const [name, shade] of palette) {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "editor-swatch";
    swatch.style.backgroundColor = shade;
    swatch.setAttribute("aria-label", name);
    swatch.setAttribute("aria-pressed", shade === color);
    swatch.addEventListener("click", () => {
      color = shade;
      erase = false;
      eraser.setAttribute("aria-pressed", "false");
      byId("ornamentPalette").querySelectorAll("button").forEach(button =>
        button.setAttribute("aria-pressed", button === swatch));
    });
    byId("ornamentPalette").append(swatch);
  }
  template.addEventListener("change", setTemplate);
  eraser.addEventListener("click", () => {
    erase = !erase;
    eraser.setAttribute("aria-pressed", erase);
  });
  canvas.addEventListener("pointerdown", event => {
    if (busy || pointer !== undefined || event.button !== 0) return;
    history.push({ image: ctx.getImageData(0, 0, canvas.width, canvas.height), dirty });
    if (history.length > 14) history.shift();
    canvas.setPointerCapture(event.pointerId);
    pointer = event.pointerId;
    last = point(event);
    paint(last, last);
    dirty = true;
    updateControls();
  });
  canvas.addEventListener("pointermove", event => {
    if (event.pointerId !== pointer) return;
    const next = point(event);
    paint(last, next);
    last = next;
  });
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"]) {
    canvas.addEventListener(event, () => { pointer = undefined; updateControls(); });
  }
  undo.addEventListener("click", () => {
    const previous = history.pop();
    if (!previous) return;
    ctx.putImageData(previous.image, 0, 0);
    dirty = previous.dirty;
    updateControls();
  });
  byId("treeCancel").addEventListener("click", () => editor.close());
  tools.addEventListener("click", openEditor);
  hang.addEventListener("click", () => {
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    if (!pixels.some((value, index) => index % 4 === 3 && value > 0)) {
      editorStatus.textContent = "Draw a little something first.";
      return;
    }
    try {
      localStorage.setItem(cacheKey + day, JSON.stringify({
        template: template.value,
        png: canvas.toDataURL("image/png")
      }));
    } catch {
      editorStatus.textContent = "The drawing could not be saved. Your drawing is still open.";
      return;
    }
    displayTree();
    editor.close();
    treeStatus.textContent = "Day " + day + " ornament saved on this device.";
  });
  byId("treeBack").addEventListener("click", () => { scene.hidden = true; });
  window.AdventTree = {
    frame(page, dayNumber) {
      const [filename, width, height] = frames[(dayNumber - 1) % frames.length];
      page.style.setProperty("--frame-ratio", width / height);
      page.style.setProperty("--frame-image", 'url("assets/' + filename + '.png")');
      page.classList.add("framed");
    },
    open(dayNumber, draw = false) {
      day = dayNumber;
      scene.hidden = false;
      tools.disabled = !day;
      treeStatus.textContent = day ? "" : "Complete a task to draw an ornament.";
      displayTree();
      if (draw) openEditor();
      else byId("treeBack").focus();
    }
  };
})();
