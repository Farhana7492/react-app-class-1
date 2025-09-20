import SocialLink from "./components/SocialLink";
// import "./Card.css"
import Icon from "./assets/react.svg"
const card = {
  border: '1px solid #bb652bff',
  borderRadius: '5px',
  padding: '16px',
  margin: '16px',
  color:"brown"

}

function Card() {
  return (
    <div id="card" style={card}>
      <img src={Icon} alt="" />
    <p>Username</p>
    <p>This is a description of the card.</p>
    <SocialLink />
    </div>
  );
}
export default Card