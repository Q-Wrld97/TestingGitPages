// Function: addNewData
// Description: This function is used to add new data to the database
function addNewData(){
  data=document.getElementsByName('test')[0].value;
  data2=document.getElementsByName('test2')[0].value;
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      alert(user.uid)
      alert(data)
      alert(data2)    
      db.collection('users').doc(user.uid).update({
        newdata: data,
        newdata2: data2
    
      }).catch((error) => {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    else{
      window.location.href = "index.html"
    }
  });
 
}