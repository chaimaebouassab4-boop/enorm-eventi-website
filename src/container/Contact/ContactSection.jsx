import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaClock,
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  /* ✅ Scroll vers le formulaire si ?scroll=form */
  useEffect(() => {
    if (location.search.includes("scroll=form")) {
      setTimeout(() => {
        const el = document.getElementById("contact-form");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [location]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) return;
    console.log("Contact form submit:", form);
    alert(t("contact.sent", "Message envoyé ! Nous vous contacterons bientôt."));
    setForm({ fullName: "", email: "", phone: "", message: "" });
  };

  const whatsappNumber = "212600000000";
  const whatsappText = encodeURIComponent(
    "Bonjour ENOMIS EVENTI, je souhaite demander un devis pour mon evenement."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  const mapEmbedSrc = "https://www.google.com/maps?q=Roma&output=embed";

  return (
    <section className="en-contact" id="contact">
      <div className="en-contact__container">
        <div className="en-contact__header">
          <p className="en-contact__kicker">Contact</p>
          <h2 className="en-contact__title">Demander un devis</h2>
          <p className="en-contact__subtitle">
            Remplissez le formulaire et nous vous répondrons sous 24h.
          </p>
        </div>

        <div className="en-contact__grid">
          <div className="en-contact__panel">
            <h3 className="en-contact__panelTitle">
              <FaEnvelope aria-hidden="true" />
              Envoyez-nous un message
            </h3>

            <form className="en-contact__form" id="contact-form" onSubmit={onSubmit}>
              <label className="en-field">
                <span className="en-field__label">
                  <FaUser aria-hidden="true" /> Nom complet
                </span>
                <input
                  className="en-field__input"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder="Votre nom..."
                  autoComplete="name"
                  required
                />
              </label>

              <label className="en-field">
                <span className="en-field__label">
                  <FaEnvelope aria-hidden="true" /> Email
                </span>
                <input
                  className="en-field__input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="votre@email.com"
                  autoComplete="email"
                  required
                />
              </label>

              <div className="en-field">
                <span className="en-field__label">
                  <FaPhoneAlt aria-hidden="true" /> Téléphone
                </span>
                <div className="en-phone-row">
                  <input
                    className="en-field__input"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+39 ..."
                    autoComplete="tel"
                  />
                  <a
                    className="en-whatsapp"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    title="Contactez-nous sur WhatsApp"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <label className="en-field">
                <span className="en-field__label">
                  <FaCommentDots aria-hidden="true" /> Message
                </span>
                <textarea
                  className="en-field__textarea"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Décrivez votre événement de rêve..."
                  rows={4}
                  required
                />
              </label>

              <button className="en-btn en-btn--primary" type="submit">
                <FaPaperPlane aria-hidden="true" /> Envoyer le message
              </button>
            </form>
          </div>

          <div className="en-contact__side">
            <div className="en-map">
              <iframe
                title="Map ENOMIS EVENTI"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="en-infoCard">
              <h3 className="en-infoCard__title">
                <FaPhoneAlt aria-hidden="true" /> Informations de contact
              </h3>

              <div className="en-infoList">
                <div className="en-infoItem">
                  <div className="en-infoIcon"><FaPhoneAlt /></div>
                  <div>
                    <div className="en-infoLabel">Téléphone</div>
                    <a className="en-infoValue" href="tel:+39000000000">+39 000 000 000</a>
                  </div>
                </div>
                <div className="en-infoItem">
                  <div className="en-infoIcon"><FaEnvelope /></div>
                  <div>
                    <div className="en-infoLabel">Email</div>
                    <a className="en-infoValue" href="mailto:contact@enomiseventi.com">
                      contact@enomiseventi.com
                    </a>
                  </div>
                </div>
                <div className="en-infoItem">
                  <div className="en-infoIcon"><FaMapMarkerAlt /></div>
                  <div>
                    <div className="en-infoLabel">Zone</div>
                    <div className="en-infoValue">Italie &amp; International</div>
                  </div>
                </div>
                <div className="en-infoItem">
                  <div className="en-infoIcon"><FaClock /></div>
                  <div>
                    <div className="en-infoLabel">Horaires</div>
                    <div className="en-infoValue">Lun-Sam : 09:00-19:00</div>
                  </div>
                </div>
              </div>

              <a className="en-btn en-btn--ghost" href={whatsappLink} target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" /> WhatsApp - devis rapide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;