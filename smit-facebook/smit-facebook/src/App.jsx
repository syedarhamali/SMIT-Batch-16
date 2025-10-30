import { Route, Routes } from "react-router"
import Home from "./components/views/home"
import SignIn from "./components/views/signin"
import Signup from "./components/views/signup"
import Dashboard from "./components/views/dashboard"
import ProtectedRoute from "./provider/protectedRoute"
import PublicRoute from "./provider/publicRoute"
import DashboardLayout from "./components/views/dashboard/layout"
import SettingsPage from "./components/views/settings"
import AnalyticsPage from "./components/views/analytics"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<PublicRoute ><SignIn /></PublicRoute>} />
      <Route path="signup" element={<PublicRoute><Signup /></PublicRoute>} />
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />

      </Route>
    </Routes>
  )
}

export default App
