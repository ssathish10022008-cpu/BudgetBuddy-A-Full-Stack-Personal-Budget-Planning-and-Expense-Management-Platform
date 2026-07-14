import { Link } from "react-router-dom";
import { FaWallet, FaChartPie, FaMoneyBillWave, FaBullseye } from "react-icons/fa";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="display-3 fw-bold text-primary">
          BudgetBuddy 💰
        </h1>

        <p className="lead mt-3">
          Your Full Stack Personal Budget Planning and Expense Management Platform
        </p>

        <div className="mt-4">

          <Link to="/login" className="btn btn-primary btn-lg me-3">
            Login
          </Link>

          <Link to="/register" className="btn btn-success btn-lg">
            Register
          </Link>

        </div>

      </div>

      <hr className="my-5" />

      <div className="row text-center">

        <div className="col-md-3">

          <FaMoneyBillWave size={60} className="text-success" />

          <h4 className="mt-3">Track Income</h4>

          <p>Add and manage your income easily.</p>

        </div>

        <div className="col-md-3">

          <FaWallet size={60} className="text-danger" />

          <h4 className="mt-3">Expenses</h4>

          <p>Track every expense in one place.</p>

        </div>

        <div className="col-md-3">

          <FaBullseye size={60} className="text-warning" />

          <h4 className="mt-3">Savings Goal</h4>

          <p>Set goals and monitor your savings.</p>

        </div>

        <div className="col-md-3">

          <FaChartPie size={60} className="text-info" />

          <h4 className="mt-3">Reports</h4>

          <p>Visualize your financial reports.</p>

        </div>

      </div>

    </div>
  );
}

export default Home;