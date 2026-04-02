import { motion } from "framer-motion";
import { fleet } from "../data/fleet";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function FleetCard({ vehicle, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="bg-white rounded-2xl overflow-hidden border border-light-card hover:shadow-xl transition-shadow group"
    >
      {/* Image */}
      <div className="aspect-[16/10] bg-light-card overflow-hidden relative">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {vehicle.popular && (
          <span className="absolute top-4 left-4 bg-primary text-text-on-primary text-xs font-semibold px-3 py-1 rounded-full">
            Populer
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading font-bold text-xl text-text-primary">
            {vehicle.name}
          </h3>
          <div className="flex items-center gap-1 text-text-secondary text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {vehicle.seats} kursi
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {vehicle.description}
        </p>

        {/* Facilities */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
            Fasilitas
          </p>
          <div className="flex flex-wrap gap-2">
            {vehicle.facilities.map((f) => (
              <span
                key={f}
                className="bg-light-secondary text-text-secondary text-xs px-2.5 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-light-card">
          <div>
            <p className="text-xs text-text-muted">Harga mulai</p>
            <p className="text-primary font-bold text-lg">
              {vehicle.priceRange.split(" - ")[0]}
              <span className="text-text-muted font-normal text-xs">/hari</span>
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
  );
}

export default function Fleet() {
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
            Armada <span className="text-primary">Kami</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            Pilih kendaraan yang sesuai dengan kebutuhan perjalanan Anda.
            Seluruh armada terawat dan dilengkapi fasilitas lengkap.
          </motion.p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 bg-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {fleet.map((vehicle, i) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Butuh Bantuan Memilih Armada?
          </h2>
          <p className="text-text-secondary mb-6">
            Tim kami siap membantu Anda memilih kendaraan yang tepat sesuai
            jumlah rombongan dan tujuan perjalanan.
          </p>
          <a
            href="https://wa.me/628xxxxxxxxxx?text=Halo%2C%20saya%20butuh%20bantuan%20memilih%20armada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-text-on-primary font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
