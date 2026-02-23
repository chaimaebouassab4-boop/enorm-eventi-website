import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactSection.css";

const ContactSection = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: connect to your backend / email service
    // For now: basic guard
    if (!form.fullName || !form.email || !form.message) return;

    console.log("Contact form submit:", form);
    alert(t("contact.sent", "Message envoyé ✅"));
    setForm({ fullName: "", email: "", phone: "", message: "" });
  };

  // ✅ Remplace par ton numéro WhatsApp (format international sans + ni espaces)
  const whatsappNumber = "212600000000";
  const whatsappText = encodeURIComponent(
    "Bonjour ENOMIS EVENTI, je souhaite demander un devis pour mon événement."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  // ✅ Remplace par ton embed Google Maps (ou un iframe autre)
  const mapEmbedSrc =
    "https://www.google.com/maps?q=Roma&output=embed";

  return (
    <section className="en-contact" id="contact">
      <div className="en-contact__container">
        <div className="en-contact__header">
          <p className="en-contact__kicker">
            {t("contact.kicker", "Contact")}
          </p>
          <h2 className="en-contact__title">
            {t("contact.title", "Demander un devis")}
          </h2>
          <p className="en-contact__subtitle">
            {t(
              "contact.subtitle",
              "Remplissez le formulaire ci-dessous et nous vous répondrons rapidement."
            )}
          </p>
        </div>

        <div className="en-contact__grid">
          {/* LEFT: form */}
          <div className="en-contact__panel">
            <h3 className="en-contact__panelTitle">
              {t("contact.formTitle", "Envoyez-nous un message")}
            </h3>

            <form id="contact-form" className="en-contact__form" onSubmit={onSubmit}>
              <label className="en-field">
                <span className="en-field__label">
                  {t("contact.fullName", "Nom complet")}
                </span>
                <input
                  className="en-field__input"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder={t("contact.fullNamePh", "Votre nom")}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="en-field">
                <span className="en-field__label">
                  {t("contact.email", "Email")}
                </span>
                <input
                  className="en-field__input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder={t("contact.emailPh", "votre@email.com")}
                  autoComplete="email"
                  required
                />
              </label>

              <div className="en-field en-field--phone">
                <label className="en-field__wrap">
                  <span className="en-field__label">
                    {t("contact.phone", "Téléphone")}
                  </span>
                  <input
                    className="en-field__input"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder={t("contact.phonePh", "+39 ...")}
                    autoComplete="tel"
                  />
                </label>

                <a
                  className="en-whatsapp"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  WA
                </a>
              </div>

              <label className="en-field">
                <span className="en-field__label">
                  {t("contact.message", "Message")}
                </span>
                <textarea
                  className="en-field__textarea"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t("contact.messagePh", "Décrivez votre besoin...")}
                  rows={6}
                  required
                />
              </label>

              <button className="en-btn en-btn--primary" type="submit">
                {t("contact.send", "Envoyer le message")}
              </button>
            </form>
          </div>

          {/* RIGHT: map + info cards */}
          <div className="en-contact__side">
            <div className="en-map">
              <iframe
                title="Map"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="en-infoCard">
              <h3 className="en-infoCard__title">
                {t("contact.infoTitle", "Informations de contact")}
              </h3>

              <div className="en-infoList">
                <div className="en-infoItem">
                  <div className="en-infoIcon">☎</div>
                  <div>
                    <div className="en-infoLabel">{t("contact.phone", "Téléphone")}</div>
                    <a className="en-infoValue" href="tel:+39000000000">
                      +39 000 000 000
                    </a>
                  </div>
                </div>

                <div className="en-infoItem">
                  <div className="en-infoIcon">✉</div>
                  <div>
                    <div className="en-infoLabel">{t("contact.email", "Email")}</div>
                    <a className="en-infoValue" href="mailto:contact@enomiseventi.com">
                      contact@enomiseventi.com
                    </a>
                  </div>
                </div>

                <div className="en-infoItem">
                  <div className="en-infoIcon">⌁</div>
                  <div>
                    <div className="en-infoLabel">{t("contact.address", "Adresse")}</div>
                    <div className="en-infoValue">
                      {t("contact.addressValue", "Italie (déplacements sur demande)")}
                    </div>
                  </div>
                </div>

                <div className="en-infoItem">
                  <div className="en-infoIcon">⏱</div>
                  <div>
                    <div className="en-infoLabel">{t("contact.hours", "Horaires")}</div>
                    <div className="en-infoValue">
                      {t("contact.hoursValue", "Lun–Sam : 09:00–19:00")}
                    </div>
                  </div>
                </div>
              </div>

              <a className="en-btn en-btn--ghost" href={whatsappLink} target="_blank" rel="noreferrer">
                {t("contact.ctaWhatsapp", "WhatsApp : obtenir un devis")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
