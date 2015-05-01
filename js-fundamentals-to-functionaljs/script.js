var box = {};

box["material"] = "cardboard";

box["size"] = {
  "height": 2,
  "width": 80
};

box.area = function() {
  return box.size.height * box.size.width;
};