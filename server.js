const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulasi database booking
const bookings = [];

// Fungsi generate kode booking unik
function generateBookingCode() {
    return 'BK' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

app.post('/api/payment', (req, res) => {
    const { hotel, checkin, checkout, guests, paymentMethod } = req.body;

    // Validasi sederhana
    if (!hotel || !checkin || !checkout || !guests || !paymentMethod) {
        return res.status(400).json({ message: 'Data pemesanan tidak lengkap.' });
    }

    // Simulasi proses pembayaran (selalu berhasil)
    // Di dunia nyata, integrasi dengan payment gateway diperlukan

    const bookingCode = generateBookingCode();

    bookings.push({
        bookingCode,
        hotel,
        checkin,
        checkout,
        guests,
        paymentMethod,
        createdAt: new Date(),
    });

    return res.json({
        message: 'Pembayaran berhasil',
        bookingCode,
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
