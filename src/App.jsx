import { useState } from "react";
import "./App.css";
import ContactModal from "./ContactModal";
//import TaskTracker from "./TaskTracker";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState("");

  const openModal = (country) => {
    setModalOpen(true);
    setCountry(country);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <button onClick={() => openModal("")} className="btn">
          All Contacts
        </button>
        <button onClick={() => openModal("United States")} className="btn">
          US Contacts
        </button>
      </div>
      <ContactModal isOpen={modalOpen} onClose={closeModal} country={country} />
    </div>
  );
}

export default App;
