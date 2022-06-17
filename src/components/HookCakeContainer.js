import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

const HookCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes(Using Hooks): {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Get Cake</button>
    </div>
  );
};

export default HookCakeContainer;
