import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [

])

export let slide = trigger('slide', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(-20px)'
    }),
    animate(1000, style({
      opacity: 1,
      transform: 'translateX(0px)'
    }))
  ]),
  transition(':leave', [
    animate('0.5s', keyframes([
      style({ offset: .2, opacity: 0 }),
      style({ offset: .7, opacity: 1 }),
      style({ offset: 1, opacity: 0 })
    ]))
  ])
])
