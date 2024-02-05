import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      Componente de Comentarios
    </p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeBzjl9nTwWbuh4cWXVBQyBDWLsWeoyBKjA&usqp=CAU">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam consequatur incidunt aspernatur 
      impedit ea fugiat nisi! Beatae sunt laborum, suscipit minima maxime distinctio amet eos earum 
      sequi inventore aut accusantium?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe sequi omnis! Ut numquam 
      ipsum libero maxime, tempore accusantium, nisi fugit vel hic nemo dolorum facilis, debitis 
      veniam iure aut!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi commodi possimus ullam, delectus 
      nostrum deserunt amet dignissimos praesentium, nobis molestiae, vitae similique reprehenderit 
      unde impedit est sunt aut nemo illo.
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
