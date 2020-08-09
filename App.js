import React from "react";
import BottomModal from "./app/components/bottom-modal/BottomModal";
import CommentsScreen from "./app/components/bottom-modal/CommentsScreen";
import LikeButton from "./app/components/bottom-modal/LikeButton";

export default function App() {
  return <BottomModal />;
}

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AuthNavigator from "./app/components/navigation/AuthNavigator";
// import NavigatonTheme from "./app/components/navigation/NavigatonTheme";
// import AppNavigator from "./app/components/navigation/AppNavigator";

// export default function tempApp() {
//   return (
//     <NavigationContainer theme={NavigatonTheme}>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }
