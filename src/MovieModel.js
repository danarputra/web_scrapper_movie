class MovieModel {
  constructor(
    id,
    jenis,
    judul,
    deskripsi,
    popularitas,
    link_poster,
    rilis,
    total_suara,
    rating
  ) {
    this.id = id;
    this.jenis_id = jenis;
    this.judul = judul;
    this.deskripsi = deskripsi;
    this.popularitas = popularitas;
    this.link_poster = link_poster;
    this.rilis = rilis;
    this.total_suara = total_suara;
    this.rating = rating;
  }

  jsonToModel(map) {
    let jenis = [];
    if (map["genre_ids"] != null) {      
      jenis.push(...map["genre_ids"]);
    }
    return new MovieModel(
      (this.id = map["id"]),
      (this.jenis_id = jenis),
      (this.judul = map["original_title"]),
      (this.deskripsi = map["overview"]),
      (this.popularitas = map["popularity"]),
      (this.link_poster = map["poster_path"]),
      (this.rilis = map["release_date"]),
      (this.total_suara = map["vote_count"]),
      (this.rating = map["vote_average"])
    );
  }
}

module.exports = new MovieModel();
