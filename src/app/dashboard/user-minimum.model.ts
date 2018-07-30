export class UserMinimum {
    firstName: String
    surName: String
    userNumber: String

    constructor(firstName: String, surName: String, userNumber: String){
        
        }
}

export interface UserMinimumInterface{
    firstName: string,
    surName: string,
    userNumber: string
  }

  export interface MiniUserFeed{
    description: string,
    workTitle: string,
    user: UserMinimum
  }
