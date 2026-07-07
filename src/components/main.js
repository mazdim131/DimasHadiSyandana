const main = document.getElementById("main");
main.innerHTML = `
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <div class="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
  <img src="/src/assets/profile/profile.jpg" class="animate__animated animate__fadeInDown mb-4 mb-md-0" style="max-width: 170px; border: 2px solid #dbdbdb; border-radius: 50%; padding: 5px;">
  
  <div class="d-flex gap-4 gap-md-5 ms-0 ms-md-5 justify-content-center animate__animated animate__fadeInDown">
    <div class="countPortofolio text-center">
      <h2 class="mb-0" style="font-size: 3rem; font-weight: 700;">3</h2>
      <p class="text-secondary small mb-0">Portofolio</p>
    </div>
    <div class="countSertificate text-center">
      <h2 class="mb-0" style="font-size: 3rem; font-weight: 700;">27</h2>
      <p class="text-secondary small mb-0">Sertifikat</p>
    </div>
    <div class="countSkills text-center">
      <h2 class="mb-0" style="font-size: 3rem; font-weight: 700;">5</h2>
      <p class="text-secondary small mb-0">Skills</p>
    </div>
  </div>
</div>

        <div class="mt-5 desk animate__animated animate__fadeInDown">
          <h3 class="fw-bold mb-1" style="font-size: 1.75rem;">Dimas Hadi Syandana <i class="bi bi-patch-check-fill" style="color: #0095f6;"></i></h3>
          <p class="text-secondary mb-4" style="font-size: 1rem;">IT enthusiast | Web Developer</p>

          <h5 class="mt-4 fw-semibold text-dark" style="font-size: 1.25rem;">Crafting Elegant & Responsive Website. Let’s collaborate! 🚀</h5>

          <p class="text-secondary lh-base mb-4" style="max-width: 600px; text-align: justify; font-size: 0.95rem;">
            Halo! Saya seorang Junior Developer yang saat ini sedang menempuh pendidikan di bidang Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki ketertarikan mendalam pada pengembangan Full-Stack Web dan selalu tertantang untuk mengubah ide-ide kreatif menjadi aplikasi web yang fungsional, responsif, serta memiliki estetika desain yang elegan...
          </p>

          <div class="d-flex gap-2 mt-4 btn-action">
            <button type="button" onclick="follow()" class="btn btn-outline-dark btn-md fw-semibold px-4" style="border-radius: 8px; font-size: 0.95rem;"><i class="bi bi-plus-lg"></i> Ikuti</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#message" class="btn btn-outline-dark btn-md fw-semibold px-4" style="border-radius: 8px; font-size: 0.95rem;">Pesan</button>
            <button type="button" class="btn btn-outline-dark btn-md fw-semibold px-4" style="border-radius: 8px; font-size: 0.95rem;">Kontak</button>
          </div>
        </div>

<div class="mt-5 d-flex gap-4 gap-md-5 overflow-x-auto pb-2 custom-slider animate__animated animate__fadeInUp" style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
  <div class="sorotanSkill text-center flex-shrink-0" style="width: 90px;">
    <button type="button" data-bs-toggle="modal" data-bs-target="#skill" class="rounded-circle btn btn-light shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
      <i class="bi bi-code-slash" style="font-size: 2rem;"></i>
    </button>
    <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate">Tech Stacks</p>
  </div>
  <div class="sorotanLokasi text-center flex-shrink-0" style="width: 90px;">
    <button type="button" data-bs-toggle="modal" data-bs-target="#location" class="rounded-circle btn btn-light shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
      <i class="bi bi-geo-alt" style="font-size: 2rem;"></i>
    </button>
    <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate">Lokasi</p>
  </div>
  <div class="sorotanEducation text-center flex-shrink-0" style="width: 90px;">
    <button type="button" data-bs-toggle="modal" data-bs-target="#education" class="rounded-circle btn btn-light shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
      <i class="bi bi-mortarboard" style="font-size: 2rem;"></i>
    </button>
    <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate">Pendidikan</p>
  </div>
  <div class="sorotanTestimoni text-center flex-shrink-0" style="width: 90px;">
    <button type="button" data-bs-toggle="modal" data-bs-target="#testimoni" class="rounded-circle btn btn-light shadow-sm d-inline-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
      <i class="bi bi-chat-left-text" style="font-size: 2rem;"></i>
    </button>
    <p class="mt-2 small fw-medium text-secondary mb-0 text-truncate">Testimoni</p>
  </div>
</div>

      </div>
    </div>
    
    <div class="col">
      <div class="p-3 text-center h-100 d-flex align-items-center justify-content-center sampul">
        <img class="animate__animated animate__fadeInLeft" src="/src/assets/profile/sampulDimas.png" style="width: 310px; object-fit: contain;">
      </div>
    </div>
  </div>
</div>

<div class="container mt-5 animate__animated animate__fadeInUp">
  <hr class="text-muted opacity-25 my-4">
  <div class="row text-center mb-4">
    <div class="col">
      <i class="bi bi-grid-3x3 tab-icon active" id="tabGrid" style="font-size: 2rem; cursor: pointer; color: #000;"></i>
    </div>
    <div class="col">
      <i class="bi bi-briefcase tab-icon" id="tabProjects" style="font-size: 2rem; cursor: pointer; color: #8e8e8e;"></i>
    </div>
    <div class="col">
      <i class="bi bi-bookmark" id="tabSaved" style="font-size: 2rem; cursor: pointer; color: #8e8e8e;"></i>
    </div>
  </div>
  
  <div id="tabContent" class="py-3"></div>
</div>

<div id="myMessage"></div>
<div id="techStack"></div>
<div id="myLocation"></div>
<div id="myEducation"></div>
<div id="myTestimoni"></div>
`;