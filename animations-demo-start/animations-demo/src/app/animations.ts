import { animate, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', [
    animate(2000)
  ])
])

export let slide = trigger('slide', [
  state('void', style({
    transform: 'translateX(-20px)'
  })),
  transition('void => *', [
    animate(1000)
  ]),
  transition('* => void', [
    animate(100, style({
      transform: 'translateX(-1000px)'
    }))
  ])
])
