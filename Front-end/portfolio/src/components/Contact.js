import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLanguage } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-purple-200 via-purple-100 to-purple-300 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Contactez-moi
        </h2>
        <div className="bg-white p-6 md:p-10 shadow-xl rounded-lg text-gray-800 space-y-6">
          {/* Localisation */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <FaMapMarkerAlt className="text-3xl text-gray-900" />
            <div>
              <h3 className="text-2xl font-semibold">Localisation</h3>
              <p>Dakar, Sénégal</p>
            </div>
          </div>

          {/* Adresse e-mail */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <FaEnvelope className="text-3xl text-gray-900" />
            <div>
              <h3 className="text-2xl font-semibold">Adresse e-mail</h3>
              <a
                href="mailto:momoibnibrvhimm2002@gmail.com"
                className="text-gray-900 hover:underline"
              >
                momoibnibrvhimm2002@gmail.com
              </a>
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <FaPhone className="text-3xl text-gray-900" />
            <div>
              <h3 className="text-2xl font-semibold">Téléphone</h3>
              <a
                href="tel:+221775848783"
                className="text-gray-900 hover:underline"
              >
                +221 77 584 87 83
              </a>
            </div>
          </div>

          {/* Langues parlées */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <FaLanguage className="text-3xl text-gray-900 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold">Langues parlées</h3>
              <ul className="list-disc list-inside">
                <li>Français</li>
                <li>Anglais (couramment)</li>
                <li>Peulh</li>
                <li>Wolof</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
