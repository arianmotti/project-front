import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
 transition('login <=> admin, admin <=> education, admin <=> entertain, admin <=> forum, admin <=> game', [
  style({ position: 'relative' }),
	query('footer', [
      style({
        transform: 'scale(0)'
      })
    ]),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
	query(':enter', [style({ right: '-100%', opacity: 0 })]),
	query(':leave', animateChild()),
	group([
		query(':leave', [animate('0.5s ease-out', style({ right: '100%', opacity: 0 }))]),
		query(':enter', [animate('0.5s ease-out', style({ right: '0%', opacity: 1 }))])
	]),
	query(':enter', animateChild()),
	query('footer', [
      style({
        transform: 'scale(1)'
      })
    ])
 ])
]);