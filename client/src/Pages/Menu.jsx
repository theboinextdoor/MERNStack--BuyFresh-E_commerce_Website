import { useParams } from "react-router-dom";

const Menu = () => {
  const params = useParams();
  console.log(params);
  return <div>Menu</div>;
};

export default Menu;
 