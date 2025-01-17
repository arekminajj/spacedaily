import { Component } from "@angular/core";
import { HttpService } from "./http.service";
import { News } from "./news";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private client: HttpService) {}
  news: News;
  page: number = 1;
  ngOnInit(): void {
    this.updateNews();
  }

  updateNews() {
    console.log("hello");
    this.client.GetNews(this.page).subscribe((data: News) => {
      this.news = data;
      console.log(data);
    });
  }

  nextPage() {
    if (this.page != this.news.totalPages) {
      this.page += 1;
      this.updateNews();
    }
  }

  previousPage() {
    if (this.page != 1) {
      this.page -= 1;
      this.updateNews();
    }
  }
}
