import { InteractionManager } from "react-native";

InteractionManager.runAfterInteractions(() => {
    // ...long-running synchronous task...
});

