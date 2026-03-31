import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data/company";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    vehicle: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo Asshofiyah, saya ingin booking kendaraan.\n\nNama: ${form.name}\nNo. HP: ${form.phone}\nTanggal: ${form.date}\nKendaraan: ${form.vehicle}`;
    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Nama Lengkap
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
          className="w-full px-4 py-3 rounded-xl border border-light-card bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          No. WhatsApp / HP
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
          className="w-full px-4 py-3 rounded-xl border border-light-card bg-white text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Tanggal Keberangkatan
        </label>
        <input
          type="date"
          name="date"
          required
          value={form.date}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-light-card bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Pilih Kendaraan
        </label>
        <select
          name="vehicle"
          required
          value={form.vehicle}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-light-card bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        >
          <option value="">-- Pilih kendaraan --</option>
          <option value="Hiace Premio Luxury">Hiace Premio Luxury (8-10 kursi)</option>
          <option value="Hiace Commuter Luxury">Hiace Commuter Luxury (12-14 kursi)</option>
          <option value="Hiace Commuter Standard">Hiace Commuter Standard (14-16 kursi)</option>
          <option value="Elf Long">Elf Long (17-19 kursi)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-text-on-primary font-semibold py-3.5 rounded-full transition-colors text-sm flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Kirim via WhatsApp
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-dark via-dark-secondary to-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl font-bold text-text-on-dark mb-4"
          >
            Hubungi <span className="text-primary">Kami</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            Siap membantu Anda merencanakan perjalanan. Isi form di bawah atau
            langsung hubungi kami via WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Booking Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-light-card shadow-sm">
                <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
                  Form Booking
                </h2>
                <BookingForm />
              </div>
            </motion.div>

            {/* Info & Map */}
            <div className="space-y-6">
              {/* Contact Info */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-light-card shadow-sm"
              >
                <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
                  Informasi Kontak
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">Alamat</p>
                      <p className="text-text-secondary text-sm">{company.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">Telepon</p>
                      <p className="text-text-secondary text-sm">{company.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">Email</p>
                      <p className="text-text-secondary text-sm">{company.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Google Maps */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="bg-white rounded-2xl overflow-hidden border border-light-card shadow-sm"
              >
                <iframe
                  src={company.googleMapsEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Asshofiyah"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
