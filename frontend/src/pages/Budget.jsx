import { useEffect, useState } from "react";
import axios from "axios";

function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const fetchBudgets = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/budgets/");
      setBudgets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const addBudget = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/budgets/", {
        category,
        limit,
        user: 1,
      });

      alert("Budget Added Successfully");

      setCategory("");
      setLimit("");

      fetchBudgets();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBudget = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/budgets/${id}/`);

      alert("Budget Deleted Successfully");

      fetchBudgets();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Budget Planning</h2>

      <form onSubmit={addBudget}>
        <input
          className="form-control mb-3"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Budget Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          required
        />

        <button className="btn btn-primary w-100">
          Add Budget
        </button>
      </form>

      <hr />

      <h3>Budget List</h3>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Category</th>
            <th>Limit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {budgets.length > 0 ? (
            budgets.map((budget) => (
              <tr key={budget.id}>
                <td>{budget.category}</td>
                <td>₹ {budget.limit}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteBudget(budget.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No Budgets Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Budget;