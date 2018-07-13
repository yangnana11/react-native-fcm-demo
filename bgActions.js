// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import type { RemoteMessage } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
    // handle your message
    // alert(message);
    console.log('background services');
    console.log(message);
    const notification = new firebase.notifications.Notification();
    notification.android.setPriority(firebase.notifications.Android.Priority.High);
    notification.android.setChannelId("test-channel");
    notification.setTitle(message.data.custom1);

    firebase.notifications().displayNotification(notification);

    return Promise.resolve(message);
}

