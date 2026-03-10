window.sendData = async () => {
    const nameVal = document.getElementById('inputName').value;
    const emailVal = document.getElementById('inputEmail').value;
    const messageVal = document.getElementById('inputMessage').value;
    let dateVal = new Date().toLocaleString('id-ID');

    if (nameVal === 'admin' && emailVal === 'admin@gmail.com' && messageVal === 'admin123') {
        const logBaru = {
            user: "Admin",
            aksi: "Login Berhasil",
            waktu: dateVal
        };

        const listLog = JSON.parse(localStorage.getItem('logAdmin')) || [];
        listLog.push(logBaru);
        localStorage.setItem('logAdmin', JSON.stringify(listLog));

        alert("Selamat datang ADMIN");
        window.location.href = "/src/page/dashboard.html";
    } else {
        if (!nameVal || !emailVal || !messageVal) {
            return alert("Mohon isi semua kolom!");
        }

        try {
            const pesanBaru = {
                name: nameVal,
                email: emailVal,
                message: messageVal,
                date: dateVal
            };
            const listPesan = JSON.parse(localStorage.getItem('pesanKontak')) || [];
            listPesan.push(pesanBaru);
            localStorage.setItem('pesanKontak', JSON.stringify(listPesan));

            const response = await fetch('https://formspree.io/f/myknekrb', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: dateVal,
                    name: nameVal,
                    email: emailVal,
                    message: messageVal
                })
            });

            if (response.ok) {
                alert("Pesan berhasil terkirim")

                document.getElementById('inputName').value = "";
                document.getElementById('inputEmail').value = "";
                document.getElementById('inputMessage').value = "";
            } else {
                alert("Oops! Seperti nya ada masalah saat mengirim pesan");
            }

        } catch (error) {
            console.error("Error ketika mengirim data: ", error);
            alert("Gagal koneksi ke server. Tapi pesan tetap tersimpan di browser lokal!");
        }
    }
};