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

export default function About() {
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
            Tentang <span className="text-primary">Kami</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            Mengenal lebih dekat Asshofiyah Tour & Travel — mitra perjalanan
            terpercaya di Semarang.
          </motion.p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-light-secondary rounded-2xl aspect-[4/3] border border-light-card flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/images/logo.png"
                    alt="Asshofiyah"
                    className="h-16 w-auto mx-auto mb-3 opacity-60"
                  />
                  <p className="text-text-muted text-sm">
                    Foto kantor/armada segera hadir
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-primary/20">
                Profil Perusahaan
              </span>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {company.name} Tour & Travel
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {company.description}
              </p>
              <p className="text-text-secondary leading-relaxed">
                Kami berkomitmen memberikan pelayanan terbaik dengan armada yang
                selalu dalam kondisi prima, driver yang berpengalaman dan ramah,
                serta harga yang kompetitif dan transparan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-light-secondary border-y border-light-card">
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Kenapa Pilih <span className="text-primary">Asshofiyah?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {company.whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex gap-4 bg-light-secondary rounded-xl p-6 border border-light-card"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Group */}
      <section className="py-16 bg-light-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Bagian dari <span className="text-primary">Grup Terpercaya</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              {company.parentGroup.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {company.parentGroup.companies.map((c) => (
                <div
                  key={c}
                  className="bg-white px-6 py-4 rounded-xl border border-light-card shadow-sm"
                >
                  <p className="font-heading font-semibold text-text-primary text-sm">
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
