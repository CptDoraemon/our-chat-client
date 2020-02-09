import firebase from 'firebase';

function getIDToken() {
    return new Promise<string>((resolve, reject) => {
        firebase.auth().currentUser?.getIdToken(/* forceRefresh */ false).then(function(idToken) {
            // Send token to your backend via HTTPS
            // ...
            resolve(idToken)
        }).catch(function(error) {
            // Handle error
            reject(error)
        });
    })
}

export default getIDToken;