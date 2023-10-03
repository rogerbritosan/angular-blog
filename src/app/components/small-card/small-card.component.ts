import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "https://i.ytimg.com/vi/I3DWrlksuys/maxresdefault.jpg";
  @Input()
  cardTitle: string = "Saiu a nova versão do Angular";
}
