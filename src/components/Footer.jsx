import { Link } from "react-router-dom";
import { company } from "../data/company";

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Asshofiyah
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", path: "/" },
                { name: "Tentang Kami", path: "/tentang-kami" },
                { name: "Armada", path: "/armada" },
                { name: "Harga Sewa", path: "/harga-sewa" },
                { name: "Kontak", path: "/kontak" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>{company.address}</li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Asshofiyah. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built by{" "}
            <a
              href="https://synthesis-lab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors"
            >
              Synthesis Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
