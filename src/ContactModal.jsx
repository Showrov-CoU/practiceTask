import Proptypes from "prop-types";

// import { useState, useEffect } from "react";

// import axios from "axios";

// const API_BASE_URL = "https://contact.mediusware.com/api";

const ContactModal = ({ isOpen, onClose, country }) => {
  //   const [contacts, setContacts] = useState([]);
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [onlyEven, setOnlyEven] = useState(false);
  //   const [page, setPage] = useState(2);
  //   const [loading, setLoading] = useState(false);

  //   const fetchContacts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/contacts/`, {
  //         params: { country, page, search: searchQuery, even: onlyEven ? 1 : 0 },
  //       });
  //       setContacts(response.data.results);

  //          setPage((prevPage) => prevPage + 1);
  //     } catch (error) {
  //       console.error("Error fetching contacts:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (isOpen) {
  //       setContacts([]);
  //       setPage(1);
  //       fetchContacts();
  //     }
  //   }, [isOpen, searchQuery, onlyEven, page]);

  //   const handleScroll = (e) => {
  //     const { scrollTop, clientHeight, scrollHeight } = e.target;
  //     if (scrollHeight - clientHeight - scrollTop <= 1) {
  //       console.log("Yes");
  //       //setPage((prevPage) => prevPage + 1);
  //       fetchContacts();
  //     }
  //   };

  //   const handleSearchChange = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  return (
    <div
      className={`modal ${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-500 bg-opacity-75`}
    >
      <div className="modal-dialog flex justify-center items-center">
        <div className="modal-content bg-white w-3/4">
          <div className="modal-header">
            <h3 className="modal-title">
              {country === "US" ? "US Contacts" : "All Contacts"}
            </h3>
            <button onClick={onClose} className="close-btn">
              &#10006;
            </button>
          </div>
          <div
            className="modal-body h-64 overflow-y-auto"
            // onScroll={handleScroll}
          >
            <input
              type="text"
              placeholder="Search..."
              //   value={searchQuery}
              //   onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <ul>
              {/* {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className="cursor-pointer hover:bg-gray-100 p-2"
                >
                  <span>{contact.country.name}</span>
                </li>
              ))} */}
            </ul>
            {/* {loading && <p>Loading...</p>} */}
          </div>
          <div className="modal-footer flex justify-between items-center">
            <label htmlFor="onlyEven" className="text-sm">
              <input
                type="checkbox"
                id="onlyEven"
                // checked={onlyEven}
                // onChange={() => setOnlyEven(!onlyEven)}
              />
              Only even
            </label>
            <button className="btn btn-close" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  isOpen: Proptypes.bool,
  onClose: Proptypes.fun,
  country: Proptypes.string,
};

export default ContactModal;
