import { useEffect, useState } from "react";

const TaskTracker = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
      setFilteredTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && status) {
      setTasks([...tasks, { name, status }]);
      setName("");
      setStatus("");
    }
  };

  const handleFilter = (filter) => {
    let filtered = tasks;
    switch (filter) {
      case "Active":
        filtered = tasks.filter((task) => task.status === "Active");
        break;
      case "Completed":
        filtered = tasks.filter((task) => task.status === "Completed");
        break;
      default:
        filtered = [
          ...tasks.sort((a, b) => {
            const statusPriority = {
              Active: 1,
              Completed: 2,
              Pending: 3,
              Archive: 4,
            };

            return statusPriority[a.status] - statusPriority[b.status];
          }),
        ];
        //console.log(tasks);
        break;
    }
    setFilteredTasks(filtered);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Archive">Archive</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        <button
          onClick={() => {
            handleFilter("Active");
            setIsFiltered(true);
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            handleFilter("Completed");
            setIsFiltered(true);
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            handleFilter("All");
            setIsFiltered(true);
          }}
        >
          All
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isFiltered
            ? filteredTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))
            : tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTracker;
