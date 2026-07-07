const message = document.getElementById('myMessage');
message.innerHTML = `
    <div class="modal fade" id="message" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Kirim Pesan</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="https://formspree.io/f/mzdlwkqw" method="POST">
          <div class="mb-3">
            <label for="email" class="col-form-label">Email:</label>
            <input type="email" class="form-control" name="email" placeholder="Jhon@gmail.com">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Pesan:</label>
            <textarea class="form-control" name="message">Hallo DIMAS HADI SYANDANA</textarea>
          </div>

                <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary">Kirim Pesan</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
`;