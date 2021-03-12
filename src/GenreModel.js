class GenreModel {
  constructor(id, nama) {
    this.id = id;
    this.nama = nama;
  }

  jsonToModel(map) {
    return new GenreModel((this.id = map["id"]), (this.nama = map["name"]));
  }
}

module.exports = new GenreModel()