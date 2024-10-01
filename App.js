import './App.css';
import { lazy, Suspense } from 'react';
import SVGLoading from './SVGLoading';

const Main = lazy(() => import("./Main"));
function App() {
  return (
   <>
   <Suspense fallback={<SVGLoading/>}>
   <Main/>
   </Suspense>
   </>
      
   
  );
}

export default App;
