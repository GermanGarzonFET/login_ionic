import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../service/task.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  dataPeliculas=[
    {"id":1,nombre:"El padrino (1972)",img:"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/las-50-mejores-peliculas-de-la-historia-segun-los-usuarios-de-imdb/02-elpadrino/47748239-1-esl-ES/02-elpadrino.jpg?resize=980:*",descripcion:"Adaptación de una celebrada novela de Mario Puzo, en la que se revisaba la mítica mafiosa a través de una mirada que pretendía comprender su razón de ser desde la Historia y la tradición ancestral. Con este prometedor material, Coppola construyó una de las grandes tragedias del cine contemporáneo, donde el cine negro alcanzaba resonancias shakespearianas. Contra todo pronóstico, sus secuelas estuvieron a su altura",edadMax:"13"},
    {"id":2,nombre:"El caballero oscuro (2008)",img:"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/las-50-mejores-peliculas-de-la-historia-segun-los-usuarios-de-imdb/04-elcaballerooscuro/47748120-1-esl-ES/04-elcaballerooscuro.jpg?resize=980:*",descripcion:"El Caballero Oscuro' desmiente su condición inicial de blockbuster revienta taquilla con una serie de argumentos estéticos, interpretativos, emocionales, filosóficos e ideológicos que la propulsan muy por encima de cualquier otra adaptación de cómic que hayamos visto hasta la fecha. Sin renunciar a las concesiones propias del cine espectáculo, pero dotadas éstas de una elegancia, tenebrosidad y radicalidad alejada de la órbita mainstream, Christopher Nolan profundiza hasta las últimas consecuencias en la psicología de sus personajes centrales y obra el milagro con una historia de aires shakespearianos en clave apocalíptica que te deja con un mal cuerpo indescriptible",edadMax:"13"},
    {"id":3,nombre:"El señor de los anillos: El retorno del rey (2003)",img:"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/las-50-mejores-peliculas-de-la-historia-segun-los-usuarios-de-imdb/08-elsenordeanillos-retorno/47748141-1-esl-ES/08-elsenordeanillos-retorno.jpg?resize=980:*",descripcion:"Tiene Jackson el coraje de los grandes directores y la voluntad de llevar a su criatura exactamente allá donde imaginó; de sumergir al espectador, como cuando el cine era aún inocente, en un baño de maravillas, terribles, heroicas, conmovedoras. Y la voluntad de establecer también un discurso sobre la propia aventura: ese final, con un Frodo vuelto a la rutina de su pueblo, y ya mordido para siempre por la insanía de lo aventuresco, y convertido ya, lo intuimos, en un vagabundo de sí mismo, es el mejor cierre posible para una película monstruosa, sobrehumana, admirable",edadMax:"10"},
    {"id":1,nombre:"Pulp Fiction (1994)",img:"https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/las-50-mejores-peliculas-de-la-historia-segun-los-usuarios-de-imdb/05-pulpfiction/47748344-1-esl-ES/05-pulpfiction.jpg?resize=980:*",descripcion:"Una de las pocas obras maestras producidas durante los 90, en la que Tarantino llevó hasta las últimas consecuencias los brillantes apuntes de Reservoir Dogs. Entrelazando brillantemente diversas historias, en una diacronía temporal que acabará adquiriendo un admirable sentido, desarrolla una serie de obsesiones recurrentes y homenajes cinéfilos que combinan el talento compositivo con la más corrosiva ironía",edadMax:"13"}

  ]
  tasks: Task[] =[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tasks=>{
      console.log(tasks);
      this.tasks=tasks;
    });
    }


}
