const modelData = new Map(); // TODO: Download should be changed to the step file download under releases
modelData
  .set("galleon", {
    model: "assets/models/galleon.glb",
    poster: "assets/images/robots/2024.jpg",
    download: "galleon.step",
  })
  .set("kris", {
    model: "assets/models/kris.glb",
    poster: "assets/images/robots/2023.jpg",
    download: "kris.step",
  })
  .set("everest", {
    model: "assets/models/everest.glb",
    poster: "assets/images/robots/2022.jpg",
    download: "everest.step",
  })
  .set("galleon-small", {
    model: "assets/models/galleon-small.glb",
    poster: "assets/images/robots/2024.jpg",
    download: "galleon.step",
  });

let modelName = window.location.search.substring(1);
if (!modelName) {
  // Default Model
  modelName = "galleon";
}
const model = modelData.get(modelName);
const modelViewer = document.getElementById("cad-viewer");
const downloadLink = document.getElementById("cad-download");
modelViewer.setAttribute("src", model.model);
modelViewer.setAttribute("poster", model.poster);
downloadLink.setAttribute("href", model.download);
