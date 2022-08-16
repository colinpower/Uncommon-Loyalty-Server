import admin from "firebase-admin";
import functions from "firebase-functions";

const reviewOnCreate = functions.firestore
  .document('reviews/{reviewID}')
  .onCreate(async (snap, context) => {

    //grab necessary variables from the review
    const companyID = "zKL7SQ0jRP8351a0NnHM";
    const email = snap.data().email;
    // const historyID = snap.data().historyID;
    // const orderID = snap.data().orderID;
    // const photoID = snap.data().photoID;
    // const timestamp = snap.data().timestamp;
    const userID = snap.data().userID;
    //const reviewID = context.params.reviewID

    const current_timestamp = new Date().getTime();
    // timestamp: Math.round(current_timestamp / 1000),


    // create history entry for this order
    const historyEntryForNewReview = {
        companyID: companyID,
        description: "fill in later",
        discountAmount: "fill in later",
        discountCode: "fill in later",
        email: email,
        orderID: "fill in later",
        pointsEarnedOrSpent: 1,
        price: 0,
        reviewID: "",
        timestamp: Math.round(current_timestamp / 1000),
        type: "REVIEW",
        userID: userID
    };

    return admin.firestore().collection("history").add(historyEntryForNewReview)

})

export default reviewOnCreate;