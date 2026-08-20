"use strict";
// Create a function named renderNotification. The function should receive either a like notification or a system notification and return the rendered message string.
Object.defineProperty(exports, "__esModule", { value: true });
const renderNotification = (notification) => {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post`;
    }
    let result = `System: ${notification.message}`;
    if (notification.actionUrl) {
        result += "(tap to view)";
    }
    return result;
};
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({
    type: "system",
    message: "Your subscription is expiring soon.",
    actionUrl: "/billing",
}));
//# sourceMappingURL=problem-8.js.map