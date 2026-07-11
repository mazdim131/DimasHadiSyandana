const techStack = document.getElementById("techStack");
techStack.innerHTML = `
  <div class="modal fade" id="skill" tabindex="-1" aria-labelledby="skillLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0 shadow-lg">
        <div class="modal-header border-0 pb-0">
          <h1 class="modal-title fs-5 fw-bold text-dark" id="skillLabel">Tech Stacks & Skills</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">

          <!-- FRONT-END DEVELOPMENT -->
          <div class="mb-4">
            <h6 class="fw-bold text-uppercase tracking-wider text-secondary small mb-3">Front-End Development</h6>
            
            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">JavaScript (ES6+)</span>
                <span class="text-primary fw-medium">Menengah</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-primary" style="width: 50%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">React.js</span>
                <span class="text-warning fw-medium">Pemula</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 15%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">Bootstrap</span>
                <span class="text-success fw-medium">Menguasai</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-success" style="width: 90%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">HTML5 & CSS3</span>
                <span class="text-success fw-medium">Menguasai</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-success" style="width: 90%"></div>
              </div>
            </div>
          </div>

          <!-- BACK-END & DATABASE -->
          <div class="mb-4">
            <h6 class="fw-bold text-uppercase tracking-wider text-secondary small mb-3">Back-End & Database</h6>
            
            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">Node.js & Express.js</span>
                <span class="text-warning fw-medium">Pemula</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 25%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">PHP</span>
                <span class="text-warning fw-medium">Pemula</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 40%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">Databases (MySQL & MongoDB)</span>
                <span class="text-warning fw-medium">Pemula</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-warning" style="width: 47%"></div>
              </div>
            </div>
          </div>

          <!-- DEVELOPMENT TOOLS -->
          <div class="mb-2">
            <h6 class="fw-bold text-uppercase tracking-wider text-secondary small mb-3">Development Tools</h6>
            
            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">Git & GitHub</span>
                <span class="text-success fw-medium">Menguasai</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-success" style="width: 85%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">VS Code</span>
                <span class="text-muted small">Editor Utama</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-dark" style="width: 100%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">Notepad++</span>
                <span class="text-muted small">Editor Pendukung</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-secondary" style="width: 100%"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="fw-semibold">Figma</span>
                <span class="text-secondary fw-medium">UI/UX Design</span>
              </div>
              <div class="progress rounded-pill" style="height: 8px;">
                <div class="progress-bar bg-primary" style="width: 75%"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
`;
