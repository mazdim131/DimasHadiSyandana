const myEducation = document.getElementById("myEducation");
myEducation.innerHTML = `
    <div class="modal fade" id="education" tabindex="-1" aria-labelledby="educationLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="educationLabel">Alur Pendidikan</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        <div class="row g-4">
  <div class="col-12 text-center mt-0">
    <span class="fs-1 mt-5 d-block mb-2">🎓</span>
    <h3 class="fw-bold text-dark mb-1">Riwayat Pendidikan</h3>
    <p class="text-muted small mb-4">Latar belakang akademik dan fokus keahlian</p>
    <hr class="border-light my-3">
  </div>

  <div class="col-12 mt-2">
    <div class="p-3 bg-light rounded-3 border-start border-success border-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 class="fw-bold text-dark mb-1">SMK Wikrama Bogor</h6>
          <p class="text-success small fw-medium mb-0">Pengembangan Perangkat Lunak dan Gim (PPLG)</p>
        </div>
        <span class="badge bg-success rounded-pill small px-3">2025 - Sekarang</span>
      </div>
      
      <div class="d-flex gap-2 flex-wrap pt-2 border-top border-2 border-white">
        <span class="badge bg-white text-dark border small fw-normal py-2 px-3">💻 Full-Stack Web</span>
        <span class="badge bg-white text-dark border small fw-normal py-2 px-3">⚙️ Logika & Algoritma</span>
        <span class="badge bg-white text-dark border small fw-normal py-2 px-3">🗄️ Basis Data</span>
        <span class="badge bg-white text-dark border small fw-normal py-2 px-3">👥 Kolaborasi Tim</span>
      </div>
    </div>

    <div class="p-3 mt-3 bg-light rounded-3 border-start border-secondary border-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 class="fw-bold text-dark mb-1">SMPN 1 Cigombong</h6>
          <p class="text-secondary small fw-medium mb-0">Lulusan Terakreditasi</p>
        </div>
        <span class="badge bg-secondary rounded-pill small px-3">Selesai</span>
      </div>

      <div class="d-flex gap-2 flex-wrap pt-2 border-top border-2 border-white">
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🧮 Pelajaran Menengah</span>
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🚀 Kegiatan Siswa</span>
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🏆 Aktif Kejuaraan</span>
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🧑‍🏫 Siswa Terbaik #7</span>
      </div>
    </div>

    <div class="p-3 mt-3 bg-light rounded-3 border-start border-secondary border-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 class="fw-bold text-dark mb-1">SDN Srogol 3</h6>
          <p class="text-secondary small fw-medium mb-0">Lulusan Terakreditasi</p>
        </div>
        <span class="badge bg-secondary rounded-pill small px-3">Selesai</span>
      </div>

      <div class="d-flex gap-2 flex-wrap pt-2 border-top border-2 border-white">
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🧮 Pelajaran Dasar</span>
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🚀 Kegiatan Siswa</span>
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🏆 Aktif Kejuaraan</span>
        <span class="badge bg-white text-secondary border small fw-normal py-2 px-3">🧑‍🏫 Siswa Terbaik #3</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
`;
