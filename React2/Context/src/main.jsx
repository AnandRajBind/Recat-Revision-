 import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    //yaha per <App/> <userContext> ka children ban gaya hai.<App/> ko  usercontext ander wrap kiya gaya hai.
    // yaha per App ke ander jo component hai vo show nhi hoga. userContext ke ander ki value print hogi. agr App ko show karna hoga tab.UserContaxt  ke ander children pass karna hoga.
  <UserContext>
  <App />
</UserContext >
 )
