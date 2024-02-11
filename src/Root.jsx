import { useState } from "react";
import ContactsModal from "./Componenets/ContactsModal";
import UsContactsModal from "./Componenets/UsContactsModal";

const Root = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <p>Problem Two</p>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-2">
          <button
            className="btn"
            onClick={() => {
              document.getElementById("my_modal_1").showModal();
              setIsOpenModal(true);
            }}
          >
            All Contacts
          </button>
          <ContactsModal
            type="All Contacts"
            id="my_modal_1"
            isOpenModal={isOpenModal}
            onClose={setIsOpenModal}
          ></ContactsModal>

          <button
            onClick={() => {
              document.getElementById("my_modal_2").showModal();
              setIsOpenModal(true);
            }}
            className="btn"
          >
            US Contacts
          </button>
          <UsContactsModal
            type="US Contacts"
            id="my_modal_2"
            isOpenModal={isOpenModal}
            onClose={setIsOpenModal}
          ></UsContactsModal>
        </div>
      </div>
    </div>
  );
};

export default Root;
