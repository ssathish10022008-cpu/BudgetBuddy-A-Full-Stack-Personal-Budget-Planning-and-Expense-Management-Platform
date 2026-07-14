import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch data from all APIs
      const incomeResponse = await axios.get("http://127.0.0.1:8000/api/income/");
      const expenseResponse = await axios.get("http://127.0.0.1:8000/api/expenses/");
      const budgetResponse = await axios.get("http://127.0.0.1:8000/api/budgets/");

      // Calculate total income
      const income = incomeResponse.data.reduce(
        (sum, item) => sum + Number(item.amount),
        0
      );

      // Calculate total expenses
      const expenses = expenseResponse.data.reduce(
        (sum, item) => sum + Number(item.amount),
        0
      );

      // Calculate total budget
      const budget = budgetResponse.data.reduce(
        (sum, item) => sum + Number(item.limit),
        0
      );

      setTotalIncome(income);
      setTotalExpenses(expenses);
      setTotalBudget(budget);

    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  };

  const savings = totalIncome - totalExpenses;

  return (
    <div className="container mt-5">

      <h1 className="text-primary mb-4">
        BudgetBuddy Dashboard
      </h1>

      <div className="row">

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow border-success">
            <div className="card-body">
              <h5>Total Income</h5>
              <h2 className="text-success">
                ₹ {totalIncome}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow border-danger">
            <div className="card-body">
              <h5>Total Expenses</h5>
              <h2 className="text-danger">
                ₹ {totalExpenses}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow border-primary">
            <div className="card-body">
              <h5>Total Budget</h5>
              <h2 className="text-primary">
                ₹ {totalBudget}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow border-warning">
            <div className="card-body">
              <h5>Savings</h5>
              <h2 className="text-warning">
                ₹ {savings}
              </h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;