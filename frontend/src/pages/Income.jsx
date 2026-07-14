import { useEffect, useState } from "react";
import axios from "axios";

function Income() {
  const [incomeList, setIncomeList] = useState([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchIncome = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/income/");
      setIncomeList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  const editIncome = (income) => {
    setEditingId(income.id);
    setSource(income.source);
    setAmount(income.amount);
    setDate(income.date);
  };

  const addIncome = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(
          `http://127.0.0.1:8000/api/income/${editingId}/`,
          {
            source,
            amount,
            date,
            user: 1,
          }
        );

        alert("Income Updated Successfully");
        setEditingId(null);

      } else {

        await axios.post(
          "http://127.0.0.1:8000/api/income/",
          {
            source,
            amount,
            date,
            user: 1,
          }
        );

        alert("Income Added Successfully");
      }

      setSource("");
      setAmount("");
      setDate("");

      fetchIncome();

    } catch (error) {
      console.error(error);
    }
  };

  const deleteIncome = async (id) => {
    if (!window.confirm("Delete this income?")) return;

    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/income/${id}/`
      );

      alert("Income Deleted Successfully");

      fetchIncome();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="text-success mb-4">
        Income Management
      </h2>

      <form onSubmit={addIncome}>

        <input
          className="form-control mb-3"
          placeholder="Income Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <input
          type="date"
          className="form-control mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button className="btn btn-success w-100">
          {editingId ? "Update Income" : "Add Income"}
        </button>

      </form>

      <hr />

      <h3>Income History</h3>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Source</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {incomeList.length > 0 ? (
            incomeList.map((income) => (
              <tr key={income.id}>

                <td>{income.source}</td>
                <td>₹ {income.amount}</td>
                <td>{income.date}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editIncome(income)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteIncome(income.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Income Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Income;