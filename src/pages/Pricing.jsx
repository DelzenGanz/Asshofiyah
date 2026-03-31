import { motion } from "framer-motion";
import { pricing, terms } from "../data/pricing";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Pricing() {
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
            Harga <span className="text-primary">Sewa</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            Harga transparan, tanpa biaya tersembunyi. Semua harga sudah
            termasuk driver.
          </motion.p>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 bg-light-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-light-card overflow-hidden shadow-sm"
          >
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark text-text-on-dark">
                    <th className="text-left px-6 py-4 font-heading font-semibold text-sm">
                      Kendaraan
                    </th>
                    <th className="text-center px-6 py-4 font-heading font-semibold text-sm">
                      Kapasitas
                    </th>
                    <th className="text-center px-6 py-4 font-heading font-semibold text-sm">
                      Harga/Hari
                    </th>
                    <th className="text-center px-6 py-4 font-heading font-semibold text-sm">
                      Overtime
                    </th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item, i) => (
                    <tr
                      key={item.vehicle}
                      className={`border-b border-light-card last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-light-secondary"
                      }`}
                    >
                      <td className="px-6 py-5">
                        <p className="font-semibold text-text-primary">
                          {item.vehicle}
                        </p>
                      </td>
                      <td className="px-6 py-5 text-center text-text-secondary text-sm">
                        {item.seats} kursi
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-primary font-bold">
                          {item.dailyRate}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center text-text-secondary text-sm">
                        {item.overtimeRate}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <a
                          href={`https://wa.me/628xxxxxxxxxx?text=${encodeURIComponent(`Halo, saya ingin booking ${item.vehicle}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary hover:bg-primary-dark text-text-on-primary text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-light-card">
              {pricing.map((item) => (
                <div key={item.vehicle} className="p-5">
                  <h3 className="font-heading font-bold text-text-primary mb-3">
                    {item.vehicle}
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-text-muted text-xs">Kapasitas</p>
                      <p className="font-medium text-text-primary">
                        {item.seats} kursi
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">Harga/Hari</p>
                      <p className="font-bold text-primary">{item.dailyRate}</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">Overtime</p>
                      <p className="font-medium text-text-primary">
                        {item.overtimeRate}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/628xxxxxxxxxx?text=${encodeURIComponent(`Halo, saya ingin booking ${item.vehicle}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary hover:bg-primary-dark text-text-on-primary text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
              Syarat & <span className="text-primary">Ketentuan</span>
            </h2>

            <div className="bg-light-secondary rounded-2xl p-6 sm:p-8 border border-light-card">
              <ul className="space-y-4">
                {terms.map((term, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {term}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
