import { Alert, Platform, ToastAndroid } from "react-native";

export const showToast = (message: string) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
        Alert.alert("Info", message);
    }
};
