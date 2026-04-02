import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../data/company";
import { fleet } from "../data/fleet";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-dark via-dark-secondary to-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/20"
            >
              Sewa Kendaraan Terpercaya di Semarang
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-on-dark leading-tight mb-6"
            >
              {company.tagline.split(",")[0]},{" "}
              <span className="text-primary">
                {company.tagline.split(",")[1]}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg"
            >
              {company.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Halo Asshofiyah, saya ingin booking kendaraan.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-text-on-primary font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
              >
                Booking Sekarang
              </a>
              <Link
                to="/armada"
                className="border border-dark-border hover:border-primary text-text-on-dark font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
              >
                Lihat Armada
              </Link>
            </motion.div>
          </div>

          {/* Right image placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="bg-dark-card rounded-2xl overflow-hidden aspect-[4/3] border border-dark-border">
                <img
                  src={fleet[0].image}
                  alt={fleet[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-text-on-primary px-5 py-3 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs">Tahun Pengalaman</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-white py-16 border-b border-light-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {company.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const icons = [
    // Shield/check icon for Armada Terawat
    <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    // Steering wheel for Driver
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    // Tag for Harga
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
    // Chat for Booking
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  ];

  return (
    <section className="py-20 bg-light-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Kenapa Pilih <span className="text-primary">Asshofiyah?</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan sewa kendaraan terbaik dengan
            standar keamanan dan kenyamanan tinggi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-xl p-6 border border-light-card hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {icons[i]}
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetHighlights() {
  const highlighted = fleet.filter((v) => v.popular);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Armada <span className="text-primary">Unggulan</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Pilihan kendaraan terpopuler untuk perjalanan Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlighted.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-light-secondary rounded-2xl overflow-hidden border border-light-card hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="aspect-[16/9] bg-light-card overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-text-primary">
                      {vehicle.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {vehicle.seats} kursi
                    </p>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Populer
                  </span>
                </div>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Facilities */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {vehicle.facilities.slice(0, 5).map((f) => (
                    <span
                      key={f}
                      className="bg-white text-text-secondary text-xs px-2.5 py-1 rounded-full border border-light-card"
                    >
                      {f}
                    </span>
                  ))}
                  {vehicle.facilities.length > 5 && (
                    <span className="text-text-muted text-xs px-2.5 py-1">
                      +{vehicle.facilities.length - 5} lainnya
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-muted">Mulai dari</p>
                    <p className="text-primary font-bold text-lg">
                      {vehicle.priceRange.split(" - ")[0]}
                      <span className="text-text-muted font-normal text-xs">
                        /hari
                      </span>
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/628xxxxxxxxxx?text=${encodeURIComponent(`Halo, saya ingin booking ${vehicle.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-dark text-text-on-primary text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/armada"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            Lihat Semua Armada
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Untuk Perjalanan Anda?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk booking kendaraan. Proses cepat, harga
            terjangkau, armada terawat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/628xxxxxxxxxx?text=${encodeURIComponent("Halo Asshofiyah, saya ingin booking kendaraan.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
            <Link
              to="/harga-sewa"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Lihat Harga
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <FleetHighlights />
      <CTASection />
    </>
  );
}
