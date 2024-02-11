import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const UsContactsModal = ({ type, id, isOpenModal, onClose }) => {
  const [usContactsData, setUsContactsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [onlyEven, setOnlyEven] = useState(false);
  //const [onlyEvenData, setOnlyEvenData] = useState([]);

  useEffect(() => {
    if (isOpenModal) {
      fetchUsContacts();
    }
    // console.log(allContactsData);
  }, [isOpenModal]);

  const fetchUsContacts = async () => {
    try {
      if (page <= 2) {
        const res = await axios.get(
          `https://contact.mediusware.com/api/country-contacts/United%20States/?page=${page}`
        );
        const newData = res.data.results;
        //   console.log(newData);
        setUsContactsData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      }

      //console.log(res.data.results);
    } catch (error) {
      console.log("Fetch Problem Occur in US Contacts Data");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <= 1 &&
      !loading
    ) {
      fetchUsContacts();
    }
  };

  const handleCheckboxChange = (e) => {
    setOnlyEven(e.target.checked);
    // console.log("thus", onlyEven);
  };

  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <div className="flex justify-between items-center pb-5">
            <h3 className="font-bold text-lg">{type}</h3>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={() => onClose(false)}>
                  Close
                </button>
              </form>
            </div>
          </div>
          <div>
            {isOpenModal && !onlyEven ? (
              <div
                className="py-4 h-72 overflow-y-scroll"
                onScroll={handleScroll}
              >
                {loading && <p className="p-4 text-center">Loading...</p>}
                {usContactsData.map((item, index) => (
                  <p key={index}>
                    ID:{item.id} &nbsp;&nbsp; CountryName: {item.country.name}
                  </p>
                ))}
              </div>
            ) : (
              <div
                className="py-4 h-72 overflow-y-scroll"
                onScroll={handleScroll}
              >
                {loading && <p className="p-4 text-center">Loading...</p>}
                {usContactsData
                  .filter((item) => item.id % 2 == 0)
                  .map((item, index) => (
                    <p key={index}>
                      ID:{item.id} &nbsp;&nbsp; CountryName: {item.country.name}
                    </p>
                  ))}
              </div>
            )}
          </div>
          <div className="pt-5">
            <input
              type="checkbox"
              checked={onlyEven}
              onChange={handleCheckboxChange}
            ></input>
          </div>
        </div>
      </dialog>
    </div>
  );
};

UsContactsModal.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  isOpenModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default UsContactsModal;
