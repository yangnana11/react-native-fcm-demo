// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import type { NotificationOpen } from 'react-native-firebase';

export default async (notificationOpen: NotificationOpen) => {
    alert('test');
    if (notificationOpen.action === 'snooze') {
        // handle the action
    }
    // const notification: Notification = notificationOpen.notification;
    // alert(notification.title);

    return Promise.resolve();
}
