class GitHub {
  constructor(){
    this.client_id = '6b411f00c015d857aa9e';
    this.client_secret = 'a8bdeb59fe1c87139e2ab0bdd94d16326c19369a';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return {
      profile
    }
  } 
}