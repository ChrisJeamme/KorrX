import {Injectable} from "@angular/core";
<<<<<<< HEAD
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";

@Injectable()
export class Page1Service {


  constructor(public httpclient: HttpClient, public storage: Storage) {
  }

  getArticles(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }


  persistArticles(articles){
    return this.storage.set("articles", articles);
=======

@Injectable({
    providedIn: "root"
  }
)
export class Page1Service {

  constructor(){}

  public monService(){

>>>>>>> master
  }

}
