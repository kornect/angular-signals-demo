import {Component, computed, effect, OnInit, signal, untracked} from '@angular/core';

@Component({
  selector: 'app-basic-signals',
  templateUrl: './basic-signals.component.html',
  styleUrls: ['./basic-signals.component.scss']
})
export class BasicSignalsComponent implements OnInit {
  measurement = signal('C');
  temperature = signal<number>(0);
  /*
  * The temperatureF signal is a computed signal that depends on the temperature signal.
   */
  temperatureF = computed(() => {
    return this.temperature() * 9 / 5 + 32;
  });

  /*
  * The feeling signal is a computed signal that depends on the temperature signal.
   */
  feeling = computed(() => {
    const t = this.temperature();
    if (t < 0) return 'freezing';
    if (t < 10) return 'cold';
    if (t < 20) return 'cool';
    if (t < 30) return 'warm';
    if (t < 40) return 'hot';
    return 'Scorching';
  });

  temperatureChangedEffect = effect(() => {
    const t = this.temperature();

    untracked(() => {
      const f = this.feeling();
      const m = this.measurement();
      console.log(`The temperature is ${t}${m} and it feels ${f}`);
    })
  });

  measurementChangedEffect = effect(() => {




    const m = this.measurement();

    untracked(() => {
      const t = this.temperature();
      console.log(`The measurement has changed to is ${m}, current temperature is ${t} ${m}`);
    })
  });

  onIncrease() {
    this.temperature.update(t => t + 1);
  }

  onDecrease() {
    this.temperature.update(t => t - 1);
  }

  ngOnInit(): void {
    this.temperature.set(20); // nice and warm
  }

  toggleMeasurement() {
    this.measurement.update(m => m === 'C' ? 'F' : 'C');
  }


}
