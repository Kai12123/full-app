import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { create } from "zustand";
import Login from "./pages/Login";
interface BearState {
  bears: number;
  increase: (by: number) => void;
  removeAllBears: () => void;
}
const useBearStore = create<BearState>((set) => ({
  // state
  bears: 0,
  // action
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
}));

const App = () => {
  // - global state store (zustand (a global state library) - so we don't have to pass state everywhere / optimizes performance)
  // - routing (multiple pages - react-router)
  // TODO fundamentals:
  // - authentication (firebase - firebase/auth)

  const bears = useBearStore((state) => state.bears);
  console.log("🚀 ~ file: App.tsx:25 ~ App ~ bears:", bears);
  // TODO continue adding pages / widgets to this app to learn how to manage complexity as an app grows

  // TODO specifics:
  // TODO recharts graph
  return (
    <Router>
      {/* <AuthButton /> */}
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
// TODO next time
// 1. avatar icon button in the top-right
// 2. on click, opens form popup with "sign in", "sign up" buttons
// 3. figure out how to connect "sign up" button to firebase auth
// function AuthButton() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popper" : undefined;

//   return (
//     <>
//       {/* <IconButton onClick={handleClick}>
//         <Avatar />
//       </IconButton> */}
//       <Popper id={id} open={open} anchorEl={anchorEl}>
//         <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
//           The content of the Popper.
//         </Box>
//       </Popper>
//     </>
//   );
// }
