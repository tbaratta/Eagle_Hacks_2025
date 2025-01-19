import './globals.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './_root/pages';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SuccessPage from './_auth/forms/Success';

const app = () => {
  return (
   <main className="flex h-screen">
     <Routes>
       {/* public */}
       <Route element={<AuthLayout />}>

       <Route path="/sign-up" element={<SignUpForm />} />
       <Route path="/SuccessPage" element={<SuccessPage />} />

       </Route>

       {/* private */}
       <Route element={<RootLayout/>} >

       <Route index element={<Home />}/>

       </Route>
     </Routes>
   </main>
  )
}

export default app