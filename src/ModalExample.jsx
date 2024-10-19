// src/ModalExample.js
import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useTranslation } from "react-i18next";

export default function ModalExample() {
  const { t } = useTranslation(); // Hook de traducción
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={openModal}
      >
        {t("footer.openModal")}
      </Button>

      <Modal show={isOpen} size="md" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              {t("footer.modalMessage")}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={closeModal}>
                {t("footer.close")}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
