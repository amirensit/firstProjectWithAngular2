
import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
@Component({
      moduleId: module.id,
      selector: 'user',
      templateUrl: 'user.component.html',
      providers:[PostsService]
 
})
export class UserComponent {
              name: String;
              email:String;
              adress:adress;
              hobbies:String[];
              showHobbies: Boolean;
              show: String;
              posting : Post[];


            constructor(private postsService:PostsService) {
                this.name = 'amir';
                this.email = 'amir@gmail.com';
                this.adress = {
                    street : 'essada sidi-alouane',
                    city : 'mahdia' ,
                    state: 'ma'
                          }
              this.hobbies=['music','football'];
              this.showHobbies=false;
              this.show="show";
              this.postsService.getPosts()
              .subscribe ( posts =>
              {
                this.posting = posts;
                
              });
                                                            }

              toggleHobbies() {
              if(this.showHobbies == true)
                {
               this.showHobbies=false;
                this.show='show';
                 }
                else
                {
                  this.showHobbies=true;
                this.show="hide";
                }
              }
              addHobby(a){
                this.hobbies.push(a);

              }
              deleteHobbie(w) {
                  this.hobbies.splice(w,1);
              }

}
interface adress {
  street:String;
  city:String;
  state:String;
}

interface Post {
    id : number,
    title : String,
    body : String
}



