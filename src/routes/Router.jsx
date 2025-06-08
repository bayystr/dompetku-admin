import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../routes/pages/Dashboard";
import Users from "../routes/pages/Users";
import Transactions from "../routes/pages/Transactions";
import Settings from "../routes/pages/Settings";
import Login from "../routes/pages/Login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/transactions"
          element={
            <Layout>
              <Transactions />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}