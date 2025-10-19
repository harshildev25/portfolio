import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App /> // this is the react element or the component ( is nothing but the simple js function which returns some jsx code whicheventually get transpiled to something known as the React.cretElement whcih retusn the vituakl DOM *( representation of the actual dom elemetns ---> based on the this vD actual dom or the GUI will eb manipulated or changed )) so here we are mounting this virtual dom on the actual rotteltment called single div present in the index.html file and it will be the clinet side routing based on the user interaction it will be changed the ui :)
  /* </StrictMode>, */
);

//ideally react componetns should contains the UI level code what we wanna show to the end user all the staus logic should go inside he event hanlers we should not manipulate or redicrect to diofferent url or page during the lifce cyelt of the component or the redneing phase of the react :)

// as all the states keep trtacked by reacts mother process called the fiber tree ( which is nothing the tree represnentation of tall the componens in the form of ndoes and each node is in itslef a React component :) which gets triggered when the state of the component changed and all of its decendents nodes or the components will also reredners :)

// vites develeopment server provides ---> to start the development server which under the hood uses the HMR approach to optimally update the dom instead of rendering the whole webioste again by p[reseving the stsae as well :)]
