import Team from "../team";

test('метод add добавляет персонажа в Set', () => {
  const team = new Team();
  team.add('Player1')
  expect(team.members.has('Player1')).toBe(true);  
});

test('выбрасывается ошибка, если добавляемый персонаж уже есть', () => {
  const team = new Team();
  team.add('Player1')
  expect(() => team.add('Player1')).toThrow('Персонаж уже есть в команде');  
});

test('сразу несколько игроков добавлены в Set', () => {
  const team = new Team();
  team.addAll('Player1', 'Player2', 'Player3');
  expect(team.members.size).toBe(3);
  expect(team.members.has('Player1')).toBe(true);
  expect(team.members.has('Player2')).toBe(true);
  expect(team.members.has('Player3')).toBe(true);
});

test('в Set не добавляются дубликаты', () => {
  const team = new Team();
  team.addAll('Player1', 'Player2', 'Player1');
  expect(team.members.size).toBe(2);
});


test('метод возвращает массив выбранных персонажей', () => {
  const team = new Team();
  team.addAll('Player1', 'Player2');
  expect(team.toArray()).toEqual(['Player1', 'Player2']);
});