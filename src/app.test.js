import {healthStatus, sortHeroes} from './app.js';

test('Статус жизней (X>50)', () => expect(healthStatus('Маг', 90)).toBe('healthy'));
test('Статус жизней (15<X<50)', () => expect(healthStatus('Лучник', 45)).toBe('wounded'));
test('Статус жизней (X<15)', () => expect(healthStatus('Мечник', 10)).toBe('critical'));

test('Сортировка героев (toBe)', () => {
  expect(sortHeroes([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
])).not.toBe([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});

test('Сортировка героев', () => {
  expect(sortHeroes([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
])).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});

test('Сортировка героев (одинак. кол-во жизней)', () => {
  expect(sortHeroes([
    {name: 'маг', health: 5},
    {name: 'мечник', health: 10},
    {name: 'лучник', health: 5},
])).toEqual([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 5},
    {name: 'лучник', health: 5},
  ]);
});
