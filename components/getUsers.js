import { db } from '../firebase';
var query = db.ref('/users/').orderByKey();
query.once('value').then(function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var key = childSnapshot.key;
    var childData = childSnapshot.val();
  });
});
return Users;
