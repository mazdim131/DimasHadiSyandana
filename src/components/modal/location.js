const modalLocation = document.getElementById('myLocation');
modalLocation.innerHTML = `
  <div class="modal fade" id="location" tabindex="-1" aria-labelledby="locationLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="locationLabel">Lokasi</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-4 text-center">
            <div class="col-12 mt-0">
              <h3 class="fw-bold mt-5 text-dark mb-1">Bogor, Jawa Barat</h3>
              <p class="text-muted small mb-4">Indonesia • UTC+7 (WIB)</p>
              <hr class="border-light my-3">
            </div>

            <div class="col-12 mt-2 text-start">
              <div class="p-3 bg-light rounded-3 mb-3">
                <h6 class="fw-bold text-success mb-1">🚀 Kesiapan Kerja</h6>
                <p class="text-secondary small mb-0">Terbuka untuk proyek Jarak Jauh (Remote) dari mana saja serta peluang Kerja di Kantor untuk area Jabodetabek.</p>
              </div>

              <div class="p-3 bg-light rounded-3 mb-3">
                <h6 class="fw-bold text-primary mb-1">🏫 Pusat Edukasi & Komunitas</h6>
                <p class="text-secondary small mb-0">Berbasis di Bogor dan saat ini sedang mendalami pengembangan perangkat lunak, serta aktif terhubung dengan komunitas developer lokal.</p>
              </div>

              <div class="p-3 bg-light rounded-3">
                <h6 class="fw-bold text-secondary mb-1">⏱️ Zona Waktu & Kontak</h6>
                <p class="text-secondary small mb-0">Beroperasi di Waktu Indonesia Barat (WIB). Biasanya sangat aktif dan responsif untuk diskusi atau koordinasi pada jam kerja standar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
