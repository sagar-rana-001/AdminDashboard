import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import OrdersPage from "./pages/OrdersPage"
import ProductsPage from "./pages/ProductsPage"
import SalesPage from "./pages/SalesPage"
import SettingsPage from "./pages/SettingsPage"
import UsersPage from "./pages/UsersPage"
import Sidebar from "./component/common/Sidebar"



function App() {
  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* BG */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>
        <Router>
        <Sidebar />
          <Routes>
            <Route path="/admin/overview" element={<OverviewPage />} />
            <Route path="/admin/analytics" element={<AnalyticsPage />} />
            <Route path="/admin/orders" element={<OrdersPage />} />
            <Route path="/admin/products" element={<ProductsPage />} />
            <Route path="/admin/sales" element={<SalesPage />} />
            <Route path="/admin/settings" element={<SettingsPage />} />
            <Route path="/admin/users" element={<UsersPage />} />
          </Routes>

        </Router>

      </div>
    </>
  )
}

export default App
