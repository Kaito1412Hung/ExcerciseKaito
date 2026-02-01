import IceCreamButton from "./components/IceCreamButon";
import "./App.css";

function App() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu kem</h1>

      <div className="button-group">
        <IceCreamButton type="primary">Kem Việt Quất</IceCreamButton>
        <IceCreamButton type="success">Kem Trà Xanh</IceCreamButton>
        <IceCreamButton type="danger">Kem Dâu Tây</IceCreamButton>
      </div>
    </div>
  );
}
export default App;
