const searchUser = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

searchUser.addEventListener('keyup',(e)=>{
  const userText = e.target.value;

  if(userText !== ''){
    github.getUser(userText)
      .then(data=>{
      if (data.profile.message === 'Not Found') {
        //show alert
        ui.showAlert('Usuario no encontrado','alert alert-danger');
      } else {
        //show profile
        ui.showProfile(data.profile);
        
      }
    });
  } else{
    //clear UI
    ui.clearProfile();
  }  
});