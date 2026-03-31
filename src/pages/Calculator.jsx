import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { fleet } from "../data/fleet";
import { destinations } from "../data/destinations";
import { company } from "../data/company";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function formatRupiah(num) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export default function Calculator() {
  const [vehicleId, setVehicleId] = useState("");
  const [days, setDays] = useState(1);
  const [destinationIdx, setDestinationIdx] = useState("");

  const selectedVehicle = fleet.find((v) => v.id === vehicleId);
  const selectedDestination =
    destinationIdx !== "" ? destinations[Number(destinationIdx)] : null;

  const calculation = useMemo(() => {
    if (!selectedVehicle || !selectedDestination) return null;

    const rentalCost = selectedVehicle.pricePerDay * days;
    const extraCost = selectedDestination.extraCost * days;
    const total = rentalCost + extraCost;

    return { rentalCost, extraCost, total };
  }, [selectedVehicle, selectedDestination, days]);

  const handleWhatsApp = () => {
    if (!calculation || !selectedVehicle || !selectedDestination) return;

    const message = [
      `Halo Asshofiyah, saya ingin booking kendaraan.`,
      ``,
      `Kendaraan: ${selectedVehicle.name}`,
      `Kapasitas: ${selectedVehicle.seats} kursi`,
      `Tujuan: ${selectedDestination.name}`,
      `Durasi: ${days} hari`,
      ``,
      `Estimasi Biaya:`,
      `• Sewa kendaraan: ${formatRupiah(calculation.rentalCost)}`,
      calculation.extraCost > 0
        ? `• Biaya tujuan: ${formatRupiah(calculation.extraCost)}`
        : null,
      `• Total: ${formatRupiah(calculation.total)}`,
      ``,
      `Mohon konfirmasi ketersediaan. Terima kasih!`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const isComplete = selectedVehicle && selectedDestination && days > 0;

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
            Kalkulator <span className="text-primary">Trip</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-text-muted max-w-2xl mx-auto text-lg"
          >
            Hitung estimasi biaya perjalanan Anda. Pilih kendaraan, tujuan, dan
            durasi untuk melihat perkiraan harga.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-light-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form — 3 cols */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-light-card shadow-sm">
                <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
                  Detail Perjalanan
                </h2>

                <div className="space-y-5">
                  {/* Vehicle select */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Pilih Kendaraan
                    </label>
                    <select
                      value={vehicleId}
                      onChange={(e) => setVehicleId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-light-card bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">-- Pilih kendaraan --</option>
                      {fleet.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} ({v.seats} kursi) — {formatRupiah(v.pricePerDay)}/hari
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Destination select */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Tujuan / Area
                    </label>
                    <select
                      value={destinationIdx}
                      onChange={(e) => setDestinationIdx(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-light-card bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">-- Pilih tujuan --</option>
                      {destinations.map((d, i) => (
                        <option key={d.name} value={i}>
                          {d.name}
                          {d.extraCost > 0
                            ? ` (+${formatRupiah(d.extraCost)}/hari)`
                            : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Days input */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Jumlah Hari
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setDays((d) => Math.max(1, d - 1))}
                        className="w-10 h-10 rounded-xl border border-light-card bg-light-secondary text-text-primary flex items-center justify-center hover:border-primary transition-colors text-lg font-bold"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={days}
                        onChange={(e) =>
                          setDays(Math.max(1, Math.min(30, Number(e.target.value) || 1)))
                        }
                        className="w-20 text-center px-4 py-2.5 rounded-xl border border-light-card bg-white text-text-primary text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setDays((d) => Math.min(30, d + 1))}
                        className="w-10 h-10 rounded-xl border border-light-card bg-light-secondary text-text-primary flex items-center justify-center hover:border-primary transition-colors text-lg font-bold"
                      >
                        +
                      </button>
                      <span className="text-text-secondary text-sm">hari</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary — 2 cols */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-light-card shadow-sm overflow-hidden sticky top-24">
                {/* Header */}
                <div className="bg-dark px-6 py-5">
                  <h3 className="font-heading text-lg font-bold text-text-on-dark">
                    Estimasi Biaya
                  </h3>
                </div>

                <div className="p-6">
                  {isComplete && calculation ? (
                    <>
                      {/* Vehicle info */}
                      <div className="mb-5 pb-5 border-b border-light-card">
                        <p className="font-semibold text-text-primary">
                          {selectedVehicle.name}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {selectedVehicle.seats} kursi &middot;{" "}
                          {selectedDestination.name}
                        </p>
                        <p className="text-text-muted text-sm">
                          {days} hari
                        </p>
                      </div>

                      {/* Breakdown */}
                      <div className="space-y-3 mb-5 pb-5 border-b border-light-card">
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">
                            Sewa kendaraan ({days} hari)
                          </span>
                          <span className="text-text-primary font-medium">
                            {formatRupiah(calculation.rentalCost)}
                          </span>
                        </div>
                        {calculation.extraCost > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">
                              Biaya tujuan ({days} hari)
                            </span>
                            <span className="text-text-primary font-medium">
                              {formatRupiah(calculation.extraCost)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Total */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-heading font-bold text-text-primary">
                          Total Estimasi
                        </span>
                        <span className="text-primary font-bold text-2xl">
                          {formatRupiah(calculation.total)}
                        </span>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={handleWhatsApp}
                        className="w-full bg-primary hover:bg-primary-dark text-text-on-primary font-semibold py-3.5 rounded-full transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Booking via WhatsApp
                      </button>

                      <p className="text-text-muted text-xs text-center mt-3">
                        * Harga estimasi, bisa berubah tergantung kondisi.
                        Hubungi kami untuk konfirmasi final.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-light-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-text-muted"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-text-muted text-sm">
                        Pilih kendaraan, tujuan, dan durasi untuk melihat
                        estimasi biaya.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info note */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text-primary mb-1">
                  Catatan Penting
                </h3>
                <ul className="text-text-secondary text-sm space-y-1 leading-relaxed">
                  <li>
                    &bull; Harga bersifat estimasi dan dapat berubah sesuai
                    kondisi.
                  </li>
                  <li>
                    &bull; Harga sudah termasuk driver dan BBM dalam kota.
                  </li>
                  <li>&bull; Overtime dikenakan Rp 200.000/jam.</li>
                  <li>
                    &bull; Untuk tujuan khusus atau custom trip, silakan
                    konsultasi via WhatsApp.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
