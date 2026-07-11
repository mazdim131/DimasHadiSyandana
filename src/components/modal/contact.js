const contact = document.getElementById('myContact');
contact.innerHTML = `
        <div class="modal fade" id="contact" tabindex="-1" aria-labelledby="educationLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="contactLabel">Kontak</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        <div class="row g-4">
  <div class="col-12 text-center mt-0">
    <span class="fs-1 mt-5 d-block mb-2"><i class="bi bi-envelope-at-fill"></i></span>
    <h5 class="fw-bold text-dark mb-1">dimashadisyandana@smkwikrama.sch.id</h5>
    <p class="text-muted small mb-4">Email utama yang bisa anda hubungi</p>
    <hr class="border-light my-3">
  </div>

  <div class="col-12 mt-2">
    <div class="p-3 bg-light rounded-3 border-start border-success border-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 class="fw-bold text-dark mb-1">Linkedln</h6>
          <p class="text-success small fw-medium mb-0">Klik disini untuk melihat profil Linkedln</p>
        </div>
        <span class="badge bg-success rounded-pill small px-3">Aktif</span>
      </div>
    </div>

    <div class="p-3 mt-3 bg-light rounded-3 border-start border-success border-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h6 class="fw-bold text-dark mb-1">Instagram</h6>
          <p class="text-success small fw-medium mb-0">Klik disini untuk melihat profil instagram</p>
        </div>
        <span class="badge bg-success rounded-pill small px-3">Aktif</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>

`;