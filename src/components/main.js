const main = document.getElementById("main");
main.innerHTML = `
<div class="container px-3 px-md-4 mt-3 mt-md-4">
  <div class="row gy-5 gx-md-5 align-items-center">
    
    <div class="col-12 col-lg-7">
      <div class="p-0">
        
        <div class="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-4">
          <img src="/src/assets/profile/profile.jpg" 
               class="animate__animated animate__fadeInDown flex-shrink-0 shadow-sm" 
               style="width: 140px; height: 140px; object-fit: cover; border: 2px solid #dbdbdb; border-radius: 50%; padding: 4px;">
          
          <div class="d-flex gap-4 gap-sm-5 justify-content-center w-100 justify-content-sm-start animate__animated animate__fadeInDown">
            <div class="countPortofolio text-center">
              <h2 class="mb-0 fw-bold" style="font-size: calc(1.8rem + 1vw);">5</h2>
              <p class="text-secondary small mb-0">Portofolio</p>
            </div>
            <div class="countSertificate text-center">
              <h2 class="mb-0 fw-bold" style="font-size: calc(1.8rem + 1vw);">27</h2>
              <p class="text-secondary small mb-0">Sertifikat</p>
            </div>
            <div class="countSkills text-center">
              <h2 class="mb-0 fw-bold" style="font-size: calc(1.8rem + 1vw);">5</h2>
              <p class="text-secondary small mb-0">Skills</p>
            </div>
          </div>
        </div>

        <div class="mt-4 mt-md-5 desk animate__animated animate__fadeInDown text-center text-sm-start">
          <h3 class="fw-bold mb-1" style="font-size: 1.6rem;">Dimas Hadi Syandana <i class="bi bi-patch-check-fill" style="color: #0095f6; font-size: 1.3rem;"></i></h3>
          <p class="text-secondary mb-3" style="font-size: 0.95rem;">IT enthusiast | Web Developer</p>

          <h5 class="mt-3 fw-semibold text-dark" style="font-size: 1.15rem; line-height: 1.4;">Crafting Elegant & Responsive Website. Let’s collaborate! 🚀</h5>

          <p class="text-secondary lh-base my-3 mx-auto mx-sm-0" style="max-width: 600px; text-align: justify; font-size: 0.92rem;">
            Halo! Saya seorang Junior Developer yang saat ini sedang menempuh pendidikan di bidang Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki ketertarikan mendalam pada pengembangan Full-Stack Web dan selalu tertantang untuk mengubah ide-ide kreatif menjadi aplikasi web yang fungsional, responsif, serta memiliki estetika desain yang elegan...
          </p>

          <div class="row g-2 mt-4 btn-action mx-auto mx-sm-0" style="max-width: 450px;">
            <div class="col-4">
              <button type="button" onclick="follow()" class="btn btn-outline-dark w-100 fw-semibold py-2 px-1" style="border-radius: 8px; font-size: 0.85rem;"><i class="bi bi-plus-lg"></i> Ikuti</button>
            </div>
            <div class="col-4">
              <button type="button" data-bs-toggle="modal" data-bs-target="#message" class="btn btn-outline-dark w-100 fw-semibold py-2 px-1" style="border-radius: 8px; font-size: 0.85rem;">Pesan</button>
            </div>
            <div class="col-4">
              <button type="button" data-bs-toggle="modal" data-bs-target="#contact" class="btn btn-outline-dark w-100 fw-semibold py-2 px-1" style="border-radius: 8px; font-size: 0.85rem;">Kontak</button>
            </div>
          </div>
        </div>

        <div class="mt-5 d-flex gap-3 gap-md-4 overflow-x-auto pb-2 custom-slider animate__animated animate__fadeInUp" style="white-space: nowrap; -webkit-overflow-scrolling: touch; scrollbar-width: none;">
          
          <div class="sorotanSkill text-center flex-shrink-0" style="width: 85px;">
            <button type="button" data-bs-toggle="modal" data-bs-target="#skill" class="rounded-circle btn btn-light border shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 65px; height: 65px;">
              <i class="bi bi-code-slash" style="font-size: 1.6rem;"></i>
            </button>
            <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate" style="font-size: 0.8rem;">Tech Stacks</p>
          </div>
          
          <div class="sorotanLokasi text-center flex-shrink-0" style="width: 85px;">
            <button type="button" data-bs-toggle="modal" data-bs-target="#location" class="rounded-circle btn btn-light border shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 65px; height: 65px;">
              <i class="bi bi-geo-alt" style="font-size: 1.6rem;"></i>
            </button>
            <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate" style="font-size: 0.8rem;">Lokasi</p>
          </div>
          
          <div class="sorotanEducation text-center flex-shrink-0" style="width: 85px;">
            <button type="button" data-bs-toggle="modal" data-bs-target="#education" class="rounded-circle btn btn-light border shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 65px; height: 65px;">
              <i class="bi bi-mortarboard" style="font-size: 1.6rem;"></i>
            </button>
            <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate" style="font-size: 0.8rem;">Pendidikan</p>
          </div>
          
          <div class="sorotanTestimoni text-center flex-shrink-0" style="width: 85px;">
            <button type="button" data-bs-toggle="modal" data-bs-target="#testimoni" class="rounded-circle btn btn-light border shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 65px; height: 65px;">
              <i class="bi bi-chat-left-text" style="font-size: 1.6rem;"></i>
            </button>
            <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate" style="font-size: 0.8rem;">Testimoni</p>
          </div>

        </div>

      </div>
    </div>
    
    <div class="col-12 col-lg-5 d-none d-lg-flex align-items-center justify-content-center sampul">
      <div class="p-3 text-center w-100">
        <img class="animate__animated animate__fadeInLeft img-fluid"  style="width: 300px;" src="/src/assets/profile/sampulDimas.png" style="max-height: 400px; object-fit: contain;">
      </div>
    </div>

  </div>
</div>

<div class="container mt-4 animate__animated animate__fadeInUp">
  <hr class="text-muted opacity-25 my-4">
  <div class="row text-center mb-3">
    <div class="col">
      <i class="bi bi-grid-3x3 tab-icon active" id="tabGrid" style="font-size: 1.6rem; cursor: pointer; color: #000;"></i>
    </div>
    <div class="col">
      <i class="bi bi-briefcase tab-icon" id="tabProjects" style="font-size: 1.6rem; cursor: pointer; color: #8e8e8e;"></i>
    </div>
    <div class="col">
      <i class="bi bi-bookmark" id="tabSaved" style="font-size: 1.6rem; cursor: pointer; color: #8e8e8e;"></i>
    </div>
  </div>
  
  <div id="tabContent" class="py-2"></div>
</div>

<div id="myMessage"></div>
<div id="techStack"></div>
<div id="myLocation"></div>
<div id="myEducation"></div>
<div id="myTestimoni"></div>
<div id="myContact"></div>
`;
