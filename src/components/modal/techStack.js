const techStack = document.getElementById('techStack');
techStack.innerHTML = `
  <div class="modal fade" id="skill" tabindex="-1" aria-labelledby="skillLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="skillLabel">Tech Stacks</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-4 align-items-start">
            <div class="col-md-7">
              <div class="mb-4">
                <h6 class="fw-bold text-secondary mb-3">Front-End Development</h6>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">JavaScript (ES6+)</span>
                    <span class="text-muted">Menengah</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 50%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">React.js</span>
                    <span class="text-muted">Pemula</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 10%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">Bootstrap</span>
                    <span class="text-muted">Menguasai</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 90%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">HTML5 & CSS3</span>
                    <span class="text-muted">Menguasai</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 90%"></div>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <h6 class="fw-bold text-secondary mb-3">Back-End & Database</h6>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">Node.js & Express.js</span>
                    <span class="text-muted">Pemula</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 25%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">PHP</span>
                    <span class="text-muted">Pemula</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 40%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">Databases (MySQL & MongoDB)</span>
                    <span class="text-muted">Pemula</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 47%"></div>
                  </div>
                </div>
              </div>

              <div>
                <h6 class="fw-bold text-secondary mb-3">Development Tools</h6>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">Git & GitHub</span>
                    <span class="text-muted">Menguasai</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 85%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">VS Code</span>
                    <span class="text-muted">Teks Editor Utama</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 100%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">Notepad++</span>
                    <span class="text-muted">Teks Editor Kedua</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 100%"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between small mb-1">
                    <span class="fw-medium">Figma</span>
                    <span class="text-muted">UI/UX Design</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar bg-success" style="width: 75%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-5 d-flex align-items-center justify-content-center">
              <img class="animate__animated animate__fadeInLeft img-fluid" src="/src/assets/profile/sampulDimas.png" alt="sampul" style="max-width: 100%;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;